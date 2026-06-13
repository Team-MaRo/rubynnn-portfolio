import type {ReactNode} from 'react';
import {Fragment} from 'react';
import {PageTheme} from '~/components/project/PageTheme';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import * as C from '~/content/projects/sponte-app';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

// Local section wrapper mirroring ProjSection's styling but allowing a ReactNode
// title (so the prototype's inline coral-accent words render in the heading).
function Section({num, title, lede, children}: {num: string; title: ReactNode; lede?: ReactNode; children: ReactNode}) {
  return (
    <section className="border-t border-line px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1300px]">
        <header className="mb-10 max-w-[760px]">
          <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{num}</span>
          <h2 className="mt-3 font-display text-[clamp(32px,4.4vw,60px)] font-light italic leading-tight tracking-tight">{title}</h2>
          {lede != null && lede !== '' ? <p className="mt-4 max-w-[60ch] text-muted">{lede}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function meta() {
  return [{title: 'Sponte App · Robine'}];
}

// ── Local device frames (faithful to the prototype's CSS bezels) ───────────
function PhoneFrame({src, alt, className = ''}: {src: string; alt: string; className?: string}) {
  return (
    <div className={`relative aspect-[9/19] rounded-[36px] bg-fg p-[9px] shadow-[0_30px_60px_-32px_rgba(0,0,0,0.3)] ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-bg">
        <img src={asset(src)} alt={alt} loading="lazy" className="block h-full w-full object-cover" />
      </div>
    </div>
  );
}

function TabletFrame({src, alt, className = ''}: {src: string; alt: string; className?: string}) {
  return (
    <div className={`relative aspect-[4/3] rounded-[22px] bg-fg p-3 shadow-[0_30px_60px_-32px_rgba(0,0,0,0.3)] ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-bg">
        <img src={asset(src)} alt={alt} loading="lazy" className="block h-full w-full object-cover" />
      </div>
    </div>
  );
}

// Bare image that already has its own chrome (web browser / widget board).
function BareMock({src, alt, className = ''}: {src: string; alt: string; className?: string}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      className={`block h-auto w-full rounded-xl bg-fg shadow-[0_30px_60px_-32px_rgba(0,0,0,0.3)] ${className}`}
    />
  );
}

export default function Page() {
  const locale = useLocale();
  const hero = pick(C.heroTitle, locale);

  return (
    <div className="page-sponte min-h-dvh bg-bg text-fg">
      <PageTheme
        id="sponte"
        light={{
          bg: '#f1ede4',
          paper: '#fbf8f1',
          fg: '#2a2018',
          muted: 'rgba(42,32,24,.58)',
          faint: 'rgba(42,32,24,.38)',
          line: 'rgba(42,32,24,.16)',
          accent: '#c25f3d',
          'accent-soft': '#f3c870',
        }}
        dark={{
          bg: '#191512',
          paper: '#211c17',
          fg: '#f1ede4',
          muted: 'rgba(241,237,228,.58)',
          faint: 'rgba(241,237,228,.38)',
          line: 'rgba(241,237,228,.16)',
          accent: '#d97a57',
          'accent-soft': '#5a3c2a',
        }}
      />

      <TopNav locale={locale} crumb={{section: pick({de: 'Web Design', en: 'Web Design'}, locale), title: 'Sponte App'}} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 px-5 pb-12 pt-44 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/30 px-3 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {pick(C.statusBanner, locale)}
          </span>
          <h1 className="font-display text-[clamp(48px,8vw,120px)] font-light leading-[0.95] tracking-[-0.04em]">
            {hero.lines.map((line, i) => (
              <Fragment key={i}>
                <span className={line.accent === true ? 'italic text-accent' : undefined}>{line.text}</span>
                {i < hero.lines.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>
        </div>
        <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          {C.heroMeta.map((m, i) => (
            <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
              <dt>{pick(m.label, locale)}</dt>
              <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{pick(m.value, locale)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Hero phone trio (soft glow) ─────────────── */}
      <section aria-hidden className="relative mx-auto max-w-[820px] border-b border-line px-8 pb-12 pt-14">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{background: 'radial-gradient(ellipse at 50% 60%, oklch(from var(--accent) l c h / .14) 0%, transparent 60%)'}}
        />
        <div className="relative z-10 grid grid-cols-1 items-end justify-center gap-7 sm:grid-cols-3 sm:[grid-template-columns:repeat(3,minmax(0,200px))] sm:justify-center">
          <PhoneFrame src={`${C.SPONTE_DIR}/01-home-unlit-ios.png`} alt="Home, lantern off" className="hidden opacity-90 sm:block" />
          <PhoneFrame src={`${C.SPONTE_DIR}/02-home-lit-ios.png`} alt="Home, lantern lit" className="sm:-translate-y-5" />
          <PhoneFrame src={`${C.SPONTE_DIR}/03-friends-android.png`} alt="Friends, Android" className="hidden opacity-90 sm:block" />
        </div>
        <p className="relative z-10 mt-5 text-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          {pick(C.trioCaption, locale)}
        </p>
      </section>

      {/* ── Briefing / Intro ─────────────────────────── */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-5 py-24 md:px-8 lg:grid-cols-[260px_1fr] lg:gap-14">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">{pick(C.introLabel, locale)}</div>
        <div>
          <p className="mb-6 max-w-[40ch] font-display text-[26px] font-light italic leading-[1.45] tracking-[-0.005em]">{pick(C.introLede, locale)}</p>
          <p className="mb-5 max-w-[56ch] leading-[1.7]">{pick(C.introBody, locale)}</p>
          <p className="max-w-[56ch] leading-[1.7] text-muted">{pick(C.introMuted, locale)}</p>
        </div>
      </section>

      {/* ── 01 — Premise ──────────────────────────── */}
      <Section num="01" title={pick({de: 'Prämisse', en: 'Premise'}, locale)}>
        <div className="max-w-[760px] space-y-7">
          {C.premiseLede.map((p, i) => (
            <p key={i} className="font-display text-[19px] font-light italic leading-[1.55] text-muted">{pick(p, locale)}</p>
          ))}
          <PremiseQuote quote={pick(C.premiseQuote, locale)} />
          <PremiseClose c={pick(C.premiseClose, locale)} />
        </div>
      </Section>

      {/* ── 02 — Metaphor ─────────────────────────── */}
      <Section num="02" title={<EmTitle c={pick(C.metaphorTitle, locale)} />} lede={pick(C.metaphorLede, locale)}>
        <div className="mt-2 grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {C.pillars.map((p, i) => (
            <div key={i} className="flex min-h-[220px] flex-col gap-3.5 rounded-sm border border-line bg-bg px-[26px] pb-6 pt-7">
              <div className="font-display text-base italic text-accent">{p.idx}</div>
              <h3 className="font-display text-[clamp(22px,2vw,28px)] font-light italic leading-[1.1] tracking-[-0.015em] text-balance">{pick(p.title, locale)}</h3>
              <p className="max-w-[36ch] text-sm leading-[1.6] text-muted">{pick(p.body, locale)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 03 — Variant study ────────────────────── */}
      <Section num="03" title={<EmTitle c={pick(C.variantTitle, locale)} />} lede={pick(C.variantLede, locale)}>
        <div className="grid max-w-[720px] grid-cols-1 items-end gap-12 sm:grid-cols-[repeat(2,minmax(0,240px))]">
          {C.variants.map((v, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[26px] font-light italic leading-none tracking-[-0.01em]">{pick(v.title, locale)}</h3>
                {v.isDefault
                  ? (
                      <span className="rounded-full bg-accent px-[9px] py-1 font-mono text-2xs uppercase tracking-[0.14em] text-bg">{pick(v.badge, locale)}</span>
                    )
                  : (
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">{pick(v.badge, locale)}</span>
                    )}
              </div>
              <PhoneFrame src={v.src} alt={pick(v.alt, locale)} />
              <p className="max-w-[32ch] text-sm leading-[1.6] text-muted">{pick(v.note, locale)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 04 — Cross-platform ───────────────────── */}
      <Section num="04" title={<EmTitle c={pick(C.crossTitle, locale)} />} lede={pick(C.crossLede, locale)}>
        <div className="grid grid-cols-1 items-end gap-9 lg:[grid-template-columns:0.7fr_1.1fr_1.3fr]">
          {C.crossItems.map((it, i) => (
            <div key={i} className="mx-auto w-full min-w-0 max-w-[240px] lg:mx-0 lg:max-w-none">
              {it.kind === 'phone' && <PhoneFrame src={it.src} alt={pick(it.alt, locale)} className="mx-auto max-w-[220px]" />}
              {it.kind === 'tablet' && <TabletFrame src={it.src} alt={pick(it.alt, locale)} />}
              {it.kind === 'web' && <BareMock src={it.src} alt={pick(it.alt, locale)} />}
              <div className="mt-3.5 text-center font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                <b className="mb-0.5 block font-display text-base font-normal normal-case italic tracking-[-0.01em] text-fg">{pick(it.label, locale)}</b>
                <span>{pick(it.sub, locale)}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 05 — Ambient surfaces ─────────────────── */}
      <Section num="05" title={<EmTitle c={pick(C.ambientTitle, locale)} />}>
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            {C.ambientCopy.map((p, i) => (
              <p key={i} className="mb-[18px] max-w-[52ch] leading-[1.7]">{pick(p, locale)}</p>
            ))}
            <p className="max-w-[52ch] leading-[1.7] text-muted">{pick(C.ambientMuted, locale)}</p>
          </div>
          <div
            className="relative flex justify-center overflow-hidden rounded-lg border border-line px-8 py-12"
            style={{background: 'oklch(from var(--accent) l c h / .07)'}}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{background: 'radial-gradient(ellipse at 50% 30%, oklch(from var(--accent) l c h / .15) 0%, transparent 65%)'}}
            />
            <PhoneFrame src={`${C.SPONTE_DIR}/06-live-activity-ios.png`} alt="Live activity" className="relative z-10 w-full max-w-[260px]" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {C.ambientCards.map((card, i) => (
            <div key={i} className="flex flex-col items-center gap-[18px] rounded-sm border border-line bg-bg p-6 text-center">
              <h3 className="font-display text-2xl font-light italic tracking-[-0.01em]">{pick(card.title, locale)}</h3>
              {card.kind === 'phone' && card.src != null && card.src !== '' && card.alt != null && (
                <PhoneFrame src={card.src} alt={pick(card.alt, locale)} className="w-full max-w-[220px]" />
              )}
              {card.kind === 'tablet' && card.src != null && card.src !== '' && card.alt != null && (
                <BareMock src={card.src} alt={pick(card.alt, locale)} className="max-w-[300px]" />
              )}
              {card.kind === 'watch' && <WatchMock locale={locale} />}
              <p className="max-w-[30ch] text-sm leading-[1.55] text-muted">{pick(card.body, locale)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 06 — Visual system ────────────────────── */}
      <Section num="06" title={<EmTitle c={pick(C.visualTitle, locale)} />} lede={pick(C.visualLede, locale)}>
        <div className="mb-9 grid grid-cols-2 gap-3.5 sm:grid-cols-5">
          {C.swatches.map((sw, i) => (
            <div
              key={i}
              className="flex aspect-[4/5] flex-col justify-end gap-1 rounded-sm border border-line p-4 font-mono text-[11px] tracking-[0.04em]"
              style={{background: sw.hex}}
            >
              <span className={`font-display text-base font-normal italic tracking-[-0.005em] ${sw.dark === true ? 'text-[#f1ede4]' : 'text-[#2a2018]'}`}>
                {pick(sw.name, locale)}
              </span>
              <span className={`font-bold ${sw.dark === true ? 'text-[#f1ede4]' : 'text-[#2a2018]'}`}>{sw.hex}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {C.typeCards.map((tc, i) => {
            const s = pick(tc.sample, locale);
            return (
              <div key={i} className="flex flex-col gap-3 rounded-sm border border-line bg-bg px-6 pb-[26px] pt-6">
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(tc.label, locale)}</span>
                <span className="font-mono text-xs text-fg">{tc.name}</span>
                {tc.kind === 'serif' && (
                  <div className="mt-2 font-display text-[clamp(38px,4vw,56px)] font-normal leading-none tracking-[-0.02em]">
                    {s.pre}
                    {s.em != null && s.em !== '' ? <span className="italic text-accent">{s.em}</span> : null}
                  </div>
                )}
                {tc.kind === 'sans' && (
                  <div className="mt-2 font-sans text-[clamp(22px,2.4vw,32px)] font-semibold leading-none tracking-[-0.015em]">{s.pre}</div>
                )}
                {tc.kind === 'mono' && (
                  <div className="mt-2 font-mono text-[clamp(18px,1.8vw,24px)] leading-none tracking-[0.04em]">{s.pre}</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 07 — What's next ──────────────────────── */}
      <Section num="07" title={<EmTitle c={pick(C.nextTitle, locale)} />} lede={pick(C.nextLede, locale)}>
        <ol className="max-w-[900px]">
          {C.nextItems.map((it, i) => (
            <li
              key={i}
              className="grid grid-cols-[40px_1fr] items-baseline gap-6 border-t border-line py-[22px] last:border-b"
            >
              <span className="font-display text-[22px] italic tracking-[-0.01em] text-accent">{it.num}</span>
              <div>
                <strong className="mb-1.5 block font-display text-[22px] font-normal italic tracking-[-0.01em] text-fg">{pick(it.title, locale)}</strong>
                <p className="max-w-[64ch] text-[14.5px] leading-[1.6] text-muted">{pick(it.body, locale)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <ProjFoot locale={locale} next={{label: pick({de: 'Portfolio Website', en: 'Portfolio website'}, locale), slug: 'web/portfolio-website'}} />
    </div>
  );
}

// ── Small inline helpers ───────────────────────────────────────────────────
function EmTitle({c}: {c: {pre: string; em: string; post: string}}) {
  return (
    <>
      {c.pre}
      <span className="italic text-accent">{c.em}</span>
      {c.post}
    </>
  );
}

function PremiseQuote({quote}: {quote: string}) {
  return (
    <blockquote
      className="ml-0 max-w-[56ch] rounded-r border-l-2 border-accent px-[26px] py-6 font-display text-[clamp(22px,2.2vw,30px)] font-light italic leading-[1.4] text-balance sm:ml-0"
      style={{background: 'oklch(from var(--accent) l c h / .06)'}}
    >
      {quote}
    </blockquote>
  );
}

function PremiseClose({c}: {c: {pre: string; em: string; post: string}}) {
  return (
    <p className="font-display text-[19px] font-light italic leading-[1.55] text-muted">
      {c.pre}
      <b className="font-display font-normal italic text-fg">{c.em}</b>
      {c.post}
    </p>
  );
}

// Apple Watch mock, ported from the prototype's inline SVG.
function WatchMock({locale}: {locale: 'de' | 'en'}) {
  const lit = locale === 'de' ? 'An bis ' : 'Lit until ';
  const litTime = locale === 'de' ? '18:30' : '4:30';
  const nearby = locale === 'de' ? '3 Freunde in der Nähe' : '3 friends lit nearby';
  return (
    <svg width="160" height="190" viewBox="0 0 160 190" className="mx-auto block" role="img" aria-label={`${lit}${litTime} — ${nearby}`}>
      <defs>
        <radialGradient id="sponte-watch-glow" cx="50%" cy="54%" r="45%">
          <stop offset="0%" stopColor="#F3C870" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F3C870" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="10" y="10" width="140" height="170" rx="32" fill="#0a0604" />
      <rect x="152" y="58" width="6" height="24" rx="3" fill="#2a2a2a" />
      <rect x="153" y="96" width="5" height="18" rx="2" fill="#2a2a2a" />
      <rect x="20" y="20" width="120" height="150" rx="22" fill="#0a0604" />
      <rect x="20" y="20" width="120" height="150" rx="22" fill="url(#sponte-watch-glow)" />
      <text x="80" y="42" textAnchor="middle" fill="#fff" opacity="0.7" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1">
        2:14
      </text>
      <g transform="translate(64 52)">
        <line x1="16" y1="0" x2="16" y2="6" stroke="#fff" strokeWidth="1" opacity="0.7" />
        <rect x="10" y="6" width="12" height="3" rx="1" fill="#fff" opacity="0.85" />
        <rect x="6" y="9" width="20" height="30" rx="3" fill="#F3C870" />
        <rect x="10" y="14" width="12" height="22" rx="1.5" fill="#F4D38C" />
        <rect x="4" y="39" width="24" height="5" rx="1.5" fill="#fff" opacity="0.85" />
        <rect x="14" y="44" width="4" height="5" fill="#fff" opacity="0.85" />
      </g>
      <text x="80" y="122" textAnchor="middle" fill="#fff" fontFamily="Fraunces, serif" fontSize="12" fontWeight="500">
        <tspan>{lit}</tspan>
        <tspan fontStyle="italic" fill="#F3C870">{litTime}</tspan>
      </text>
      <text x="80" y="138" textAnchor="middle" fill="#fff" opacity="0.6" fontFamily="Inter, sans-serif" fontSize="9">
        {nearby}
      </text>
      <g transform="translate(60 148)">
        <circle cx="6" cy="6" r="6" fill="#C25F3D" stroke="#0a0604" strokeWidth="1.2" />
        <circle cx="16" cy="6" r="6" fill="#6B8FA8" stroke="#0a0604" strokeWidth="1.2" />
        <circle cx="26" cy="6" r="6" fill="#8FA66B" stroke="#0a0604" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
