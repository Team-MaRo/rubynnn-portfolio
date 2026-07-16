import type {RefLink} from '~/content/projects/ofg';
import type {Lang} from '~/i18n-config';
import type {L} from '~/lib/locale';
import {YouTube} from '~/components/project/Media';
import {ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {ofg} from '~/content/projects/ofg';
import {useLocale} from '~/hooks/useLocale';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'OfG Kurs · Robine'}];
}

// Bespoke briefing pull-quote: italic Fraunces on an accent-tinted card.
function BriefQuote({quote, who}: {quote: string; who: string}) {
  return (
    <blockquote className="mb-8 max-w-[64ch] rounded-r-sm border-l-2 border-accent bg-accent-soft/30 px-6 py-6 font-display text-[clamp(18px,1.7vw,22px)] italic leading-[1.45] text-fg text-pretty">
      {quote}
      <span className="mt-3 block font-mono text-2xs not-italic uppercase tracking-[0.14em] text-muted">{who}</span>
    </blockquote>
  );
}

function SubHead({num, children}: {num: string; children: string}) {
  return (
    <h3 className="mb-2 mt-12 flex items-baseline gap-3 font-display text-[26px] font-light italic tracking-tight">
      <span className="font-mono text-2xs not-italic uppercase tracking-[0.14em] text-accent">{num}</span>
      {children}
    </h3>
  );
}

function RefList({refs, locale}: {refs: RefLink[]; locale: Lang}) {
  return (
    <div className="grid max-w-[70ch] gap-0">
      {refs.map((r, i) => (
        <a
          key={i}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-baseline justify-between gap-5 border-b border-line py-3 transition-colors"
        >
          <b className="font-display text-base font-normal italic tracking-tight text-fg transition-colors group-hover:text-accent">{pick(r.label, locale)}</b>
          <span className="shrink-0 font-mono text-2xs uppercase tracking-[0.08em] text-muted transition-colors group-hover:text-accent">{pick(r.arr, locale)}</span>
        </a>
      ))}
    </div>
  );
}

