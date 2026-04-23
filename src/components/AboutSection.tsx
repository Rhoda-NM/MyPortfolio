"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#080809] py-32 border-t border-white/[0.04] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 border border-white/[0.04] rounded-[2rem] p-8 md:p-16 lg:p-20 bg-[#080809]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none group-hover:border-white/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent z-10 opacity-80" />
              <Image 
                src="/rhoda.png" 
                alt="Rhoda Muya - System Architect"
                fill
                className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <span className="font-mono text-xs text-[#7B2CBF] tracking-widest uppercase">
                [SYSTEM_ARCHITECT_RM]
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col h-full justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-sans mb-8 leading-tight">
              Engineering for Growth, Not Just Function.
            </h2>
            
            <div className="flex flex-col gap-4 mb-8">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-sans">
                I help founders and businesses build high-performance digital products — from customer-facing websites to internal systems that support real growth without breaking.
              </p>
              <p className="text-xl md:text-2xl text-[#7B2CBF] font-serif italic leading-relaxed">
                Because systems don’t fail at the beginning — they fail when they start to grow.
              </p>
            </div>

            <div className="flex flex-col gap-10 mb-12">
              <p className="text-gray-400 text-lg leading-relaxed font-sans">
                I’m Rhoda Muya, a systems-focused software engineer working at the intersection of scalable infrastructure and business-critical logic. While many developers focus on getting features out quickly, I focus on what happens after success. Systems are designed not just to work today, but to remain stable as users, data, and complexity grow.
              </p>
              
              <div className="flex flex-col gap-6 border-l-2 border-[#7B2CBF]/30 pl-6 py-2">
                <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                  [02_THE_PROBLEM_&_SOLUTION]
                </span>
                <div className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed font-sans">
                  <p>
                    <strong className="text-white font-medium">The Gap:</strong> I’ve seen too many products fail not because of bad ideas — but because their MVP couldn’t survive real usage. 
                  </p>
                  <p className="text-white font-medium text-xl bg-[#7B2CBF]/10 p-4 border-l-4 border-[#7B2CBF] rounded-r-lg">
                    What worked for 10 users breaks at 1,000.
                  </p>
                  <p>
                    <strong className="text-white font-medium">The Solution:</strong> I treat architecture as a strategic asset. By designing clear boundaries, resilient data flows, and systems that handle failure gracefully, I ensure your product becomes an engine for growth — not a bottleneck.
                  </p>
                </div>
              </div>
            </div>

            {/* 3-Pillar Expertise Grid */}
            <div className="flex flex-col gap-6 mb-8">
              <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                [DOMAIN_EXPERTISE]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: "[01]", title: "Consumer & E-commerce Platforms", desc: "Focus: Performance and handling traffic spikes." },
                  { num: "[02]", title: "AI-Powered Applications", desc: "Focus: Context-aware systems and real workflows." },
                  { num: "[03]", title: "Operational & Internal Systems", desc: "Focus: Dashboards, APIs, and scaling with the team." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-white/[0.04] rounded-xl bg-transparent hover:bg-white/[0.02] transition-colors flex flex-col gap-3 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-xs text-[#7B2CBF]">{item.num}</span>
                    <span className="text-white font-medium text-sm font-sans">{item.title}</span>
                    <span className="text-gray-500 text-xs font-sans leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-sm md:text-base font-sans leading-relaxed mb-12">
              My work includes building real-time streaming systems, AI-driven platforms, and scalable backend architectures designed for production environments.
            </p>

            {/* Strategic Intent Block & CTA */}
            <div className="mt-auto pt-12 border-t border-white/5 flex flex-col items-center gap-10 text-center">
              <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed max-w-2xl mx-auto">
                &quot;I don&apos;t just build features — I design the systems that allow your business to scale with confidence.&quot;
              </p>
              
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold font-sans rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                Book a Strategic Audit
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
