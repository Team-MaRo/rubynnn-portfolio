import {GifToggle, VideoCard, XEmbed} from '~/components/project/Media';
import {Masonry, ProjHero, ProjSection} from '~/components/project/primitives';
import {ProjFoot} from '~/components/project/ProjFoot';
import {TopNav} from '~/components/TopNav';
import {viaGifs, viaMasonry, viaPosts, viaVideos} from '~/content/projects/via-award';
import {useLocale} from '~/hooks/useLocale';
import {asset} from '~/lib/asset';
import {pick} from '~/lib/locale';

export function meta() {
  return [{title: 'VIA Award · Robine'}];
}

export default function Page() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} crumb={{section: pick({de: 'Graphic Design', en: 'Graphic Design'}, locale), title: 'VIA Award'}} />

      <ProjHero
        kicker={pick({de: 'Branding · Werbung', en: 'Branding · Advertising'}, locale)}
        title={(
          <>
            VIA
            <br />
            <span className="text-accent">Award.</span>
          </>
        )}
        lede={pick(
          {
            de: 'Eine Auswahl von Werbematerialien für den Vesalius Innovation Award — allesamt im Eigentum der S. Karger AG.',
            en: 'A selection of promotional materials for the Vesalius Innovation Award — all owned by S. Karger AG.',
          },
          locale,
        )}
        meta={[
          {label: pick({de: 'Bereich', en: 'Field'}, locale), value: pick({de: 'Branding · Werbung', en: 'Branding · Advertising'}, locale)},
          {label: pick({de: 'Jahre', en: 'Years'}, locale), value: '2023 – 2024'},
          {label: pick({de: 'Kund:in', en: 'Client'}, locale), value: 'S. Karger AG'},
        ]}
      />

      {/* Briefing */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 border-t border-line px-5 py-20 md:px-8 lg:grid-cols-[200px_1fr] lg:gap-14">
        <div className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">{pick({de: 'Briefing', en: 'Brief'}, locale)}</div>
        <div>
          <p className="mb-6 max-w-[40ch] font-display text-[26px] font-light italic leading-[1.45]">
            {pick(
              {
                de: 'Eine Auswahl von Werbematerialien, die für den Vesalius Innovation Award erstellt wurden — allesamt im Eigentum der S. Karger AG.',
                en: 'A selection of promotional materials produced for the Vesalius Innovation Award — all owned by S. Karger AG.',
              },
              locale,
            )}
          </p>
          <p className="mb-5 max-w-[60ch] leading-[1.65]">
            {pick(
              {
                de: 'Der Vesalius Innovation Award (VIA) von Karger Publishers ist ein Förderpreis für Startups, die Innovationen im Bereich Wissenschaftskommunikation bzw. Publishing in den Health Sciences vorantreiben.',
                en: 'The Vesalius Innovation Award (VIA) by Karger Publishers is a grant for startups driving innovation in science communication and publishing within the health sciences.',
              },
              locale,
            )}
          </p>
          <p className="max-w-[60ch] leading-[1.65] text-muted">
            {pick(
              {
                de: 'Die gewählten Farben und gestalterischen Elemente sind dabei meine persönliche kreative Interpretation des Corporate Designs der Firma und wurden vom Branding freigegeben. Alle Farben und Schmuckelemente sind integraler Bestandteil des Corporate Designs und wurden nicht von mir festgelegt.',
                en: 'The chosen colours and design elements are my personal creative interpretation of the company’s corporate design and were approved by branding. All colours and decorative elements are an integral part of the corporate design and were not defined by me.',
              },
              locale,
            )}
          </p>
        </div>
      </section>

      {/* 01 — Marketing Material */}
      <ProjSection
        num={`01 · ${pick({de: 'Marketing Material', en: 'Marketing material'}, locale)}`}
        title={pick({de: 'Marketing Material', en: 'Marketing Material'}, locale)}
        lede={pick(
          {
            de: 'Flyer, Web-Banner, Badges und Voucher-Designs für den Award. Layouts in unterschiedlichen Formaten — vom DIN-A4-Flyer bis zum 728×90 Leaderboard.',
            en: 'Flyers, web banners, badges and voucher designs for the award. Layouts in a range of formats — from the A4 flyer to the 728×90 leaderboard.',
          },
          locale,
        )}
      >
        <Masonry cols={3}>
          {viaMasonry.map((m) => (
            <a
              key={m.src}
              href={asset(m.href)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="group block overflow-hidden rounded-sm border border-line bg-paper transition-colors hover:border-accent"
            >
              <img src={asset(m.src)} alt={pick(m.alt, locale)} loading="lazy" className="w-full" />
              <div className="flex items-center justify-between gap-3 px-4 py-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                <b className="truncate font-normal text-fg">{m.title}</b>
                <span className="shrink-0 text-faint">{m.tag}</span>
              </div>
            </a>
          ))}
        </Masonry>
      </ProjSection>

      {/* 02 — Animationen */}
      <ProjSection
        num={`02 · ${pick({de: 'Bewegtbild', en: 'Motion'}, locale)}`}
        title={pick({de: 'Animationen', en: 'Animations'}, locale)}
        lede={pick(
          {
            de: 'Animierte Web-Banner für die Bewerbungsphase des Awards — ein Countdown-Banner, sowie zwei Editionen des „Who we are looking for“-Loops in 2023 und 2024.',
            en: 'Animated web banners for the award’s application phase — a countdown banner plus two editions of the “Who we are looking for” loop in 2023 and 2024.',
          },
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {viaGifs.map((g) => (
            <GifToggle key={g.src} src={asset(g.src)} alt={pick(g.alt, locale)} caption={g.title} />
          ))}
        </div>
      </ProjSection>

      {/* 03 — Videos */}
      <ProjSection
        num={`03 · ${pick({de: 'Bewegtbild', en: 'Motion'}, locale)}`}
        title="Videos"
        lede={pick(
          {
            de: 'Bewegtbild-Material rund um den Award — Promotion, Award-Ceremony und Interviews mit Gewinner:innen. Klick öffnet die Videos auf YouTube.',
            en: 'Moving-image material around the award — promotion, award ceremony and interviews with winners. Click opens the videos on YouTube.',
          },
          locale,
        )}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {viaVideos.map((v) => (
            <VideoCard key={v.id} id={v.id} title={v.title} tag={v.tag} />
          ))}
        </div>
      </ProjSection>

      {/* 04 — Social Posts */}
      <ProjSection
        num={`04 · ${pick({de: 'Social', en: 'Social'}, locale)}`}
        title={pick({de: 'Social Posts', en: 'Social Posts'}, locale)}
        lede={pick(
          {
            de: 'Eingebettete X-Posts aus der Bewerbungsphase und während der Award-Ceremony.',
            en: 'Embedded X posts from the application phase and during the award ceremony.',
          },
          locale,
        )}
      >
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {viaPosts.map((p) => (
            <XEmbed key={p.href} href={p.href} title={pick(p.title, locale)} tag={pick(p.meta, locale)} />
          ))}
        </div>
      </ProjSection>

      <ProjFoot locale={locale} next={{label: 'Liederbuch', slug: 'graphic/liederbuch'}} />
    </div>
  );
}
