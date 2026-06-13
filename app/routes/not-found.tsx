import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router';
import {isLang} from '~/i18n-config';

// Catch-all 404. Component-only (no loader) so it's valid in SPA/prerender
// mode. Localizes from the URL's first path segment; the prerendered 404.html
// (via spa-fallback) serves it on static hosts.
export function meta() {
  return [{title: 'Robine — 404'}];
}

export default function NotFound() {
  const {t} = useTranslation();
  const seg = useLocation().pathname.split('/').filter(Boolean)[0];
  const home = isLang(seg) ? `/${seg}` : '/de';

  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center bg-bg px-6 text-center text-fg">
      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-light italic tracking-tight md:text-6xl">{t('error.not_found_title')}</h1>
      <p className="mt-4 max-w-md text-muted">{t('error.not_found_sub')}</p>
      <a href={home} className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-accent hover:underline">
        <span aria-hidden>→</span> {t('error.home')}
      </a>
    </main>
  );
}
