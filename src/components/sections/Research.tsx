"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/data";
import { ArrowUpRight, FileText, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { EXPO_OUT } from "@/lib/motionConfig";
import { useInteractiveHover } from "@/lib/useInteractiveHover";

export default function Research() {
  const { ref, handlers, glowStyle } = useInteractiveHover("rgba(192, 132, 252, 0.2)");

  return (
    <section id="research" className="relative z-20 bg-[#050505] py-32 px-4 md:px-12 overflow-hidden text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-purple-400 tracking-wider">
              &gt; 06_FRONTIER // EMPIRICAL STUDY_
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            VI. THE FRONTIER
          </h2>
          <p className="mt-2 text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Empirical inquiry and academic research contributing to machine learning and consumer intelligence.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-purple-500/40 via-white/10 to-transparent mt-6" />
        </motion.div>

        {/* Research Publication Showcase Card */}
        {research.map((item, index) => (
          <motion.div
            key={index}
            ref={ref}
            {...handlers}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EXPO_OUT }}
            className="group relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            style={glowStyle}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              {/* Publication Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono uppercase tracking-wider">
                    {item.date}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Peer-Reviewed & Presented
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-light max-w-4xl">
                  {item.description}
                </p>

                {/* Key Research Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-400 font-light">
                      <CheckCircle2 size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <Award size={16} className="text-purple-400" />
                  <span>Presented at:</span>
                  <span className="text-white font-bold">{item.conference}</span>
                </div>
              </div>

              {/* Action Button: View Paper */}
              <div className="lg:self-center flex-shrink-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-purple-400 hover:text-black transition-colors shadow-lg group/btn"
                  aria-label="Read Research Paper"
                >
                  <BookOpen size={16} />
                  <span>Read Paper</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
