import type {Lang} from '~/i18n-config';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router';
import {localePath} from '~/lib/locale';
import {LicenseBadge} from '../LicenseBadge';

// Project-page footer: back-to-overview + large "next project/series" link.
export function ProjFoot({
  locale,
  next,
  nextKind = 'project',
}: {
  locale: Lang;
  next: {label: string; slug: string};
  nextKind?: 'project' | 'series';
}) {
  const {t} = useTranslation();
  return (
    <footer className="border-t border-line px-5 pb-20 pt-24 md:px-8">
      <div className="flex flex-col gap-8 font-mono text-2xs uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-end sm:justify-between">
        <Link to={localePath(locale)} className="text-fg hover:text-accent" data-cursor="back">
          {t('footer.back_to_overview')}
        </Link>
        <div className="grid gap-2 sm:text-right">
          <span>{nextKind === 'series' ? t('footer.next_series') : t('footer.next_project')}</span>
          <Link
            to={localePath(locale, next.slug)}
            data-cursor="go"
            className="font-display text-3xl font-light italic normal-case tracking-tight text-fg hover:text-accent sm:justify-self-end"
          >
            {next.label} →
          </Link>
        </div>
      </div>
      <div className="mt-10 border-t border-line pt-4">
        <LicenseBadge />
      </div>
    </footer>
  );
}
