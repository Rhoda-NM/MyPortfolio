import React from "react";
import { ArrowRight } from "lucide-react";

interface ArticleFooterProps {
  closingThought: React.ReactNode;
}

export default function ArticleFooter({ closingThought }: ArticleFooterProps) {
  return (
    <footer className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center">
      {/* 1. Closing Insight */}
      <div className="max-w-2xl text-center mb-24">
        <p className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
          {closingThought}
        </p>
      </div>

      {/* 2. Related Systems Grid */}
      <div className="w-full max-w-5xl mb-32">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-heading text-xl font-medium text-white">Related Systems</h3>
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
            View All Indexes →
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mock Related Post 1 */}
          <div className="group cursor-pointer border border-white/10 rounded-2xl p-6 bg-[#040405] hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs text-[#7B2CBF] tracking-widest uppercase mb-4 block">
              [PERFORMANCE]
            </span>
            <h4 className="font-heading text-lg text-white mb-2 group-hover:text-[#7B2CBF] transition-colors">
              Zero-Downtime Migrations at Scale
            </h4>
            <p className="text-gray-500 font-sans text-sm line-clamp-2">
              How we moved 40TB of relational data with 0 seconds of perceived downtime through careful log-shipping and dual-writes.
            </p>
          </div>
          {/* Mock Related Post 2 */}
          <div className="group cursor-pointer border border-white/10 rounded-2xl p-6 bg-[#040405] hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs text-[#7B2CBF] tracking-widest uppercase mb-4 block">
              [AUTOMATION]
            </span>
            <h4 className="font-heading text-lg text-white mb-2 group-hover:text-[#7B2CBF] transition-colors">
              Self-Healing Infrastructure
            </h4>
            <p className="text-gray-500 font-sans text-sm line-clamp-2">
              Building a responsive control plane to automate recovery protocols for edge node failures.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Conversion CTA */}
      <div className="w-full max-w-3xl text-center pb-32">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-[#7B2CBF]/20 blur-2xl rounded-full" />
          <div className="relative border border-[#7B2CBF]/30 bg-[#7B2CBF]/5 rounded-full px-6 py-2">
            <span className="font-mono text-xs text-[#7B2CBF] uppercase tracking-widest font-bold">
              Engineering Leadership
            </span>
          </div>
        </div>
        
        <p className="font-sans text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          If you{"'"}re building systems where reliability, scale, and clarity matter, I work with founders and teams on architecture and high-performance infrastructure.
        </p>

        <button className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-sans font-medium hover:bg-gray-200 transition-colors">
          Start a project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
