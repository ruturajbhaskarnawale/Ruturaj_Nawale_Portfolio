"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none",
          scrolled ? "pt-3 md:pt-4" : "pt-5 md:pt-6"
        )}
      >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between px-5 md:px-7 py-2.5 md:py-3 rounded-full border transition-all duration-300 mx-4",
            scrolled
              ? "bg-black/80 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.8)] w-[92vw] md:w-auto md:min-w-[640px]"
              : "bg-black/30 backdrop-blur-md border-white/10 w-full md:w-auto max-w-7xl"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white mr-6"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Ruturaj Nawale Home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold group-hover:bg-blue-500 group-hover:text-black transition-colors">
              RN
            </span>
            <span className="hidden sm:inline-block font-mono text-xs text-gray-400 tracking-wider">
              // AI.ENG
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="relative px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors rounded-full group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-blue-400 opacity-60 group-hover:opacity-100">
                    {item.number}
                  </span>
                  {item.label}
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-200" />
              </a>
            ))}
          </div>

          {/* Action CTAs: Resume & Let's Talk */}
          <div className="hidden md:flex items-center gap-2.5 ml-6">
            <a
              href="/RuturajNawale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-gray-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/15 hover:text-white transition-all"
              aria-label="Download Resume PDF"
            >
              <FileText size={13} className="text-blue-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-black bg-white rounded-full hover:bg-blue-400 hover:text-black transition-colors shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-3">
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mb-1">
                // CHAPTER DIRECTORY
              </div>
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="flex items-center justify-between text-base font-medium text-gray-300 hover:text-white py-1.5 transition-colors border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-blue-400">{item.number}</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href="/RuturajNawale_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <FileText size={16} className="text-blue-400" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-blue-500 text-black text-sm font-bold hover:bg-blue-400 transition-colors"
                >
                  <span>Initiate Transmission (Contact)</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
