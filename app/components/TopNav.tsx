import type {Lang} from '~/i18n-config';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useLocation} from 'react-router';
import {localePath} from '~/lib/locale';
import {LangToggle} from './LangToggle';
import {MenuOverlay} from './MenuOverlay';
import {ThemeToggle} from './ThemeToggle';

interface Crumb {section: string; title: string}
interface Props {
  locale: Lang;
  /** Project pages show a breadcrumb + back link instead of the brand. */
  crumb?: Crumb;
  backTo?: string;
}

export function TopNav({locale, crumb, backTo}: Props) {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();

  // Close the menu on navigation and lock body scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="glass-nav fixed inset-x-0 top-0 z-[160] border-b border-line px-5 md:px-8">
        <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between">
          {crumb
            ? (
                <div className="flex min-w-0 items-center gap-3 font-mono text-2xs uppercase tracking-[0.1em] text-muted">
                  <Link to={backTo ?? localePath(locale)} className="text-fg hover:text-accent" data-cursor="home">
                    ← Robine
                  </Link>
                  <span className="hidden sm:inline">/</span>
                  <span className="hidden truncate sm:inline">{crumb.section}</span>
                  <span className="hidden sm:inline">/</span>
                  <b className="truncate font-display text-base font-normal not-italic tracking-tight text-fg">{crumb.title}</b>
                </div>
              )
            : (
                <Link to={localePath(locale)} className="flex items-center gap-1 font-display text-lg italic" data-cursor="home">
                  Robine's Space
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                </Link>
              )}

          <div className="flex items-center gap-3 md:gap-4">
            <LangToggle current={locale} />
            <ThemeToggle variant="icon" />
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              onClick={() => setOpen((o) => !o)}
              data-cursor="menu"
              className="flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-fg"
            >
              {open ? t('nav.close') : t('nav.menu')}
              <span className="grid gap-[3px]">
                <i className="block h-px w-4 bg-fg" />
                <i className="block h-px w-4 bg-fg" />
                <i className="block h-px w-4 bg-fg" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} locale={locale} onClose={() => setOpen(false)} />
    </>
  );
}
