"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#080809] py-32 border-t border-white/10 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 border border-white/10 rounded-[2rem] p-8 md:p-16 lg:p-20 bg-[#080809]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(123,44,191,0.15)] group">
              <div className="absolute inset-0 border border-[#7B2CBF]/40 rounded-3xl z-20 pointer-events-none group-hover:border-[#7B2CBF]/80 transition-colors duration-500" />
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-sans mb-10 leading-tight">
              Engineering for Growth, Not Just Function.
            </h2>
            
            <div className="flex flex-col gap-6 text-gray-400 text-lg leading-relaxed font-sans mb-12">
              <p>
                <strong className="text-white font-medium">I am Rhoda Muya</strong> — a System Architect and Software Developer focused on the intersection of scalable infrastructure and business-critical logic.
              </p>
              <p>
                While many developers focus on the immediate sprint, I look at the ten-year horizon. I design systems that aren&apos;t just built to work—they are built to survive growth. Whether it is a real-time VOD pipeline or an AI-driven data ecosystem, my goal is to eliminate technical fragility so founders can focus on their vision, not their uptime.
              </p>
              <p>
                <strong className="text-white font-medium block mb-1 mt-2">The Gap</strong>
                I’ve seen too many products fail because their &quot;MVP&quot; wasn&apos;t designed for a single day of actual success.
              </p>
              <p>
                <strong className="text-white font-medium block mb-1 mt-2">The Solution</strong>
                I treat architecture as a strategic asset. By prioritizing clear boundaries, modular data flows, and automated resilience, I ensure that your technical foundation is an engine for growth, rather than a bottleneck.
              </p>
            </div>

            {/* Expertise Badges */}
            <div className="flex flex-col gap-6 mb-12">
              <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                [DOMAIN_EXPERTISE]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Media Infrastructure", desc: "Building high-concurrency VOD and streaming platforms (Kinari Live)." },
                  { title: "Intelligent Systems", desc: "Orchestrating context-aware AI and automation (Whisper Engine)." },
                  { title: "Market Data", desc: "Engineering deep-web scraping and analysis tools for high-stakes real estate markets." }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 border border-white/10 rounded-xl bg-transparent hover:bg-white/[0.02] transition-colors flex flex-col gap-3 group">
                    <span className="text-white font-medium text-sm font-sans">{item.title}</span>
                    <span className="text-gray-500 text-xs font-sans leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Intent Block */}
            <div className="mt-auto p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <p className="text-white text-lg md:text-xl font-medium font-sans leading-relaxed italic">
                &quot;I don&apos;t just write code; I design the systems that allow businesses to scale with confidence.&quot;
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
