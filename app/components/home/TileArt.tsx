import type {TileArtKind} from '~/content/home';

// Abstract, token-driven artwork for each work tile. Stroke/fill use the
// runtime --fg / --accent vars so they re-theme. Motion uses the registered
// animate-* utilities, which the reduced-motion blanket in app.css neutralises.
const F = 'var(--fg)';
const A = 'var(--accent)';

export function TileArt({kind}: {kind: TileArtKind}) {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {render(kind)}
    </svg>
  );
}

function render(kind: TileArtKind) {
  switch (kind) {
    case 'loops':
      return (
        <g fill="none" stroke={A} strokeWidth="1">
          {[14, 24, 34, 44].map((r, i) => (
            <circle key={r} cx="60" cy="60" r={r} opacity={0.7 - i * 0.12} className="origin-center animate-pulse-dot" style={{animationDelay: `${i * 0.3}s`}} />
          ))}
          <circle cx="60" cy="60" r="4" fill={A} stroke="none" />
        </g>
      );
    case 'ribbon':
      return (
        <g fill="none" stroke={A} strokeWidth="2" strokeLinecap="round">
          <path d="M10 80 Q40 20 60 60 T110 40" />
          <path d="M10 95 Q40 35 60 75 T110 55" opacity="0.4" stroke={F} />
        </g>
      );
    case 'rings':
      return (
        <g fill="none" strokeWidth="1.2">
          <ellipse cx="60" cy="60" rx="46" ry="20" stroke={F} opacity="0.35" />
          <ellipse cx="60" cy="60" rx="20" ry="46" stroke={A} className="origin-center animate-spin-slow" />
          <circle cx="60" cy="14" r="4" fill={A} stroke="none" className="origin-center animate-spin-slow" />
        </g>
      );
    case 'type':
      return (
        <g fill={F}>
          <text x="14" y="78" fontFamily="Fraunces, serif" fontSize="62" fontStyle="italic">Aa</text>
          <rect x="14" y="92" width="60" height="3" fill={A} />
        </g>
      );
    case 'award':
      return (
        <g>
          <g stroke={A} strokeWidth="1" className="origin-center animate-spin-slower">
            {Array.from({length: 16}).map((_, i) => {
              const a = (i / 16) * Math.PI * 2;
              return <line key={i} x1={60 + Math.cos(a) * 30} y1={60 + Math.sin(a) * 30} x2={60 + Math.cos(a) * 46} y2={60 + Math.sin(a) * 46} opacity="0.5" />;
            })}
          </g>
          <circle cx="60" cy="60" r="26" fill="none" stroke={F} strokeWidth="1" opacity="0.5" />
          <text x="60" y="66" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="18" fill={A}>VIA</text>
        </g>
      );
    case 'book':
      return (
        <g fill="none" stroke={F} strokeWidth="1.2" opacity="0.7">
          <path d="M60 28 V96 M60 28 C44 22 26 24 18 30 V92 C26 86 44 84 60 90 M60 28 C76 22 94 24 102 30 V92 C94 86 76 84 60 90" />
          {[40, 50, 60, 70].map((y) => <line key={y} x1="26" y1={y} x2="50" y2={y} stroke={A} opacity="0.5" />)}
        </g>
      );
    case 'wedding':
      return (
        <g fill="none" strokeWidth="2">
          <circle cx="48" cy="60" r="24" stroke={A} />
          <circle cx="72" cy="60" r="24" stroke={F} opacity="0.6" />
        </g>
      );
    case 'flyer':
      return (
        <g fill="none" stroke={A} strokeWidth="2" strokeLinecap="round">
          <path d="M40 24 C70 36 70 84 40 96" />
          <path d="M80 24 C50 36 50 84 80 96" stroke={F} opacity="0.4" />
          <circle cx="60" cy="60" r="6" fill={A} stroke="none" />
        </g>
      );
    case 'icons':
      return (
        <g stroke={F} strokeWidth="1.4" fill="none" opacity="0.8">
          {Array.from({length: 12}).map((_, i) => {
            const x = 24 + (i % 4) * 24;
            const y = 30 + Math.floor(i / 4) * 24;
            const shape = i % 4;
            if (shape === 0) {
              return <circle key={i} cx={x} cy={y} r="7" stroke={A} className="animate-pulse-dot" style={{animationDelay: `${i * 0.15}s`}} />;
            }
            if (shape === 1) {
              return <rect key={i} x={x - 7} y={y - 7} width="14" height="14" />;
            }
            if (shape === 2) {
              return <path key={i} d={`M${x} ${y - 8} L${x + 8} ${y + 7} L${x - 8} ${y + 7} Z`} />;
            }
            return <line key={i} x1={x - 8} y1={y} x2={x + 8} y2={y} stroke={A} />;
          })}
        </g>
      );
    case 'journal':
      return (
        <g fill="none" stroke={F} strokeWidth="1.4" opacity="0.7">
          {[36, 48, 60, 72, 84].map((y, i) => <line key={y} x1="20" y1={y} x2="100" y2={y} strokeDasharray="4 6" strokeDashoffset={i * 3} stroke={i % 2 ? A : F} />)}
          <circle cx="92" cy="30" r="8" fill={A} stroke="none" />
        </g>
      );
    case 'thai':
      return (
        <g fill="none">
          <circle cx="60" cy="46" r="18" fill={A} opacity="0.85" className="origin-center animate-float" />
          <path d="M6 84 Q30 70 54 84 T102 84 T150 84" stroke={F} strokeWidth="1.4" opacity="0.5" />
          <path d="M6 96 Q30 82 54 96 T102 96" stroke={A} strokeWidth="1.4" opacity="0.6" />
        </g>
      );
    case 'japan':
      return (
        <g>
          <circle cx="60" cy="58" r="26" fill={A} className="origin-center animate-pulse-dot" />
          <text x="60" y="70" textAnchor="middle" fontSize="30" fill="var(--bg)">日</text>
        </g>
      );
    default:
      return null;
  }
}
