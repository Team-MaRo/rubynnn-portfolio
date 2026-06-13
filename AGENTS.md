# AGENTS.md

Guidance for AI agents and contributors working in this repository. (`CLAUDE.md`
is a gitignored pointer to this file.)

Robine's portfolio — a bilingual (DE/EN) design/motion/photography portfolio.
**React Router 8** (framework mode) · **Vite 8** · **Tailwind v4** · **i18next** ·
**pnpm** · **Node 24**. The visual design was recreated from a Claude Design
handoff bundle (source kept in the git-ignored `design-ref/`).

## Commands

Uses **pnpm** (pinned via `packageManager`; run through corepack).

```bash
pnpm install
pnpm dev                     # dev server → http://localhost:5173 (redirects to /de)
pnpm dev:cf                  # dev against the Cloudflare Workers runtime
pnpm build                   # default SSR build (build/server + build/client)
SSR=false pnpm build         # static SPA build for GitHub Pages (emits 404.html fallback)
pnpm build:cf                # Cloudflare Workers SSR build
pnpm typecheck               # wrangler types + rr typegen + tsc (app AND cloudflare projects)
pnpm lint                    # eslint (@iwf-web/eslint-coding-standard); lint:fix to autofix
pnpm test                    # vitest run
pnpm exec vitest run app/lib/locale.test.ts   # run ONE test file
pnpm exec vitest             # watch mode
nix build .#dockerImage      # build the distroless runtime image (Linux/CI; needs the pnpm hash resolved)
```

`lint` fails on errors only — warnings are acceptable. `typecheck` type-checks two
separate TS projects: the app (`tsconfig.json`, DOM types) and the Worker
(`tsconfig.cloudflare.json`, Workers globals); keep them apart.

## Deploy targets (this shapes the architecture)

- **GitHub Pages** = pure **SPA** (`SSR=false`): one `index.html` + a `404.html`
  fallback; client-side routing with a `basename`. `deploy-gh-pages.yml` derives
  `SITE_HOST`/`BASE_PATH` from the Pages API.
- **Cloudflare Workers** & **Docker** = **SSR** (real per-request HTML).
- The Docker image is built by **`flake.nix`** (`streamLayeredImage`, distroless,
  nonroot 65532) — **there is no Dockerfile**.

### No-JS is an SSR property — do NOT prerender for Pages
The SSR deployments serve no-JS-capable HTML per request. GitHub Pages does not.
**Do not add `prerender` to `react-router.config.ts`**: RR prefixes the
`basename` onto every prerendered file, so on the project sub-path
(`…github.io/<repo>/`) they nest under `build/client/<repo>/…` and 404. Pages
stays a pure SPA. The SPA `404.html` is emitted by RR's **`buildEnd`** hook in
`react-router.config.ts` (a Vite plugin can't do it — RR writes the SPA
`index.html` *after* all Vite hooks run on RR8).

## Architecture

**Locale in the URL.** Every real page lives under `/:locale` (`de`/`en`).
`app/routes-manifest.ts` is the single source of route slugs (`PAGES`) and the
sitemap URL list (`allPaths()`), consumed by `app/routes.ts` and `vite.config.ts`.
The DE/EN toggle is a plain `<Link>` to the mirrored URL; the active locale comes
from the route param (`app/hooks/useLocale.ts`). `app/lib/detect-language.ts`
resolves the render language from the URL's first path segment (SSR).

**SPA-mode constraint: no loaders on non-root routes.** The `($locale)` layout
(`app/routes/locale-layout.tsx`) validates the locale **in the component**, not a
loader — SPA builds reject loaders on non-root routes. Keep route data derivation
in components / content modules.

**No `public/` folder.** All media (photos, videos, icons, favicons) lives under
`app/media/**` and is imported through the build via `import.meta.glob(..., '?url')`
in `app/lib/asset.ts`. Content modules store plain relative paths
(`uploads/…`, `assets/…`, `cc/…`); `asset(path)` maps them to the hashed URL.
`vite.config.ts` sets `publicDir: false`.

