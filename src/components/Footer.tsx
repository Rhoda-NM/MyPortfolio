
import { Link2, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-10 px-6 lg:px-8 font-sans relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4 pr-0 md:pr-8 md:col-span-5 lg:col-span-6">
            <h2 className="text-white font-heading tracking-[0.2em] uppercase text-xl font-bold">
              RHODA MUYA
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Building for the 10-year success, not just next week’s launch.
            </p>
          </div>

          {/* Column 2: Direct / Contact */}
          <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-3">
            <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
              [CONTACT]
            </span>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a 
                href="mailto:hello@rhodamuya.com" 
                className="group flex items-center gap-3 hover:text-[#7B2CBF] transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-[#7B2CBF] transition-colors" />
                hello@rhodamuya.com
              </a>
              <a 
                href="tel:+254700000000" 
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                +254 700 000 000
              </a>
            </div>
          </div>

          {/* Column 3: Social / Links */}
          <div className="flex flex-col gap-6 md:col-span-3 lg:col-span-3 lg:items-end">
            <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
              [SOCIAL]
            </span>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a 
                href="https://linkedin.com/in/rhodamuya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <Link2 className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                LinkedIn
              </a>
              <a 
                href="https://rhodamuya.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                Substack
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: CTA & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          
          <div className="text-center md:text-left text-xs text-zinc-500 uppercase tracking-widest font-mono">
            © 2026 RHODA MUYA. ALL RIGHTS RESERVED. ENGINEERED FOR SCALE.
          </div>

          <div className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B2CBF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B2CBF]"></span>
            </span>
            <span className="text-xs text-gray-300 font-mono uppercase tracking-wider">
              System Status: Ready for new projects
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
