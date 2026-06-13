import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import {baseInitOptions, LANG_COOKIE, LANG_STORAGE} from './i18n-config';
import de from './locales/de.yml';
import en from './locales/en.yml';

// Client-side i18n singleton. Initialised once from `entry.client.tsx` with the
// language the server already rendered (read from `<html lang>`), so the first
// client render matches the SSR/prerendered output exactly. The URL path is the
// source of truth thereafter; `locale-layout.tsx` calls changeLanguage on nav.
export function initClientI18n(lng?: string) {
  if (!i18n.isInitialized) {
    void i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        ...baseInitOptions,
        resources: {de: {translation: de}, en: {translation: en}},
        ...(lng != null && lng !== '' ? {lng} : {}),
        detection: {
          order: ['cookie', 'localStorage', 'navigator'],
          lookupCookie: LANG_COOKIE,
          lookupLocalStorage: LANG_STORAGE,
          caches: ['localStorage', 'cookie'],
        },
      });
  }
  return i18n;
}

if (import.meta.hot) {
  import.meta.hot.accept('./locales/de.yml', (m) => {
    if (m) {
      i18n.addResourceBundle('de', 'translation', m.default, true, true);
      void i18n.changeLanguage(i18n.language);
    }
  });
  import.meta.hot.accept('./locales/en.yml', (m) => {
    if (m) {
      i18n.addResourceBundle('en', 'translation', m.default, true, true);
      void i18n.changeLanguage(i18n.language);
    }
  });
}

export {i18n};
