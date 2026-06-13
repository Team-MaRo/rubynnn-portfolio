import {useState} from 'react';
import {DeviceFrame} from '~/components/project/Media';
import {ProjHero, ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {compareCols, pdfGroups, protoLinks, roadmap} from '~/content/projects/portfolio-website';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Portfolio Website · Robine'}];
}

type Iter = 'wordpress' | 'prototype';

export default function Page() {
  const locale = useLocale();
  const [iter, setIter] = useState<Iter>('wordpress');

  const tabs: {id: Iter; num: string; tech: string; pill: string; title: string; blurb: string}[] = [
    {
      id: 'wordpress',
      num: 'Iteration 01',
      tech: 'WordPress',
      pill: pick({de: 'Archiv', en: 'Archive'}, locale),
      title: 'robines.space',
      blurb: pick({de: 'Die Vorgänger-Seite — ein Jahr lang im Einsatz, dokumentiert auf dieser Seite.', en: 'The predecessor site — a year in service, documented on this page.'}, locale),
    },
    {
      id: 'prototype',
      num: 'Iteration 02',
      tech: 'Claude Design',
      pill: pick({de: 'Prototyp', en: 'Prototype'}, locale),
      title: pick({de: 'Diese Seite', en: 'This page'}, locale),
      blurb: pick({de: 'Custom-Code-Prototyp mit eigener Typografie, Motion und Project-Pages.', en: 'Custom-code prototype with its own typography, motion and project pages.'}, locale),
    },
  ];

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Web Design', en: 'Web Design'}, locale), title: 'Portfolio Website'}} />

      {/* Hero */}
      <ProjHero
        kicker={pick({de: 'Web Design · 2024 – 2026', en: 'Web Design · 2024 – 2026'}, locale)}
        title={(
          <>
            Portfolio
            <br />
            <span className="text-accent">Website.</span>
          </>
        )}
        lede={pick(
          {
            de: 'Zwei Iterationen meines eigenen Portfolios — beide aus dem letzten Jahr. Eine lief auf WordPress, die andere ist genau das, was du gerade siehst.',
            en: 'Two iterations of my own portfolio — both from the past year. One ran on WordPress, the other is exactly what you are looking at.',
          },
          locale,
        )}
        meta={[
          {label: pick({de: 'Bereich', en: 'Field'}, locale), value: 'Web Design'},
          {label: pick({de: 'Jahre', en: 'Years'}, locale), value: '2024 – 2026'},
          {label: pick({de: 'Status', en: 'Status'}, locale), value: pick({de: 'Archiv + Prototyp', en: 'Archive + prototype'}, locale)},
        ]}
      />

      {/* Briefing */}
      <section className="border-t border-line px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">{pick({de: 'Briefing', en: 'Brief'}, locale)}</div>
          <div className="max-w-[62ch]">
            <p className="mb-6 font-display text-[clamp(20px,2.4vw,28px)] font-light italic leading-[1.45] tracking-[-0.005em]">
              {pick(
                {
                  de: 'Zwei Iterationen meines eigenen Portfolios — beide aus dem letzten Jahr. Die erste lief unter robines.space, gebaut mit WordPress. Die zweite ist das, was du gerade siehst: ein Custom-Code-Portfolio, gebaut mit Claude Design — und genau diese Seite wird in Kürze unter derselben Domain online gehen.',
                  en: 'Two iterations of my own portfolio — both from the past year. The first ran at robines.space, built with WordPress. The second is what you\'re looking at: a custom-code portfolio built with Claude Design — and this very page will be going live on the same domain shortly.',
                },
                locale,
              )}
            </p>
            <p className="mb-5 leading-[1.7] text-fg">
              {pick(
                {
                  de: 'Die WordPress-Version hat ihren Job gemacht: ein Jahr lang live, gepflegt, durchsuchbar — mein offizielles Schaufenster. Aber sie blieb im Rahmen dessen, was ein Baukasten erlaubt. Layouts, Interaktionen, Motion — überall, wo es gestalterisch eng wurde, wurde es im CMS zäh. Sobald der Prototyp live geht, wird sie abgeschaltet und ist nicht mehr besuchbar.',
                  en: 'The WordPress version did its job: a year of being live, maintained, searchable — my official showcase. But it stayed inside what a builder allows. Layouts, interactions, motion — wherever it got tight design-wise, it got slow in the CMS. As soon as the prototype is live, it will be taken offline and no longer visitable.',
                },
                locale,
              )}
            </p>
            <p className="leading-[1.7] text-muted">
              {pick(
                {
                  de: 'Der Prototyp ist der Gegenversuch: keine Theme-Grenzen, keine Plugin-Patches — eigene Typografie, individuelle Project-Pages, Mikrointeraktionen, kuratierte Motion. Diese Seite ist die letzte Gelegenheit, beide Versionen im Vergleich zu sehen — die alte als dokumentiertes Archiv, die neue im Betrieb.',
                  en: 'The prototype is the counter-attempt: no theme boundaries, no plugin patches — own typography, individual project pages, micro-interactions, curated motion. This page is the last chance to see both versions side by side — the old one documented as archive, the new one in production.',
                },
                locale,
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 00 — Iteration tabs */}
      <ProjSection
        num="00"
        title={pick({de: 'Zwei Versionen', en: 'Two versions'}, locale)}
        lede={pick(
          {de: 'Wähle eine Iteration — das archivierte WordPress-Portfolio oder den aktuellen Claude-Design-Prototyp.', en: 'Pick an iteration — the archived WordPress portfolio or the current Claude Design prototype.'},
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2" role="tablist" aria-label={pick({de: 'Iteration wählen', en: 'Select iteration'}, locale)}>
          {tabs.map((tab) => {
            const active = iter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setIter(tab.id)}
                className={`flex flex-col gap-2 rounded-sm border p-5 text-left transition-colors ${
                  active ? 'border-accent bg-accent-soft/40' : 'border-line bg-bg hover:border-fg'
                }`}
              >
                <span className="flex items-center gap-2.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                  <span className="text-fg">{tab.num}</span>
                  <span>{tab.tech}</span>
                  <span
                    className={`ml-auto inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[9.5px] tracking-[0.14em] ${
                      tab.id === 'prototype' ? 'bg-fg/10 text-fg' : 'bg-accent-soft text-accent'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${tab.id === 'prototype' ? 'bg-fg' : 'bg-accent'}`} />
                    {tab.pill}
                  </span>
                </span>
                <span className="mt-1 font-display text-[clamp(26px,3vw,36px)] font-light italic leading-none tracking-[-0.015em]">{tab.title}</span>
                <span className="max-w-[42ch] text-[13px] leading-[1.6] text-muted">{tab.blurb}</span>
              </button>
            );
          })}
        </div>

        {/* Active iteration panel */}
        {iter === 'wordpress' ? <WordPressPanel locale={locale} /> : <PrototypePanel locale={locale} />}
      </ProjSection>

      {/* 03 — Side-by-side comparison */}
      <ProjSection
        id="vergleich"
        num="03"
        title={pick({de: 'Direktvergleich', en: 'Side-by-side'}, locale)}
        lede={pick(
          {de: 'Beide Iterationen nebeneinander — was die WordPress-Version gut macht, wo der Prototyp ansetzt.', en: 'Both iterations next to each other — what the WordPress version got right, where the prototype steps in.'},
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {compareCols.map((col) => (
            <div
              key={col.title}
              className={`flex flex-col gap-4 rounded-sm border p-6 ${col.proto === true ? 'border-accent/40 bg-accent-soft/20' : 'border-line bg-bg'}`}
            >
              <div className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(col.kicker, locale)}</div>
              <h4 className="font-display text-[clamp(22px,2.4vw,28px)] font-light italic leading-none tracking-[-0.015em]">{col.title}</h4>
              <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-2 text-[13.5px] leading-[1.6]">
                {col.specs.map((s, i) => (
                  <div key={i} className="contents">
                    <dt className="pt-0.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(s.label, locale)}</dt>
                    <dd className="m-0 text-fg">{pick(s.value, locale)}</dd>
                  </div>
                ))}
              </dl>
              <ul className="grid gap-2">
                {col.pros.map((p, i) => (
                  <li key={`p${i}`} className="flex items-start gap-2.5 text-[13.5px] leading-[1.55]">
                    <span className="font-mono text-accent" aria-hidden>
                      +
                    </span>
                    {pick(p, locale)}
                  </li>
                ))}
                {col.cons.map((c, i) => (
                  <li key={`c${i}`} className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-muted">
                    <span className="font-mono text-muted" aria-hidden>
                      −
                    </span>
                    {pick(c, locale)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ProjSection>

      {/* 04 — What's next */}
      <ProjSection
        id="next"
        num="04"
        title={pick({de: 'Wie es weitergeht', en: 'What\'s next'}, locale)}
        lede={pick(
          {
            de: 'Der Prototyp soll mittelfristig die WordPress-Seite ablösen — Inhalte werden Stück für Stück übertragen, das System gefestigt. Die nächsten Schritte:',
            en: 'The prototype will replace the WordPress site in the medium term — content moves over piece by piece, the system gets locked in. Next steps:',
          },
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {roadmap.map((r) => (
            <div key={pick(r.title, locale)} className="flex flex-col gap-1 rounded-sm border border-line bg-bg p-5">
              <div className="flex items-center justify-between font-mono text-2xs uppercase tracking-[0.14em] text-muted">
                <span>{pick(r.step, locale)}</span>
                <span>{pick(r.cat, locale)}</span>
              </div>
              <h4 className="mt-1 font-display text-[clamp(22px,2.4vw,28px)] font-light italic leading-none tracking-[-0.015em]">{pick(r.title, locale)}</h4>
              <p className="mt-1.5 max-w-[44ch] text-[13px] leading-[1.55] text-muted">{pick(r.blurb, locale)}</p>
            </div>
          ))}
        </div>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'Sponte App', slug: 'web/sponte-app'}} />
    </div>
  );
}

function WordPressPanel({locale}: {locale: ReturnType<typeof useLocale>}) {
  return (
    <div className="mt-12">
      <header className="mb-8 max-w-[760px]">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">01</span>
        <h3 className="mt-3 font-display text-[clamp(28px,3.4vw,44px)] font-light italic leading-tight tracking-tight">
          {pick({de: 'WordPress · die Vorgänger-Seite', en: 'WordPress · the predecessor'}, locale)}
        </h3>
        <p className="mt-4 max-w-[62ch] leading-[1.7] text-muted">
          {pick(
            {
              de: 'Erste eigene Portfolio-Seite — vor rund einem Jahr aufgeschlagen, um schnell präsent zu sein. robines.space lebte von dem, was WordPress gut konnte: einmal aufgesetzt, dauerhaft pflegbar — neue Projekte gingen in zehn Minuten online. Sobald der Prototyp live geht, übernimmt er die Domain; die WordPress-Version wird abgeschaltet und ist nicht mehr besuchbar.',
              en: 'My first own portfolio site — set up about a year ago to be present quickly. robines.space ran on what WordPress did well: set up once, maintained for years — new projects went live in ten minutes. As soon as the prototype is live, it takes over the domain; the WordPress version gets shut down and is no longer visitable.',
            },
            locale,
          )}
        </p>
      </header>

      {/* Browser-chrome home shot */}
      <figure className="mb-12">
        <DeviceFrame
          kind="web"
          src={asset('uploads/01_Home.jpg')}
          alt={pick({de: 'Screenshot der WordPress-Home-Seite von robines.space', en: 'Screenshot of the WordPress home page of robines.space'}, locale)}
        />
        <figcaption className="mt-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">https://robines.space · Home ({pick({de: 'Archiv', en: 'Archive'}, locale)})</figcaption>
      </figure>

      <div className="mb-8 max-w-[760px]">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">01.1</span>
        <h4 className="mt-2 font-display text-[clamp(20px,2.4vw,30px)] font-light italic leading-tight tracking-tight">
          {pick({de: 'Alle Seiten als Vorschau', en: 'All pages as preview'}, locale)}
        </h4>
        <p className="mt-3 max-w-[60ch] leading-[1.65] text-muted">
          {pick(
            {de: 'Dreizehn Seiten der archivierten WordPress-Version, jede als Screenshot festgehalten. Klick öffnet die volle Seitenansicht.', en: 'Thirteen pages of the archived WordPress version, each captured as a screenshot. Click opens the full-page view.'},
            locale,
          )}
        </p>
      </div>

      <div className="grid gap-9">
        {pdfGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 flex items-baseline justify-between gap-6 border-b border-line pb-3">
              <h5 className="font-display text-[clamp(20px,2vw,26px)] font-light italic leading-none tracking-tight">{group.title}</h5>
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(group.meta, locale)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
              {group.cards.map((card) => (
                <a
                  key={card.num}
                  href={asset(card.full)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-sm border border-line bg-bg transition-colors hover:border-fg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden border-b border-line bg-paper">
                    <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-bg/80 px-2 py-1 font-mono text-2xs tracking-[0.14em] text-fg backdrop-blur">{card.num}</span>
                    <img
                      src={asset(card.thumb)}
                      alt={card.title}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                        card.fit === 'contain' ? 'bg-paper object-contain p-3.5 object-top' : 'object-cover object-top'
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-3">
                    <b className="font-display text-[15px] font-normal italic leading-tight tracking-tight text-fg">{card.title}</b>
                    <span className="font-mono text-2xs tracking-[0.14em] text-accent">{pick({de: 'Vorschau ↗', en: 'Preview ↗'}, locale)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrototypePanel({locale}: {locale: ReturnType<typeof useLocale>}) {
  return (
    <div className="mt-12">
      <header className="mb-8 max-w-[760px]">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">02</span>
        <h3 className="mt-3 font-display text-[clamp(28px,3.4vw,44px)] font-light italic leading-tight tracking-tight">
          {pick({de: 'Claude Design · der Prototyp', en: 'Claude Design · the prototype'}, locale)}
        </h3>
        <p className="mt-4 max-w-[62ch] leading-[1.7] text-muted">
          {pick(
            {
              de: 'Diese Seite ist Teil davon. Ein Custom-Code-Portfolio, gebaut mit Claude Design — eigene Typografie, individuelle Project-Pages, Mikrointeraktionen, Mehrsprachigkeit. Keine Theme-Wrapper, keine Plugin-Patches.',
              en: 'This page is part of it. A custom-code portfolio built with Claude Design — own typography, individual project pages, micro-interactions, multilingual. No theme wrappers, no plugin patches.',
            },
            locale,
          )}
        </p>
        <p className="mt-4 max-w-[62ch] leading-[1.7] text-fg">
          <b className="font-display italic">{pick({de: 'Status:', en: 'Status:'}, locale)}</b>{' '}
          {pick(
            {de: 'in Entwicklung. Die Project-Pages werden Stück für Stück ergänzt; Look-and-Feel und Komponentenvokabular sind weitgehend gesetzt.', en: 'in development. Project pages get added one by one; look-and-feel and the component vocabulary are mostly locked.'},
            locale,
          )}
        </p>
      </header>

      <div className="mb-12">
        <DeviceFrame
          kind="web"
          src={asset('assets/portfolio-thumbs/13_projekte.jpg')}
          alt={pick({de: 'Vorschau des Claude-Design-Prototyps', en: 'Preview of the Claude Design prototype'}, locale)}
        />
        <p className="mt-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">{pick({de: 'Prototyp · diese Seite', en: 'Prototype · this very site'}, locale)}</p>
      </div>

      <div className="mb-8 max-w-[760px]">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">02.1</span>
        <h4 className="mt-2 font-display text-[clamp(20px,2.4vw,30px)] font-light italic leading-tight tracking-tight">
          {pick({de: 'Project-Pages', en: 'Project pages'}, locale)}
        </h4>
        <p className="mt-3 max-w-[60ch] leading-[1.65] text-muted">
          {pick(
            {de: 'Jedes Projekt bekommt eine eigene, gestaltete Seite — keine Template-Sammelsurium. Eine Auswahl der bereits umgesetzten Detailseiten:', en: 'Each project gets its own designed page — not a template grab-bag. A selection of the detail pages already in place:'},
            locale,
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {protoLinks.map((p) => (
          <div key={p.num} className="flex flex-col gap-1 rounded-sm border border-line bg-bg p-5">
            <div className="flex items-center justify-between font-mono text-2xs uppercase tracking-[0.14em] text-muted">
              <span>{p.num}</span>
              <span>{pick(p.cat, locale)}</span>
            </div>
            <h5 className="mt-1 font-display text-[clamp(22px,2.4vw,28px)] font-light italic leading-none tracking-[-0.015em]">{p.title}</h5>
            <p className="mt-1.5 max-w-[36ch] text-[13px] leading-[1.55] text-muted">{pick(p.blurb, locale)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
