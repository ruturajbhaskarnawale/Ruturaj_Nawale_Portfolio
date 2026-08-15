"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { EXPO_OUT } from "@/lib/motionConfig";
import { cn } from "@/lib/utils";

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
    stagger?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const SplitText = ({
    children,
    className,
    delay = 0,
    stagger = 0.04,
    as = "div",
}: SplitTextProps) => {
    const ref = useRef<any>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const words = children.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: EXPO_OUT,
            },
        },
    };

    // Dynamically choose the proper semantic motion element to ensure valid HTML5 nesting
    const MotionComponent = (motion as any)[as] || motion.div;

    return (
        <MotionComponent
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={cn("relative flex flex-wrap items-baseline gap-x-[0.25em]", className)}
            aria-label={children}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block whitespace-nowrap will-change-transform"
                    aria-hidden="true"
                >
                    {word}
                </motion.span>
            ))}
        </MotionComponent>
    );
};