> **Media filenames must avoid ad-blocker patterns** (`728x90`, `300x250`,
> `leaderboard`, `midpage`, `banner`, …). uBlock/EasyList block those URLs; in
> **dev** every media file is its own module request, so one blocked file breaks
> the whole client bundle (dead cursor/menu/theme). Keep names neutral.

**Content is bilingual data modules.** Chrome strings live in
`app/locales/{de,en}.yml` (i18next). Everything else is typed content in
`app/content/`: `menu.ts` (nav model + search), `home.ts` (hero/work/about/
contact), and one module per project under `content/projects/*.ts`. All bilingual
values use `L<T> = {de; en}` resolved with `pick(value, locale)` (`app/lib/locale.ts`).

**Pages = templates + content.** Each project route in `app/routes/projects/*.tsx`
is thin, feeding a shared primitive/template from `app/components/project/*`
(`ProjHero`, `ProjSection`, `Masonry`, `Lightbox`, `Media` (YouTube/Video/GifToggle/
DeviceFrame), `EditorialPhoto`, `ProjFoot`, `PageTheme`). `EditorialPhoto` +
`content/projects/europa.ts` is the flagship pattern.

**Design system in one CSS file.** `app/app.css` holds the Tailwind v4 `@theme`
tokens and the runtime light/dark cascade via `html.dark`. Utilities read runtime
vars (`bg-bg`, `text-fg`, `text-accent`, `border-line`, …) so a single cascade
re-themes everything. Custom variants `dark` and `no-js`. A project page can
override tokens (e.g. Europa's palette) via `PageTheme`, which scopes vars to a
`.page-<id>` class in both light and dark.

**Accessibility is baked in** (`app/app.css` + `root.tsx`): pre-paint theme
bootstrap honours `prefers-color-scheme` (default light) and adds `html.js`;
`@media (prefers-reduced-motion)` and `(prefers-reduced-transparency)` blankets
neutralise animation/blur; the custom cursor only activates on fine pointers with
motion allowed (hidden otherwise, incl. no-JS).

**Build-time generation (Vite plugins in `app/vite/plugins/`).** `favicon-rasters`
(one `app/media/icons/favicon.svg` → png/ico/apple/192/512 via sharp),
`web-manifest` (from `de.yml` `brand.*`), `sitemap` + `robots`,
`copyright-from-license` (injects `__COPYRIGHT_HOLDER__`/`__COPYRIGHT_YEARS__` from
`LICENSE.txt` into the footer — declared in `app/types/build-globals.d.ts`), and a
local `yaml` loader (CORE_SCHEMA, replaces `@modyfi/vite-plugin-yaml`).

## Conventions & gotchas

- **Divergences from the sibling `d3strukt0r`/`weleda` sites** (intentional):
  Tailwind-only (no SCSS), locale-in-URL (vs cookie detection), media via
  `app/media` imports (no `public/`). Dropped as N/A: sealed-secrets, blog/atom,
  LinkedIn sync, the multi-variant "Toolbox".
- **Licensing is split**: code is MIT (`LICENSE.txt`); all media under
  `app/media/{uploads,assets}` is CC BY-NC-ND 4.0 (`LICENSE-MEDIA.txt`), © Robine
  Vaccari. The footer CC badge + copyright reflect this.
- **CI / release**: `release-please` (rewrites `flake.nix`'s version marker),
  `dependabot` + automerge, `bump-pnpm-hash` (resolves `flake.nix`'s
  `pnpmDeps.hash`, shipped as `pkgs.lib.fakeHash`), and a multi-arch Docker build
  with syft SBOM + cosign + SLSA. Downstream-triggering workflows need a **`GH_PAT`**
  repo secret. Branch model: `master` + `develop`.
- After changing `wrangler.jsonc`, rerun `pnpm cf-typegen` (regenerates the
  gitignored `worker-configuration.d.ts`).
