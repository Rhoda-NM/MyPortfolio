"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function WhisperEngineDetail() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-[#080809] text-white overflow-hidden selection:bg-[#7B2CBF]/30">
      <Navbar />

      {/* Navigation Return */}
      <div className="fixed top-28 left-6 md:left-12 z-50">
        <Link 
          href="/#systems" 
          className="group flex items-center gap-2 text-sm font-sans tracking-wide text-gray-500 hover:text-white transition-colors uppercase"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Systems
        </Link>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 py-40 md:py-52"
      >
        {/* 1. Hero */}
        <section className="relative mb-32 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B2CBF]/20 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

          <motion.span 
            variants={fadeUp}
            className="font-mono text-xs tracking-widest text-[#c0c0c0] uppercase mb-6"
          >
            [SYSTEM_DEEP_DIVE]
          </motion.span>
          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tighter font-heading text-white mb-6"
          >
            Whisper Engine
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-400 font-sans leading-relaxed max-w-2xl mb-10"
          >
            An AI-powered system for building context-aware applications that remember, respond, and adapt in real time. Designed to handle dynamic user interactions, persistent memory, and controlled access.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            {["AI Systems", "Context Engineering", "Product Logic", "Automation"].map((badge, idx) => (
              <span 
                key={idx}
                className="font-mono text-[10px] px-3 py-1.5 border border-white/10 rounded-md text-gray-300 bg-white/[0.02]"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 2. What This Enables (Impact) */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [01_IMPACT]
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Persistent Memory", desc: "Maintains state across user sessions, allowing AI to build on past interactions rather than starting over." },
                { title: "Wallet-Based Metering", desc: "Built-in usage logic that ties directly to billing, enabling business-critical access control." },
                { title: "Scalable Execution", desc: "Integrates directly into real product workflows, moving beyond isolated prompt-response loops." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-l border-[#7B2CBF]/30 pl-6">
                  <h4 className="text-white font-heading font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-400 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. The Approach (The "How") */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [THE_APPROACH]
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Memory Layer", desc: "Transitioning from a 'resetting' AI to responses that evolve based on user history through robust session management." },
                { title: "Usage & Access Control", desc: "Wallet-aware logic utilized to manage and restrict consumption—a key differentiator required for sustainable, business-critical AI applications." },
                { title: "Orchestration", desc: "Transforming isolated API calls into a cohesive, managed product experience with structured pipelines." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl group hover:border-[#7B2CBF]/30 transition-colors duration-500">
                  <h3 className="text-xl font-bold font-heading text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. Engineering Challenges */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [02_CHALLENGES]
            </span>
            
            <div className="flex flex-col gap-8">
              <div className="border-l border-[#7B2CBF]/30 pl-6">
                <h4 className="text-white font-heading font-semibold text-xl mb-2">The &apos;Stateless AI&apos; Problem</h4>
                <p className="text-gray-400 font-sans leading-relaxed mb-4">
                  LLMs are inherently stateless. The primary challenge was designing a memory injection system capable of intelligently retrieving past interactions without bloating request payloads or hitting token limits.
                </p>
              </div>
              <div className="border-l border-[#7B2CBF]/30 pl-6">
                <h4 className="text-white font-heading font-semibold text-xl mb-2">Reliable Orchestration</h4>
                <p className="text-gray-400 font-sans leading-relaxed">
                  To ensure responses are consistently reliable, we developed Structured Prompt Templates and Controlled Execution Pipelines. This prevents prompt drift and enforces predictable outputs, aligning the AI behavior tightly with product requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. The Why This Matters Bridge */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="p-8 md:p-12 border border-white/10 bg-white/[0.02] rounded-3xl text-center flex flex-col gap-8 items-center">
            <span className="font-mono text-xs tracking-widest text-[#7B2CBF] uppercase">
              [WHY_THIS_MATTERS]
            </span>
            <p className="text-xl md:text-2xl text-white font-sans leading-relaxed max-w-3xl">
              Most AI integrations stop at chat interfaces. This system introduces the structure and control needed to turn AI into a core system capability, embedding intelligence seamlessly into the user workflow.
            </p>
          </motion.div>
        </section>

        {/* 6. Conversion CTA */}
        <motion.div variants={fadeUp} className="pt-20 pb-32 border-t border-white/5 flex flex-col items-center gap-8 text-center">
          <p className="text-gray-400 font-sans text-xl md:text-2xl max-w-xl leading-relaxed">
            Building an AI-powered product that needs structure and scale?
          </p>
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold font-sans rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            Start a Project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </motion.div>
    </main>
  );
}
