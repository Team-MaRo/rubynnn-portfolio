import type {Lang} from '~/i18n-config';

// A value that exists in both languages. Project content modules are authored
// as `L<T>` pairs and resolved against the active locale with `pick`.
export interface L<T> {de: T; en: T}

export function pick<T>(value: L<T>, locale: Lang): T {
  return value[locale];
}

// Build a locale-prefixed in-app path. `slug` is locale-agnostic (e.g.
// 'fotos/europa'); '' / '/' yields the locale home.
export function localePath(locale: Lang, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return clean === '' ? `/${locale}` : `/${locale}/${clean}`;
}
