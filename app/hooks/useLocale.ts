import type {Lang} from '~/i18n-config';
import {useParams} from 'react-router';
import {FALLBACK_LNG, isLang} from '~/i18n-config';

// Active locale from the route param. The `:locale` layout loader has already
// 404'd anything that isn't `de`/`en`, so this is always valid past the layout.
export function useLocale(): Lang {
  const {locale} = useParams();
  return isLang(locale) ? locale : FALLBACK_LNG;
}
