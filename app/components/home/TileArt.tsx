import type {CSSProperties, ReactElement} from 'react';
import type {TileArtKind} from '~/content/home';

// Full-bleed generative artwork per work tile, ported from the Claude Design
// handoff (tile-art.jsx). Each fills its tile with a coloured field + motion
// and reads the runtime tokens (--fg / --accent / --accent-soft / --bg) so it
// re-themes. Keyframes live in app.css (`ta-*`), so the reduced-motion blanket
// there freezes each piece to a clean static frame.

const svgStyle: CSSProperties = {display: 'block', width: '100%', height: '100%'};

// origin in the SVG's own user-space (view-box) coordinates
function spin(origin: string, css: string): CSSProperties {
  return {transformBox: 'view-box', transformOrigin: origin, animation: css};
}

const ICON_SHAPES: ReactElement[] = [
  <circle cx="12" cy="12" r="6" />,
  <rect x="6" y="6" width="12" height="12" />,
  <path d="M4 12 L12 4 L20 12 L12 20 Z" />,
  <path d="M4 8 L20 8 M4 16 L20 16" />,
  <path d="M4 12 Q12 4 20 12 Q12 20 4 12" />,
  <path d="M6 18 L12 6 L18 18" />,
];

export function TileArt({kind}: {kind: TileArtKind}) {
  return render(kind);
}

