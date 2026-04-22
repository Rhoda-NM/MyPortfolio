"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function KinariLiveDetail() {
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
      <div className="absolute top-28 left-6 md:left-12 z-50">
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
            Kinari Live
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-400 font-sans leading-relaxed max-w-2xl mb-10"
          >
            Real-time streaming infrastructure designed for low-latency broadcast delivery.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            {["Real-Time Systems", "WebRTC / Streaming", "Infrastructure Design"].map((badge, idx) => (
              <span 
                key={idx}
                className="font-mono text-[10px] px-3 py-1.5 border border-white/10 rounded-md text-gray-300 bg-white/[0.02]"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 2. The Problem */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [01_THE_PROBLEM]
            </span>
            <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed">
              Real-time video delivery is fundamentally complex. Traditional streaming pipelines introduce latency, break under network variability, and rely heavily on external encoding tools. The challenge was to design a system that enables <strong className="text-white font-medium">real-time broadcasting directly from the browser</strong>, while maintaining performance, reliability, and scalability.
            </p>
          </motion.div>
        </section>

        {/* 3. The System Approach */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [THE_APPROACH]
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Browser-Native Encoding", desc: "Using WebRTC to capture and encode streams directly from the client, bypassing external heavy-lifters." },
                { title: "Real-Time Transport", desc: "LiveKit SFU orchestration for low-latency distribution and efficient routing." },
                { title: "Format Conversion", desc: "Egress pipelines to convert WebRTC to RTMPS for legacy CDN compatibility." },
                { title: "Global Delivery", desc: "Cloudflare HLS transformation for scalable, regional playback." }
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

        {/* 4. System Flow (The Visual Blueprint) */}
        <section className="mb-32 relative">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [SYSTEM_FLOW]
            </span>

            <div className="w-full bg-[#0c0c0e] border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden relative flex items-center justify-center">
              {/* Nodes and Flow Layout */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl relative z-10 gap-4 md:gap-0">
                {["Creator", "WebRTC", "LiveKit", "Egress", "Cloudflare", "Viewer"].map((node, idx, arr) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center relative gap-4 md:gap-0">
                    <div className="bg-black/50 border border-white/20 backdrop-blur-md text-white font-mono text-xs md:text-sm px-4 py-2 rounded-lg z-20 shadow-[0_0_20px_rgba(123,44,191,0.1)]">
                      {node}
                    </div>
                    {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
                    {idx !== arr.length - 1 && (
                      <div className="w-px h-8 md:w-12 md:h-px bg-white/10 relative overflow-hidden flex-shrink-0 z-10">
                        <motion.div 
                          className="absolute bg-[#7B2CBF] shadow-[0_0_8px_#7B2CBF] opacity-70"
                          initial={{ left: "-100%", top: 0, width: "100%", height: "1px" }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 1.5, ease: "linear", repeat: Infinity, delay: idx * 0.2 }}
                          style={{
                            /* Mobile vertical handling approximation via generic css */
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Background ambient light */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF]/5 via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </section>

        {/* 5. Engineering Challenges */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              [02_CHALLENGES]
            </span>
            
            <div className="flex flex-col gap-8">
              <div className="border-l border-[#7B2CBF]/30 pl-6">
                <h4 className="text-white font-heading font-semibold text-xl mb-2">Latency vs. Compatibility</h4>
                <p className="text-gray-400 font-sans leading-relaxed">
                  WebRTC offers ultra-low latency but struggles with massive concurrent global fan-out compared to robust CDNs. Extracting the pure WebRTC feed and dynamically transcoding it into HLS via egress workers was necessary to support unbounded audiences while keeping the host&apos;s ingest latency sub-second.
                </p>
              </div>
              <div className="border-l border-[#7B2CBF]/30 pl-6">
                <h4 className="text-white font-heading font-semibold text-xl mb-2">Network Variability</h4>
                <p className="text-gray-400 font-sans leading-relaxed">
                  Browser-native capture is vulnerable to the client&apos;s network state. We implemented aggressive adaptive bitrate streaming (ABR) and simulated edge fallback mechanics to ensure that upstream packet loss resulted in resolution degradation rather than connection drops.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 6. Technical Stack & Closing Insight */}
        <section className="mb-32">
          <motion.div variants={fadeUp} className="flex flex-col gap-16">
            <div>
              <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-6">
                [TECHNICAL_STACK]
              </span>
              <ul className="flex flex-wrap gap-4 md:gap-8 items-center text-gray-300 font-sans font-medium text-sm md:text-base">
                <li>WebRTC</li>
                <li className="text-zinc-700">•</li>
                <li>LiveKit</li>
                <li className="text-zinc-700">•</li>
                <li>Cloudflare Stream</li>
                <li className="text-zinc-700">•</li>
                <li>Next.js</li>
                <li className="text-zinc-700">•</li>
                <li>Node APIs</li>
              </ul>
            </div>

            <div className="relative py-12">
              <p className="text-2xl md:text-3xl text-white font-heading font-medium tracking-tight leading-relaxed italic text-center max-w-3xl mx-auto">
                &quot;Building real-time systems requires more than connecting services — it requires understanding how data moves, transforms, and fails under pressure.&quot;
              </p>
            </div>
          </motion.div>
        </section>

        {/* 7. Conversion CTA */}
        <motion.div variants={fadeUp} className="pt-20 pb-32 border-t border-white/5 flex justify-center">
          <div className="text-center">
            <p className="text-gray-400 font-sans text-lg md:text-xl mb-8">
              Looking to build a system with this level of clarity?
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold font-sans uppercase tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
