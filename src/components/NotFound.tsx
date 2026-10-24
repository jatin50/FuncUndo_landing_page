import React, { useEffect } from 'react';
import { updateSEO } from '../utils/seo';
import { Home, BookOpen } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
  onGoDocs: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome, onGoDocs }) => {
  useEffect(() => {
    updateSEO({
      title: '404: Function Not Found · FuncUndo',
      description: 'The requested AST node or page does not exist in our timeline.',
      canonicalPath: '/404',
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border-2 border-[#E8E1D5] rounded-3xl p-8 sm:p-10 text-center shadow-lg">
        <div className="inline-block p-4 rounded-2xl bg-[#FCECE8] text-[#C15C3D] font-mono font-black text-2xl mb-4">
          404
        </div>
        <h1 className="text-2xl font-black text-[#251D1A] tracking-tight mb-2">
          AST Node Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#5A5047] leading-relaxed mb-6">
          The function, route, or commit you are seeking doesn't exist in our timeline. It may have been garbage-collected or re-scoped.
        </p>

        <div className="p-3 rounded-xl bg-[#251D1A] text-[#FAF7F2] font-mono text-xs text-left mb-6 space-y-1">
          <div className="text-[#F7B93E]">// Diagnostic:</div>
          <div><span className="text-[#FF7B72]">status:</span> 404_PAGE_NOT_FOUND</div>
          <div className="text-[#86EFAC]">// Blast radius: 0 (Safe)</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#251D1A] hover:bg-[#3B2E2A] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>
          <button
            onClick={onGoDocs}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#EFE9DF] hover:bg-[#E2D8C7] text-[#251D1A] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Docs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
