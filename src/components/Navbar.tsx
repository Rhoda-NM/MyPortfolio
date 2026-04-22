"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "";
  
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl border-b border-white/10 bg-[#080809]/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading font-medium text-xl tracking-[0.2em] text-white uppercase magnetic">
          RHODA MUYA
        </Link>
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors magnetic">About</Link>
          <Link href="#systems" className="text-sm font-medium text-white/70 hover:text-white transition-colors magnetic">Systems</Link>
          <Link href="/insights" className="relative text-sm font-medium text-white/70 hover:text-white transition-colors magnetic">
            Insights
            {pathname.startsWith("/insights") && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7B2CBF] rounded-full" />
            )}
          </Link>
          <Link 
            href="#contact" 
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all magnetic flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2CBF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
