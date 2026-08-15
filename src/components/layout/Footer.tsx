"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#060606] py-12 px-4 md:px-12 border-t border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-gray-500">•</span>
            <span className="font-mono text-xs text-blue-400">
              {personalInfo.title}
            </span>
          </div>
          <p className="text-neutral-500 text-xs tracking-wide">
            © {new Date().getFullYear()} {personalInfo.name}. Architected with Next.js, Three.js & Framer Motion.
          </p>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ruturajbhaskarnawale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ruturaj-nawale-863418288/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:ruturajnawale888@gmail.com"
            aria-label="Send Email"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="tel:+919833097874"
            aria-label="Direct Phone Contact"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group"
        >
          <span>&gt; RETURN TO ORIGIN_</span>
          <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 transition-colors">
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </button>
      </div>
    </footer>
  );
}
