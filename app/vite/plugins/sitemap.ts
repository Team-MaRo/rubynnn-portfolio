import type {Plugin} from 'vite';
import {Readable} from 'node:stream';
import {SitemapStream, streamToPromise} from 'sitemap';

// Pure renderer.
export async function renderSitemap(siteUrl: string, paths: readonly string[]): Promise<string> {
  const stream = new SitemapStream({hostname: siteUrl});
  const data = await streamToPromise(Readable.from(paths.map((url) => ({url}))).pipe(stream));
  return data.toString();
}

interface Options {
  siteUrl: string;
  paths: readonly string[];
}

// Build plugin: emits a static `sitemap.xml` (client env, both SSR and SPA
// builds) from the caller-supplied paths (built in `vite.config.ts` from the
// prerender manifest).
export function sitemap(opts: Options): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    applyToEnvironment: (env) => env.name === 'client',
    async generateBundle() {
      this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: await renderSitemap(opts.siteUrl, opts.paths)});
    },
  };
}
