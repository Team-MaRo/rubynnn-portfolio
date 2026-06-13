import {join} from 'node:path';
import process from 'node:process';
import {cloudflare} from '@cloudflare/vite-plugin';
import {reactRouter} from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vitest/config';
import {allPaths} from './app/routes-manifest';
import {copyrightFromLicense} from './app/vite/plugins/copyright-from-license';
import {faviconRasters} from './app/vite/plugins/favicon-rasters';
import {robots} from './app/vite/plugins/robots';
import {sitemap} from './app/vite/plugins/sitemap';
import {webManifest} from './app/vite/plugins/web-manifest';
import {yaml} from './app/vite/plugins/yaml';

// PWA manifest icons — shared with faviconRasters so rasters + manifest stay in
// lockstep.
const WEB_MANIFEST_ICONS = [
  {size: 192, out: 'web-app-manifest-192x192.png', purpose: 'maskable'},
  {size: 512, out: 'web-app-manifest-512x512.png', purpose: 'maskable'},
] as const;

const isVitest = process.env.VITEST === 'true';
// Cloudflare Workers SSR target (build:cf / dev:cf set CLOUDFLARE=true).
const isCloudflare = process.env.CLOUDFLARE === 'true';

// Deployed hostname for the static SEO files. deploy-gh-pages.yml derives
// SITE_HOST from the Pages API; local dev falls back to localhost.
const trimmedHost = process.env.SITE_HOST?.trim();
const SITE_HOST = trimmedHost === undefined || trimmedHost === '' ? 'localhost' : trimmedHost;
// Deployment base path. deploy-gh-pages.yml sets BASE_PATH from the Pages URL:
// `/` for a custom domain, `/<repo>/` for a project sub-path. Normalised to a
// single leading+trailing slash so Vite `base`, the SEO URLs and the manifest agree.
const rawBase = process.env.BASE_PATH?.trim();
const BASE_PATH = rawBase === undefined || rawBase === '' || rawBase === '/'
  ? '/'
  : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;
const BASE_NO_SLASH = BASE_PATH === '/' ? '' : BASE_PATH.replace(/\/$/, ''); // '' or '/<repo>'
const ORIGIN = `https://${SITE_HOST}`;
const SITE_URL = `${ORIGIN}${BASE_NO_SLASH}`;
// Sitemap URLs: every prerendered path, prefixed with the sub-path so the
// SitemapStream (which resolves root-absolute paths against the origin) keeps it.
const sitemapPaths = allPaths().map((p) => `${BASE_NO_SLASH}${p === '/' ? '/' : p}`);

export default defineConfig({
  base: BASE_PATH,
  // No public/ folder — every asset (media, favicons) is a build-pipeline import
  // or emitted by a plugin.
  publicDir: false,
  plugins: [
    // Cloudflare must run first so it registers the `ssr` environment before
    // reactRouter() wires the server build into it. Off under Vitest.
    ...(isCloudflare && !isVitest ? [cloudflare({viteEnvironment: {name: 'ssr'}})] : []),
    tailwindcss(),
    // Pulls year(s) + holder from LICENSE.txt into __COPYRIGHT_YEARS__ /
    // __COPYRIGHT_HOLDER__ so the footer stays in lockstep with the license.
    copyrightFromLicense(),
    // Rasterises app/media/icons/favicon.svg → PNG + multi-resolution ICO; the
    // PNG set merges favicon sizes with the shared PWA manifest icons.
    faviconRasters({
      source: join('app', 'media', 'icons', 'favicon.svg'),
      svgOut: 'favicon.svg',
      icoOut: 'favicon.ico',
      pngs: [
        {size: 96, out: 'favicon-96x96.png'},
        {size: 180, out: 'apple-touch-icon.png'},
        ...WEB_MANIFEST_ICONS.map((i) => ({size: i.size, out: i.out})),
      ],
      icoSizes: [16, 32, 48],
    }),
    // Emits site.webmanifest from the locale YAML's brand.* + the shared icons.
    webManifest({
      base: BASE_PATH,
      locale: join('app', 'locales', 'de.yml'),
      out: 'site.webmanifest',
      keys: {name: 'brand.name', short_name: 'brand.short_name', description: 'brand.description'},
      // Light-primary palette: sRGB-hex of the light `--bg` token.
      manifest: {display: 'standalone', theme_color: '#f4f1ec', background_color: '#f4f1ec'},
      icons: WEB_MANIFEST_ICONS,
    }),
    // reactRouter clashes with vitest's environment; skip under tests.
    ...(isVitest ? [] : [reactRouter()]),
    yaml(),
    // Static sitemap.xml / robots.txt, emitted in the client build env.
    sitemap({siteUrl: ORIGIN, paths: sitemapPaths}),
    robots({siteUrl: SITE_URL}),
    // (SPA 404.html fallback is emitted post-build by scripts/spa-fallback.mjs,
    // because React Router writes the SPA index.html after all Vite hooks.)
  ],
  resolve: {
    alias: {
      '~': new URL('./app', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['app/**/*.{test,spec}.{ts,tsx}'],
  },
});
