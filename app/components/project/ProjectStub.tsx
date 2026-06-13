import {MENU} from '~/content/menu';
import {useLocale} from '~/hooks/useLocale';
import {pick} from '~/lib/locale';
import {TopNav} from '../TopNav';
import {ProjFoot} from './ProjFoot';

// Temporary placeholder for project pages still being built out (Phase B
// replaces each with its real template). Keeps every nav target live so the
// site is fully navigable in the meantime.
const FLAT = MENU.flatMap((s) => s.sub.map((sub) => ({...sub, section: s.label})));

export function ProjectStub({slug}: {slug: string}) {
  const locale = useLocale();
  const i = FLAT.findIndex((x) => x.slug === slug);
  const entry = FLAT[i];
  const next = FLAT[(i + 1) % FLAT.length];
  const title = entry ? pick(entry.label, locale) : slug;
  const section = entry ? pick(entry.section, locale) : '';

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section, title}} />
      <section className="mx-auto flex min-h-[70vh] max-w-[1100px] flex-col justify-center px-5 pb-24 pt-44 md:px-8">
        <p className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{section}</p>
        <h1 className="mt-4 font-display text-[clamp(56px,9vw,140px)] font-light italic leading-[0.95] tracking-[-0.03em]">{title}</h1>
        <p className="mt-8 max-w-[44ch] font-display text-2xl font-light italic text-muted">
          {locale === 'de' ? 'Diese Projektseite ist in Arbeit.' : 'This project page is in progress.'}
        </p>
        <p className="mt-3 max-w-[52ch] text-muted">
          {locale === 'de'
            ? 'Der Inhalt folgt in Kürze — Bildstrecken, Texte und Videos werden gerade aufbereitet.'
            : 'Content is coming soon — image sets, copy and videos are being prepared.'}
        </p>
      </section>
      <ProjFoot locale={locale} next={{label: next ? pick(next.label, locale) : 'Übersicht', slug: next?.slug ?? ''}} />
    </div>
  );
}
