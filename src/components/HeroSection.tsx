import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface HeroSectionProps {
  onOpenDocs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDocs }) => {
  const [copied, setCopied] = useState(false);

  const copyInstallCmd = async () => {
    try {
      await navigator.clipboard.writeText('code --install-extension chronos.funcundo');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section className="pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Anti-Hype Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#DDD4C5] text-xs font-medium text-[#7A6E65] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C15C3D]"></span>
          <span>Anti-hype software · Zero cloud telemetry · 100% offline SQLite</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-black text-[#251D1A] tracking-tight leading-[1.1] mb-6">
          Version control for functions.<br className="hidden sm:inline" />
          <span className="text-[#C15C3D] underline decoration-wavy decoration-[#C15C3D]/40">
            Because your entire file didn't deserve to die.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#5A5047] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Standard <code className="bg-[#EFE9DF] text-[#C15C3D] px-1.5 py-0.5 rounded font-mono text-sm">Ctrl+Z</code> wipes out everything you touched in the last 30 minutes just to fix one bad line. Git commits are way too heavy for 2 AM scratchpad chaos. FuncUndo gives every function its own private time machine.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a
            href="#playground"
            className="px-5 py-3 rounded-xl bg-[#C15C3D] hover:bg-[#A94B2E] text-white text-sm font-bold tracking-tight shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Rewind a Broken Function 👇
          </a>
          
          <button
            onClick={copyInstallCmd}
            className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#EFE9DF] hover:bg-[#E5DDD0] border border-[#DDD4C5] text-[#251D1A] text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer max-w-full"
          >
            <span className="text-[#C15C3D] font-bold shrink-0">$</span>
            <span className="truncate">code --install-extension chronos.funcundo</span>
            <span className="text-[10px] bg-[#DDD4C5] px-1.5 py-0.5 rounded text-[#5A5047] flex items-center gap-1 shrink-0">
              {copied ? <Check className="w-3 h-3 text-green-700" /> : <Copy className="w-3 h-3" />}
              {copied ? 'copied!' : 'copy'}
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-[#7A6E65]">
          <span>Free & open source (MIT).</span>
          <span>•</span>
          <button
            onClick={onOpenDocs}
            className="text-[#C15C3D] hover:underline cursor-pointer font-semibold"
          >
            Read the cynical docs &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
