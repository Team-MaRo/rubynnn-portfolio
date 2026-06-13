import type {Lang} from '~/i18n-config';
import {ABOUT} from '~/content/home';
import {pick} from '~/lib/locale';

export function About({locale}: {locale: Lang}) {
  return (
    <section id="about" className="border-t border-line px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-10 flex items-baseline justify-between gap-4">
          <span className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">06</span>
          <h2 className="flex-1 font-display text-[clamp(36px,5vw,64px)] font-light italic leading-none tracking-tight">{pick(ABOUT.title, locale)}</h2>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: portrait placeholder + programs + languages */}
          <div>
            <div className="relative aspect-[5/6] max-w-sm overflow-hidden bg-accent-soft" data-cursor="hi">
              <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
                <rect width="200" height="240" fill="var(--accent-soft)" />
                <circle cx="100" cy="92" r="38" fill="var(--bg)" opacity="0.9" />
                <path d="M 36 240 Q 36 158 100 158 Q 164 158 164 240 Z" fill="var(--bg)" opacity="0.9" />
              </svg>
              <span className="absolute bottom-3 left-3 font-mono text-2xs uppercase tracking-[0.14em] text-fg/70">Robine · 2026</span>
            </div>

            <h3 className="mt-12 font-display text-2xl italic">{pick(ABOUT.programsLabel, locale)}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {ABOUT.programs.map((p) => (
                <span key={p} className="rounded-full border border-line px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] text-muted">{p}</span>
              ))}
            </div>

            <h3 className="mt-8 font-display text-2xl italic">{pick(ABOUT.languagesLabel, locale)}</h3>
            <ul className="mt-3 flex gap-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {pick(ABOUT.languages, locale).map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>

          {/* Right: CV + further training */}
          <div>
            <h3 className="font-display text-2xl italic">{pick(ABOUT.cvLabel, locale)}</h3>
            <div className="mt-4 divide-y divide-line">
              {ABOUT.cv.map((row, i) => (
                <div key={i} className="grid grid-cols-[5.5rem_1fr] gap-4 py-4">
                  <span className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">{row.yr}</span>
                  <div>
                    <div className="font-display text-lg italic">{pick(row.ttl, locale)}</div>
                    {pick(row.bullets, locale).length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
                        {pick(row.bullets, locale).map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl italic">{pick(ABOUT.moreLabel, locale)}</h3>
            <div className="mt-4 divide-y divide-line">
              {ABOUT.more.map((row, i) => (
                <div key={i} className="grid grid-cols-[5.5rem_1fr] gap-4 py-3">
                  <span className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">{row.yr}</span>
                  <div className="text-sm text-fg">{pick(row.ttl, locale)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
