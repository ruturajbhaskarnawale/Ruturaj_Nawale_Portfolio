"use client";

import { useTransform, motion, MotionValue, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import { Cpu, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Normalized mouse values (-1 to 1) for subtle 3D parallax
  const normMouseX = useMotionValue(0);
  const normMouseY = useMotionValue(0);

  // Smooth springs for gentle mouse tilt
  const springRotateX = useSpring(useTransform(normMouseY, [-1, 1], [3, -3]), { stiffness: 100, damping: 20 });
  const springRotateY = useSpring(useTransform(normMouseX, [-1, 1], [-4.5, 4.5]), { stiffness: 100, damping: 20 });
  const springTranslateX = useSpring(useTransform(normMouseX, [-1, 1], [-14, 14]), { stiffness: 90, damping: 22 });
  const springTranslateY = useSpring(useTransform(normMouseY, [-1, 1], [-8, 8]), { stiffness: 90, damping: 22 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
      normMouseX.set((clientX / window.innerWidth) * 2 - 1);
      normMouseY.set((clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, normMouseX, normMouseY]);

  // Dynamic ambient spotlight
  const dynamicBackground = useMotionTemplate`radial-gradient(900px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.05), transparent 75%)`;

  // =========================================================================
  // SLOW, ELEGANT PARALLAX ELEVATION & DEPTH DISSOLVE ON SCROLL
  // Smooth, continuous glide upwards with graceful opacity fade
  // =========================================================================
  const textY = useTransform(scrollYProgress, [0, 0.7, 1], [0, -180, -280]);
  const textScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.97, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45, 0.82, 1], [1, 0.85, 0.25, 0]);

  // Portrait slow parallax elevation
  const portraitY = useTransform(scrollYProgress, [0, 0.7, 1], [0, -80, -140]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.98, 0.93]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.6, 0.95], [1, 0.85, 0]);

  // HUD and Subtitles fade gently on scroll
  const hudOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <motion.div
      suppressHydrationWarning
      className="absolute inset-0 z-10 flex flex-col justify-between text-white overflow-hidden pointer-events-none"
      style={{ background: mounted ? dynamicBackground : undefined }}
    >
      {/* Chapter 01 Top HUD Tag */}
      <motion.div 
        style={{ opacity: hudOpacity }}
        className="absolute top-24 left-6 md:left-14 z-30 flex items-center gap-2"
      >
        <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-mono text-xs text-cyan-400 tracking-wider">
          &gt; 01_INIT // RESOLVING SIGNAL_
        </span>
      </motion.div>

      {/* ========================================================================= */}
      {/* LAYER 1: Giant Backdrop Typography ("RUTURAJ NAWALE" Behind Portrait)     */}
      {/* ========================================================================= */}
      <motion.div
        suppressHydrationWarning
        style={{
          opacity: textOpacity,
          scale: textScale,
          y: textY,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 will-change-transform"
      >
        <div className="text-center w-full px-4 transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16">
          <h1 className="text-[11.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[8vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200/90 to-neutral-700/20 uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] whitespace-nowrap">
            RUTURAJ NAWALE
          </h1>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* LAYER 2: 2K Ultra-Sharp Living Video-Animated Portrait Cutout             */}
      {/* ========================================================================= */}
      <motion.div
        suppressHydrationWarning
        style={{
          opacity: portraitOpacity,
          scale: portraitScale,
          y: portraitY,
        }}
        className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none will-change-transform"
      >
        <motion.div
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            x: springTranslateX,
            y: springTranslateY,
            transformPerspective: 1000,
          }}
          className="relative w-[360px] sm:w-[480px] md:w-[600px] lg:w-[680px] xl:w-[760px] h-[80vh] max-h-[900px] flex items-end justify-center will-change-transform"
        >
          {/* Living Organic Ambient Floating Loop */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              rotate: [-0.2, 0.2, -0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full flex items-end justify-center"
          >
            {/* Soft Ambient Backlight Glow behind portrait */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none animate-pulse" />

            {/* 2K Uncompressed Crisp Portrait with Native Contrast */}
            <div className="relative w-full h-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
              <Image
                src="/hero-portrait.png"
                alt="Ruturaj Nawale - AI Engineer"
                fill
                priority
                unoptimized={true}
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)] select-none [image-rendering:-webkit-optimize-contrast] [transform:translateZ(0)] [backface-visibility:hidden]"
              />

              {/* Subtle Specular Light Sweep Shimmer */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: ["100%", "-100%"],
                  opacity: [0, 0.18, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent skew-x-12 pointer-events-none mix-blend-overlay"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* LAYER 3: Foreground Subtitle & AI Systems Telemetry                       */}
      {/* ========================================================================= */}
      <motion.div
        suppressHydrationWarning
        style={{ opacity: hudOpacity }}
        className="relative z-30 w-full flex flex-col justify-between h-full p-6 md:p-14 pointer-events-none"
      >
        <div /> {/* Spacer */}

        {/* Bottom Hero HUD Bar */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pb-4">
          {/* Left Title & Status */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-xs uppercase tracking-widest mb-3 backdrop-blur-md">
              <Cpu size={14} className="text-cyan-400" />
              <span>Enterprise AI Systems</span>
            </div>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-3">
              <span>AI Engineer</span>
              <span className="text-gray-400 font-serif italic text-2xl sm:text-3xl md:text-4xl font-normal">
                — Enterprise Systems
              </span>
            </div>

            <div className="text-sm md:text-base font-light text-gray-300 font-mono tracking-wide mt-2">
              Computer Vision <span className="text-blue-400">•</span> Multi-Engine OCR <span className="text-blue-400">•</span> Banking Intelligence
            </div>
          </div>

          {/* Right Status Indicator */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-xs text-gray-300 gap-1.5 backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEMS_ONLINE // PRODUCTION</span>
            </div>
            <div className="text-gray-400 text-xs">
              &gt; JODE TECHNOLOGIES PVT. LTD.
            </div>
            <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-1">
              <span>LATENCY: 38ms</span>
              <span>•</span>
              <span>B.SC CS: 9.40 SGPA</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-auto cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-gray-400 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/15 text-cyan-400">
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </motion.div>
    </motion.div>
  );
}