function render(kind: TileArtKind) {
  switch (kind) {
    case 'loops':
      return (
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="600" height="400" fill="var(--accent-soft)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i} cx="300" cy="200" r={40 + i * 40} fill="none" stroke="var(--accent)" strokeWidth={1.5}
              style={spin('300px 200px', `ta-loop-pulse ${6 + i * 0.6}s ease-in-out ${i * 0.2}s infinite alternate`)}
            />
          ))}
          <circle cx="300" cy="200" r="8" fill="var(--accent)" style={{animation: 'ta-loop-beat 2.4s ease-in-out infinite'}} />
        </svg>
      );
    case 'ribbon':
      return (
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="600" height="400" fill="var(--accent)" />
          <path d="M -50 200 Q 150 50 300 200 T 650 200" fill="none" stroke="var(--bg)" strokeWidth={48} strokeLinecap="round" opacity="0.9" style={{animation: 'ta-ribbon-wave 8s ease-in-out infinite alternate'}} />
          <path d="M -50 240 Q 150 90 300 240 T 650 240" fill="none" stroke="var(--bg)" strokeWidth={4} strokeLinecap="round" opacity="0.6" style={{animation: 'ta-ribbon-wave 10s ease-in-out infinite alternate-reverse'}} />
        </svg>
      );
    case 'rings':
      return (
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="1200" height="400" fill="var(--accent-soft)" />
          {[0, 1, 2].map((i) => (
            <g key={i} style={spin('600px 200px', `ta-orbit ${12 + i * 4}s linear infinite ${i % 2 ? 'reverse' : 'normal'}`)}>
              <ellipse cx="600" cy="200" rx={120 + i * 70} ry={60 + i * 30} fill="none" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
              <circle cx={600 + 120 + i * 70} cy="200" r={10 - i * 2} fill="var(--accent)" />
            </g>
          ))}
          <text x="600" y="210" textAnchor="middle" fontFamily="var(--font-display)" fontStyle="italic" fontSize="42" fill="var(--fg)" opacity="0.25">in motion</text>
        </svg>
      );
    case 'type':
      return (
        <div style={{position: 'absolute', inset: 0, overflow: 'hidden', display: 'grid', placeItems: 'center', background: 'var(--accent-soft)'}}>
          <div style={{fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '12vw', color: 'var(--fg)', letterSpacing: '-.05em', lineHeight: 0.85, textAlign: 'center', transform: 'rotate(-4deg)'}}>
            Aa<span style={{color: 'var(--accent)'}}>Bb</span><br />
            <span style={{fontStyle: 'normal', fontWeight: 700, fontSize: '.6em'}}>EDITORIAL</span>
          </div>
        </div>
      );
    case 'award':
      return (
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="600" height="400" fill="var(--fg)" />
          <g style={spin('300px 200px', 'ta-orbit 20s linear infinite')}>
            {Array.from({length: 24}).map((_, i) => (
              <line key={i} x1="300" y1="200" x2="300" y2="40" stroke="var(--accent)" strokeWidth="2" transform={`rotate(${i * 15} 300 200)`} opacity={i % 2 ? 0.35 : 0.9} />
            ))}
          </g>
          <circle cx="300" cy="200" r="50" fill="var(--accent)" />
          <text x="300" y="212" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="700" fontSize="22" fill="var(--fg)">VIA</text>
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="400" height="400" fill="var(--accent-soft)" />
          <g style={spin('200px 200px', 'ta-book-sway 6s ease-in-out infinite alternate')}>
            <rect x="80" y="100" width="240" height="200" fill="var(--bg)" stroke="var(--fg)" />
            <line x1="200" y1="100" x2="200" y2="300" stroke="var(--fg)" strokeWidth="0.8" />
            {[120, 140, 160, 180].map((y) => <line key={`l${y}`} x1={100} y1={y} x2={190} y2={y} stroke="var(--fg)" strokeWidth="1" opacity="0.4" />)}
            {[120, 140, 160, 180, 200].map((y) => <line key={`r${y}`} x1={210} y1={y} x2={300} y2={y} stroke="var(--fg)" strokeWidth="1" opacity="0.4" />)}
            <text x="145" y="240" fontFamily="var(--font-display)" fontStyle="italic" fontSize="20" fill="var(--accent)">♪</text>
          </g>
        </svg>
      );
    case 'wedding':
      return (
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="400" height="400" fill="var(--accent-soft)" />
          <g style={{animation: 'ta-wedd-drift 8s ease-in-out infinite alternate'}}>
            <circle cx="160" cy="200" r="80" fill="none" stroke="var(--fg)" strokeWidth="3" />
            <circle cx="240" cy="200" r="80" fill="none" stroke="var(--accent)" strokeWidth="3" />
          </g>
          <text x="200" y="340" textAnchor="middle" fontFamily="var(--font-display)" fontStyle="italic" fontSize="18" fill="var(--fg)" opacity="0.5">forever &amp; always</text>
        </svg>
      );
    case 'flyer':
      return (
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="400" height="400" fill="var(--accent)" />
          <g stroke="var(--bg)" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M 100 320 Q 200 100 300 320" style={{transformBox: 'fill-box', transformOrigin: 'center', animation: 'ta-flyer-stretch 5s ease-in-out infinite alternate'}} />
            <path d="M 100 200 Q 200 80 300 200" opacity="0.6" style={{transformBox: 'fill-box', transformOrigin: 'center', animation: 'ta-flyer-stretch 6s ease-in-out 0.5s infinite alternate'}} />
            <circle cx="200" cy="100" r="12" fill="var(--bg)" stroke="none" />
          </g>
        </svg>
      );
    case 'icons':
      return (
        <div style={{position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', gap: 1, padding: 1, background: 'var(--bg)'}}>
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} style={{display: 'grid', placeItems: 'center', background: 'var(--accent-soft)', animation: `ta-icon-blink ${3 + (i % 5)}s ease-in-out ${i * 0.1}s infinite alternate`}}>
              <svg viewBox="0 0 24 24" width="40%" stroke="var(--fg)" strokeWidth="1.5" fill="none">
                {ICON_SHAPES[i % 6]}
              </svg>
            </div>
          ))}
        </div>
      );
    case 'journal':
      return (
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="400" height="400" fill="var(--bg)" />
          {[60, 100, 140, 180, 220, 260, 300].map((y, i) => (
            <line
              key={y} x1="40" y1={y} x2={i % 2 ? 360 : 320} y2={y} stroke="var(--fg)" strokeWidth="1.2" opacity="0.4"
              style={{strokeDasharray: 320, strokeDashoffset: 320, animation: `ta-jline 2s ease-out ${i * 0.15}s infinite alternate`}}
            />
          ))}
          <circle cx="320" cy="320" r="40" fill="var(--accent)" opacity="0.7" />
        </svg>
      );
    case 'thai':
      return (
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="600" height="400" fill="oklch(0.85 0.08 80)" />
          <circle cx="300" cy="180" r="80" fill="oklch(0.75 0.18 50)" style={{animation: 'ta-sun-glow 4s ease-in-out infinite alternate'}} />
          {[260, 290, 320, 350].map((y, i) => (
            <path key={y} d={`M -20 ${y} Q 150 ${y - 20} 300 ${y} T 620 ${y}`} fill="none" stroke="oklch(0.45 0.1 220)" strokeWidth="2.5" opacity={0.7 - i * 0.1} style={{animation: `ta-thai-wave ${8 + i}s ease-in-out ${i * 0.4}s infinite alternate`}} />
          ))}
        </svg>
      );
    case 'japan':
      return (
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={svgStyle} aria-hidden="true">
          <rect width="400" height="400" fill="oklch(0.96 0.02 80)" />
          <circle cx="200" cy="200" r="100" fill="oklch(0.65 0.22 25)" style={spin('200px 200px', 'ta-jp-pulse 5s ease-in-out infinite alternate')} />
          <text x="200" y="210" textAnchor="middle" fontFamily="serif" fontSize="64" fill="oklch(0.96 0.02 80)" opacity="0.8">日</text>
        </svg>
      );
    default:
      return null;
  }
}
