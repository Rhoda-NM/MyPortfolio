"use client";

import { motion } from "framer-motion";
import { VODSystemVisual } from "./VODSystemVisual";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Heavy radial gradient overlay for depth */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080809]/80 to-[#080809]" />
      
      {/* Vignette Layer to pull focus inward */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#080809_85%)]" />

      {/* Central Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7B2CBF]/10 blur-[120px] rounded-full pointer-events-none z-15" />
      
      {/* Ghost System Visual - Stretched across the viewport */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] blur-[3px] text-white pt-48 lg:pt-64 overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[200%] sm:w-[150%] md:w-[120%] lg:w-[110%] xl:w-[100%] h-auto flex items-center justify-center flex-shrink-0"
        >
          {/* Note: The stroke='currentColor' in VODSystemVisual paired with text-white on the parent will enforce the stroke color */}
          <VODSystemVisual />
        </motion.div>
      </div>
    </div>
  );
}
