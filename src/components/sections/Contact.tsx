"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, ArrowUpRight, Copy, Check, FileText, MapPin, Clock, Radio } from "lucide-react";
import { useState, useEffect } from "react";
import { EXPO_OUT } from "@/lib/motionConfig";
import { useInteractiveHover } from "@/lib/useInteractiveHover";

export default function Contact() {
  const [time, setTime] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailHover = useInteractiveHover("rgba(56, 189, 248, 0.2)");
  const phoneHover = useInteractiveHover("rgba(192, 132, 252, 0.2)");
  const resumeHover = useInteractiveHover("rgba(52, 211, 153, 0.2)");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#060606] min-h-screen flex flex-col justify-between py-32 px-4 md:px-12 overflow-hidden text-white"
    >
      {/* Visual Rhyme: Background Convergence Singularity Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="mb-14"
        >
          {/* Telemetry & Availability Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              AVAILABLE FOR ENTERPRISE AI ENGAGEMENTS
            </span>

            <span className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
              <Clock size={13} className="text-blue-400" />
              <span>IST (Navi Mumbai): {time || "--:--:--"}</span>
            </span>
          </div>

          <div className="font-mono text-xs text-blue-400 tracking-wider mb-2">
            &gt; 07_TRANSMIT // OPEN CHANNEL_
          </div>
          
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.88]">
            INITIATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300">
              TRANSMISSION
            </span>
          </h2>
        </motion.div>

        {/* Contact Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Email Magnet Card */}
          <motion.div
            ref={emailHover.ref}
            {...emailHover.handlers}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: EXPO_OUT }}
            onClick={handleCopyEmail}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopyEmail();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Copy email address: ${personalInfo.email}`}
            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            style={emailHover.glowStyle}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <Mail size={15} className="text-blue-400" />
                  <span>// DIRECT EMAIL</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 group-hover:text-blue-400 transition-colors">
                  CLICK TO COPY
                </span>
              </div>

              <div className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors break-all">
                {personalInfo.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">
                {copiedEmail ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check size={14} /> COPIED TO CLIPBOARD
                  </span>
                ) : (
                  "Copy address"
                )}
              </span>
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                <Copy size={14} />
              </div>
            </div>
          </motion.div>

          {/* 2. Phone Contact Card */}
          <motion.div
            ref={phoneHover.ref}
            {...phoneHover.handlers}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: EXPO_OUT }}
            onClick={handleCopyPhone}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopyPhone();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Copy phone number: ${personalInfo.phone}`}
            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            style={phoneHover.glowStyle}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <Phone size={15} className="text-purple-400" />
                  <span>// TELEPHONE</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 group-hover:text-purple-400 transition-colors">
                  CLICK TO COPY
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                {personalInfo.phoneFormatted}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">
                {copiedPhone ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check size={14} /> COPIED TO CLIPBOARD
                  </span>
                ) : (
                  "Direct line & WhatsApp"
                )}
              </span>
              <a
                href={personalInfo.socials.find((s) => s.label === "Phone")?.href}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/5 group-hover:bg-purple-500 group-hover:text-black transition-colors"
                aria-label="Direct Call"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* 3. Resume PDF Download Card */}
          <motion.div
            ref={resumeHover.ref}
            {...resumeHover.handlers}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: EXPO_OUT }}
            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
            style={resumeHover.glowStyle}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <FileText size={15} className="text-emerald-400" />
                  <span>// VERIFIED RESUME</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] font-mono text-emerald-400">
                  PDF
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                Ruturaj Nawale • CV
              </div>
              <p className="text-xs text-gray-400 font-light mt-1">
                Updated for 2026 enterprise AI roles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <a
                href="/RuturajNawale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors"
              >
                <span>OPEN DOCUMENT</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/RuturajNawale_Resume.pdf"
                download="Ruturaj_Nawale_AI_Engineer_Resume.pdf"
                className="p-2 rounded-full bg-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-colors"
                aria-label="Download Resume File"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Social Link Hub */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <MapPin size={14} className="text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {personalInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={14} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
