import type {InitOptions} from 'i18next';
import de from './locales/de.yml';
import en from './locales/en.yml';

// Single isomorphic source of truth for i18next, imported by both the client
// singleton (`app/i18n.ts`) and the per-request server instance
// (`app/i18n.server.ts`). German is primary (Robine's audience); English second.

export const SUPPORTED_LNGS = ['de', 'en'] as const;
export type Lang = (typeof SUPPORTED_LNGS)[number];
export const FALLBACK_LNG: Lang = 'de';

// localStorage key + cookie name for persisting the last manual choice. The
// URL path is the source of truth for what renders; these only seed the
// root-index redirect and reconcile after hydration.
export const LANG_STORAGE = 'rubynnn-portfolio:lang';
export const LANG_COOKIE = 'lng';

export function isLang(value: string | null | undefined): value is Lang {
  return value != null && (SUPPORTED_LNGS as readonly string[]).includes(value);
}

export const resources = {
  de: {translation: de},
  en: {translation: en},
};

export const baseInitOptions = {
  resources,
  fallbackLng: FALLBACK_LNG,
  supportedLngs: [...SUPPORTED_LNGS],
  interpolation: {escapeValue: false},
  returnObjects: true,
  react: {useSuspense: false},
} satisfies InitOptions;
