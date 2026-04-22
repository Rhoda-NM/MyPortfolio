"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function PositioningStrip() {
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
          className="flex flex-col gap-16"
        >
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-8 md:mb-0">
            <motion.div variants={itemVariants}>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                [CORE_CAPABILITIES]
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-sans"
            >
              Systems That Turn Ideas Into Scalable Products
            </motion.h2>
            <div className="flex flex-col gap-4">
              <motion.p
                variants={itemVariants}
                className="max-w-3xl text-gray-400 text-lg leading-relaxed font-sans"
              >
                I help founders and businesses turn ideas into reliable, scalable products — from the first version to systems that handle real growth without breaking.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="max-w-3xl text-[#7B2CBF] font-semibold text-xl leading-relaxed font-sans mt-2"
              >
                Most developers focus on features. I focus on building systems that still work when your users grow.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Pillar 1: Build */}
              <motion.div
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.01] transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
                <div className="flex flex-col gap-4 h-full">
                  <span className="font-mono text-sm tracking-wider text-gray-400">
                    [01_BUILD]
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-sans">
                    Full-Stack Product Development
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base flex-grow">
                    I build production-ready applications — not just prototypes — designed to perform reliably as your product grows.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="font-mono text-sm text-gray-400 leading-relaxed">
                      SaaS Platforms, Dashboards, Booking Systems, Internal Tools.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 2: Systems */}
              <motion.div
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.01] transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
                <div className="flex flex-col gap-4 h-full">
                  <span className="font-mono text-sm tracking-wider text-gray-400">
                    [02_SYSTEMS]
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-sans">
                    Scalable Backend & System Architecture
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base flex-grow">
                    I design systems that don’t break under load — so your product remains stable as users, data, and complexity increase.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="font-mono text-sm text-gray-400 leading-relaxed">
                      REST APIs, Real-Time Systems, Database Design, Cloud Deployment.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 3: Automation */}
              <motion.div
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.01] transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
                <div className="flex flex-col gap-4 h-full">
                  <span className="font-mono text-sm tracking-wider text-gray-400">
                    [03_AUTOMATION]
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2 font-sans">
                    Automation & AI-Driven Workflows
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base flex-grow">
                    I eliminate repetitive work by building systems that run automatically — saving time and reducing operational cost.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="font-mono text-sm text-gray-400 leading-relaxed">
                      Automated Workflows, AI Agents, Data Pipelines.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* High-Impact Filter: Who I Work With */}
            <motion.div
              variants={itemVariants}
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center gap-6 md:gap-0"
            >
              <div className="text-gray-400 font-mono tracking-wider whitespace-nowrap md:pr-8 md:border-r md:border-white/10 text-center md:text-left w-full md:w-auto uppercase">
                Who I work with
              </div>
              <div className="flex flex-col md:flex-row w-full justify-evenly items-center gap-4 md:gap-0 text-white font-medium text-sm md:text-base">
                <div className="text-center md:px-6 w-full md:border-r md:border-white/10 border-white/10 pb-4 md:pb-0 border-b md:border-b-0">
                  Founders building SaaS or digital products
                </div>
                <div className="text-center md:px-6 w-full md:border-r md:border-white/10 border-white/10 py-4 md:py-0 border-b md:border-b-0">
                  Businesses that need internal systems or automation
                </div>
                <div className="text-center md:px-6 w-full pt-4 md:pt-0">
                  Teams scaling beyond MVP and hitting technical limits
                </div>
              </div>
            </motion.div>
            
            {/* The Conversion Bridge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 pb-4 mt-4 border-t border-white/5"
            >
              <p className="text-gray-400 text-lg">Want to build something that scales from day one?</p>
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

