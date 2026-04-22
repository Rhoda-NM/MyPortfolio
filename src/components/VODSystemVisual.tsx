
// VODSystemVisual.tsx
export const VODSystemVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
      <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            
            <circle cx="100" cy="200" r="4" fill="currentColor" />
            <text x="80" y="220" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">INGEST_STREAM</text>
            
            <path d="M104 200 H180" opacity="0.6" strokeDasharray="4 4" />
            <path d="M100 200 Q140 100 180 150" opacity="0.5" />
            <path d="M100 200 Q140 300 180 250" opacity="0.5" />

            <g stroke="#7B2CBF" fill="#7B2CBF" style={{ filter: "drop-shadow(0 0 6px rgba(123,44,191,0.6))" }}>
              <animate attributeName="opacity" values="1; 0.4; 1" dur="5s" repeatCount="indefinite" />
              <rect x="180" y="140" width="40" height="20" rx="2" fillOpacity="0.4" />
              <rect x="180" y="190" width="40" height="20" rx="2" fillOpacity="0.4" />
              <rect x="180" y="240" width="40" height="20" rx="2" fillOpacity="0.4" />
              <text x="175" y="130" fontFamily="monospace" fontSize="8" stroke="none" opacity="0.8">TRANSCODE_CLUSTER</text>
            </g>

            <path d="M220 150 L300 200" opacity="0.6" />
            <path d="M220 200 L300 200" opacity="0.6" />
            <path d="M220 250 L300 200" opacity="0.6" />
            
            <g stroke="#7B2CBF" fill="#7B2CBF" style={{ filter: "drop-shadow(0 0 8px rgba(123,44,191,0.6))" }}>
              <animate attributeName="opacity" values="0.8; 0.2; 0.8" dur="4s" repeatCount="indefinite" />
              <circle cx="320" cy="200" r="20" fillOpacity="0.2" />
              <circle cx="320" cy="200" r="10" strokeDasharray="2 2" fill="none" />
              <text x="300" y="235" fontFamily="monospace" fontSize="8" stroke="none" opacity="0.8">CORE_ORCHESTRATOR</text>
            </g>

            <path d="M340 200 C400 200 450 100 550 100" opacity="0.6" />
            <path d="M340 200 C400 200 450 200 550 200" opacity="0.6" />
            <path d="M340 200 C400 200 450 300 550 300" opacity="0.6" />

            <circle cx="560" cy="100" r="3" fill="currentColor" />
            <circle cx="560" cy="200" r="3" fill="currentColor" />
            <circle cx="560" cy="300" r="3" fill="currentColor" />
            <text x="570" y="105" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">CDN_NORTH</text>
            <text x="570" y="205" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">CDN_EAST</text>
            <text x="570" y="305" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">CDN_WEST</text>

            <path d="M563 100 L650 150" opacity="0.3" />
            <path d="M563 200 L650 200" opacity="0.3" />
            <path d="M563 300 L650 250" opacity="0.3" />
            
            <path d="M660 180 L680 200 L660 220 Z" fill="currentColor" opacity="0.5" />
            <text x="655" y="235" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">CLIENT_APP</text>
        </g>
        </svg>
    </div>
  );
};