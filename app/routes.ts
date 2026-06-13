import type {RouteConfig} from '@react-router/dev/routes';
import {index, route} from '@react-router/dev/routes';
import {PAGES} from './routes-manifest';

// Locale-prefixed routing. `/` is a tiny redirect shell; everything real lives
// under `/:locale` (validated to de|en in the layout loader). The language is a
// pure function of the URL, so both locales prerender to static HTML and the
// DE/EN toggle is a plain link that works with JS disabled.
export default [
  index('routes/root-index.tsx'),
  route(':locale', 'routes/locale-layout.tsx', [
    index('routes/home.tsx'),
    ...PAGES.map((p) => route(p.slug, p.file)),
  ]),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
