import React from "react";

interface TechnicalVisualProps {
  title: string;
  children: React.ReactNode;
}

export default function TechnicalVisual({ title, children }: TechnicalVisualProps) {
  return (
    <figure className="my-14 flex flex-col items-center">
      <div className="w-full relative bg-[#040405] border border-white/10 rounded-2xl p-8 md:p-16 flex items-center justify-center overflow-hidden">
        {/* Ghost Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Subtle center blur */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 bg-[#7B2CBF]/10 blur-[80px] rounded-full" />
        </div>

        {/* The SVG Visualization */}
        <div className="relative z-10 w-full max-w-2xl drop-shadow-2xl">
          {children}
        </div>
      </div>
      
      <figcaption className="mt-4 font-mono text-xs text-gray-500 uppercase tracking-widest text-center">
        Fig. — {title}
      </figcaption>
    </figure>
  );
}
