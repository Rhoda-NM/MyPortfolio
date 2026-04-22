"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const systems = [
  {
    headline: "Kinari Live",
    description: [
      "Real-time streaming infrastructure designed for low-latency broadcast delivery.",
      "Built around a browser-native capture pipeline using WebRTC, LiveKit, egress orchestration, and Cloudflare delivery — engineered to move from creator input to viewer playback with speed and resilience."
    ],
    tags: ["Real-Time Systems", "Streaming Infrastructure", "WebRTC", "Cloudflare"],
    href: "/systems/kinari-live"
  },
  {
    headline: "Whisper Engine",
    description: [
      "An AI-driven response and memory system designed for contextual interaction at scale.",
      "Structured around wallet-aware usage logic, tiered access, memory injection, and response orchestration — combining product logic, persistence, and AI execution into a cohesive experience."
    ],
    tags: ["AI Systems", "Context Engineering", "Product Logic", "Automation"],
    href: "#"
  },
  {
    headline: "Operational Platform Systems",
    description: [
      "Full-stack systems built to support business workflows, data integrity, and long-term maintainability.",
      "From authenticated APIs to structured admin workflows, these systems are designed around clean architecture, operational usability, and reliable application behavior under real use."
    ],
    tags: ["Full-Stack Systems", "Backend Architecture", "API Design", "Product Infrastructure"],
    href: "#"
  }
];

export default function SelectedSystems() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative w-full bg-[#080809] py-32 border-t border-[#ffffff05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <motion.span 
              variants={itemVariants}
              className="font-mono text-xs tracking-widest text-[#c0c0c0] uppercase"
            >
              [SELECTED SYSTEMS]
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading"
            >
              Built for real-world performance.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-gray-400 text-lg leading-relaxed font-sans"
            >
              A selection of systems designed for scale, reliability, and operational clarity — from real-time infrastructure to intelligent digital workflows.
            </motion.p>
          </div>

          {/* Cards Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-white/[0.03] border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7B2CBF]/15 flex flex-col h-full overflow-hidden ${
                  index === 0 ? "lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Subtle Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/0 via-transparent to-[#7B2CBF]/0 group-hover:from-[#7B2CBF]/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />

                <div className={`flex flex-grow relative z-10 ${index === 0 ? "flex-col md:flex-row md:gap-16" : "flex-col"}`}>
                  <div className={index === 0 ? "w-full md:w-1/3 shrink-0" : ""}>
                    <h3 className={`font-bold text-white tracking-tight font-heading mb-6 ${index === 0 ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}>
                      {system.headline}
                    </h3>
                  </div>
                  
                  <div className={`flex flex-col gap-4 text-gray-400 leading-relaxed text-sm md:text-base mb-10 flex-grow pr-4 ${index === 0 ? "w-full md:w-2/3 md:text-lg" : "md:pr-12"}`}>
                    {system.description.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                {/* Tags & Action Row */}
                <div className="mt-auto pt-6 relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {system.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="font-mono text-[10px] px-2 py-1 border border-white/20 rounded-md text-gray-300 opacity-80 group-hover:opacity-100 group-hover:border-white/40 transition-all duration-300 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={system.href}
                    className="shrink-0 inline-flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-white/70 bg-white/5 hover:bg-white hover:text-black px-6 py-3 rounded-full border border-white/10 transition-all duration-300 cursor-pointer"
                  >
                    View System
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="pt-32 flex justify-center"
          >
            <p className="text-base md:text-lg text-white/70 text-center tracking-wide font-sans">
              Need a system built with the same level of clarity?{" "}
              <br className="block sm:hidden" />
              <Link 
                href="#contact" 
                className="text-white hover:text-white transition-all font-semibold underline underline-offset-8 decoration-white/40 hover:decoration-[#7B2CBF] hover:shadow-[0_0_15px_rgba(123,44,191,0.5)]"
              >
                Start a project.
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
