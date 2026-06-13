import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {brief, covers, editorial, heroMeta, illus, journalsMeta, redesign} from '~/content/projects/journals';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Journal Covers · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick(journalsMeta.crumbSection, locale), title: journalsMeta.crumbTitle}} />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 px-5 pb-24 pt-44 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <h1 className="font-display text-[clamp(64px,11vw,168px)] font-light italic leading-[0.9] tracking-[-0.045em]">
          Journal
          <br />
          <span className="text-accent">Covers.</span>
        </h1>
        <div>
          <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {heroMeta.map((m, i) => (
              <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
                <dt>{pick(m.label, locale)}</dt>
                <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Briefing ─────────────────────────────── */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-5 pb-24 md:px-8 lg:grid-cols-[200px_1fr] lg:gap-14">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">{pick(brief.label, locale)}</div>
        <div>
          <p className="mb-6 max-w-[44ch] font-display text-[clamp(22px,2.6vw,30px)] font-light italic leading-[1.45] tracking-[-0.005em]">
            {pick(brief.lede, locale)}
          </p>
          <p className="max-w-[56ch] leading-[1.65] text-muted">{pick(brief.body, locale)}</p>
        </div>
      </section>

      {/* ── 01 · Cover-Redesign ──────────────────── */}
      <section className="border-t border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <header className="mb-12 max-w-[760px]">
            <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{redesign.num}</span>
            <h2 className="mt-3 font-display text-[clamp(32px,4.4vw,60px)] font-light italic leading-tight tracking-tight">
              {pick(redesign.title, locale)}
            </h2>
          </header>

          {/* Feature mockup + intro copy */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <a
              href={asset(redesign.feature.src)}
              target="_blank"
              rel="noopener"
              data-cursor="view"
              className="group block overflow-hidden rounded-sm border border-line bg-accent-soft/40 shadow-[0_30px_80px_-40px_rgba(58,31,13,.35)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img src={asset(redesign.feature.src)} alt={pick(redesign.feature.alt, locale)} className="block w-full" />
              <div className="flex items-baseline justify-between gap-4 border-t border-line bg-bg px-5 py-4 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                <b className="font-display text-[20px] font-normal not-italic normal-case tracking-tight text-fg">{redesign.feature.title}</b>
                <span>{redesign.feature.issue}</span>
              </div>
            </a>
            <div className="flex flex-col gap-4 pt-1">
              {redesign.copy.map((p, i) => (
                <p key={i} className="max-w-[52ch] font-display text-[19px] font-light italic leading-[1.55] text-muted">
                  {pick(p, locale)}
                </p>
              ))}
            </div>
          </div>

          {/* Journal cover grid (3 col, 3:4 covers) */}
          <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {covers.map((c) => (
              <a key={c.src} href={asset(c.src)} target="_blank" rel="noopener" data-cursor="view" className="group flex flex-col gap-3.5">
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-line bg-white shadow-[0_18px_40px_-24px_rgba(40,30,20,.35)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_60px_-24px_rgba(40,30,20,.45)]">
                  <img src={asset(c.src)} alt={pick(c.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex items-baseline justify-between gap-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  <b className="font-display text-[16px] font-normal italic normal-case tracking-tight text-balance text-fg">{c.title}</b>
                  <span className="shrink-0">{pick(c.meta, locale)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · Broschüren & Editorial ──────────── */}
      <section className="border-t border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <header className="mb-12 max-w-[760px]">
            <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{editorial.num}</span>
            <h2 className="mt-3 font-display text-[clamp(32px,4.4vw,60px)] font-light italic leading-tight tracking-tight">
              {pick(editorial.title, locale)}
            </h2>
            <p className="mt-4 max-w-[60ch] text-muted">{pick(editorial.lede, locale)}</p>
          </header>

          {/* Brochure illustration grid (3 col, 4:3 frames) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {illus.map((c) => (
              <a key={c.src} href={asset(c.src)} target="_blank" rel="noopener" data-cursor="view" className="group flex flex-col gap-3">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm border border-line bg-white p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <img src={asset(c.src)} alt={pick(c.alt, locale)} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex items-baseline justify-between gap-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  <b className="font-display text-[16px] font-normal italic normal-case tracking-tight text-fg">{c.title}</b>
                  <span className="shrink-0">{pick(c.meta, locale)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProjFoot locale={locale} next={{label: 'Icon Design', slug: 'illu/icon-design'}} />
    </div>
  );
}
