import type {Lang} from '~/i18n-config';
import {Fragment, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router';
import {MENU, SOCIALS} from '~/content/menu';
import {cn} from '~/lib/cn';
import {localePath, pick} from '~/lib/locale';
import {ThemeToggle} from './ThemeToggle';

interface Props {open: boolean; locale: Lang; onClose: () => void}

export function MenuOverlay({open, locale, onClose}: Props) {
  const {t} = useTranslation();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const sectionHref = (id: string) => `${localePath(locale)}#${id}`;

  const searchable = useMemo(() => {
    const items: {label: string; parent: string | null; kind: 'section' | 'project'; href: string}[] = [];
    for (const s of MENU) {
      const label = pick(s.label, locale);
      items.push({label, parent: null, kind: 'section', href: sectionHref(s.id)});
      for (const sub of s.sub) {
        items.push({label: pick(sub.label, locale), parent: label, kind: 'project', href: localePath(locale, sub.slug)});
      }
    }
    return items;
    // eslint-disable-next-line react/exhaustive-deps
  }, [locale]);

  const q = query.trim().toLowerCase();
  const matches = q
    ? searchable.filter((it) => it.label.toLowerCase().includes(q) || (it.parent?.toLowerCase().includes(q) ?? false)).slice(0, 8)
    : [];

  return (
    <div
      className={cn(
        'glass-surface fixed inset-0 z-[150] flex flex-col overflow-y-auto px-6 pb-10 pt-24 transition-[opacity,visibility] duration-300 md:px-12',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      aria-hidden={!open}
    >
      {/* Tools: search + theme */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3 border-b border-line py-2">
          <span aria-hidden className="text-lg text-faint">⌕</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('menu.search_placeholder')}
            aria-label={t('menu.search_placeholder')}
            className="w-full bg-transparent font-display text-2xl font-light italic text-fg outline-none placeholder:text-faint"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear" className="text-faint hover:text-fg">
              ×
            </button>
          )}
        </div>
        <ThemeToggle variant="pill" />
      </div>

      {/* Search results */}
      {q && (
        <div className="mx-auto mt-6 w-full max-w-5xl">
          <div className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">
            {matches.length} {t('menu.results')}
          </div>
          {matches.length === 0
            ? (
                <p className="mt-3 text-muted">{t('menu.nothing')}</p>
              )
            : (
                <ul className="mt-3 divide-y divide-line">
                  {matches.map((m) => (
                    <li key={m.href}>
                      <Link to={m.href} onClick={onClose} className="flex items-baseline gap-3 py-3" data-cursor="go">
                        <span className="font-mono text-2xs text-accent">{m.kind === 'section' ? '§' : '↗'}</span>
                        <span className="font-display text-xl italic">{m.label}</span>
                        {m.parent != null && m.parent !== '' ? <span className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">{m.parent}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
        </div>
      )}

      {/* Menu list */}
      {!q && (
        <nav className="mx-auto mt-10 w-full max-w-5xl">
          {MENU.map((s) => (
            <div key={s.id} className="border-t border-line py-4">
              <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4">
                <span className="font-mono text-2xs text-faint">{s.num}</span>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      to={sectionHref(s.id)}
                      onClick={(e) => {
                        if (s.sub.length > 0 && expanded !== s.id) {
                          e.preventDefault();
                          setExpanded(s.id);
                        } else {
                          onClose();
                        }
                      }}
                      onMouseEnter={() => s.sub.length > 0 && setExpanded(s.id)}
                      data-cursor={s.sub.length ? 'expand' : 'go'}
                      className="font-display text-4xl font-light italic tracking-tight transition-colors hover:text-accent md:text-5xl"
                    >
                      {pick(s.label, locale)}
                      {s.sub.length > 0 && <span className="ml-3 text-base">↓</span>}
                    </Link>
                  </div>
                  {s.sub.length > 0 && (
                    <div className={cn('flex-wrap items-center gap-x-3 gap-y-2 pt-3', expanded === s.id ? 'flex' : 'hidden md:flex')}>
                      {s.sub.map((sub, i) => (
                        <Fragment key={sub.id}>
                          {i > 0 && <span aria-hidden className="select-none text-faint">·</span>}
                          <Link
                            to={localePath(locale, sub.slug)}
                            onClick={onClose}
                            data-cursor="go"
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
                          >
                            <span aria-hidden className="text-accent">↗</span>
                            {pick(sub.label, locale)}
                          </Link>
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>
      )}

      <div className="mx-auto mt-auto flex w-full max-w-5xl flex-col gap-3 pt-10 font-mono text-2xs uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {__COPYRIGHT_HOLDER__} {__COPYRIGHT_YEARS__} · Basel CH</span>
        <div className="flex gap-5">
          <a href={SOCIALS.instagram} className="hover:text-accent" data-cursor="follow">Instagram</a>
          <a href={SOCIALS.vimeo} className="hover:text-accent" data-cursor="watch">Vimeo</a>
          <a href={`mailto:${SOCIALS.email}`} className="hover:text-accent" data-cursor="email">Email</a>
        </div>
      </div>
    </div>
  );
}
