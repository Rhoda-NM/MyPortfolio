import React from "react";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface ArticleHeroProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
}

export default function ArticleHero({
  category,
  title,
  subtitle,
  date,
  readTime,
}: ArticleHeroProps) {
  return (
    <header className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Atmosphere Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(123, 44, 191, 0.03) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative z-10 px-6 max-w-3xl flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa] mb-6">
          [{category}]
        </span>
        
        <h1 className={`font-heading ${geistSans.className} font-bold text-5xl md:text-6xl tracking-tighter text-white mb-6 leading-[1.1]`}>
          {title}
        </h1>
        
        <p className="font-sans text-xl text-gray-400 max-w-2xl text-balance mb-8">
          {subtitle}
        </p>
        
        <div className="font-sans text-sm text-gray-500 tracking-wide">
          {date} <span className="mx-2">&middot;</span> {readTime}
        </div>
      </div>
    </header>
  );
}
