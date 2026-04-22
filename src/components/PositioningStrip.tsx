"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function PositioningStrip() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative w-full bg-[#080809] py-32 border-t border-[#ffffff03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-24"
        >
          {/* Header Section */}
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading"
            >
              System Design, Not Just Development
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              Most digital products fail not because of poor code, but because of
              poor system design. I design and build systems that are structured
              for scale, optimized for performance, and engineered for real-world
              use — not just ideal conditions.
            </motion.p>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20">
            {/* Pillar 1: Architecture */}
            <motion.div
              variants={itemVariants}
              className="group relative p-8 -m-8 rounded-2xl transition-all duration-500 hover:bg-[#7B2CBF]/5 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(123,44,191,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#7B2CBF]/0 group-hover:bg-[#7B2CBF]/15 blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm tracking-wider text-zinc-400">
                  [01_ARCHITECTURE]
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-heading">
                  Structured for Scale.
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Every system is designed with clear boundaries and scalable
                  structure—decisions that hold under growth. Not just what works
                  today, but what continues to work as complexity increases.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Performance */}
            <motion.div
              variants={itemVariants}
              className="group relative p-8 -m-8 rounded-2xl transition-all duration-500 hover:bg-[#7B2CBF]/5 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(123,44,191,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#7B2CBF]/0 group-hover:bg-[#7B2CBF]/15 blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm tracking-wider text-zinc-400">
                  [02_PERFORMANCE]
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-heading">
                  Performance is Engineered — Not Added.
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Performance is not an afterthought. It is built into the system
                  from the start—from data flow to infrastructure. Systems are
                  designed to remain fast, stable, and responsive under real-world
                  conditions.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Automation */}
            <motion.div
              variants={itemVariants}
              className="group relative p-8 -m-8 rounded-2xl transition-all duration-500 hover:bg-[#7B2CBF]/5 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(123,44,191,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#7B2CBF]/0 group-hover:bg-[#7B2CBF]/15 blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm tracking-wider text-zinc-400">
                  [03_AUTOMATION]
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-heading">
                  Reduce Friction. Increase Leverage.
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  From AI-driven workflows to automated processes, the goal is to
                  create systems that operate efficiently with minimal manual
                  intervention.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Conclusion Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-24 pb-8 flex flex-col items-center justify-center relative mt-12"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 max-w-sm h-[1px] bg-gradient-to-r from-transparent via-[#7B2CBF]/80 to-transparent blur-[2px]" />
            <p className="text-center text-2xl md:text-4xl text-white font-heading font-semibold tracking-tighter max-w-3xl mx-auto leading-tight">
              This is the difference between building applications <br className="hidden md:block" />
              <span className="text-gray-500">— and engineering systems that scale.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
