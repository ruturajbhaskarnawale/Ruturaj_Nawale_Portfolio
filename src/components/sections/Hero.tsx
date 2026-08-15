"use client";

import HeroOverlay from "@/components/sections/HeroOverlay";
import dynamic from "next/dynamic";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { VELOCITY_SPRING } from "@/lib/motionConfig";

// Dynamically import 3D component to avoid SSR Canvas issues
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, VELOCITY_SPRING);

  return (
    <section ref={containerRef} id="hero" className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D Background (Neural Signal Particles) */}
        <Hero3D scrollYProgress={smoothProgress} />
        
        {/* Subtle Vignette Gradient for readability */}
        <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.75)_100%)] pointer-events-none" />

        {/* Text Overlay & Multi-Phase Narrative */}
        <HeroOverlay scrollYProgress={smoothProgress} />
      </div>
    </section>
  );
}
