import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroStaggerContainer, HeroFadeUpItem, MagneticWrapper } from "./HeroMotion";
import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-20 px-6">
      <HeroBackground />

      <HeroStaggerContainer className="w-full max-w-[90vw] lg:max-w-7xl text-center z-10 relative">
        <HeroFadeUpItem className="overflow-hidden mb-10">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05]">
            I design and build systems that scale businesses <br className="hidden md:block" />
            <span className="text-[#7B2CBF] drop-shadow-[0_0_15px_rgba(123,44,191,0.3)]">&mdash; not just websites.</span>
          </h1>
        </HeroFadeUpItem>

        <HeroFadeUpItem className="mb-16 max-w-2xl mx-auto md:translate-x-8">
          <p className="font-sans text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            Architecting real-time platforms, scalable infrastructure, and AI-driven systems built for high-performance enterprise.
          </p>
        </HeroFadeUpItem>

        <HeroFadeUpItem className="flex flex-col sm:flex-row items-center justify-center gap-8 md:-translate-x-8">
          {/* Primary CTA */}
          <MagneticWrapper>
            <Link 
              href="#explore" 
              className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all inline-flex items-center gap-3 backdrop-blur-md cursor-pointer magnetic hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-sans font-semibold text-white tracking-wide uppercase text-sm">Explore Systems</span>
              <ArrowRight className="w-4 h-4 relative z-10 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticWrapper>
          
          {/* Secondary CTA */}
          <Link 
            href="#audit" 
            className="group relative py-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest inline-flex items-center gap-2 cursor-snap cursor-pointer"
          >
            Request a Strategic Audit
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
          </Link>
        </HeroFadeUpItem>
      </HeroStaggerContainer>
    </section>
  );
}