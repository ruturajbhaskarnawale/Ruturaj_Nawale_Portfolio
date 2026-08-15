"use client";

import { useState, useRef, useCallback } from "react";

export interface InteractiveHoverResult {
    ref: React.RefObject<HTMLDivElement | null>;
    isHovered: boolean;
    mousePosition: { x: number; y: number };
    handlers: {
        onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseLeave: () => void;
    };
    glowStyle: React.CSSProperties;
}

export function useInteractiveHover(accentColor: string = "rgba(96, 165, 250, 0.15)"): InteractiveHoverResult {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    }, []);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(true);
        handleMouseMove(e);
    }, [handleMouseMove]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const glowStyle: React.CSSProperties = isHovered
        ? {
            backgroundImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${accentColor}, transparent 70%)`,
        }
        : {};

    return {
        ref,
        isHovered,
        mousePosition,
        handlers: {
            onMouseEnter: handleMouseEnter,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
        },
        glowStyle,
    };
}
