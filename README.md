# Robine's Space

Bilingual (DE/EN) portfolio for Robine — graphic design, motion design & photography.
Built on the same stack as the other `*-portfolio` sites: **React Router 7** (SSR + prerender),
**Vite**, **Tailwind v4**, **i18next**, deployable to **GitHub Pages** (static), **Cloudflare
Workers** (SSR) and **Docker**.

[![License](https://img.shields.io/github/license/Team-MaRo/rubynnn-portfolio)](LICENSE.txt)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa)][code-of-conduct]

## Highlights

- **Works without JavaScript.** Every route is prerendered to real static HTML under both locales
  (`/de/…`, `/en/…`). JS only enhances (custom cursor, lightbox, menu, scroll reveals).
- **Accessibility-first.** Honors `prefers-reduced-motion`, `prefers-reduced-transparency`,
  `prefers-color-scheme`; dark/light toggle persisted to `localStorage`.
- **Locale in the URL.** The DE/EN switch is a plain link to the mirrored URL, so it works with JS
  disabled. The first path segment drives the render language.

## Develop

Uses **pnpm** (`packageManager` pinned; run via corepack). Node 24+.

```bash
pnpm install
pnpm run dev          # http://localhost:5173  (→ /de)
pnpm run dev:cf       # Cloudflare Workers dev runtime
pnpm run lint         # eslint (@iwf-web/eslint-coding-standard)
pnpm run typecheck    # app + cloudflare TS projects
pnpm run test         # vitest
pnpm run build        # SSR build (build/server + build/client, prerendered)
SSR=false pnpm run build   # static SPA build for GitHub Pages (prerendered + 404 fallback)
```

## Architecture

- `app/routes.ts` + `app/routes-manifest.ts` — locale-prefixed routes; the manifest is the single
  source of truth shared with `react-router.config.ts` (prerender list).
- `app/app.css` — Tailwind v4 `@theme` tokens, dark/light cascade (`html.dark`), the `no-js` /
  `dark` custom variants, and the `prefers-reduced-motion` / `prefers-reduced-transparency` blankets.
- `app/components/` — chrome (`TopNav`, `MenuOverlay`, `CustomCursor`, `ScrollTop`), home pieces,
  and shared project primitives (`project/*`).
- `app/content/` — bilingual content modules (`menu.ts`, `home.ts`, `projects/*`).
- `app/locales/{de,en}.yml` — chrome strings (i18next).

## Media

There is **no `public/` folder** — every asset (photos, videos, illustrations, icons, favicons)
lives under `app/media/**` and is imported through the build via `import.meta.glob` (`app/lib/asset.ts`),
so each file is fingerprinted and emitted by Vite. Content modules reference plain relative paths
(`uploads/…`, `assets/…`, `cc/…`) which `asset()` maps to the hashed URL. The media was extracted
from the Claude Design handoff bundle; the source HTML/chats live in the git-ignored `design-ref/`.

## Deploy

- **GitHub Pages** — `.github/workflows/deploy-gh-pages.yml` (static, prerendered; SITE_HOST/BASE_PATH derived from the Pages API).
- **Cloudflare Workers** — `wrangler.jsonc` + `workers/app.ts`; `pnpm run deploy:cf`.
- **Docker (Nix)** — the runtime image is built reproducibly by `flake.nix`
  (`streamLayeredImage`, distroless, nonroot 65532, healthcheck) — there is **no Dockerfile**.
  Build locally with `nix build .#dockerImage`. `.github/workflows/docker.yml` builds multi-arch,
  generates a syft SBOM, signs with cosign, and attaches SLSA provenance.
- **Nix dev shell** — `nix develop` (Node 24 + pnpm).

### CI / automation
`ci.yml` (lint · typecheck · test · SSR+SPA build, plus a Trivy/Grype scan of the Nix image),
`release.yml` (release-please), `dependabot.yml` (+ automerge/validate), and `bump-pnpm-hash.yml`
(self-heals `flake.nix`'s `pnpmDeps.hash` after lockfile changes).

**Maintainer setup:** the release / dependabot-automerge / hash-bump workflows need a **`GH_PAT`**
repository secret (a PAT that can push and approve, so downstream workflows trigger). Docker Hub
publishing is optional and gated on the `DOCKERHUB_USERNAME`/`IMAGE_NAME` repo vars + `DOCKERHUB_TOKEN`
secret. `flake.nix` ships `pnpmDeps.hash = pkgs.lib.fakeHash` — CI's hash-bump resolves it on first
push, or run `.github/scripts/bump-pnpm-hash.sh` locally.

## Contributing

Please read [CONTRIBUTING.md][contributing] for details on our code of conduct and the process for submitting pull requests.

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions, see the [tags on this repository][gh-tags].

## Authors

### Special thanks for all the people who had helped this project so far

- **Manuele** - [D3strukt0r](https://github.com/D3strukt0r)

See also the full list of [contributors][gh-contributors] who participated in this project.

### I would like to join this list. How can I help the project?

We're currently looking for contributions for the following:

- [ ] Bug fixes
- [ ] Translations
- [ ] etc...

For more information, please refer to our [CONTRIBUTING.md][contributing] guide.

## License

Dual-licensed:

- **Source code** — MIT (see [`LICENSE.txt`](LICENSE.txt)).
- **Creative media** — every photograph, video, illustration, icon and mockup under
  `app/media/uploads/**` and `app/media/assets/**` is licensed
  **[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)** (see
  [`LICENSE-MEDIA.txt`](LICENSE-MEDIA.txt)). Each media folder also carries a `LICENSE.txt`, and the
  site footer shows the CC badge.

## Acknowledgments

This project currently uses no third-party libraries or copied code.

[docker]: https://hub.docker.com/r/d3strukt0r/rubynnn-portfolio
[gh-tags]: https://github.com/Team-MaRo/rubynnn-portfolio/tags
[gh-contributors]: https://github.com/Team-MaRo/rubynnn-portfolio/contributors
[contributing]: https://github.com/Team-MaRo/.github/blob/master/CONTRIBUTING.md
[code-of-conduct]: https://github.com/Team-MaRo/.github/blob/master/CODE_OF_CONDUCT.md