export default function Page() {
  const locale: Lang = useLocale();
  const t = <T,>(v: L<T>): T => pick(v, locale);

  const heroTitle = pick(ofg.hero.title, locale);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Motion Design', en: 'Motion Design'}, locale), title: 'OfG'}} />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 px-5 pb-24 pt-44 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <h1 className="font-display text-[clamp(56px,9vw,140px)] font-light italic leading-[0.92] tracking-[-0.04em]">
          {heroTitle.top}
          <br />
          <span className="text-accent">{heroTitle.bottom}</span>
        </h1>
        <div>
          <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {ofg.hero.meta.map((m, i) => (
              <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
                <dt>{pick(m.label, locale)}</dt>
                <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Briefing / Intro ──────────────────────── */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 border-t border-line px-5 py-20 md:px-8 lg:grid-cols-[200px_1fr] lg:gap-14">
        <div className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">{t(ofg.brief.label)}</div>
        <div>
          <p className="mb-6 max-w-[44ch] font-display text-[26px] font-light italic leading-[1.45] tracking-[-0.005em]">{t(ofg.brief.lede)}</p>
          <p className="mb-5 max-w-[60ch] leading-[1.7] text-fg">{t(ofg.brief.body)}</p>
          <p className="max-w-[60ch] leading-[1.7] text-muted">{t(ofg.brief.note)}</p>
        </div>
      </section>

      {/* ── 01 Monatsaufgabe 1 — Kinetic Typo ─────── */}
      <ProjSection id="m1" num={ofg.m1.num} title={t(ofg.m1.title)} lede={t(ofg.m1.lede)}>
        <BriefQuote quote={t(ofg.m1.quote)} who={t(ofg.m1.who)} />

        <div className="max-w-[1100px]">
          <YouTube id={ofg.m1.video.id} title={t(ofg.m1.video.title)} />
          <p className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
            <span className="text-fg">{t(ofg.m1.video.title)}</span>
            <span>{ofg.m1.video.src}</span>
          </p>
        </div>

        <SubHead num="01.1">{t(ofg.m1.conceptHead)}</SubHead>
        <p className="mb-7 max-w-[60ch] text-muted">{t(ofg.m1.conceptLede)}</p>
        <div className="mb-2 grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3">
          {ofg.m1.words.map((w) => (
            <div key={w.num} className="flex flex-col gap-2.5 rounded-sm border border-line bg-bg p-6">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{w.num}</span>
              <span className="font-display text-[34px] font-light italic leading-none tracking-[-0.02em]">
                <em className="italic text-accent">{w.term.pre}</em>
                {w.term.rest}
              </span>
              <p className="text-sm leading-[1.6] text-muted">{pick(w.body, locale)}</p>
            </div>
          ))}
        </div>

        <SubHead num="01.2">{t(ofg.m1.colorHead)}</SubHead>
        <p className="mb-6 max-w-[60ch] text-muted">{t(ofg.m1.colorLede)}</p>
        <div className="flex max-w-[1100px] flex-wrap gap-3.5">
          {ofg.m1.swatches.map((s, i) => (
            <span key={i} className="flex items-center gap-3 rounded-full border border-line bg-bg py-2 pl-2 pr-3.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              <span className="h-[22px] w-[22px] rounded-full border border-line" style={{background: s.hex}} />
              <b className="font-display text-sm font-normal normal-case italic tracking-tight text-fg">{pick(s.name, locale)}</b>
              {s.role && pick(s.role, locale)}
            </span>
          ))}
        </div>

        <SubHead num="01.3">{t(ofg.m1.fontHead)}</SubHead>
        <p className="mb-6 max-w-[60ch] text-muted">{t(ofg.m1.fontLede)}</p>
        <div className="flex max-w-[1100px] flex-wrap gap-x-4 gap-y-2.5 text-[22px] leading-tight">
          {ofg.m1.fonts.map((f, i) => (
            <span
              key={i}
              className={
                f.accent === true
                  ? 'rounded-full border border-fg bg-fg px-3 py-1 text-bg'
                  : 'rounded-full border border-line px-3 py-1 text-fg'
              }
            >
              {f.name}
            </span>
          ))}
        </div>
      </ProjSection>

      {/* ── 02 Monatsaufgabe 2 — Music-driven ─────── */}
      <ProjSection id="m2" num={ofg.m2.num} title={t(ofg.m2.title)} lede={t(ofg.m2.lede)}>
        <BriefQuote quote={t(ofg.m2.quote)} who={t(ofg.m2.who)} />

        <div className="max-w-[1100px]">
          <YouTube id={ofg.m2.video.id} title={t(ofg.m2.video.title)} />
          <p className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
            <span className="text-fg">{t(ofg.m2.video.title)}</span>
            <span>{ofg.m2.video.src}</span>
          </p>
        </div>

        <SubHead num="02.1">{t(ofg.m2.colorHead)}</SubHead>
        <p className="mb-6 max-w-[60ch] text-muted">{t(ofg.m2.colorLede)}</p>
        <div className="mb-2 flex max-w-[1100px] flex-wrap gap-3.5">
          {ofg.m2.swatches.map((s, i) => (
            <span key={i} className="flex items-center gap-3 rounded-full border border-line bg-bg py-2 pl-2 pr-3.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              <span className="h-[22px] w-[22px] rounded-full border border-line" style={{background: s.hex}} />
              <b className="font-display text-sm font-normal normal-case italic tracking-tight text-fg">{pick(s.name, locale)}</b>
            </span>
          ))}
        </div>

        <SubHead num="02.2">{t(ofg.m2.refHead)}</SubHead>
        <RefList refs={ofg.m2.refs} locale={locale} />
      </ProjSection>

      {/* ── 03 Monatsaufgabe 3 — Narrative ────────── */}
      <ProjSection id="m3" num={ofg.m3.num} title={t(ofg.m3.title)} lede={t(ofg.m3.lede)}>
        <BriefQuote quote={t(ofg.m3.quote)} who={t(ofg.m3.who)} />

        <div className="max-w-[1100px]">
          <YouTube id={ofg.m3.video.id} title={t(ofg.m3.video.title)} />
          <p className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
            <span className="text-fg">{t(ofg.m3.video.title)}</span>
            <span>{ofg.m3.video.src}</span>
          </p>
        </div>

        <SubHead num="03.1">{t(ofg.m3.refHead)}</SubHead>
        <p className="mb-6 max-w-[60ch] text-muted">{t(ofg.m3.refLede)}</p>
        <RefList refs={ofg.m3.refs} locale={locale} />
      </ProjSection>

      {/* ── 04 Credits / Disclaimer ───────────────── */}
      <ProjSection id="credits" num={ofg.credits.num} title={t(ofg.credits.title)} lede={t(ofg.credits.lede)}>
        <div className="max-w-[70ch] rounded-sm border border-line bg-paper p-6 leading-[1.7] text-muted">
          <b className="font-display text-base font-normal italic text-fg">{t(ofg.credits.disclaimerLabel)}</b>{' '}
          {t(ofg.credits.disclaimer)}
        </div>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: pick({de: 'Ben Marriott Studien', en: 'Ben Marriott Studies'}, locale), slug: 'motion/ben'}} />
    </div>
  );
}
