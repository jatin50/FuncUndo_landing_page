import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'docs';
  onSelectView: (view: 'landing' | 'docs') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onSelectView }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E1D5] bg-[#FAF7F2]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand & Quirky Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectView('landing')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-[#251D1A] text-[#FAF7F2] flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:rotate-6 transition-transform">
              ⚡
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#251D1A]">FuncUndo</span>
          </button>
          <span className="text-[11px] font-mono bg-[#EFE9DF] text-[#7A6E65] border border-[#DDD4C5] px-2 py-0.5 rounded-full hidden sm:inline">
            for refactor-happy nerds
          </span>
        </div>

        {/* Center Links */}
        <nav className="flex items-center gap-2 sm:gap-6 text-xs font-semibold text-[#5A5047]">
          <button
            onClick={() => onSelectView('landing')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentView === 'landing'
                ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold'
                : 'hover:text-[#C15C3D]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Scalpel</span>
          </button>

          {/* Docs Tab in Navbar with Sarcastic Badge */}
          <button
            onClick={() => onSelectView('docs')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              currentView === 'docs'
                ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border border-[#DDD4C5]'
                : 'hover:text-[#C15C3D]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Docs</span>
            <span className="text-[10px] font-mono bg-[#C15C3D]/10 text-[#C15C3D] px-1.5 py-0.2 rounded font-bold">
              witty
            </span>
          </button>

          <a
            href="#horrors"
            onClick={() => {
              onSelectView('landing');
              setTimeout(() => {
                document.getElementById('horrors')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="hover:text-[#C15C3D] transition-colors hidden md:inline cursor-pointer"
          >
            The 3 Horrors
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ChronosTeamx/FuncUndo"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            className="text-xs font-semibold text-[#5A5047] hover:text-[#251D1A] flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DDD4C5] bg-[#FAF7F2] hover:bg-[#F2ECE1] transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {currentView === 'docs' ? (
            <button
              onClick={() => onSelectView('landing')}
              className="px-3 py-1.5 rounded-lg bg-[#C15C3D] hover:bg-[#A94B2E] text-white text-xs font-bold tracking-tight shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              Back to Home
            </button>
          ) : (
            <button
              onClick={() => onSelectView('docs')}
              className="px-3.5 py-1.5 rounded-lg bg-[#C15C3D] hover:bg-[#A94B2E] text-white text-xs font-bold tracking-tight shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              Open Docs
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
