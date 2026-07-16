// Generative hero motion graphic, ported from the Claude Design handoff
// (hero-motion.html). Concentric rotating rings, a spinning + pulsing centre
// blob, three orbiting bullets, a 12-spoke bloom, drifting squares, a diagonal
// light sweep and signal bars. Styling + keyframes live in the `.hero-graphic`
// block in app.css; every piece animates through standard `animation`, so the
// reduced-motion blanket freezes it to a clean static frame.
const SPOKES = Array.from({length: 12}, (_, i) => i);
const SQUARES = [
  {delay: '0.0s', x: '10%', y: '15%'},
  {delay: '0.7s', x: '23%', y: '38%'},
  {delay: '1.4s', x: '36%', y: '61%'},
  {delay: '2.1s', x: '49%', y: '23%'},
  {delay: '2.8s', x: '62%', y: '46%'},
  {delay: '3.5s', x: '75%', y: '69%'},
  {delay: '4.2s', x: '88%', y: '31%'},
  {delay: '0.9s', x: '19%', y: '54%'},
];

export function HeroKinetic() {
  return (
    <div className="hero-graphic">
      {/* Outer rotating ring, dashed */}
      <div className="hg-ring">
        <svg viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="260" fill="none" stroke="var(--fg)" strokeWidth="1" strokeDasharray="2 14" pathLength={200} />
        </svg>
      </div>

      {/* Inner counter-rotating ring, longer dashes */}
      <div className="hg-ring2">
        <svg viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="200" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="40 24" />
        </svg>
      </div>

      {/* Morphing centre blob */}
      <div className="hg-blob">
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <linearGradient id="hgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-soft)" />
            </linearGradient>
          </defs>
          <path
            className="hg-blob-path"
            d="M200 60 C 280 60, 340 120, 340 200 C 340 280, 280 340, 200 340 C 120 340, 60 280, 60 200 C 60 120, 120 60, 200 60 Z"
            fill="url(#hgGrad)"
          />
        </svg>
      </div>

      {/* Three orbiting bullets */}
      <div className="hg-orbit hg-orbit-1"><span /></div>
      <div className="hg-orbit hg-orbit-2"><span /></div>
      <div className="hg-orbit hg-orbit-3"><span /></div>

      {/* Centre bloom — 12 pulsing spokes */}
      <div className="hg-bloom">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          {SPOKES.map((i) => (
            <line
              key={i}
              className="hg-bloom-spoke"
              style={{'--i': i} as React.CSSProperties}
              x1="100" y1="100" x2="100" y2="20"
              stroke="var(--bg)" strokeWidth="6" strokeLinecap="round"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Floating squares */}
      <div className="hg-squares" aria-hidden="true">
        {SQUARES.map((s, i) => (
          <span key={i} className="hg-sq" style={{'--delay': s.delay, '--x': s.x, '--y': s.y} as React.CSSProperties} />
        ))}
      </div>

      {/* Diagonal sweep */}
      <div className="hg-sweep" aria-hidden="true" />

      {/* Signal bars */}
      <div className="hg-signal" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{'--i': i} as React.CSSProperties} />
        ))}
      </div>

      {/* Corner hint label */}
      <div className="hg-hint">
        <span>in motion</span>
        <span className="hg-hint-arrow" aria-hidden>↗</span>
      </div>
    </div>
  );
}
