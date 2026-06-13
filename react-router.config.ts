import type {Config} from '@react-router/dev/config';
import {copyFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';
import process from 'node:process';

// Router basename, derived from BASE_PATH (set by deploy-gh-pages.yml) and
// normalised to match Vite's `base`: '/' for the root-served Cloudflare/Docker
// builds, '/<repo>/' for the GitHub Pages sub-path build.
const trimmedBase = (process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');
const BASENAME = trimmedBase === '' ? '/' : `/${trimmedBase}/`;

export default {
  // SSR by default (Cloudflare/Docker) — those serve real per-request HTML, so
  // the site works without JavaScript there. GitHub Pages has no runtime: its
  // workflow sets SSR=false for a pure SPA build (one index.html + a 404.html
  // fallback so any deep URL boots the SPA and client-routes, same as the
  // sibling sites).
  ssr: process.env.SSR !== 'false',
  basename: BASENAME,

  // Emit the SPA-fallback 404.html (a verbatim copy of index.html). This runs
  // in React Router's own post-build hook because RR writes the SPA index.html
  // AFTER every Vite plugin hook (closeBundle etc.) — so a Vite plugin can't
  // see it on RR8 (the reason the sibling repos' spa-fallback plugin silently
  // no-ops). No-op for SSR builds, which emit no build/client/index.html.
  async buildEnd() {
    const index = join(process.cwd(), 'build', 'client', 'index.html');
    if (existsSync(index)) {
      copyFileSync(index, join(process.cwd(), 'build', 'client', '404.html'));
    }
  },
} satisfies Config;
