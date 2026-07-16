import type {TileArtKind, WorkSection} from '~/content/home';
import type {Lang} from '~/i18n-config';
import {Link} from 'react-router';
import {cn} from '~/lib/cn';
import {localePath, pick} from '~/lib/locale';
import {TileArt} from './TileArt';

/** Art kinds whose field is painted with --fg (dark in both themes) → invert the overlay. */
const DARK_FIELD = new Set<TileArtKind>(['award']);

const SPAN: Record<number, string> = {
  12: 'md:col-span-12',
  8: 'md:col-span-8',
  7: 'md:col-span-7',
  6: 'md:col-span-6',
  5: 'md:col-span-5',
  4: 'md:col-span-4',
  3: 'md:col-span-3',
};

export function WorkGrid({sections, locale}: {sections: WorkSection[]; locale: Lang}) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-line px-5 py-20 md:px-8">
          <div className="mx-auto max-w-[1500px]">
            <header className="mb-10 flex items-baseline justify-between gap-4">
              <span className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">{s.num}</span>
              <h2 className="flex-1 font-display text-[clamp(36px,5vw,64px)] font-light italic leading-none tracking-tight">{pick(s.title, locale)}</h2>
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(s.count, locale)}</span>
            </header>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {s.items.map((item) => {
                // Art fields painted with --fg are near-black in both themes, so
                // the default --fg-coloured overlay would vanish on them. Flip the
                // overlay to --bg for those tiles.
                const inverted = DARK_FIELD.has(item.art);
                const inner = (
                  <>
                    <div className="absolute inset-0 z-0">
                      <TileArt kind={item.art} />
                    </div>
                    <div className={cn('absolute inset-x-7 top-7 z-[2] flex justify-between font-mono text-2xs uppercase tracking-[0.1em]', inverted ? 'text-bg/70' : 'text-muted')}>
                      <span>{pick(item.meta[0], locale)}</span>
                      <span>{item.meta[1]}</span>
                    </div>
                    <div className="relative z-[2] flex items-end justify-between gap-4">
                      <h3 className={cn('font-display text-[32px] font-normal italic leading-none tracking-tight text-balance', inverted && 'text-bg')}>{pick(item.title, locale)}</h3>
                      <span className={cn('grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm transition-all duration-300 group-hover:-rotate-45', inverted ? 'border border-bg text-bg group-hover:bg-bg group-hover:text-fg' : 'border border-fg group-hover:bg-fg group-hover:text-bg')}>↗</span>
                    </div>
                  </>
                );
                const cls = cn(
                  'group relative flex h-[380px] flex-col justify-end overflow-hidden bg-accent-soft p-7 text-fg transition-transform duration-300 ease-out hover:-translate-y-1.5',
                  SPAN[item.span] ?? 'md:col-span-6',
                );
                return item.slug != null && item.slug !== ''
                  ? (
                      <Link key={item.id} to={localePath(locale, item.slug)} className={cls} data-cursor="view">
                        {inner}
                      </Link>
                    )
                  : (
                      <div key={item.id} className={cls}>{inner}</div>
                    );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
