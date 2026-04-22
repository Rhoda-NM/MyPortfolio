"use client";

import React, { useEffect, useState } from "react";
import { Share, Download } from "lucide-react";

export default function PublicationRail() {
  const [activeId, setActiveId] = useState("");
  const [headings, setHeadings] = useState<{id: string, text: string}[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Collect all H2s
    const elements = Array.from(document.querySelectorAll("h2")).map((el) => {
      // Ensure element has an ID
      if (!el.id) {
        el.id = el.textContent?.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') || "";
      }
      return {
        id: el.id,
        text: el.textContent || ""
      };
    });
    setHeadings(elements);

    // Scroll Progress
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = totalScroll > 0 ? (scrollPosition / totalScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    // Run once on load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    // Intersection Observer for Active Header
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" } // trigger near top of the screen
    );

    document.querySelectorAll("h2").forEach((h2) => observer.observe(h2));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="hidden lg:block w-48 flex-shrink-0 sticky top-32 h-[calc(100vh-10rem)]">
      <div className="flex h-full gap-4 xl:gap-8">
        {/* Reading Progress Line */}
        <div className="w-[1px] bg-white/5 h-full relative">
          <div 
            className="absolute top-0 left-0 w-full bg-[#7B2CBF] transition-all duration-150" 
            style={{ height: `${progress}%` }}
          />
        </div>
        
        <div className="flex flex-col h-full py-4 flex-1">
          {/* Architect Snapshot */}
          <div className="mb-12">
            <h4 className="font-heading text-white/90 text-xs mb-1.5 font-medium tracking-wide relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#7B2CBF] rounded-full shadow-[0_0_8px_rgba(123,44,191,0.5)]" />
              Rhoda Muya
            </h4>
            <p className="text-[10px] text-white/40 font-sans leading-relaxed">
              System Architect specializing in VOD & Scalable Infrastructure.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="flex-1 overflow-y-auto pr-2 no-scrollbar">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-5 block">
              Contents
            </span>
            <ul className="space-y-4">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a 
                    href={`#${heading.id}`}
                    className={`text-[11px] leading-snug block transition-all duration-300 ${
                      activeId === heading.id 
                        ? "text-[#7B2CBF] drop-shadow-[0_0_8px_rgba(123,44,191,0.5)] font-semibold" 
                        : "text-white/40 hover:text-white/80 font-normal"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-5">
            <button className="text-white/30 hover:text-white transition-colors" title="Share via Twitter">
              <Share className="w-3.5 h-3.5" />
            </button>
            <button className="text-white/30 hover:text-white transition-colors" title="Save to PDF">
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
