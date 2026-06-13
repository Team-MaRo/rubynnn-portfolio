import type {ReactNode} from 'react';
import {cn} from '~/lib/cn';

// Shared building blocks for the bespoke project (case-study) pages. All use the
// runtime design tokens (bg/paper/fg/muted/faint/line/accent) so they re-theme
// in dark mode and pick up any per-page PageTheme accent override.

/** Hero: big italic title + optional kicker, lede, and a meta table on the right. */
export function ProjHero({
  kicker,
  title,
  lede,
  meta,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: {label: string; value: string}[];
}) {
  return (
    <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 px-5 pb-24 pt-44 md:px-8 lg:grid-cols-[1.15fr_1fr]">
      <div>
        {kicker != null && kicker !== '' ? <p className="mb-5 font-mono text-2xs uppercase tracking-[0.18em] text-accent">{kicker}</p> : null}
        <h1 className="font-display text-[clamp(56px,9vw,140px)] font-light italic leading-[0.92] tracking-[-0.04em]">{title}</h1>
      </div>
      <div>
        {lede != null && lede !== '' ? <p className="mb-8 max-w-[40ch] font-display text-[22px] font-light italic leading-[1.45] text-muted">{lede}</p> : null}
        {meta && (
          <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {meta.map((m, i) => (
              <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
                <dt>{m.label}</dt>
                <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

/** A titled section with a mono number + italic heading and optional lede. */
export function ProjSection({
  id,
  num,
  title,
  lede,
  children,
  className,
}: {
  id?: string;
  num?: string;
  title?: string;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('border-t border-line px-5 py-20 md:px-8', className)}>
      <div className="mx-auto max-w-[1300px]">
        {((title != null && title !== '') || (num != null && num !== '')) && (
          <header className="mb-10 max-w-[760px]">
            {num != null && num !== '' ? <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{num}</span> : null}
            {title != null && title !== '' ? <h2 className="mt-3 font-display text-[clamp(32px,4.4vw,60px)] font-light italic leading-tight tracking-tight">{title}</h2> : null}
            {lede != null && lede !== '' ? <p className="mt-4 max-w-[60ch] text-muted">{lede}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

/** Centered editorial pull-quote between sections. */
export function PullQuote({children, cite}: {children: ReactNode; cite?: string}) {
  return (
    <div className="mx-auto max-w-[1100px] border-t border-line px-5 py-24 text-center md:px-8">
      <q className="mx-auto block max-w-[26ch] font-display text-[clamp(26px,4vw,46px)] font-light italic leading-[1.25] tracking-[-0.015em]">{children}</q>
      {cite != null && cite !== '' ? <cite className="mt-6 block font-mono text-2xs uppercase not-italic tracking-[0.18em] text-faint">{cite}</cite> : null}
    </div>
  );
}

/** Spec strip: label/value pairs in a responsive grid. */
export function SpecGrid({items}: {items: {label: string; value: string}[]}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-line md:grid-cols-4">
      {items.map((s, i) => (
        <div key={i} className="bg-bg p-5">
          <div className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">{s.label}</div>
          <div className="mt-2 font-display text-xl italic">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Full-width feature card: a framed image with a caption + optional tag. */
export function FeatureCard({src, alt, caption, tag}: {src: string; alt: string; caption?: string; tag?: string}) {
  return (
    <figure className="overflow-hidden rounded-sm border border-line bg-paper">
      <div className="relative">
        {tag != null && tag !== ''
          ? (
              <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 font-mono text-2xs uppercase tracking-[0.12em] text-bg">{tag}</span>
            )
          : null}
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </div>
      {caption != null && caption !== '' ? <figcaption className="px-5 py-4 font-mono text-2xs uppercase tracking-[0.12em] text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

/** CSS-columns masonry wrapper (2–3 cols). Pass <figure>/<img> children. */
export function Masonry({children, cols = 3, className}: {children: ReactNode; cols?: 2 | 3; className?: string}) {
  return (
    <div className={cn('[column-gap:1.5rem] [&>*]:mb-6 [&>*]:break-inside-avoid', cols === 3 ? 'columns-1 sm:columns-2 lg:columns-3' : 'columns-1 sm:columns-2', className)}>
      {children}
    </div>
  );
}

/** Small uppercase mono tag/chip. */
export function Tag({children}: {children: ReactNode}) {
  return <span className="rounded-full border border-line px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] text-muted">{children}</span>;
}
