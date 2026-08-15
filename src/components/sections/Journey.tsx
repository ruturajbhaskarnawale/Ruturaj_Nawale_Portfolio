"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { journey, JourneyMilestone } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EXPO_OUT } from "@/lib/motionConfig";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

function TimelineItem({ item, index }: { item: JourneyMilestone; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EXPO_OUT }}
      className={cn(
        "relative flex items-center md:items-start",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Desktop Centering Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Central Neural Node / Milestone Marker */}
      <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#050505] border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
          {item.type === "role" ? (
            <Briefcase size={13} className="text-blue-400" />
          ) : (
            <GraduationCap size={14} className="text-purple-400" />
          )}
          <span className="absolute -inset-1 rounded-full border border-blue-400/40 animate-ping opacity-30 pointer-events-none" />
        </div>
      </div>

      {/* Content Card Container */}
      <div
        className={cn(
          "w-full md:w-1/2 pl-16 md:pl-0",
          isEven ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"
        )}
      >
        <div className="p-7 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
          {/* Header Metadata */}
          <div className={cn("flex flex-wrap items-center gap-2 mb-3", isEven ? "md:justify-end" : "md:justify-start")}>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300">
              {item.badge}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
              <Calendar size={12} className="text-blue-400" />
              {item.year}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
            {item.title}
          </h3>

          <div className={cn("flex items-center gap-2 text-sm text-purple-300 font-medium mb-4", isEven ? "md:justify-end" : "md:justify-start")}>
            <span>{item.company}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <MapPin size={11} />
              {item.location}
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light text-left">
            {item.description}
          </p>

          {/* Key Achievements / Responsibilities */}
          <div className="space-y-2 mb-6 text-left">
            {item.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400 font-light leading-relaxed">
                <CheckCircle2 size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className={cn("flex flex-wrap gap-1.5 pt-4 border-t border-white/5", isEven ? "md:justify-end" : "md:justify-start")}>
            {item.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-gray-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative z-20 bg-[#060606] py-32 px-4 md:px-12 overflow-hidden text-white"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="font-mono text-xs text-blue-400 tracking-wider">
              &gt; 05_TRAJECTORY // CAREER PATH_
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            V. THE PATH
          </h2>
          <p className="mt-2 text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            An accelerating trajectory in machine learning engineering, enterprise pipelines, and academic excellence.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-6" />
        </motion.div>

        {/* Central Neural Timeline Track */}
        <div className="relative max-w-5xl mx-auto">
          {/* Base Inactive Track */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />

          {/* Active Glowing Progress Track */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 transform md:-translate-x-1/2 origin-top shadow-[0_0_18px_rgba(59,130,246,0.8)]"
          />

          <div className="space-y-20">
            {journey.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
