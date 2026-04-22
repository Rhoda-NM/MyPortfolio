import React from "react";

interface InsightBlockProps {
  children: React.ReactNode;
}

export default function InsightBlock({ children }: InsightBlockProps) {
  return (
    <div className="relative group my-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#7B2CBF]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <blockquote className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 rounded-2xl overflow-hidden">
        {/* Subtle top active line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
        
        <p className="font-heading text-xl md:text-2xl text-white/90 leading-relaxed font-medium italic">
          {children}
        </p>
      </blockquote>
    </div>
  );
}
