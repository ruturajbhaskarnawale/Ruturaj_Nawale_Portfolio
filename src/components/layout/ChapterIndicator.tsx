"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chapters } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ChapterIndicator() {
    const [activeChapter, setActiveChapter] = useState<string>("hero");
    const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.35;
            
            for (let i = chapters.length - 1; i >= 0; i--) {
                const element = document.getElementById(chapters[i].id);
                if (element) {
                    const top = element.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveChapter(chapters[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToChapter = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <aside
            aria-label="Chapter navigation"
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto select-none"
        >
            <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                {chapters.map((chapter) => {
                    const isActive = activeChapter === chapter.id;
                    const isHovered = hoveredChapter === chapter.id;

                    return (
                        <div
                            key={chapter.id}
                            className="relative flex items-center justify-end group"
                            onMouseEnter={() => setHoveredChapter(chapter.id)}
                            onMouseLeave={() => setHoveredChapter(null)}
                        >
                            {/* Hover Tooltip Card */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-10 whitespace-nowrap px-3 py-1.5 rounded-xl bg-black/90 border border-white/15 backdrop-blur-xl shadow-xl pointer-events-none z-50 flex items-center gap-2"
                                    >
                                        <span className="font-mono text-[10px] text-blue-400 font-bold">
                                            {chapter.number}.
                                        </span>
                                        <span className="text-xs font-medium text-white tracking-wide">
                                            {chapter.title}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Indicator Button */}
                            <button
                                onClick={() => scrollToChapter(chapter.id)}
                                aria-label={`Scroll to Chapter ${chapter.number}: ${chapter.title}`}
                                className={cn(
                                    "relative flex items-center justify-center w-7 h-7 rounded-full font-mono text-[11px] font-bold transition-all duration-300",
                                    isActive
                                        ? "bg-blue-500 text-black shadow-[0_0_15px_rgba(59,130,246,0.8)] scale-110"
                                        : "text-gray-400 hover:text-white hover:bg-white/10"
                                )}
                            >
                                <span>{chapter.number}</span>
                                {isActive && (
                                    <span className="absolute -inset-1 rounded-full border border-blue-400/50 animate-ping pointer-events-none opacity-40" />
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
