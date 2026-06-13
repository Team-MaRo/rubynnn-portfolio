import type {WeekCard} from '~/content/projects/ben';
import {Video, YouTube} from '~/components/project/Media';
import {ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {benCourses, benWeeks} from '~/content/projects/ben';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'Ben Marriott Kurse · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Motion Design', en: 'Motion Design'}, locale), title: 'Ben Marriott'}} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-44 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <h1 className="font-display text-[clamp(56px,9vw,140px)] font-light italic leading-[0.92] tracking-[-0.04em]">
          Ben Marriott
          <br />
          <span className="text-accent">{pick({de: 'Kurse.', en: 'Courses.'}, locale)}</span>
        </h1>
        <dl className="grid gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          {[
            {label: pick({de: 'Bereich', en: 'Field'}, locale), value: 'Motion Design'},
            {label: pick({de: 'Jahre', en: 'Years'}, locale), value: pick({de: '2025 – laufend', en: '2025 – ongoing'}, locale)},
            {label: pick({de: 'Ausbildung', en: 'Course'}, locale), value: 'Ben Marriott Online'},
          ].map((m, i) => (
            <div key={i} className="flex justify-between gap-6 border-t border-line pt-2.5">
              <dt>{m.label}</dt>
              <dd className="text-right font-display text-[15px] normal-case not-italic tracking-tight text-fg">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Briefing / Intro ─────────────────────────── */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-5 py-16 md:px-8 lg:grid-cols-[160px_1fr] lg:gap-14">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">{pick({de: 'Briefing', en: 'Brief'}, locale)}</div>
        <div>
          <p className="mb-8 max-w-[40ch] font-display text-[26px] font-light italic leading-[1.45] tracking-[-0.005em]">
            {pick(
              {
                de: 'Drei aufeinander aufbauende Online-Kurse von Ben Marriott, mit denen ich meine Motion-Design-Praxis weiterführe — von Grundlagen über fortgeschrittene Techniken bis zur eigenen visuellen Handschrift.',
                en: 'Three online courses from Ben Marriott that build on each other — I use them to keep my motion design practice moving forward, from fundamentals through advanced technique to my own visual voice.',
              },
              locale,
            )}
          </p>
          <p className="mb-5 max-w-[58ch] leading-[1.65] text-fg">
            {pick(
              {
                de: 'Im Zentrum stehen wöchentliche Übungsvideos. Jede Woche gibt es eine Aufgabe — wahlweise als eigenes Design umgesetzt oder als Animation nach Bens Vorlage. Beide Varianten trainieren denselben Mechanismus, aber unterschiedliche Muskeln: Konzept vs. saubere Umsetzung.',
                en: 'The heart of it is weekly exercise videos. Each week brings a task — either done as my own design or as an animation after Ben\'s template. Both train the same mechanism but different muscles: concept vs. clean execution.',
              },
              locale,
            )}
          </p>
          <p className="max-w-[58ch] leading-[1.65] text-muted">
            {pick(
              {
                de: 'Stand heute habe ich den ersten Kurs (Motion Foundation) zu rund zwei Dritteln abgeschlossen. Die beiden weiterführenden Kurse stehen auf der Liste und werden hier ergänzt, sobald sie angefangen sind.',
                en: 'As of today I\'ve completed roughly two-thirds of the first course (Motion Foundation). The two follow-up courses are on the list and will be added here as soon as I start them.',
              },
              locale,
            )}
          </p>
        </div>
      </section>

      {/* ── 01 — Course overview ─────────────────────── */}
      <ProjSection
        num="01"
        title={pick({de: 'Kursübersicht', en: 'Course overview'}, locale)}
        lede={pick(
          {
            de: 'Drei Kurse, drei Schritte. Der erste legt das Fundament, der zweite vertieft die Technik, der dritte sucht die eigene Bildsprache.',
            en: 'Three courses, three steps. The first lays the foundation, the second deepens the technique, the third searches for the personal visual voice.',
          },
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {benCourses.map((c, i) => {
            const active = c.state === 'active';
            return (
              <article
                key={i}
                className={`relative flex min-h-[220px] flex-col gap-3.5 overflow-hidden rounded-sm border p-6 ${
                  active ? 'border-fg bg-bg' : 'border-line'
                }`}
                style={
                  active
                    ? undefined
                    : {
                        backgroundImage:
                          'repeating-linear-gradient(45deg, var(--bg) 0, var(--bg) 10px, var(--paper) 10px, var(--paper) 20px)',
                      }
                }
              >
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(c.idx, locale)}</span>
                <h3 className={`text-balance font-display text-[clamp(24px,2.4vw,32px)] font-normal italic leading-[1.05] tracking-[-0.015em] ${active ? 'text-fg' : 'text-muted'}`}>
                  {c.name}
                </h3>
                <p className="max-w-[36ch] text-[13px] leading-[1.55] text-muted">{pick(c.note, locale)}</p>
                {c.progress && (
                  <div className="flex items-center gap-2.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                    <span>{c.progress.label}</span>
                    <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-line">
                      <i className="absolute inset-y-0 left-0 block rounded-full bg-accent" style={{width: `${c.progress.pct}%`}} />
                    </div>
                  </div>
                )}
                <span
                  className={`mt-auto inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] ${
                    active ? 'border-fg bg-fg text-bg' : 'border-line bg-paper text-muted'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${active ? 'bg-accent' : 'bg-line'}`} />
                  {pick(c.status, locale)}
                </span>
              </article>
            );
          })}
        </div>
      </ProjSection>

      {/* ── 02 — Motion Foundation weekly pieces ─────── */}
      <ProjSection
        num="02"
        title={pick({de: 'Motion Foundation — Wochenarbeiten', en: 'Motion Foundation — weekly pieces'}, locale)}
        lede={pick(
          {
            de: 'Eine Woche, eine Übung. Manche entstehen frei nach eigenem Briefing, manche folgen Bens Vorlage — geübt wird in beiden Fällen.',
            en: 'One week, one exercise. Some come from my own brief, some follow Ben\'s template — both ways count as practice.',
          },
          locale,
        )}
      >
        <div className="mb-8 max-w-[760px]">
          <h3 className="flex items-baseline gap-3 font-display text-[22px] font-light italic tracking-tight">
            <span className="font-mono text-2xs not-italic tracking-[0.18em] text-accent">02.1</span>
            {pick({de: 'Wochen 01 – 09', en: 'Weeks 01 – 09'}, locale)}
          </h3>
          <p className="mt-3 max-w-[60ch] text-muted">
            {pick(
              {
                de: 'Jede Kachel lässt sich abspielen; bei eigenen Videos kannst du den Ton einschalten. Über den YouTube-Link öffnet sich die Originalversion.',
                en: 'Each tile can be played; for my own videos you can turn the sound on. The YouTube link opens the original version.',
              },
              locale,
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {benWeeks.map((w, i) => (
            <WeekTile key={i} week={w} locale={locale} />
          ))}
        </div>
      </ProjSection>

      {/* ── 03 — Master Motion Design ────────────────── */}
      <ProjSection
        num="03"
        title="Master Motion Design"
        lede={pick(
          {
            de: 'Der weiterführende Kurs setzt da an, wo Motion Foundation aufhört — und vertieft Charakteranimation, komplexere Rigs sowie Storytelling mit Bewegung.',
            en: 'The follow-up course picks up where Motion Foundation leaves off — going deeper into character animation, more complex rigs, and storytelling through motion.',
          },
          locale,
        )}
      >
        <ComingSoon
          tag={pick({de: 'Noch nicht begonnen', en: 'Not started yet'}, locale)}
          heading={pick({de: 'Steht auf der Liste.', en: 'On the list.'}, locale)}
          body={pick(
            {
              de: 'Sobald die ersten Wochenarbeiten fertig sind, landen sie hier — gleiches Raster, gleiche Spielregeln.',
              en: 'Once the first weekly pieces are done, they land here — same grid, same rules.',
            },
            locale,
          )}
        />
      </ProjSection>

      {/* ── 04 — Design Breakthrough ─────────────────── */}
      <ProjSection
        num="04"
        title="Design Breakthrough"
        lede={pick(
          {
            de: 'Der dritte Kurs fragt nicht mehr nach dem Wie, sondern nach dem Was — Recherche, Stilfindung und das Schärfen einer eigenen visuellen Handschrift.',
            en: 'The third course no longer asks how, but what — research, finding a style, sharpening your own visual handwriting.',
          },
          locale,
        )}
      >
        <ComingSoon
          tag={pick({de: 'Noch nicht begonnen', en: 'Not started yet'}, locale)}
          heading={pick({de: 'Kommt nach Master Motion Design.', en: 'Coming after Master Motion Design.'}, locale)}
          body={pick(
            {
              de: 'Hier wird es weniger um Technik gehen und mehr um eine bewusste Haltung — bin gespannt, was dabei rauskommt.',
              en: 'This one will be less about technique and more about an intentional stance — curious what comes out.',
            },
            locale,
          )}
        />
      </ProjSection>

      {/* ── 05 — Credits & note ──────────────────────── */}
      <ProjSection
        num="05"
        title={pick({de: 'Credits & Hinweis', en: 'Credits & note'}, locale)}
        lede={pick(
          {
            de: 'Alle gezeigten Wochenarbeiten sind Übungsarbeiten im Rahmen der Ben-Marriott-Kurse. Konzept, Animation und Schnitt von mir; Aufgabenstellung und — wo gekennzeichnet — Vorlagendesign von Ben Marriott.',
            en: 'All shown weekly pieces are practice exercises as part of the Ben Marriott courses. Concept, animation and editing by me; brief and — where marked — template design by Ben Marriott.',
          },
          locale,
        )}
      >
        <p className="max-w-[70ch] rounded-sm border border-line bg-paper p-6 text-[14px] leading-[1.65] text-muted">
          {pick(
            {
              de: 'Hinweis. Die als „Nach Ben Marriott" gekennzeichneten Wochen folgen einer von Ben gestellten Vorlage und dienen ausschliesslich dem Üben. Eigene Designs sind als solche gekennzeichnet.',
              en: 'Note. Weeks marked as "After Ben Marriott" follow a template provided by Ben and are purely for practice. Own designs are marked as such.',
            },
            locale,
          )}
        </p>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'OfG Kurs', slug: 'motion/ofg'}} />
    </div>
  );
}

function ComingSoon({tag, heading, body}: {tag: string; heading: string; body: string}) {
  return (
    <div
      className="grid justify-items-start gap-3.5 rounded-sm border border-line p-8 md:p-14"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, var(--bg) 0, var(--bg) 14px, var(--paper) 14px, var(--paper) 28px)',
      }}
    >
      <span className="rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-muted">{tag}</span>
      <h3 className="font-display text-[clamp(28px,3vw,40px)] font-normal italic leading-[1.05] tracking-[-0.015em]">{heading}</h3>
      <p className="max-w-[60ch] leading-[1.6] text-muted">{body}</p>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function WeekTile({week, locale}: {week: WeekCard; locale: ReturnType<typeof useLocale>}) {
  if (week.kind === 'placeholder') {
    return (
      <article className="flex flex-col gap-3">
        <div
          className="flex aspect-square items-center justify-center rounded-sm border border-line"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, var(--paper) 0, var(--paper) 12px, var(--bg) 12px, var(--bg) 24px)',
          }}
        >
          <div className="px-4 text-center font-display text-[clamp(20px,2.4vw,28px)] font-normal italic leading-none text-muted">
            <span className="mb-2.5 block font-mono text-2xs not-italic uppercase tracking-[0.18em] text-muted">{pick(week.num, locale)}</span>
            {pick(week.label, locale)}
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-3 px-0.5">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(week.num, locale)}</span>
          <span className="font-display text-[18px] italic tracking-[-0.01em]">{pick(week.title, locale)}</span>
        </div>
      </article>
    );
  }

  const sourceTagCls = week.sourceBen
    ? 'bg-fg text-bg'
    : 'bg-bg text-fg';

  return (
    <article className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-sm border border-line bg-paper">
        <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] ${sourceTagCls}`}>
          {pick(week.source, locale)}
        </span>
        <a
          href={week.yt}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={pick({de: 'Auf YouTube ansehen', en: 'Watch on YouTube'}, locale)}
          title={pick({de: 'Auf YouTube ansehen', en: 'Watch on YouTube'}, locale)}
          className="absolute right-3 top-3 z-20 inline-flex h-8 items-center gap-1.5 rounded-full bg-fg/60 px-2.5 font-sans text-[11px] font-semibold text-bg backdrop-blur transition-colors hover:bg-accent"
        >
          <YouTubeIcon />
          <span>YouTube</span>
        </a>
        {week.kind === 'youtube'
          ? (
              <YouTube id={week.ytId} title={pick(week.title, locale)} ratio="aspect-square" />
            )
          : (
              <Video src={asset(week.src)} ratio="aspect-square" className="absolute inset-0 h-full w-full rounded-none border-0 bg-paper" />
            )}
      </div>
      <div className="flex items-baseline justify-between gap-3 px-0.5">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-muted">{pick(week.num, locale)}</span>
        <span className="font-display text-[18px] italic tracking-[-0.01em]">{pick(week.title, locale)}</span>
      </div>
    </article>
  );
}
