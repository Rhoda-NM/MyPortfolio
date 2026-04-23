"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If not on homepage, navigate to homepage with hash
    if (pathname !== "/") {
      router.push(`/${id}`);
      return;
    }

    // If on homepage, scroll to element
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl border-b border-white/10 bg-[#080809]/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        <Link href="/" className="font-heading font-medium text-xl tracking-[0.2em] text-white uppercase magnetic">
          RHODA MUYA
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-sm font-medium text-white/70 hover:text-white transition-colors magnetic cursor-pointer">About</a>
          <a href="#systems" onClick={(e) => handleScroll(e, '#systems')} className="text-sm font-medium text-white/70 hover:text-white transition-colors magnetic cursor-pointer">Systems</a>
          <a href="#insights" onClick={(e) => handleScroll(e, '#insights')} className="relative text-sm font-medium text-white/70 hover:text-white transition-colors magnetic cursor-pointer">
            Insights
            {pathname.startsWith("/insights") && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7B2CBF] rounded-full" />
            )}
          </a>
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all magnetic flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2CBF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#080809]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6 z-40 shadow-2xl"
          >
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-lg font-medium text-white/70 hover:text-white transition-colors">About</a>
            <a href="#systems" onClick={(e) => handleScroll(e, '#systems')} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Systems</a>
            <a href="#insights" onClick={(e) => handleScroll(e, '#insights')} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Insights</a>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all text-center w-full mt-4"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
