import {About} from '~/components/home/About';
import {HeroKinetic} from '~/components/home/HeroKinetic';
import {Marquee} from '~/components/home/Marquee';
import {WorkGrid} from '~/components/home/WorkGrid';
import {LicenseBadge} from '~/components/LicenseBadge';
import {TopNav} from '~/components/TopNav';
import {CONTACT, HERO, SECTIONS} from '~/content/home';
import {useLocale} from '~/hooks/useLocale';
import {pick} from '~/lib/locale';

export function meta() {
  return [
    {title: 'Robine\'s Space'},
    {name: 'description', content: 'Robine — Grafik, Motion Design & Fotografie · Basel, CH'},
  ];
}

export default function Home() {
  const locale = useLocale();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <TopNav locale={locale} />

      <section id="top" className="flex min-h-dvh flex-col px-5 pt-24 md:px-8">
        <div className="flex items-center justify-between gap-4 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            {pick(HERO.now, locale)}
          </span>
          <span className="hidden sm:inline">{pick(HERO.role, locale)}</span>
          <span>{HERO.loc}</span>
        </div>

        <div className="flex flex-1 items-center">
          <HeroKinetic />
        </div>

        <div className="grid grid-cols-1 items-end gap-8 border-t border-line py-10 lg:grid-cols-[1.2fr_1fr]">
          <p
            className="max-w-[42ch] font-display text-xl font-light italic leading-snug text-balance [&_b]:font-normal [&_b]:text-accent"
            // eslint-disable-next-line react/dom-no-dangerously-set-innerhtml
            dangerouslySetInnerHTML={{__html: pick(HERO.bio, locale)}}
          />
          <div className="flex gap-10 lg:justify-end">
            {HERO.stats.map((s) => (
              <div key={s.num} className="grid gap-1">
                <span className="font-display text-4xl font-light italic">{s.num}</span>
                <span className="font-mono text-2xs uppercase tracking-[0.12em] text-muted">{pick(s.lbl, locale)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee text={HERO.marquee} />

      <WorkGrid sections={SECTIONS} locale={locale} />

      <About locale={locale} />

      <footer id="contact" className="border-t border-line bg-paper px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <p className="font-display text-[clamp(40px,7vw,96px)] font-light italic leading-[0.95] tracking-tight text-balance">
            {pick(CONTACT.headline, locale)}
            <br />
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline" data-cursor="email">
              {pick(CONTACT.cta, locale)}
            </a>
          </p>
          <div className="mt-16 flex flex-wrap justify-between gap-4 font-mono text-2xs uppercase tracking-[0.14em] text-muted">
            <span>{CONTACT.email}</span>
            <span>© {__COPYRIGHT_HOLDER__} {__COPYRIGHT_YEARS__}</span>
            <span>Basel · Schweiz</span>
          </div>
          <div className="mt-4 border-t border-line pt-4">
            <LicenseBadge />
          </div>
        </div>
      </footer>
    </div>
  );
}
