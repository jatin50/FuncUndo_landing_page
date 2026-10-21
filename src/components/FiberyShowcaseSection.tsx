import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FiberyShowcaseSectionProps {
  onOpenDocs: () => void;
}

export const FiberyShowcaseSection: React.FC<FiberyShowcaseSectionProps> = ({ onOpenDocs }) => {
  return (
    <section className="py-20 relative overflow-hidden border-t border-[#E8E1D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ==================== MODULAR AUTOMATION CARDS (TOP OF SCREENSHOT) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          
          {/* Card 1: WHEN */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#E8E1D5] shadow-sm hover:border-[#C15C3D] transition-all">
            <div className="text-[11px] font-mono font-bold text-[#7A6E65] uppercase tracking-wider mb-2">
              WHEN (Trigger)
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD4C5] text-xs font-mono font-semibold text-[#251D1A] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E05638] animate-pulse"></span>
              <span>onDidSaveTextDocument</span>
            </div>
            <div className="text-[11px] text-[#7A6E65]">
              RAM-gated modification filter ignores files with zero keystroke changes.
            </div>
          </div>

          {/* Card 2: THEN */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#E8E1D5] shadow-sm hover:border-[#1C5C4D] transition-all">
            <div className="text-[11px] font-mono font-bold text-[#7A6E65] uppercase tracking-wider mb-2">
              THEN (Worker Thread)
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD4C5] text-xs font-mono font-semibold text-[#1C5C4D] mb-2">
              <span className="text-xs">⚡</span>
              <span>Parse AST with Tree-sitter WASM</span>
            </div>
            <div className="text-[11px] text-[#7A6E65]">
              Extracts function coordinates, call expressions, and calculates SHA-256 semantic hashes.
            </div>
          </div>

          {/* Card 3: ACTION */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#E8E1D5] shadow-sm hover:border-[#F7B93E] transition-all">
            <div className="text-[11px] font-mono font-bold text-[#7A6E65] uppercase tracking-wider mb-2">
              ACTION (Safety & Store)
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD4C5] text-xs font-mono font-semibold text-[#251D1A] mb-2">
              <span className="text-xs">💾</span>
              <span>Save Snapshot to SQLite WASM</span>
            </div>
            <div className="text-[11px] text-[#7A6E65]">
              Triggers in-memory Blast Radius query: flags callers as SAFE, WARNING, or DANGER.
            </div>
          </div>

        </div>

        {/* ==================== CENTER EDITORIAL SLOGAN WITH ISOMETRIC MODELS ==================== */}
        <div className="relative my-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Isometric Building Blocks Model (Left) */}
          <div className="relative w-36 h-28 shrink-0 hidden sm:block select-none opacity-90 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              {/* Top slab */}
              <path d="M40 30 L90 10 L130 30 L80 50 Z" fill="#E8DFD0" stroke="#7A6E65" strokeWidth="1.5"/>
              <path d="M40 30 L40 40 L80 60 L80 50 Z" fill="#C2B5A1" stroke="#7A6E65" strokeWidth="1.5"/>
              <path d="M80 50 L80 60 L130 40 L130 30 Z" fill="#998A73" stroke="#7A6E65" strokeWidth="1.5"/>
              
              {/* Middle slab */}
              <path d="M25 55 L75 35 L115 55 L65 75 Z" fill="#D96E50" stroke="#8A3D27" strokeWidth="1.5"/>
              <path d="M25 55 L25 65 L65 85 L65 75 Z" fill="#B35237" stroke="#8A3D27" strokeWidth="1.5"/>
              <path d="M65 75 L65 85 L115 65 L115 55 Z" fill="#8A3D27" stroke="#8A3D27" strokeWidth="1.5"/>

              {/* Bottom slab */}
              <path d="M15 80 L65 60 L105 80 L55 100 Z" fill="#2E2421" stroke="#150E0C" strokeWidth="1.5"/>
              <path d="M15 80 L15 90 L55 110 L55 100 Z" fill="#1C1412" stroke="#150E0C" strokeWidth="1.5"/>
              <path d="M55 100 L55 110 L105 90 L105 80 Z" fill="#0F0908" stroke="#150E0C" strokeWidth="1.5"/>
            </svg>
            <span className="text-[10px] font-mono text-[#7A6E65] absolute -bottom-1 left-2">
              AST tokens
            </span>
          </div>

          {/* Slogan Text: Serif Italic + Sans Bold */}
          <div className="text-center md:text-left flex-1 px-2">
            <div className="font-serif italic text-base sm:text-lg text-[#C15C3D] mb-1">
              few keystrokes to learn, infinite files saved from destruction
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <h2 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight">
                Surgical, not complicated
              </h2>
              <button
                onClick={onOpenDocs}
                className="px-3.5 py-1.5 rounded-full bg-[#251D1A] hover:bg-[#3B2E2A] text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Read Why</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Isometric Blue Retro Time Machine / Booth Model (Right) */}
          <div className="relative w-32 h-36 shrink-0 hidden sm:block select-none opacity-90 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              {/* Roof pyramid */}
              <path d="M60 10 L85 25 L60 35 L35 25 Z" fill="#4B6FA8" stroke="#253E66" strokeWidth="1.5"/>
              <path d="M60 5 L60 10" stroke="#FAF7F2" strokeWidth="2"/>
              <circle cx="60" cy="5" r="2.5" fill="#FAF7F2" stroke="#253E66"/>
              
              {/* Top trim */}
              <path d="M30 28 L60 38 L90 28 L60 18 Z" fill="#3B5A8F" stroke="#253E66" strokeWidth="1.5"/>
              <path d="M30 28 L30 36 L60 46 L60 38 Z" fill="#2D4670" stroke="#253E66" strokeWidth="1.5"/>
              <path d="M60 38 L60 46 L90 36 L90 28 Z" fill="#1E3252" stroke="#253E66" strokeWidth="1.5"/>

              {/* Main Body - Left face */}
              <path d="M30 36 L30 125 L60 135 L60 46 Z" fill="#3B5A8F" stroke="#253E66" strokeWidth="1.5"/>
              {/* Left Windows */}
              <rect x="36" y="52" width="8" height="12" fill="#EBF2FA" stroke="#253E66" strokeWidth="1" transform="skewY(18)"/>
              <rect x="48" y="56" width="8" height="12" fill="#EBF2FA" stroke="#253E66" strokeWidth="1" transform="skewY(18)"/>
              <rect x="36" y="80" width="8" height="12" fill="#2D4670" stroke="#253E66" strokeWidth="1" transform="skewY(18)"/>
              <rect x="48" y="84" width="8" height="12" fill="#2D4670" stroke="#253E66" strokeWidth="1" transform="skewY(18)"/>

              {/* Main Body - Right face */}
              <path d="M60 46 L60 135 L90 125 L90 36 Z" fill="#2A4269" stroke="#253E66" strokeWidth="1.5"/>
              {/* Right Windows */}
              <rect x="64" y="60" width="8" height="12" fill="#C2D8F2" stroke="#253E66" strokeWidth="1" transform="skewY(-18)"/>
              <rect x="76" y="56" width="8" height="12" fill="#C2D8F2" stroke="#253E66" strokeWidth="1" transform="skewY(-18)"/>
              <rect x="64" y="88" width="8" height="12" fill="#1E3252" stroke="#253E66" strokeWidth="1" transform="skewY(-18)"/>
              <rect x="76" y="84" width="8" height="12" fill="#1E3252" stroke="#253E66" strokeWidth="1" transform="skewY(-18)"/>

              {/* Base */}
              <path d="M26 123 L60 138 L94 123 L60 110 Z" fill="#1E3252" stroke="#253E66" strokeWidth="1.5"/>
              <path d="M26 123 L26 130 L60 145 L60 138 Z" fill="#15243B" stroke="#253E66" strokeWidth="1.5"/>
              <path d="M60 138 L60 145 L94 130 L94 123 Z" fill="#0C1726" stroke="#253E66" strokeWidth="1.5"/>
            </svg>
            <span className="text-[10px] font-mono text-[#4B6FA8] absolute -bottom-1 right-2">
              Chrono box
            </span>
          </div>

        </div>

        {/* ==================== HILARIOUS FIBERY-STYLE REDDIT & CREATOR QUOTE ==================== */}
        <div className="max-w-4xl mx-auto my-8 space-y-4">
          
          {/* Main User Quote Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border-2 border-[#E8E1D5] shadow-sm">
            {/* Giant quotation marks */}
            <span className="absolute top-3 left-4 text-6xl text-[#DDD4C5] font-serif select-none pointer-events-none opacity-80">
              &ldquo;
            </span>
            <span className="absolute bottom-1 right-4 text-6xl text-[#DDD4C5] font-serif select-none pointer-events-none opacity-80">
              &rdquo;
            </span>

            <p className="text-sm sm:text-base text-[#251D1A] leading-relaxed relative z-10 pl-6 pr-6 font-normal">
              This seems a lot <strong className="font-bold text-[#C15C3D]">more powerful than standard editor undo</strong>. I'm genuinely surprised something like this isn't built into VS Code by default. Just wondering if I am missing something, like if the developers secretly torture small kittens.
            </p>

            <div className="flex items-center justify-end gap-2.5 mt-4 pt-3 border-t border-[#DDD4C5]">
              <div className="w-6 h-6 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-bold text-xs">
                r/
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#251D1A]">One senior dev</span>{' '}
                <span className="text-[#7A6E65] italic">on Reddit</span>
              </div>
            </div>
          </div>

          {/* Creator Reply Card (Overlapping like Fibery screenshot) */}
          <div className="sm:ml-12 p-4 sm:p-5 rounded-2xl bg-[#FFF8EE] border-2 border-[#EADFCF] shadow-sm flex items-start gap-3 max-w-xl">
            <span className="text-lg">💬</span>
            <div className="text-xs text-[#5A5047] leading-relaxed">
              <span className="font-bold text-[#251D1A]">The explanation is simple:</span> we are much better at parsing ASTs in WebAssembly worker threads than at marketing. We just wanted to stop accidentally deleting our own code on Friday evenings.
              <div className="mt-2 text-[11px] font-bold text-[#C15C3D] flex items-center gap-1.5">
                <span>— Chronos Team, Maintainers</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
