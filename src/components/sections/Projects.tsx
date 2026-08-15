"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { enterpriseProjects, academicProjects, EnterpriseProject, AcademicProject } from "@/lib/data";
import { EXPO_OUT } from "@/lib/motionConfig";
import { useInteractiveHover } from "@/lib/useInteractiveHover";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  X, 
  ChevronRight,
  Database,
  Sparkles,
  Binary
} from "lucide-react";
import { cn } from "@/lib/utils";

// Enterprise Case Study Card
function EnterpriseCard({
  project,
  index,
  onOpenCaseStudy,
}: {
  project: EnterpriseProject;
  index: number;
  onOpenCaseStudy: (project: EnterpriseProject) => void;
}) {
  const { ref, handlers, glowStyle } = useInteractiveHover("rgba(56, 189, 248, 0.18)");

  return (
    <motion.div
      ref={ref}
      {...handlers}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EXPO_OUT }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
      style={glowStyle}
    >
      {/* Background Gradient Mesh */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40", project.color)} />

      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-blue-400">
              0{index + 1}.
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-[11px] uppercase tracking-wider">
              {project.badge}
            </span>
          </div>

          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline-block">
            {project.domain}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-blue-200 transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
          {project.summary}
        </p>

        {/* Architecture Highlights Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="truncate">{metric}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions & Tech Stack */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 max-w-lg">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-gray-400 border border-white/5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-0.5 text-[11px] font-mono text-gray-500">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-blue-400 hover:text-black transition-colors group/btn shadow-md whitespace-nowrap"
        >
          <span>View Architecture</span>
          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<EnterpriseProject | null>(null);
  const [showAcademicWork, setShowAcademicWork] = useState(false);

  return (
    <section id="projects" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

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
              &gt; 04_PROOF // DEPLOYED SYSTEMS_
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            IV. THE PROOF
          </h2>
          <p className="mt-2 text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Production-grade AI systems delivering high-throughput document understanding, biometric verification, and banking intelligence.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-6" />
        </motion.div>

        {/* 4 Primary Enterprise Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {enterpriseProjects.map((project, index) => (
            <EnterpriseCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={setSelectedCaseStudy}
            />
          ))}
        </div>

        {/* Secondary Section: Academic & Personal Lab Work */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <Binary size={15} className="text-purple-400" />
                <span>// ACADEMIC & RESEARCH WORK</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Foundational ML & Computer Vision Lab
              </h3>
            </div>

            <button
              onClick={() => setShowAcademicWork(!showAcademicWork)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {showAcademicWork ? "Hide Lab Projects" : `View Lab Projects (${academicProjects.length})`}
            </button>
          </div>

          <AnimatePresence>
            {showAcademicWork && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: EXPO_OUT }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {academicProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                            {proj.category}
                          </span>
                          <div className="flex items-center gap-2">
                            {proj.links.github && (
                              <a
                                href={proj.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-md text-gray-400 hover:text-white transition-colors"
                                aria-label={`${proj.title} GitHub repo`}
                              >
                                <Github size={14} />
                              </a>
                            )}
                            {proj.links.demo && (
                              <a
                                href={proj.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-md text-gray-400 hover:text-blue-400 transition-colors"
                                aria-label={`${proj.title} Live demo`}
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>

                        <h4 className="text-base font-bold text-white mb-2">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                          {proj.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EXPO_OUT }}
              className="relative z-10 max-w-4xl w-full max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
                  {selectedCaseStudy.badge}
                </span>
                <span className="font-mono text-xs text-gray-500">
                  {selectedCaseStudy.domain}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                {selectedCaseStudy.title}
              </h3>

              {/* Detailed Breakdown */}
              <div className="space-y-4 mb-8">
                {selectedCaseStudy.description.map((para, i) => (
                  <p key={i} className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>

              {/* Architecture Pipeline Stages */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                  <Cpu size={15} />
                  <span>// END-TO-END PIPELINE ARCHITECTURE</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCaseStudy.architecture.map((stage, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-white font-bold">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{stage.stage}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCaseStudy.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
