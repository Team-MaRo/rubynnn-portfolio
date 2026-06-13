import {PageTheme} from '~/components/project/PageTheme';
import {ProjHero, ProjSection, SpecGrid} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {heroMeta, motifs, pages, specs} from '~/content/projects/liederbuch';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Liederbuch · Robine'}];
}

// A run of "blind text": realistic line shapes that stay completely unreadable,
// standing in for the original songs/poems (never public — see disclaimer).
function Blind({lines, center = false}: {lines: number[]; center?: boolean}) {
  return (
    <div className={`relative z-[1] flex flex-col gap-1.5 ${center ? 'items-center' : ''}`}>
      {lines.map((w, i) =>
        w === 0
          ? (
              <div key={i} className="h-3.5" aria-hidden />
            )
          : (
              <div
                key={i}
                aria-hidden
                className="h-1.5 rounded-[2px] bg-fg/55"
                style={{width: `${w}%`, filter: 'blur(.4px)'}}
              />
            ),
      )}
    </div>
  );
}

// A printed spread: two pages, a centre spine with spiral perforations, and a
// soft watercolour wash. Decorative only.
function Spread({
  wash,
  left,
  right,
  pageLeft,
  pageRight,
}: {
  wash: string;
  left: number[];
  right: number[];
  pageLeft: string;
  pageRight: string;
}) {
  return (
    <div
      className="relative grid aspect-[4/3] grid-cols-2 overflow-hidden rounded-sm border border-line bg-paper"
      style={{boxShadow: '0 20px 60px -30px rgba(40,30,20,.35)'}}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-70" style={{background: wash}} />
      {/* left page */}
      <div className="relative flex flex-col justify-center overflow-hidden border-r border-black/5 px-[9%] py-[8%]">
        <Blind lines={left} />
        <span className="absolute bottom-[6%] left-[8%] font-display text-[11px] italic text-fg/45">{pageLeft}</span>
      </div>
      {/* right page */}
      <div className="relative flex flex-col justify-center overflow-hidden px-[9%] py-[8%]">
        <Blind lines={right} center />
        <span className="absolute bottom-[6%] right-[8%] font-display text-[11px] italic text-fg/45">{pageRight}</span>
      </div>
      {/* spine + spiral perforation */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[30px] -translate-x-1/2"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,.10) 30%, rgba(0,0,0,.18) 50%, rgba(0,0,0,.10) 70%, transparent 100%)',
        }}
      >
        <span
          className="absolute left-1/2 top-[6%] bottom-[6%] w-[18px] -translate-x-1/2 opacity-55"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,.35) 0 2.5px, transparent 3px)',
            backgroundSize: '18px 22px',
            backgroundRepeat: 'repeat-y',
          }}
        />
      </div>
    </div>
  );
}

const WASH_BLUE
  = 'radial-gradient(ellipse at 25% 60%, #cfe1ee 0%, transparent 45%), radial-gradient(ellipse at 78% 35%, #cfe1ee 0%, transparent 38%)';
const WASH_LAVENDER
  = 'radial-gradient(ellipse at 30% 40%, #e6dceb 0%, transparent 42%), radial-gradient(ellipse at 70% 70%, #e6dceb 0%, transparent 45%)';

