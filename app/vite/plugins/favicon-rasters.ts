import type {Plugin} from 'vite';
import {Buffer} from 'node:buffer';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import process from 'node:process';
import {formatHex} from 'culori';
import pngToIco from 'png-to-ico';

interface PngRaster {
  size: number;
  out: string;
}

interface Options {
  // Path (relative to project root) of the source SVG.
  source: string;
  // Output filename for the SVG copy emitted to the build root.
  svgOut: string;
  // Output filename for the multi-resolution ICO.
  icoOut: string;
  // Every PNG raster to emit — favicon / apple-touch sizes plus the PWA
  // manifest icons — supplied by the caller in `vite.config.ts`.
  pngs: readonly PngRaster[];
  // Resolutions baked into the multi-image ICO.
  icoSizes: readonly number[];
}

const WHITESPACE_RE = /\s+/;
const STYLE_BLOCK_RE = /<style[^>]*>([\s\S]*?)<\/style>/i;
const COMMENT_RE = /\/\*[\s\S]*?\*\//g;
const AT_MEDIA_RE = /@media[^{]*\{(?:[^{}]|\{[^{}]*\})*\}/g;
const RULE_RE = /\.([\w-]+)\s*\{([^}]+)\}/g;
const CLASS_ATTR_RE = /class="([^"]+)"/g;

// libvips (used by sharp) does not resolve external CSS rules during SVG
// rasterisation. This walks the SVG's own `<style>` block, parses the
// light-mode (non-@media) rules, and injects them as inline attributes on
// every element with a matching `class="..."`. No-op if there's no `<style>`.
function inlineLightModeStyles(svg: string): string {
  const styleMatch = STYLE_BLOCK_RE.exec(svg);
  if (!styleMatch) {
    return svg;
  }

  const lightBody = styleMatch[1]!
    .replace(COMMENT_RE, '')
    .replace(AT_MEDIA_RE, '');

  const rules = new Map<string, Record<string, string>>();
  for (const m of lightBody.matchAll(RULE_RE)) {
    const cls = m[1]!;
    const decls: Record<string, string> = {};
    for (const decl of m[2]!.split(';')) {
      const colonIdx = decl.indexOf(':');
      if (colonIdx < 0) {
        continue;
      }
      const k = decl.slice(0, colonIdx).trim();
      const v = decl.slice(colonIdx + 1).trim();
      if (k && v) {
        decls[k] = convertValue(k, v);
      }
    }
    rules.set(cls, decls);
  }

  return svg.replace(CLASS_ATTR_RE, (_full, classList: string) => {
    const seen = new Set<string>();
    let extra = '';
    for (const cls of classList.split(WHITESPACE_RE)) {
      const props = rules.get(cls);
      if (!props) {
        continue;
      }
      for (const [k, v] of Object.entries(props)) {
        if (seen.has(k)) {
          continue;
        }
        seen.add(k);
        extra += ` ${k}="${v}"`;
      }
    }
    return `class="${classList}"${extra}`;
  });
}

function convertValue(prop: string, value: string): string {
  if (prop === 'fill' || prop === 'stroke') {
    return formatHex(value) ?? value;
  }
  return value;
}

interface IconAsset {
  fileName: string;
  type: string;
  source: Buffer;
}

// Generates the favicon set (SVG copy, PNG fallbacks, multi-resolution ICO)
// from one source SVG. Emitted via `emitFile` at build (→ build/client/) and
// served from a `configureServer` middleware in `vite dev`.
export function faviconRasters(opts: Options): Plugin {
  const {source, svgOut, icoOut, pngs, icoSizes} = opts;

  async function buildAssets(): Promise<IconAsset[]> {
    const sharp = (await import('sharp')).default;
    const svg = readFileSync(join(process.cwd(), source));

    const svgForRaster = Buffer.from(inlineLightModeStyles(svg.toString('utf8')), 'utf8');
    const renderPng = async (size: number) => sharp(svgForRaster, {density: 384})
      .resize(size, size, {fit: 'contain', background: {r: 0, g: 0, b: 0, alpha: 0}})
      .png()
      .toBuffer();

    const assets: IconAsset[] = [{fileName: svgOut, type: 'image/svg+xml', source: svg}];
    for (const {size, out} of pngs) {
      assets.push({fileName: out, type: 'image/png', source: await renderPng(size)});
    }
    const icoPngs = await Promise.all(icoSizes.map(async (s) => renderPng(s)));
    assets.push({fileName: icoOut, type: 'image/x-icon', source: await pngToIco(icoPngs)});
    return assets;
  }

  return {
    name: 'favicon-rasters',
    applyToEnvironment: (env) => env.name === 'client',
    configureServer(server) {
      let cache: Promise<Map<string, IconAsset>> | undefined;
      for (const fileName of [svgOut, icoOut, ...pngs.map((p) => p.out)]) {
        server.middlewares.use(`/${fileName}`, (_req, res) => {
          cache ??= buildAssets().then((assets) => new Map(assets.map((a) => [a.fileName, a])));
          void cache
            .then((map) => {
              const asset = map.get(fileName);
              if (asset === undefined) {
                res.statusCode = 404;
                res.end();
                return;
              }
              res.setHeader('Content-Type', asset.type);
              res.end(asset.source);
            })
            .catch((err: unknown) => {
              server.config.logger.error(`[favicon-rasters] ${(err as Error).message}`);
              res.statusCode = 500;
              res.end();
            });
        });
      }
      server.config.logger.info(`✓ [favicon-rasters] Serving ${pngs.length + 2} dev icon routes`);
    },
    async generateBundle() {
      for (const {fileName, source: assetSource} of await buildAssets()) {
        this.emitFile({type: 'asset', fileName, source: assetSource});
      }
    },
  };
}
