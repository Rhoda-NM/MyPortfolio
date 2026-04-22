import React from "react";
import ArticleHero from "@/components/article/ArticleHero";
import InsightBlock from "@/components/article/InsightBlock";
import BusinessBridge from "@/components/article/BusinessBridge";
import TacticalCaseStudy from "@/components/article/TacticalCaseStudy";
import CodeBlock from "@/components/article/CodeBlock";
import TechnicalVisual from "@/components/article/TechnicalVisual";
import ArticleFooter from "@/components/article/ArticleFooter";
import PublicationRail from "@/components/article/PublicationRail";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function SystemDesignDeepDive() {
  return (
    <article className="min-h-screen bg-background relative selection:bg-[#7B2CBF]/30 selection:text-white">
      {/* 1. The Article Hero */}
      <ArticleHero 
        category="SYSTEM_DESIGN"
        title="Fault Isolation in Distributed Micro-frontends"
        subtitle="Designing edge-resilient architecture to ensure partial availability under catastrophic load."
        date="April 2026"
        readTime="9 min read"
      />

      {/* 2. The Reading Column (Typography First) */}
      <div className="max-w-[1150px] mx-auto px-6 relative flex justify-center gap-12 xl:gap-24 items-start">
        <main className="w-full max-w-3xl flex-shrink font-sans text-lg text-gray-300 leading-relaxed pb-24 min-w-0">
        
        <p className="mb-8">
          In large-scale composite applications, the blast radius of a single failing dependency shouldn&apos;t take down the entire user experience. When building the orchestration layer for a high-traffic fintech dashboard, we faced a critical challenge: downstream service latency was causing complete client-side lockups.
        </p>

        {/* 4. Business Bridge */}
        <BusinessBridge>
          <strong>Revenue Protection:</strong> Every 100ms of latency at the edge translated to a 0.5% drop in transaction volume. By isolating failures, we aren{"'"}t just building &quot;better tech&quot;—we are directly protecting the core transaction funnel from third-party API instability. Trust is preserved.
        </BusinessBridge>

        <h2 className={`font-heading ${geistSans.className} text-3xl font-bold text-white mt-16 mb-6 tracking-tight`}>
          The Illusion of Uptime
        </h2>

        <p className="mb-8">
          Traditional SLA metrics can be deeply misleading. A 99.9% uptime on the primary gateway means nothing if the underlying layout shifts and blocks interaction because a secondary authentication service is responding in tightly coupled sequence.
        </p>

        {/* 3. Insight Block */}
        <InsightBlock>
          The goal is not zero failure. It is limiting the blast radius. A resilient system doesn&apos;t hide errors; it degrades gracefully.
        </InsightBlock>

        <p className="mb-8">
          To achieve this, we migrated from unified synchronous rendering to an island-based approach where critical interaction paths are severed from secondary data fetching.
        </p>

        {/* 5. Tactical Case Study */}
        <TacticalCaseStudy 
          incidentContent={
            <>
              During a localized spike in traffic, a legacy pricing API began rate-limiting our internal proxy. It introduced a 4-second delay to the response tail.
            </>
          }
          failureContent={
            <>
              Because the layout hydration was blocking, the 4-second delay on a minor component (pricing tooltip) caused the main trading button to remain unresponsive. The blast radius encompassed the entire session.
            </>
          }
          resolutionContent={
            <>
              Implemented a Suspense-based boundary with a strict 300ms timeout. If the pricing API fails to return, a fallback cached state is rendered. The critical path (trading engine) remains isolated and fully interactive.
            </>
          }
        />

        <h2 className={`font-heading ${geistSans.className} text-3xl font-bold text-white mt-16 mb-6 tracking-tight`}>
          Implementation Details
        </h2>

        <p className="mb-8">
          We utilized a custom fetch wrapper that enforces strict race conditions against an abort controller. This pattern ensures that we never wait indiscriminately for degraded services.
        </p>

        {/* Code Block Component */}
        <CodeBlock 
          filename="lib/network/timeoutFetch.ts"
          code={`export async function timeoutFetch(url: string, timeoutMs = 300) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(\`Request timeout: \${url} exceeded \${timeoutMs}ms\`);
    }
    throw error;
  }
}`}
        />

        {/* 6. Technical Visual */}
        <TechnicalVisual title="Failure Boundary Architecture">
          <svg viewBox="0 0 800 400" className="w-full max-w-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
              {`
                .ghost-line { stroke: rgba(255, 255, 255, 0.2); stroke-dasharray: 4 4; stroke-width: 1; }
                .solid-line { stroke: rgba(123, 44, 191, 0.8); stroke-width: 1.5; }
                .box { fill: rgba(255, 255, 255, 0.03); stroke: rgba(255, 255, 255, 0.1); stroke-width: 1; rx: 8; }
                .text-mono { fill: rgba(255, 255, 255, 0.6); font-family: monospace; font-size: 12px; }
                .text-bold { fill: white; font-family: sans-serif; font-weight: bold; font-size: 14px; }
                .glow { filter: drop-shadow(0 0 8px rgba(123,44,191,0.5)); }
              `}
            </style>
            
            {/* Client */}
            <rect x="50" y="150" width="120" height="100" className="box" />
            <text x="80" y="205" className="text-bold">Client</text>

            <path d="M 170 200 L 250 200" className="solid-line" markerEnd="url(#arrow)" />

            {/* Edge Gateway */}
            <rect x="250" y="100" width="160" height="200" className="box glow" style={{stroke: 'rgba(123,44,191,0.5)'}} />
            <text x="275" y="130" className="text-mono">[GATEWAY]</text>
            <text x="275" y="160" className="text-bold">Timeout Controller</text>
            
            <path d="M 410 150 L 550 100" className="solid-line" markerEnd="url(#arrow)" />
            <path d="M 410 250 L 550 300" className="ghost-line" markerEnd="url(#arrow)" />

            {/* Critical Service */}
            <rect x="550" y="50" width="180" height="100" className="box" />
            <text x="575" y="85" className="text-mono">[SERVICE_01]</text>
            <text x="575" y="115" className="text-bold">Trading Engine</text>
            <circle cx="710" cy="100" r="4" fill="#22c55e" />

            {/* Degraded Service */}
            <rect x="550" y="250" width="180" height="100" className="box" style={{stroke: 'rgba(239,68,68,0.3)'}} />
            <text x="575" y="285" className="text-mono">[SERVICE_02]</text>
            <text x="575" y="315" className="text-bold text-gray-500">Pricing API</text>
            <circle cx="710" cy="300" r="4" fill="#ef4444" />
            
            <text x="440" y="295" className="text-mono" fill="#ef4444" style={{fontSize: '10px'}}>x timeout (300ms)</text>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
              </marker>
            </defs>
          </svg>
        </TechnicalVisual>

        <p className="mb-8">
          The visual above demonstrates the isolation layer. By enforcing the boundary at the gateway, the client relies solely on the primary path, falling back immediately instead of compounding latency.
        </p>

      </main>

      <PublicationRail />
      </div>

      {/* 7. The Narrative Exit (Footer) */}
      <ArticleFooter 
        closingThought="The best architecture isn't the one that never fails. It's the one that fails so gracefully, the user never notices."
      />

    </article>
  );
}
