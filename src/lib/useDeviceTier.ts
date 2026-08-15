"use client";

import { useState, useEffect } from "react";

export interface DeviceTier {
    tier: "low" | "mid" | "high";
    isTouch: boolean;
    isMobile: boolean;
    particleCount: number;
    enableAdvancedShaders: boolean;
    dpr: number;
}

export function useDeviceTier(): DeviceTier {
    const [deviceState, setDeviceState] = useState<DeviceTier>({
        tier: "high",
        isTouch: false,
        isMobile: false,
        particleCount: 10000,
        enableAdvancedShaders: true,
        dpr: 1.5,
    });

    useEffect(() => {
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const width = window.innerWidth;
        const isMobile = width < 768;
        const isTablet = width >= 768 && width < 1024;
        
        // Cores / Hardware concurrency
        const concurrency = navigator.hardwareConcurrency || 4;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        let tier: "low" | "mid" | "high" = "high";
        let particleCount = 12000;
        let enableAdvancedShaders = true;

        if (isMobile || concurrency <= 2) {
            tier = "low";
            particleCount = 3500;
            enableAdvancedShaders = false;
        } else if (isTablet || concurrency <= 4) {
            tier = "mid";
            particleCount = 6500;
            enableAdvancedShaders = true;
        } else {
            tier = "high";
            particleCount = 12000;
            enableAdvancedShaders = true;
        }

        setDeviceState({
            tier,
            isTouch,
            isMobile,
            particleCount,
            enableAdvancedShaders,
            dpr,
        });

        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const currentMobile = currentWidth < 768;
            setDeviceState((prev) => ({
                ...prev,
                isMobile: currentMobile,
                particleCount: currentMobile ? 3500 : prev.tier === "mid" ? 6500 : 12000,
            }));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceState;
}
