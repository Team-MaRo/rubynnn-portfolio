import type {HochzeitCard} from '~/content/projects/hochzeit';
import type {Lang} from '~/i18n-config';
import {PageTheme} from '~/components/project/PageTheme';
import {FeatureCard, ProjHero, ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {hochzeit as c, hochzeitPalette} from '~/content/projects/hochzeit';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Hochzeit · Robine'}];
}

// A clickable media card: framed image opening the full asset in a new tab,
// with a two-part mono caption (title + meta). Mirrors the prototype's .m-card.
function MediaCard({card, locale}: {card: HochzeitCard; locale: Lang}) {
  const href = asset(card.src);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="group block overflow-hidden rounded-sm border border-line bg-paper transition-colors hover:border-accent"
    >
      <img src={href} alt={pick(card.alt, locale)} loading="lazy" className="w-full" />
      <div className="flex items-baseline justify-between gap-4 border-t border-line px-5 py-4 font-mono text-2xs uppercase tracking-[0.12em]">
        <b className="font-normal text-fg">{pick(card.title, locale)}</b>
        <span className="text-faint">{pick(card.meta, locale)}</span>
      </div>
    </a>
  );
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="page-hochzeit min-h-dvh bg-bg text-fg">
      <PageTheme id="hochzeit" light={hochzeitPalette.light} dark={hochzeitPalette.dark} />
      <TopNav locale={locale} crumb={{section: pick(c.crumbSection, locale), title: c.crumbTitle}} />

      {/* Hero */}
      <ProjHero
        title={(
          <>
            {pick(c.heroTitle, locale)}
            <br />
            <span className="text-accent">{c.heroSub}</span>
          </>
        )}
        meta={c.heroMeta.map((m) => ({label: pick(m.label, locale), value: m.value}))}
      />

      {/* Briefing */}
      <ProjSection num="" title={undefined}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">{pick(c.introLabel, locale)}</div>
          <div>
            <p className="mb-6 max-w-[34ch] font-display text-[clamp(22px,3vw,30px)] font-light italic leading-[1.4]">{pick(c.introLede, locale)}</p>
            <p className="mb-5 max-w-[58ch] leading-[1.65]">{pick(c.introBody, locale)}</p>
            <p className="max-w-[58ch] leading-[1.65] text-muted">{pick(c.introBodyMuted, locale)}</p>
          </div>
        </div>
      </ProjSection>

      {/* 01 Figma */}
      <ProjSection num={c.figmaNum} title={pick(c.figmaTitle, locale)} lede={pick(c.figmaLede, locale)}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.figmaCards.map((card) => (
            <MediaCard key={card.src} card={card} locale={locale} />
          ))}
        </div>
      </ProjSection>

      {/* 02 Website */}
      <ProjSection num={c.webNum} title={pick(c.webTitle, locale)} lede={pick(c.webLede, locale)}>
        <a
          href={asset(c.webFeature.src)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="view"
          className="block"
        >
          <FeatureCard
            src={asset(c.webFeature.src)}
            alt={pick(c.webFeature.alt, locale)}
            tag={pick(c.webFeature.tag, locale)}
            caption={`${pick(c.webFeature.caption, locale)} · ${c.webFeature.sub}`}
          />
        </a>
        <div className="mt-6">
          <MediaCard
            card={{src: c.webScreenshot.src, alt: c.webScreenshot.alt, title: c.webScreenshot.title, meta: {de: c.webScreenshot.meta, en: c.webScreenshot.meta}}}
            locale={locale}
          />
        </div>
      </ProjSection>

      {/* 03 Print */}
      <ProjSection num={c.printNum} title={pick(c.printTitle, locale)} lede={pick(c.printLede, locale)}>
        <div className="grid gap-16">
          {c.printPieces.map((piece) => (
            <div key={piece.num}>
              <h3 className="flex items-baseline gap-3">
                <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{piece.num}</span>
                <span className="font-display text-[clamp(24px,3vw,38px)] font-light italic tracking-tight">{pick(piece.heading, locale)}</span>
              </h3>
              <p className="mt-3 max-w-[60ch] text-muted">{pick(piece.note, locale)}</p>
              <div className="mt-6 max-w-[680px]">
                <MediaCard card={piece.card} locale={locale} />
              </div>
            </div>
          ))}
        </div>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'Pilates Flyer', slug: 'graphic/pilates-flyer'}} />
    </div>
  );
}
