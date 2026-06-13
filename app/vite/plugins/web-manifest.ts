import type {Plugin} from 'vite';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import process from 'node:process';
import {parse as parseYaml} from 'yaml';

interface ManifestIcon {
  size: number;
  out: string;
  purpose?: string;
}

interface Options {
  // Path (relative to project root) of the locale YAML to source text from.
  locale: string;
  // Output filename emitted to the client build root.
  out: string;
  // Dotted property paths into the locale YAML for each text field.
  keys: {name: string; short_name?: string; description?: string};
  // Static manifest fields merged verbatim (display, theme_color, …).
  manifest: Readonly<Record<string, unknown>>;
  // Icon set, shared with the favicon rasteriser via `vite.config.ts`.
  icons: readonly ManifestIcon[];
  // Deployment base path (Vite `base`), ending in `/`.
  base?: string;
}

// Tiny dotted-path lookup (drops the lodash dependency for a single `get`).
function get(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc !== null && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

// Emits the PWA web app manifest at build time and serves it from
// `configureServer` during `vite dev`. Text fields come from the locale YAML's
// `brand.*`, so one edit in `de.yml` propagates to the PWA listing.
export function webManifest(opts: Options): Plugin {
  const {locale, out, keys, manifest: staticFields, icons} = opts;
  const base = opts.base !== undefined && opts.base !== '' ? opts.base : '/';
  const route = `/${out}`;

  function buildManifest(): string {
    const yaml = parseYaml(readFileSync(join(process.cwd(), locale), 'utf8')) as unknown;
    const name = get(yaml, keys.name);
    if (typeof name !== 'string' || name === '') {
      throw new Error(`[web-manifest] missing ${keys.name} in ${locale}`);
    }
    const shortName = keys.short_name === undefined ? undefined : get(yaml, keys.short_name);
    const description = keys.description === undefined ? undefined : get(yaml, keys.description);
    const manifest = {
      name,
      ...(typeof shortName === 'string' && shortName !== '' ? {short_name: shortName} : {}),
      ...(typeof description === 'string' && description !== '' ? {description} : {}),
      id: base,
      start_url: base,
      scope: base,
      ...staticFields,
      icons: icons.map((icon) => ({
        src: `${base}${icon.out}`,
        sizes: `${icon.size}x${icon.size}`,
        type: 'image/png',
        ...(icon.purpose === undefined ? {} : {purpose: icon.purpose}),
      })),
    };
    return `${JSON.stringify(manifest, null, 2)}\n`;
  }

  return {
    name: 'web-manifest',
    applyToEnvironment: (env) => env.name === 'client',
    configureServer(server) {
      server.middlewares.use(route, (_req, res) => {
        try {
          res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
          res.end(buildManifest());
        } catch (err) {
          server.config.logger.error(`[web-manifest] ${(err as Error).message}`);
          res.statusCode = 500;
          res.end(`/* ${(err as Error).message} */`);
        }
      });
      server.config.logger.info(`✓ [web-manifest] Exposed new route: ${route}`);
    },
    generateBundle() {
      let source: string;
      try {
        source = buildManifest();
      } catch (err) {
        return this.error((err as Error).message);
      }
      this.emitFile({type: 'asset', fileName: out, source});
    },
  };
}
