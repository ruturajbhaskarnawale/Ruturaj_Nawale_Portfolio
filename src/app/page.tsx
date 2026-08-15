"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChapterIndicator from "@/components/layout/ChapterIndicator";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Research from "@/components/sections/Research";
import Contact from "@/components/sections/Contact";
import dynamic from "next/dynamic";

// Dynamic import for 3D Skills Word Cloud to ensure clean client-side WebGL hydration
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#060606] text-gray-500 font-mono text-xs">
      &gt; LOADING 3D ARSENAL TOPOLOGY_
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Floating Roman Numeral Chapter Progress & Skip Navigator */}
      <ChapterIndicator />

      {/* Chapter I: The Signal */}
      <Hero />

      {/* Chapter II: The Origin */}
      <About />

      {/* Chapter III: The Arsenal */}
      <Skills />

      {/* Chapter IV: The Proof */}
      <Projects />

      {/* Chapter V: The Path */}
      <Journey />

      {/* Chapter VI: The Frontier */}
      <Research />

      {/* Chapter VII: Transmission */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
