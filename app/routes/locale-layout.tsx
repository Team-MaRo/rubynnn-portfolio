import type {Route} from './+types/locale-layout';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Outlet} from 'react-router';
import {CustomCursor} from '~/components/CustomCursor';
import {ScrollTop} from '~/components/ScrollTop';
import {useReveal} from '~/hooks/useReveal';
import {isLang} from '~/i18n-config';
import NotFound from './not-found';

// Layout for the `:locale` segment. Validation lives in the component (not a
// loader) because the GitHub Pages build is SPA-mode, which forbids loaders on
// non-root routes. Real page chrome (TopNav + footers) is rendered per-page so
// project pages can show their breadcrumb; the layout owns only the cross-page
// concerns.
export default function LocaleLayout({params}: Route.ComponentProps) {
  const {i18n} = useTranslation();
  useReveal();
  const valid = isLang(params.locale);

  // Reconcile i18n to the URL locale on client-side navigation between locales.
  useEffect(() => {
    if (valid && params.locale !== i18n.language) {
      void i18n.changeLanguage(params.locale);
    }
  }, [valid, params.locale, i18n]);

  // Anything that isn't de/en → the localized 404.
  if (!valid) {
    return <NotFound />;
  }

  return (
    <>
      <CustomCursor />
      <Outlet />
      <ScrollTop />
    </>
  );
}
