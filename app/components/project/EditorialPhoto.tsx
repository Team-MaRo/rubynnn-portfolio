import type {LightboxItem} from './Lightbox';
import type {Tokens} from './PageTheme';
import type {Lang} from '~/i18n-config';
import type {L} from '~/lib/locale';
import {Fragment, useState} from 'react';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';
import {TopNav} from '../TopNav';
import {Lightbox} from './Lightbox';
import {PageTheme} from './PageTheme';
import {ProjFoot} from './ProjFoot';

export interface EditorialFigure {
  src: string;
  alt: L<string>;
  caption: string;
  r?: 'wide' | 'land' | 'cinema' | 'square' | 'tall' | 'port' | 'extra-tall';
}
export interface EditorialSeries {
  id: string;
  num: L<string>;
  title: string;
  sub: L<string>;
  lede: L<string>;
  meta: {label: L<string>; value: string}[];
  figures: EditorialFigure[];
}
export interface EditorialContent {
  themeId: string;
  palette: {light: Tokens; dark?: Tokens};
  pageTitle: L<string>;
  crumbSection: L<string>;
  crumbTitle: string;
  heroLines: {text: string; accent?: boolean}[];
  heroKicker: L<string>;
  heroLead: L<string>;
  heroMeta: {label: L<string>; value: string}[];
  index: {n: string; title: string; anchor: string}[];
  forewordLabel: L<string>;
  forewordLeads: L<string>[];
  forewordBody: L<string>;
  series: EditorialSeries[];
  pulls: {afterSeries: string; quote: L<string>; cite: string}[];
  next: {label: string; slug: string};
}

export function EditorialPhoto({content, locale}: {content: EditorialContent; locale: Lang}) {
  const [box, setBox] = useState<{items: LightboxItem[]; index: number; title: string} | null>(null);

  const openSeries = (s: EditorialSeries, idx: number) => {
    setBox({
      title: s.title,
      index: idx,
      items: s.figures.map((f) => ({src: asset(f.src), alt: pick(f.alt, locale), caption: f.caption})),
    });
  };

  return (
    <div className={`page-${content.themeId} min-h-dvh bg-bg text-fg`}>
      <PageTheme id={content.themeId} light={content.palette.light} dark={content.palette.dark} />
      <TopNav locale={locale} crumb={{section: pick(content.crumbSection, locale), title: content.crumbTitle}} />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-end gap-12 px-5 pb-28 pt-44 md:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <h1 className="font-display text-[clamp(72px,12vw,200px)] font-light italic leading-[0.9] tracking-[-0.045em]">
          {content.heroLines.map((line, i) => (
            <Fragment key={i}>
              <span className={line.accent === true ? 'text-accent' : undefined}>{line.text}</span>
              {i < content.heroLines.length - 1 && <br />}
            </Fragment>
          ))}
          <span className="mt-6 block font-mono text-[13px] font-normal not-italic uppercase tracking-[0.18em] text-accent">
            {pick(content.heroKicker, locale)}
          </span>
        </h1>
        <div>
          <p className="mb-9 max-w-[36ch] font-display text-[22px] font-light italic leading-[1.45]">{pick(content.heroLead, locale)}</p>
          <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {content.heroMeta.map((m, i) => (
              <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
                <dt>{pick(m.label, locale)}</dt>
                <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Series index */}
      <nav aria-label="Series index" className="border-y border-line bg-paper px-5 py-7 md:px-8">
        <ol className="mx-auto grid max-w-[1500px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {content.index.map((it) => (
            <li key={it.anchor}>
              <a href={`#${it.anchor}`} className="flex items-baseline gap-3.5 border-b border-transparent py-2.5 transition-colors hover:border-accent hover:text-accent" data-cursor="go">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">{it.n}</span>
                <span className="font-display text-[19px] italic tracking-tight">{it.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Foreword */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-5 py-24 md:px-8 lg:grid-cols-[200px_1fr] lg:gap-14">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">{pick(content.forewordLabel, locale)}</div>
        <div>
          {content.forewordLeads.map((p, i) => (
            <p key={i} className="mb-5 max-w-[30ch] font-display text-[26px] font-light italic leading-[1.45] tracking-[-0.005em]">{pick(p, locale)}</p>
          ))}
          <p className="max-w-[56ch] leading-[1.65] text-muted">{pick(content.forewordBody, locale)}</p>
        </div>
      </section>

      {/* Series */}
      {content.series.map((s) => (
        <Fragment key={s.id}>
          <section id={s.id} className="border-t border-line px-5 py-24 pb-32 md:px-8">
            <header className="mx-auto mb-16 grid max-w-[720px] justify-items-center gap-3.5 text-center">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">{pick(s.num, locale)}</div>
              <h2 className="font-display text-[clamp(44px,6vw,84px)] font-light italic leading-none tracking-[-0.03em] text-balance">{s.title}</h2>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{pick(s.sub, locale)}</div>
              <p className="mt-4 max-w-[48ch] font-display text-[19px] font-light italic leading-[1.55] text-muted text-pretty">{pick(s.lede, locale)}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-7 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {s.meta.map((m, i) => (
                  <span key={i}>
                    {pick(m.label, locale)}
                    <b className="ml-2 font-normal text-fg">{m.value}</b>
                  </span>
                ))}
              </div>
            </header>

            <div className="spread reveal">
              {s.figures.map((f, idx) => (
                <figure key={f.src} data-r={f.r}>
                  <a
                    href={asset(f.src)}
                    onClick={(e) => {
                      e.preventDefault();
                      openSeries(s, idx);
                    }}
                    data-cursor="zoom"
                  >
                    <img src={asset(f.src)} alt={pick(f.alt, locale)} loading="lazy" onLoad={(e) => e.currentTarget.closest('figure')?.classList.add('is-loaded')} />
                  </a>
                  <figcaption>{f.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {content.pulls
            .filter((p) => p.afterSeries === s.id)
            .map((p, i) => (
              <div key={i} className="mx-auto max-w-[1100px] border-t border-line px-5 py-24 text-center md:px-8">
                <q className="mx-auto block max-w-[24ch] font-display text-[clamp(28px,4vw,48px)] font-light italic leading-[1.25] tracking-[-0.015em]">{pick(p.quote, locale)}</q>
                <cite className="mt-6 block font-mono text-[10.5px] uppercase not-italic tracking-[0.18em] text-faint">{p.cite}</cite>
              </div>
            ))}
        </Fragment>
      ))}

      <ProjFoot locale={locale} next={content.next} nextKind="series" />

      <Lightbox
        items={box?.items ?? []}
        index={box?.index ?? null}
        seriesTitle={box?.title}
        onClose={() => setBox(null)}
        onNavigate={(next) => setBox((b) => (b ? {...b, index: next} : b))}
      />
    </div>
  );
}
