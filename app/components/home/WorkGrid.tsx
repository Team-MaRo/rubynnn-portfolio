import type {WorkSection} from '~/content/home';
import type {Lang} from '~/i18n-config';
import {Link} from 'react-router';
import {cn} from '~/lib/cn';
import {localePath, pick} from '~/lib/locale';
import {TileArt} from './TileArt';

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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              {s.items.map((item) => {
                const inner = (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                      <TileArt kind={item.art} />
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                      <span>{pick(item.meta[0], locale)}</span>
                      <span>{item.meta[1]}</span>
                    </div>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <h3 className="font-display text-2xl font-light italic leading-tight">{pick(item.title, locale)}</h3>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-sm transition-colors group-hover:bg-fg group-hover:text-bg">↗</span>
                    </div>
                  </>
                );
                const cls = cn('group block', SPAN[item.span] ?? 'md:col-span-6');
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
