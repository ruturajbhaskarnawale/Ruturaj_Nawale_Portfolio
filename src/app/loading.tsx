export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
            <div className="relative flex items-center justify-center">
                {/* Outer spinning ring */}
                <div className="h-20 w-20 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-500" />
                {/* Inner pulsing core */}
                <div className="absolute h-8 w-8 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-60" />
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-blue-400">
                    &gt; 00_BOOT // INITIALIZING NEURAL ENGINE_
                </span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    Ruturaj Nawale • AI Engineer
                </span>
            </div>
        </div>
    );
}
