"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [stage, setStage] = useState<string | null>(null);
  const [otherStage, setOtherStage] = useState("");
  const [budget, setBudget] = useState<string | null>(null);

  const projectTags = [
    "Website/E-commerce",
    "AI Applications",
    "Business Automation",
    "Internal System"
  ];

  const stages = [
    { 
      id: "Starting Fresh", 
      desc: "I have an idea or a business goal and need a partner to build the first version." 
    },
    { 
      id: "Scaling Up", 
      desc: "I have an existing system that needs new features, better performance, or a complete overhaul." 
    },
    { 
      id: "Fixing / Optimizing", 
      desc: "My current system is breaking under load and needs immediate technical remediation." 
    },
    {
      id: "Other",
      desc: "Specific situations not covered above."
    }
  ];

  const budgets = [
    { label: "$1,000 – $5,000", desc: "Targeted improvements or small-scale launches." },
    { label: "$5,000 – $15,000", desc: "Full-scale custom products and systems." },
    { label: "$15,000+", desc: "High-complexity infrastructure." },
    { label: "I’m not sure yet", desc: "Let’s discuss the scope first." }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-[#080809] text-white selection:bg-[#7B2CBF]/30 relative overflow-hidden">
      <Navbar />

      {/* Navigation Return */}
      <div className="absolute top-28 left-6 md:left-12 z-50">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-sans tracking-wide text-gray-500 hover:text-white transition-colors uppercase"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-40 md:py-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column: Form */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col gap-12 relative z-10"
          >
            <div className="flex flex-col gap-6 mb-4">
              <motion.span variants={fadeUp} className="font-mono text-xs tracking-widest text-[#c0c0c0] uppercase">
                [SYSTEM_DISCOVERY]
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tighter font-heading text-white">
                Let’s Work Together.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-400 font-sans leading-relaxed max-w-xl">
                Whether you&apos;re building from scratch or scaling an existing system, let’s design a technical foundation that supports your business goals.
              </motion.p>
            </div>

            <motion.form variants={fadeUp} className="flex flex-col gap-16">
              
              {/* Invisible UI Inputs for Personal Info */}
              <div className="flex flex-col gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 font-sans text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none">
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 font-sans text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none">
                    Email Address
                  </label>
                </div>
              </div>

              {/* 1. The Vision */}
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-2xl font-semibold text-white">What are we building?</h3>
                <div className="flex flex-wrap gap-3">
                  {projectTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 border rounded-full text-sm font-medium font-sans transition-all duration-300 ${
                        selectedTags.includes(tag)
                        ? "border-[#7B2CBF] bg-[#7B2CBF]/10 text-white"
                        : "border-white/10 bg-transparent text-gray-400 hover:border-white/30 hover:text-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="relative group mt-4">
                  <textarea 
                    id="details"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans text-lg focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Tell me more"
                  ></textarea>
                  <label htmlFor="details" className="absolute left-0 top-4 text-gray-500 font-sans text-lg peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none">
                    e.g., I want to build a website for my company, or I need to add an automated booking feature to my existing e-commerce site.
                  </label>
                </div>
              </div>

              {/* 2. Current Status */}
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-2xl font-semibold text-white">Where does the project stand?</h3>
                <div className="flex flex-col gap-4">
                  {stages.map((s) => (
                    <div key={s.id} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setStage(s.id)}
                        className={`text-left p-6 border rounded-xl transition-all duration-300 flex flex-col gap-2 ${
                          stage === s.id 
                          ? "border-[#7B2CBF] bg-[#7B2CBF]/10" 
                          : "border-white/10 bg-transparent hover:border-white/30"
                        }`}
                      >
                        <span className={`font-medium font-sans text-lg ${stage === s.id ? "text-white" : "text-gray-300"}`}>
                          {s.id}
                        </span>
                        <span className={`font-sans text-sm ${stage === s.id ? "text-[#7B2CBF]" : "text-gray-500"}`}>
                          {s.desc}
                        </span>
                      </button>
                      {stage === "Other" && s.id === "Other" && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4"
                        >
                          <input 
                            type="text" 
                            value={otherStage}
                            onChange={(e) => setOtherStage(e.target.value)}
                            className="w-full bg-transparent border-b border-white/10 py-3 text-white font-sans text-base focus:outline-none focus:border-[#7B2CBF] transition-colors placeholder-gray-600"
                            placeholder="Please specify..."
                          />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Budget */}
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-2xl font-semibold text-white">What is your planned investment for this phase?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {budgets.map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => setBudget(b.label)}
                      className={`p-6 border rounded-xl text-left transition-all duration-300 flex flex-col gap-2 ${
                        budget === b.label 
                        ? "border-[#7B2CBF] bg-[#7B2CBF]/10" 
                        : "border-white/10 bg-transparent hover:border-white/30"
                      }`}
                    >
                      <span className={`font-medium font-sans text-lg ${budget === b.label ? "text-white" : "text-gray-300"}`}>
                        {b.label}
                      </span>
                      <span className={`font-sans text-sm ${budget === b.label ? "text-[#7B2CBF]" : "text-gray-500"}`}>
                        {b.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="self-start group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold font-sans rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-8"
              >
                Book a consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

            </motion.form>
          </motion.div>

          {/* Right Column: Sticky Side-Rail */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-40 flex flex-col gap-8 p-10 border border-white/5 rounded-3xl bg-[#0c0c0e] shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2CBF]/10 blur-[50px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold font-heading text-white tracking-tight">
                Why an Audit?
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed text-lg">
                I focus on the technology so you can focus on your business. My goal is to build a product that works as hard as you do — whether it&apos;s your first site or a system handling thousands of users.
              </p>
              
              <div className="pt-8 border-t border-white/5 mt-4">
                <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-4 block">
                  The Process
                </span>
                <ul className="flex flex-col gap-4 text-sm text-gray-500 font-sans">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]"></span>
                    Submit project details
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    Asynchronous review
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    Strategic proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
