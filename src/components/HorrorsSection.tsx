import React from 'react';

export const HorrorsSection: React.FC = () => {
  return (
    <section id="horrors" className="py-16 border-t border-[#E8E1D5] bg-[#F4EFE6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#C15C3D] tracking-wider uppercase">
            Relatable Developer Trauma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#251D1A] tracking-tight mt-1 mb-3">
            The 3 Horrors of Modern Undoing
          </h2>
          <p className="text-sm text-[#5A5047]">
            We have all been there. Here is how text editors and Git quietly torment engineers every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Horror 1 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E1D5] hover:border-[#C15C3D] transition-all shadow-sm">
            <div className="text-3xl mb-3">🚜</div>
            <h3 className="text-base font-bold text-[#251D1A] mb-2">The Ctrl+Z Steamroller</h3>
            <p className="text-xs text-[#5A5047] leading-relaxed mb-3">
              You want to revert a mistake in <code className="font-mono text-[#C15C3D]">parseInput()</code> that you wrote 20 minutes ago. You hold down Ctrl+Z. It ruthlessly plows through three brand new helper functions you wrote in between.
            </p>
            <div className="text-[11px] font-mono text-[#C15C3D] bg-[#FCECE8] p-2 rounded border border-[#F4CCC4]">
              Collateral damage: 140 lines of innocent code murdered.
            </div>
          </div>

          {/* Horror 2 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E1D5] hover:border-[#C15C3D] transition-all shadow-sm">
            <div className="text-3xl mb-3">🕳️</div>
            <h3 className="text-base font-bold text-[#251D1A] mb-2">The Git Stash Black Hole</h3>
            <p className="text-xs text-[#5A5047] leading-relaxed mb-3">
              "I'll just git stash this quick test." 4 hours later, you run <code className="font-mono text-[#251D1A]">git stash pop</code>. CONFLICT in 7 files. Unstaged changes in files you forgot existed. Your afternoon is ruined.
            </p>
            <div className="text-[11px] font-mono text-[#5A5047] bg-[#EFE9DF] p-2 rounded border border-[#DDD4C5]">
              Git is for pull requests, not 2-minute scratchpad experiments.
            </div>
          </div>

          {/* Horror 3 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8E1D5] hover:border-[#C15C3D] transition-all shadow-sm">
            <div className="text-3xl mb-3">🧟</div>
            <h3 className="text-base font-bold text-[#251D1A] mb-2">The Zombie Comment-Out</h3>
            <p className="text-xs text-[#5A5047] leading-relaxed mb-3">
              Because you don't trust Ctrl+Z, you copy-paste the old function 5 times: <code className="font-mono text-[#7A6E65]">// old_calculateDiscount_v2_final()</code>. Your codebase turns into a graveyard of dead commented-out code.
            </p>
            <div className="text-[11px] font-mono text-[#1C5C4D] bg-[#E1F3EE] p-2 rounded border border-[#BDE0D5]">
              FuncUndo gives every function a true timeline. Delete fearlessly.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
