// Single source of truth for the project pages, shared by `routes.ts` (route
// definitions) and `vite.config.ts` (the sitemap URL list). Keeping it here
// guarantees the routes and the sitemap never drift.

export const LOCALES = ['de', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

// Locale-agnostic page slugs. `''` is the locale home (`/de`, `/en`). Each entry
// maps a URL slug to its route module under `app/routes/`.
export const PAGES: {slug: string; file: string}[] = [
  {slug: 'fotos/europa', file: 'routes/projects/europa.tsx'},
  {slug: 'fotos/asien', file: 'routes/projects/asien.tsx'},
  {slug: 'motion/s-karger', file: 'routes/projects/s-karger.tsx'},
  {slug: 'motion/ofg', file: 'routes/projects/ofg.tsx'},
  {slug: 'motion/ben', file: 'routes/projects/ben.tsx'},
  {slug: 'graphic/print-medien', file: 'routes/projects/print-medien.tsx'},
  {slug: 'graphic/via-award', file: 'routes/projects/via-award.tsx'},
  {slug: 'graphic/liederbuch', file: 'routes/projects/liederbuch.tsx'},
  {slug: 'graphic/hochzeit', file: 'routes/projects/hochzeit.tsx'},
  {slug: 'graphic/pilates-flyer', file: 'routes/projects/pilates-flyer.tsx'},
  {slug: 'web/portfolio-website', file: 'routes/projects/portfolio-website.tsx'},
  {slug: 'web/sponte-app', file: 'routes/projects/sponte-app.tsx'},
  {slug: 'illu/icon-design', file: 'routes/projects/icon-design.tsx'},
  {slug: 'illu/journals', file: 'routes/projects/journals.tsx'},
];

// Every in-app path: the root shell, each locale home, and every project page
// under each locale. Used to build the sitemap.
export function allPaths(): string[] {
  const paths = ['/'];
  for (const l of LOCALES) {
    paths.push(`/${l}`);
    for (const p of PAGES) {
      paths.push(`/${l}/${p.slug}`);
    }
  }
  return paths;
}
