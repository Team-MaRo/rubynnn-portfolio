import {YouTube} from '~/components/project/Media';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {kargerBrief, kargerMeta, kargerSections} from '~/content/projects/s-karger';
import {useLocale} from '~/hooks/useLocale';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'S. Karger AG — Animation Lead · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Motion Design', en: 'Motion Design'}, locale), title: 'S. Karger AG'}} />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 border-b border-line px-5 pb-12 pt-44 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <h1 className="font-display text-[clamp(56px,9vw,140px)] font-light italic leading-[0.92] tracking-[-0.04em]">
          S. Karger AG
          <br />
          <span className="text-accent">{pick({de: '— Animations Lead.', en: '— Animation Lead.'}, locale)}</span>
        </h1>
        <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          {kargerMeta.map((m, i) => (
            <div key={i} className="flex justify-between gap-6 border-b border-line pb-2.5">
              <dt>{pick(m.label, locale)}</dt>
              <dd className="text-right font-display text-base normal-case not-italic tracking-tight text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Brief / Intro */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 border-b border-line px-5 py-14 md:px-8 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{pick(kargerBrief.label, locale)}</div>
        <div className="max-w-[65ch]">
          <p className="font-display text-[22px] font-light italic leading-[1.45]">{pick(kargerBrief.lede, locale)}</p>
          <p className="mt-5 text-[19px] leading-[1.55]">{pick(kargerBrief.body, locale)}</p>
          <p className="mt-5 text-[19px] leading-[1.55] text-muted">{pick(kargerBrief.note, locale)}</p>
        </div>
      </section>

      {/* Sections */}
      {kargerSections.map((s) => (
        <section key={s.num} className="border-b border-line px-5 pb-12 pt-20 md:px-8">
          <div className="mx-auto max-w-[1300px]">
            <h2 className="flex items-baseline gap-4 font-display text-[clamp(36px,5vw,64px)] font-light italic leading-none tracking-[-0.02em]">
              <span className="w-9 flex-none font-mono text-[13px] not-italic uppercase tracking-[0.1em] text-accent">{s.num}</span>
              <span>{pick(s.title, locale)}</span>
            </h2>
            <p className="mb-9 ml-0 mt-4 max-w-[70ch] text-[17px] leading-[1.55] text-muted lg:ml-[54px]">{pick(s.lede, locale)}</p>

            <div className="flex flex-col gap-14 lg:ml-[54px]">
              {s.videos.map((v) => (
                <div key={v.id} className="grid max-w-[1100px] grid-cols-1 items-start gap-6 lg:grid-cols-[5fr_3fr] lg:gap-9">
                  <div className="grid gap-3.5">
                    <YouTube id={v.id} title={pick(v.caption, locale)} />
                    <div className="flex items-center justify-between gap-4 border-t border-line pt-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      <span>YouTube · {v.id}</span>
                      <b className="font-display text-base font-normal normal-case italic tracking-tight text-fg">{pick(v.caption, locale)}</b>
                    </div>
                  </div>
                  <div className="text-[16px] leading-[1.6]">
                    <h3 className="mb-3 font-display text-[26px] font-light italic leading-[1.15] tracking-[-0.01em]">{pick(v.heading, locale)}</h3>
                    {v.body.map((p, i) => (
                      <p key={i} className="mb-3">{pick(p, locale)}</p>
                    ))}
                    <span className="mt-3 block border-t border-line pt-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">{pick(v.credit, locale)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Corporate brand disclaimer banner */}
      <div className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[1300px]">
          <p className="border-l-[3px] border-accent bg-accent-soft/40 px-6 py-5 text-[14px] leading-[1.55] text-fg">
            {pick(kargerBrief.note, locale)}
          </p>
        </div>
      </div>

      <ProjFoot locale={locale} next={{label: 'OfG Kurs', slug: 'motion/ofg'}} />
    </div>
  );
}
