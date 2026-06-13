import {FeatureCard, Masonry, ProjHero, ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {printBrief, printHero, printSections} from '~/content/projects/print-medien';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Print Medien · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav
        locale={locale}
        crumb={{section: pick({de: 'Graphic Design', en: 'Graphic Design'}, locale), title: pick(printHero.title, locale)}}
      />

      <ProjHero
        kicker={pick({de: 'Editorial · Print', en: 'Editorial · Print'}, locale)}
        title={(
          <>
            Print
            <br />
            <span className="text-accent">{pick({de: 'Medien.', en: 'Media.'}, locale)}</span>
          </>
        )}
        meta={printHero.meta.map((m) => ({label: pick(m.label, locale), value: pick(m.value, locale)}))}
      />

      {/* Brief */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 border-t border-line px-5 py-20 md:px-8 lg:grid-cols-[200px_1fr] lg:gap-14">
        <div className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{pick(printBrief.label, locale)}</div>
        <div>
          <p className="mb-6 max-w-[34ch] font-display text-[clamp(22px,3vw,30px)] font-light italic leading-[1.4]">
            {pick(printBrief.lede, locale)}
          </p>
          <p className="mb-5 max-w-[60ch] leading-[1.65]">{pick(printBrief.body, locale)}</p>
          <p className="max-w-[60ch] text-sm leading-[1.7] text-muted">{pick(printBrief.note, locale)}</p>
        </div>
      </section>

      {/* Numbered sections */}
      {printSections.map((s) => (
        <ProjSection
          key={s.id}
          id={s.id}
          num={s.num}
          title={pick(s.title, locale)}
          lede={s.ledes.map((p, i) => (
            <span key={i} className={i > 0 ? 'mt-4 block' : 'block'}>
              {pick(p, locale)}
            </span>
          ))}
        >
          <div className="mb-6">
            <FeatureCard
              src={asset(s.feature.src)}
              alt={pick(s.feature.alt, locale)}
              tag={pick(s.feature.tag, locale)}
              caption={`${pick(s.feature.title, locale)} · ${pick(s.feature.meta, locale)}`}
            />
          </div>

          <Masonry cols={2}>
            {s.cards.map((c) => (
              <figure key={c.src} className="overflow-hidden rounded-sm border border-line bg-paper">
                <img src={asset(c.src)} alt={pick(c.alt, locale)} loading="lazy" className="w-full" />
                <figcaption className="flex items-baseline justify-between gap-4 px-5 py-4 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  <b className="font-normal text-fg">{pick(c.title, locale)}</b>
                  <span className="text-faint">{pick(c.meta, locale)}</span>
                </figcaption>
              </figure>
            ))}
          </Masonry>
        </ProjSection>
      ))}

      <ProjFoot locale={locale} next={{label: 'VIA Award', slug: 'graphic/via-award'}} />
    </div>
  );
}
