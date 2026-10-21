import React from 'react';

interface FooterProps {
  onOpenDocs: () => void;
  onOpenPlayground: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs, onOpenPlayground }) => {
  return (
    <footer className="py-12 bg-[#251D1A] text-[#A39482] text-xs font-mono border-t border-[#382C27]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <div className="text-[#FAF7F2] font-bold text-sm mb-1 flex items-center justify-center sm:justify-start gap-2">
            <span>⚡ FuncUndo</span>
            <span className="text-[10px] bg-[#3B281B] text-[#F7B93E] px-2 py-0.2 rounded border border-[#6B4627]">
              v0.1.6
            </span>
          </div>
          <div>
            Built with SQLite, WebAssembly, and unreasonable amounts of caffeine by Chronos Team. Released under MIT.
          </div>
        </div>

        <div className="flex items-center gap-6 text-[#FAF7F2] text-xs font-sans font-semibold">
          <button
            onClick={onOpenPlayground}
            className="hover:text-[#F7B93E] transition-colors cursor-pointer"
          >
            Interactive Scalpel
          </button>
          <button
            onClick={onOpenDocs}
            className="hover:text-[#F7B93E] transition-colors cursor-pointer"
          >
            Sarcastic Docs
          </button>
          <a
            href="https://github.com/ChronosTeamx/FuncUndo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7B93E] transition-colors"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
