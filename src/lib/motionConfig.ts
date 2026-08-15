import { Transition } from "framer-motion";

/**
 * Signature Motion Choreography Standards
 * Centralized easing curves and transition presets across the 7 narrative chapters.
 */

// Signature Easing Curve (Expo-Out feel for smooth, weighted deceleration)
export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

// Snappy Easing Curve for Micro-Interactions (Hover, buttons, badges)
export const SNAPPY = [0.25, 1, 0.5, 1] as const;

// Spring transition configs
export const SMOOTH_SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 35,
    mass: 0.8,
} as const;

export const VELOCITY_SPRING = {
    type: "spring",
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
} as const;

// Standard section reveal transition
export const standardRevealTransition: Transition = {
    duration: 0.8,
    ease: EXPO_OUT,
};

// Fast micro-interaction transition
export const microTransition: Transition = {
    duration: 0.3,
    ease: SNAPPY,
};

// Common card hover animation props
export const cardHoverMotion = {
    whileHover: {
        scale: 1.02,
        y: -4,
        transition: microTransition,
    },
    whileTap: {
        scale: 0.98,
        transition: microTransition,
    },
};

// Color accents for categories and chapters
export const NARRATIVE_COLORS = {
    blue: "#60a5fa",
    cyan: "#38bdf8",
    purple: "#c084fc",
    emerald: "#34d399",
    amber: "#fbbf24",
    rose: "#fb7185",
    borderGlass: "rgba(255, 255, 255, 0.08)",
    bgGlass: "rgba(255, 255, 255, 0.03)",
};
