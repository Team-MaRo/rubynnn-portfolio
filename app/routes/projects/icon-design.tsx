import type {IconSet} from '~/content/projects/icon-design';
import type {Lang} from '~/i18n-config';
import {ProjHero, ProjSection, SpecGrid} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {brief, heroLead, heroMeta, sets, specs, systemLede, usage} from '~/content/projects/icon-design';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Icon Design · Robine'}];
}

function IconGrid({set, locale}: {set: IconSet; locale: Lang}) {
  return (
    <div className="grid max-w-[1300px] grid-cols-3 border-l border-t border-line sm:grid-cols-4 lg:grid-cols-6">
      {set.cells.map((cell) => (
        <div
          key={cell.src}
          className="group relative flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-line px-4 pb-4 pt-6 transition-colors hover:bg-accent-soft/40"
        >
          <span className="absolute left-2.5 top-2 font-mono text-[9px] text-faint">{cell.n}</span>
          <span className="flex h-[88px] w-full max-w-[88px] items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
            <img
              src={asset(cell.src)}
              alt={cell.alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain dark:[filter:invert(0.92)_hue-rotate(180deg)]"
            />
          </span>
          <span className="text-center font-mono text-[9.5px] uppercase leading-[1.3] tracking-[0.12em] text-muted">
            {pick(cell.name, locale)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Illustrationen', en: 'Illustrations'}, locale), title: 'Icon Design'}} />

      {/* Hero */}
      <ProjHero
        kicker={pick({de: 'Icon-System · S. Karger AG', en: 'Icon system · S. Karger AG'}, locale)}
        title={(
          <>
            Icon
            <br />
            <span className="text-accent">Design.</span>
          </>
        )}
        lede={pick(heroLead, locale)}
        meta={heroMeta.map((m) => ({label: pick(m.label, locale), value: m.value}))}
      />

      {/* Brief */}
      <ProjSection num={pick(brief.label, locale)} title={pick({de: 'Briefing', en: 'Brief'}, locale)}>
        <div className="max-w-[68ch] space-y-6">
          <p className="font-display text-[22px] font-light italic leading-[1.5] text-fg">{pick(brief.lede, locale)}</p>
          <p className="leading-[1.7] text-fg">{pick(brief.body, locale)}</p>
          <p className="leading-[1.7] text-muted">{pick(brief.note, locale)}</p>
        </div>
      </ProjSection>

      {/* System / specs */}
      <ProjSection num="01" title={pick({de: 'System', en: 'System'}, locale)} lede={pick(systemLede, locale)}>
        <SpecGrid items={specs.map((s) => ({label: pick(s.label, locale), value: s.value}))} />
      </ProjSection>

      {/* Icon sets */}
      {sets.map((set) => (
        <ProjSection key={set.id} id={set.id} num={set.num} title={set.title} lede={pick(set.lede, locale)}>
          <IconGrid set={set} locale={locale} />
        </ProjSection>
      ))}

      {/* Application showcase */}
      <ProjSection num={usage.num} title={pick(usage.title, locale)} lede={pick(usage.lede, locale)}>
        <div className="grid max-w-[1300px] grid-cols-1 items-start gap-7 lg:grid-cols-[1.1fr_1fr]">
          {usage.cards.map((card) => (
            <a
              key={card.src}
              href={asset(card.src)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="flex flex-col overflow-hidden rounded-sm border border-line bg-bg shadow-[0_20px_60px_-30px_rgba(40,30,20,0.25)]"
            >
              <div className={`flex items-center justify-center bg-accent-soft/35 p-6 ${card.tall ? 'min-h-[420px]' : 'min-h-[320px]'}`}>
                <img src={asset(card.src)} alt={pick(card.alt, locale)} loading="lazy" className="block h-auto w-full" />
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-line bg-bg px-5 py-4">
                <b className="font-display text-base font-normal italic tracking-tight text-fg">{card.title}</b>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{pick(card.sub, locale)}</span>
              </div>
            </a>
          ))}
        </div>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'Journals', slug: 'illu/journals'}} />
    </div>
  );
}
