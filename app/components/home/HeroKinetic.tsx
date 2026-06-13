// Generative hero graphic (no kinetic text — the designer landed on a graphic
// after iterating). Morphing blob, counter-rotating rings, orbiting dots and
// drifting squares. Every animation uses the registered animate-* utilities,
// so the reduced-motion blanket in app.css freezes it to a clean static frame.
export function HeroKinetic() {
  return (
    <div className="relative mx-auto flex h-[46vh] min-h-[320px] w-full max-w-[1500px] items-center justify-center">
      <svg viewBox="0 0 400 400" className="h-full w-auto" aria-hidden="true">
        {/* Morphing blob */}
        <g className="origin-center animate-blob">
          <circle cx="200" cy="200" r="96" fill="var(--accent-soft)" opacity="0.55" />
        </g>
        {/* Counter-rotating rings */}
        <g fill="none" stroke="var(--fg)" strokeOpacity="0.18" strokeWidth="1">
          <circle cx="200" cy="200" r="150" className="origin-center animate-spin-slow" strokeDasharray="2 10" />
          <circle cx="200" cy="200" r="110" className="origin-center animate-spin-slower" strokeDasharray="2 8" />
        </g>
        {/* Orbiting dots */}
        <g className="origin-center animate-spin-slow">
          <circle cx="200" cy="50" r="6" fill="var(--accent)" />
        </g>
        <g className="origin-center animate-spin-slower">
          <circle cx="350" cy="200" r="4" fill="var(--fg)" opacity="0.5" />
        </g>
        {/* Drifting squares */}
        {[[70, 90], [320, 110], [90, 300], [310, 300]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="10" height="10" fill="var(--accent)" opacity="0.35" className="animate-float" style={{animationDelay: `${i * 1.2}s`}} />
        ))}
        {/* Center mark */}
        <circle cx="200" cy="200" r="5" fill="var(--fg)" />
      </svg>
      <span className="pointer-events-none absolute bottom-2 right-2 font-display text-sm italic text-accent">
        in motion <span aria-hidden>↗</span>
      </span>
    </div>
  );
}
