import React from "react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    date: "April 2026",
    title: "Fault Isolation in Distributed Micro-frontends",
    teaser: "Designing edge-resilient architecture to ensure partial availability under catastrophic load.",
    slug: "case-studies/architecture-failure"
  },
  {
    date: "March 2026",
    title: "Zero-Downtime Migrations at Scale",
    teaser: "How we moved 40TB of relational data with 0 seconds of perceived downtime through careful log-shipping.",
    slug: "insights/zero-downtime"
  },
  {
    date: "February 2026",
    title: "Self-Healing Infrastructure",
    teaser: "Building a responsive control plane to automate recovery protocols for edge node failures.",
    slug: "insights/self-healing"
  }
];

export default function LatestThinking() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative z-10" id="insights">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase mb-4 block">
          [INSIGHTS_&_LOGIC]
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          The Developer{"'"}s Ledger.
        </h2>
        <p className="font-sans text-gray-400 text-lg max-w-2xl">
          Field notes on scalability, resilient infrastructure, and the trade-offs of modern system design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {ARTICLES.map((article, i) => (
          <Link 
            key={i}
            href={`/${article.slug}`}
            className="group relative flex flex-col p-8 border border-white/10 rounded-2xl bg-[#040405] hover:bg-white/[0.02] transition-colors"
          >
            <div className="mb-8">
              <span className="font-mono text-xs text-white/40 mb-4 block">
                {article.date}
              </span>
              <h3 className="font-heading text-xl text-white mb-2 font-medium">
                {article.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 line-clamp-2">
                {article.teaser}
              </p>
            </div>
            
            <div className="mt-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-[#E63946]" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12 pt-8 border-t border-white/5">
        <Link href="/insights" className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors group flex items-center gap-2">
          Explore all insights 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
