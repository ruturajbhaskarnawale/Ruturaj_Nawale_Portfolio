"use client";

import { useEffect } from "react";
import { ArrowLeft, RefreshCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Runtime error caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-6">
            <div className="max-w-md w-full p-8 rounded-3xl bg-white/5 border border-red-500/30 backdrop-blur-xl text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                    <span className="font-mono text-sm font-bold">&gt; PIPELINE_INTERRUPTED_</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">System Anomaly Detected</h1>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    An unexpected runtime exception occurred during pipeline rendering.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                        <RefreshCcw size={16} />
                        Reinitialize Pipeline
                    </button>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Return to Origin
                    </a>
                </div>
            </div>
        </div>
    );
}
