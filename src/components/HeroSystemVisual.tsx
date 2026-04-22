export function HeroSystemVisual() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full text-white"
      >
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="140" cy="210" r="6" fill="currentColor" />
          <circle cx="220" cy="160" r="4" fill="currentColor" opacity="0.65" />
          <circle cx="220" cy="260" r="4" fill="currentColor" opacity="0.65" />

          <path d="M146 210 C170 210 185 180 220 160" opacity="0.35" />
          <path d="M146 210 C175 210 185 240 220 260" opacity="0.35" />
          <path d="M146 210 H260" opacity="0.22" strokeDasharray="5 6" />

          <rect x="300" y="175" width="120" height="70" rx="35" opacity="0.35" />
          <circle cx="360" cy="210" r="12" opacity="0.5" />
          <path d="M260 210 H300" opacity="0.28" />

          <circle cx="560" cy="210" r="46" opacity="0.28" />
          <circle cx="560" cy="210" r="22" opacity="0.45" strokeDasharray="3 5" />
          <path d="M420 210 H514" opacity="0.28" />

          <path d="M606 210 C700 210 740 130 860 130" opacity="0.3" />
          <path d="M606 210 C700 210 740 210 860 210" opacity="0.3" />
          <path d="M606 210 C700 210 740 290 860 290" opacity="0.3" />

          <circle cx="880" cy="130" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="880" cy="210" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="880" cy="290" r="5" fill="currentColor" opacity="0.8" />

          <path d="M885 130 C950 130 980 170 1040 190" opacity="0.18" />
          <path d="M885 210 H1040" opacity="0.18" />
          <path d="M885 290 C950 290 980 250 1040 230" opacity="0.18" />

          <rect x="1040" y="175" width="90" height="70" rx="35" opacity="0.32" />
          <path d="M1070 192 L1096 210 L1070 228 Z" fill="currentColor" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
}