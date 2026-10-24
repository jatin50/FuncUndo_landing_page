import React from 'react';

interface FooterProps {
  onOpenDocs: () => void;
  onOpenPlayground: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDocs,
  onOpenPlayground,
  onOpenPrivacy,
}) => {
  return (
    <footer className="py-12 bg-[#251D1A] text-[#A39482] text-xs font-mono border-t border-[#382C27]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="text-[#FAF7F2] font-bold text-sm mb-1 flex items-center justify-center md:justify-start gap-2">
            <span>⚡ FuncUndo</span>
            <span className="text-[10px] bg-[#3B281B] text-[#F7B93E] px-2 py-0.2 rounded border border-[#6B4627]">
              v0.1.6
            </span>
          </div>
          <div className="max-w-md">
            Built with SQLite, WebAssembly, and unreasonable amounts of caffeine by Chronos Team. Released under the MIT License.
          </div>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-[#FAF7F2] text-xs font-sans font-semibold">
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
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#F7B93E] transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <a
            href="https://github.com/ChronosTeamx/FuncUndo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7B93E] transition-colors"
          >
            GitHub Repo
          </a>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A6E65] hover:text-[#FAF7F2] transition-colors"
          >
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
};
