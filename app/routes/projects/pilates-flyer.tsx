import {Fragment} from 'react';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {pilatesFlyer as c} from '~/content/projects/pilates-flyer';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Pilates Flyer · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Graphic Design', en: 'Graphic Design'}, locale), title: 'Pilates Flyer'}} />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 border-b border-line px-5 pb-12 pt-44 md:px-8 lg:grid-cols-2 lg:gap-16">
        <h1 className="font-display text-[clamp(64px,9vw,140px)] font-light italic leading-[0.9] tracking-[-0.03em] text-balance">
          {c.hero.lines.map((line, i) => (
            <Fragment key={i}>
              <span className={line.accent === true ? 'text-accent' : undefined}>{pick(line.text, locale)}</span>
              {i < c.hero.lines.length - 1 && <br />}
            </Fragment>
          ))}
        </h1>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 font-mono text-[11px] uppercase tracking-[0.08em] text-muted sm:grid-cols-3">
          {c.hero.meta.map((m, i) => (
            <div key={i}>
              <dt>{pick(m.label, locale)}</dt>
              <dd className="mt-1 font-display text-base font-normal not-italic normal-case tracking-tight text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Briefing */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 border-b border-line px-5 py-16 md:px-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{pick(c.brief.label, locale)}</div>
        <div className="max-w-[60ch]">
          <p className="font-display text-[clamp(22px,2.4vw,32px)] font-light italic leading-[1.3] tracking-[-0.005em] text-pretty">
            {pick(c.brief.lede, locale)}
          </p>
          <p className="mt-6 leading-[1.7] text-muted">{pick(c.brief.body, locale)}</p>
        </div>
      </section>

      {/* 01 · Moodboard */}
      <section className="border-b border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-12 flex items-baseline gap-5 font-display text-[clamp(40px,7vw,84px)] font-light italic leading-[0.95] tracking-[-0.02em]">
            <span className="font-mono text-xs not-italic uppercase tracking-[0.08em] text-muted">01</span>
            {c.moodboard.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.moodboard.cards.map((card) => (
              <a
                key={card.src}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="group flex flex-col overflow-hidden rounded-sm border border-line bg-accent-soft transition-transform duration-500 ease-out hover:-translate-y-1.5"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={asset(card.src)}
                    alt={pick(card.alt, locale)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{card.source}</div>
                  <div className="font-display text-lg italic leading-[1.3] text-pretty text-fg">{pick(card.desc, locale)}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · Entwürfe */}
      <section className="border-b border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-12 flex items-baseline gap-5 font-display text-[clamp(40px,7vw,84px)] font-light italic leading-[0.95] tracking-[-0.02em]">
            <span className="font-mono text-xs not-italic uppercase tracking-[0.08em] text-muted">02</span>
            {pick(c.drafts.title, locale)}
          </h2>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {c.drafts.items.map((d) => (
              <figure key={d.src} className="group flex flex-col gap-3">
                <div className="aspect-[420/595] overflow-hidden border border-line bg-white transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                  <img src={asset(d.src)} alt={pick(d.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <figcaption className="flex justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                  <b className="font-normal text-fg">{pick(d.label, locale)}</b>
                  <span>{pick(d.note, locale)}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Finaler Flyer */}
      <section className="border-b border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-12 flex items-baseline gap-5 font-display text-[clamp(40px,7vw,84px)] font-light italic leading-[0.95] tracking-[-0.02em]">
            <span className="font-mono text-xs not-italic uppercase tracking-[0.08em] text-muted">03</span>
            {pick(c.final.title, locale)}
          </h2>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="aspect-[420/595] overflow-hidden border border-line bg-white">
              <img src={asset(c.final.src)} alt={pick(c.final.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-7 lg:pt-10">
              <h3 className="font-display text-3xl font-light italic tracking-[-0.01em]">{c.final.headline}</h3>
              <p className="max-w-[50ch] leading-[1.6] text-muted">{pick(c.final.body1, locale)}</p>
              <dl className="grid grid-cols-2 gap-5 border-y border-line py-6 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {c.final.specs.map((s, i) => (
                  <div key={i}>
                    <dt>{pick(s.label, locale)}</dt>
                    <dd className="mt-1.5 font-display text-lg font-light italic normal-case tracking-[-0.01em] text-fg">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="max-w-[50ch] leading-[1.6] text-muted">{pick(c.final.body2, locale)}</p>
            </div>
          </div>
        </div>
      </section>

      <ProjFoot locale={locale} next={{label: 'Print Medien', slug: 'graphic/print-medien'}} />
    </div>
  );
}