export default function Page() {
  const locale = useLocale();

  return (
    <div className="page-liederbuch min-h-dvh bg-bg text-fg">
      <PageTheme
        id="liederbuch"
        light={{
          bg: '#f4f1e8',
          paper: '#fbfaf6',
          fg: '#2a2a32',
          muted: 'rgba(42,42,50,.58)',
          faint: 'rgba(42,42,50,.38)',
          line: 'rgba(42,42,50,.16)',
          accent: '#6f8e5b',
          'accent-soft': '#d8e7d1',
        }}
        dark={{
          bg: '#16160f',
          paper: '#1e1e16',
          fg: '#efece0',
          muted: 'rgba(239,236,224,.58)',
          faint: 'rgba(239,236,224,.38)',
          line: 'rgba(239,236,224,.16)',
          accent: '#9cb985',
          'accent-soft': '#3a4a30',
        }}
      />

      <TopNav locale={locale} crumb={{section: pick({de: 'Graphic Design', en: 'Graphic Design'}, locale), title: 'Liederbuch'}} />

      <ProjHero
        kicker={pick({de: 'Buchgestaltung · 2022', en: 'Book design · 2022'}, locale)}
        title={(
          <>
            {pick({de: 'Lieder', en: 'Song'}, locale)}
            <br />
            <span className="text-accent">{pick({de: 'buch.', en: 'book.'}, locale)}</span>
          </>
        )}
        lede={pick(
          {
            de: 'Aquarell, feine Bleistiftzeichnungen und eine ruhige, atmende Typografie — gebunden in einer Drahtspirale, die das Aufschlagen flach erlaubt.',
            en: 'Watercolour, fine pencil drawings and a calm, breathing typography — bound in a wire spiral that lets it open flat.',
          },
          locale,
        )}
        meta={heroMeta.map((m) => ({label: pick(m.label, locale), value: m.value}))}
      />

      {/* Briefing / Intro */}
      <ProjSection num={pick({de: 'Briefing', en: 'Brief'}, locale)} title={pick({de: 'Ein handgemachtes Liederbuch', en: 'A handmade songbook'}, locale)}>
        <div className="grid max-w-[1100px] gap-6 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <p className="font-display text-[22px] font-light italic leading-[1.45] text-fg">
            {pick(
              {
                de: 'Während meinem letzten Jahr in der Lehre durfte ich einen internen Privatauftrag übernehmen — die Gestaltung verschiedener Illustrationen und des Layouts eines Lieder- und Vers-Buchs. Dabei war ich in der Gestaltung komplett frei.',
                en: 'In my last year of apprenticeship I took on an internal private commission — designing the illustrations and layout for a book of songs and poems. I had complete creative freedom.',
              },
              locale,
            )}
          </p>
          <div className="space-y-5">
            <p className="leading-[1.7] text-fg">
              {pick(
                {
                  de: 'Das Buch entstand als persönliches Geschenk und sollte handgemacht wirken — ',
                  en: 'The book was made as a personal gift and was meant to feel handmade — ',
                },
                locale,
              )}
              <b className="font-display font-normal italic">
                {pick(
                  {
                    de: 'Aquarellfarben, feine Bleistiftzeichnungen und eine ruhige, atmende Typografie',
                    en: 'watercolours, fine pencil drawings and a calm, breathing typography',
                  },
                  locale,
                )}
              </b>
              {pick(
                {
                  de: ', gebunden in einer Drahtspirale, die das Aufschlagen flach erlaubt.',
                  en: ', bound in a wire spiral that lets it open flat.',
                },
                locale,
              )}
            </p>
            <p className="leading-[1.7] text-muted">
              {pick(
                {
                  de: 'Da dieses Buch nie kommerziell oder öffentlich erhältlich war, wurden die untenstehenden Texte durch Blindtext ersetzt. Sichtbar sind ausschliesslich Layout, Illustration und Gestaltungssprache.',
                  en: 'Because this book was never commercially or publicly available, the texts below have been replaced with blind text. Only the layout, illustration and design language remain visible.',
                },
                locale,
              )}
            </p>
          </div>
        </div>
      </ProjSection>

      {/* 01 — The finished book */}
      <ProjSection
        num="01"
        title={pick({de: 'Das fertige Buch', en: 'The finished book'}, locale)}
        lede={pick(
          {
            de: 'Spiralbindung, weiches Cremepapier und ein zurückhaltendes Format — ausgelegt zum flachen Aufschlagen beim Singen und Lesen.',
            en: 'Spiral binding, soft cream paper and a restrained format — made to open flat for singing and reading.',
          },
          locale,
        )}
      >
        <figure className="relative mb-10 max-w-[820px] overflow-hidden rounded-sm border border-line bg-paper" style={{boxShadow: '0 18px 50px -32px rgba(58,31,13,.28)'}}>
          <span className="absolute left-4 top-4 z-10 rounded-full bg-fg px-2.5 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-bg">
            {pick({de: 'Druckmuster', en: 'Print sample'}, locale)}
          </span>
          <img
            src={asset('assets/liederbuch/Booklet.jpg')}
            alt={pick(
              {de: 'Liederbuch — aufgeschlagene Doppelseite mit Aquarell-Illustrationen', en: 'Songbook — open spread with watercolour illustrations'},
              locale,
            )}
            loading="lazy"
            className="block w-full"
          />
          <figcaption className="flex items-baseline justify-between gap-4 border-t border-line bg-bg px-5 py-4 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
            <b className="font-display text-lg font-normal normal-case italic tracking-tight text-fg">
              {pick({de: 'Doppelseite — Aquarell & Bleistift', en: 'Spread — watercolour & pencil'}, locale)}
            </b>
            <span>{pick({de: 'Spiralbindung · 2022', en: 'Spiral binding · 2022'}, locale)}</span>
          </figcaption>
        </figure>

        <div className="max-w-[1100px]">
          <SpecGrid items={specs.map((s) => ({label: pick(s.label, locale), value: pick(s.value, locale)}))} />
        </div>
      </ProjSection>

      {/* 02 — Inside pages */}
      <ProjSection
        num="02"
        title={pick({de: 'Innenseiten', en: 'Inside pages'}, locale)}
        lede={pick(
          {
            de: 'Eine kleine Auswahl an Innenseiten — die Originaltexte sind durch deutschen Blindtext ersetzt, da das Buch nie öffentlich war. Sichtbar bleiben Layout-Rhythmus, Aquarell-Washes und die Bleistift-Illustrationen, die sich durch das Buch ziehen.',
            en: 'A small selection of inside pages — the original texts are replaced with blind text, as the book was never public. What remains visible is the rhythm of the layout, the watercolour washes and the pencil illustrations running through the book.',
          },
          locale,
        )}
      >
        <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((p) => (
            <li key={p.src}>
              <a
                href={asset(p.src)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="group flex flex-col gap-2.5 text-inherit no-underline"
              >
                <div
                  className="relative overflow-hidden border border-line bg-paper transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  style={{aspectRatio: '768 / 1063', boxShadow: '0 2px 6px rgba(0,0,0,.06), 0 18px 38px -28px rgba(0,0,0,.22)'}}
                >
                  <img src={asset(p.src)} alt={pick(p.alt, locale)} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex items-baseline justify-between font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  <b className="font-display text-sm font-normal normal-case italic tracking-tight text-fg">{pick(p.title, locale)}</b>
                  <span>{p.no}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </ProjSection>

      {/* 03 — Spreads (blind-text layout studies) */}
      <ProjSection
        num="03"
        title={pick({de: 'Doppelseiten', en: 'Spreads'}, locale)}
        lede={pick(
          {
            de: 'Layout-Studien der Doppelseiten: die Texte bleiben bewusst unleserlich, sodass nur der Satzspiegel, der Spalten-Rhythmus und die Aquarell-Washes sprechen.',
            en: 'Layout studies of the spreads: the text stays deliberately unreadable, so that only the type area, the column rhythm and the watercolour washes speak.',
          },
          locale,
        )}
      >
        <div className="grid max-w-[1300px] grid-cols-1 gap-8 lg:grid-cols-2">
          <Spread
            wash={WASH_BLUE}
            left={[100, 90, 85, 100, 70, 0, 100, 55]}
            right={[40, 90, 85, 70, 100, 0, 85, 40]}
            pageLeft="06"
            pageRight="07"
          />
          <Spread
            wash={WASH_LAVENDER}
            left={[55, 100, 90, 70, 100, 85, 0, 40]}
            right={[100, 85, 100, 90, 0, 70, 55, 90]}
            pageLeft="24"
            pageRight="25"
          />
        </div>
      </ProjSection>

      {/* 04 — Illustrative motifs */}
      <ProjSection
        num="04"
        title={pick({de: 'Illustrative Motive', en: 'Illustrative motifs'}, locale)}
        lede={pick(
          {
            de: 'Wiederkehrende Bildelemente, die sich als ruhiger Rhythmus durch das Buch ziehen — Bleistiftzeichnungen und Aquarelltupfer, immer zurückhaltend gesetzt, damit der Text trotzdem führt.',
            en: 'Recurring visual elements that run through the book as a calm rhythm — pencil drawings and dabs of watercolour, always set quietly so the text still leads.',
          },
          locale,
        )}
      >
        <ul className="grid max-w-[1300px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {motifs.map((m) => (
            <li
              key={m.src}
              className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-line bg-paper"
            >
              <img
                src={asset(m.src)}
                alt={pick(m.alt, locale)}
                loading="lazy"
                className="max-h-[78%] max-w-[78%] object-contain mix-blend-multiply dark:mix-blend-normal"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-baseline justify-between border-t border-line bg-bg px-3.5 py-2.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                <b className="font-display text-sm font-normal normal-case italic tracking-tight text-fg">{pick(m.title, locale)}</b>
                <span>{pick(m.tag, locale)}</span>
              </div>
            </li>
          ))}
        </ul>
      </ProjSection>

      {/* 05 — Note */}
      <ProjSection num="05" title={pick({de: 'Hinweis', en: 'Note'}, locale)}>
        <p className="max-w-[760px] rounded-sm border border-line bg-paper p-6 leading-[1.7] text-muted">
          <b className="font-display font-normal italic text-fg">{pick({de: 'Privatauftrag.', en: 'Private commission.'}, locale)} </b>
          {pick(
            {
              de: 'Da dieses Buch nie kommerziell oder öffentlich erhältlich war, wurden alle Texte oben durch Blindtext-Linien ersetzt. Sichtbar sind ausschliesslich Layout, Illustration und Gestaltungssprache — die Originaltexte bleiben beim Auftraggeber.',
              en: 'Because this book was never commercially or publicly available, all texts above were replaced with blind-text lines. Only the layout, illustration and design language remain visible — the original texts stay with the client.',
            },
            locale,
          )}
        </p>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'Hochzeit', slug: 'graphic/hochzeit'}} />
    </div>
  );
}
