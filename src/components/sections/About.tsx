"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EXPO_OUT } from "@/lib/motionConfig";
import { useInteractiveHover } from "@/lib/useInteractiveHover";
import { Brain, Cpu, ShieldCheck, Terminal, Award, Layers } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Bento Card with interactive cursor-following ambient glow
const BentoCard = ({ 
  children, 
  className, 
  delay = 0,
  accentColor = "rgba(56, 189, 248, 0.15)"
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  accentColor?: string;
}) => {
  const { ref, handlers, glowStyle } = useInteractiveHover(accentColor);

  return (
    <motion.div
      ref={ref}
      {...handlers}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EXPO_OUT }}
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]",
        className
      )}
      style={glowStyle}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.div>
  );
};

// Animated Number Counter on Viewport Entry
function StatCounter({ target, suffix = "", decimal = 0 }: { target: number; suffix?: string; decimal?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">
      {decimal > 0 ? count.toFixed(decimal) : Math.floor(count)}
      <span className="text-blue-400 font-light">{suffix}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10 max-w-7xl">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 tracking-wider">
              &gt; 02_ORIGIN // PRODUCTION CORE_
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            II. THE ORIGIN
          </h2>
          <p className="mt-2 text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Bridging cutting-edge deep learning research with high-throughput, explainable enterprise systems.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-6" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(190px,auto)]">
          
          {/* 1. Main Bio (Large 2x2) */}
          <BentoCard className="md:col-span-2 md:row-span-2" delay={0.1}>
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-blue-400" />
                  <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">/ MISSION_LOG</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300">
                  PRODUCTION AI
                </span>
              </div>
              
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-100 mb-6">
                {personalInfo.about.p1}
              </p>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                {personalInfo.about.p2}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-gray-400">
              <span className="text-blue-400">&gt; Core Focus:</span>
              <span>Computer Vision</span>
              <span>•</span>
              <span>Dual-Engine OCR</span>
              <span>•</span>
              <span>Biometric Forensics</span>
              <span>•</span>
              <span>Risk Scoring</span>
            </div>
          </BentoCard>

          {/* 2. Stat Card - Years in AI & Systems */}
          <BentoCard className="md:col-span-1 flex flex-col justify-center text-center" delay={0.2} accentColor="rgba(56, 189, 248, 0.2)">
            <div className="flex flex-col items-center">
              <StatCounter target={personalInfo.stats[0].value} suffix={personalInfo.stats[0].suffix} />
              <p className="text-xs font-mono text-gray-300 mt-2 uppercase tracking-widest font-semibold">
                {personalInfo.stats[0].label}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {personalInfo.stats[0].subtext}
              </p>
            </div>
          </BentoCard>

          {/* 3. Stat Card - Academic SGPA */}
          <BentoCard className="md:col-span-1 flex flex-col justify-center text-center" delay={0.3} accentColor="rgba(192, 132, 252, 0.2)">
            <div className="flex flex-col items-center">
              <StatCounter target={personalInfo.stats[2].value} decimal={2} />
              <p className="text-xs font-mono text-gray-300 mt-2 uppercase tracking-widest font-semibold">
                {personalInfo.stats[2].label}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {personalInfo.stats[2].subtext}
              </p>
            </div>
          </BentoCard>

          {/* 4. Stat Card - Production Pipelines */}
          <BentoCard className="md:col-span-2" delay={0.4} accentColor="rgba(52, 211, 153, 0.2)">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain size={18} className="text-emerald-400" />
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">/ ACTIVE_PIPELINES</span>
              </div>
              <span className="font-mono text-xs text-emerald-400 font-bold">10+ Deployed</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-sm font-bold text-white font-mono">KYC OCR</div>
                <div className="text-[10px] text-gray-400">Paddle + TrOCR</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-sm font-bold text-white font-mono">Biometrics</div>
                <div className="text-[10px] text-gray-400">InsightFace 512D</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-sm font-bold text-white font-mono">Deepfake</div>
                <div className="text-[10px] text-gray-400">ViT + EfficientNet</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-sm font-bold text-white font-mono">Banking</div>
                <div className="text-[10px] text-gray-400">UPI/NPCI 5V</div>
              </div>
            </div>
          </BentoCard>

          {/* 5. Core Philosophy Quote */}
          <BentoCard className="md:col-span-2" delay={0.5} accentColor="rgba(192, 132, 252, 0.2)">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">/ CORE_PHILOSOPHY</span>
              </div>
              <blockquote className="text-base md:text-lg italic text-gray-200 border-l-2 border-purple-500 pl-4 my-2 leading-relaxed">
                &ldquo;{personalInfo.about.philosophy}&rdquo;
              </blockquote>
              <div className="font-mono text-xs text-gray-500 text-right mt-2">
                — Ruturaj Nawale
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
