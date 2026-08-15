import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-6">
            <div className="max-w-lg w-full p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                    <Compass size={24} />
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400 mb-2">
                    &gt; ERROR_404 // NODE_NOT_FOUND_
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Coordinate Unreachable
                </h1>
                <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                    The requested pipeline node or asset path does not exist in the neural topology.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Return to Chapter I (The Signal)
                </Link>
            </div>
        </div>
    );
}
