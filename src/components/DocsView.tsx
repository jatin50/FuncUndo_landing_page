import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SidebarSymbolCallout } from './SidebarSymbolCallout';

export const DocsView: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<string>('vs-the-world');
  const [openRants, setOpenRants] = useState(true);
  const [openEngine, setOpenEngine] = useState(true);
  const [openGuide, setOpenGuide] = useState(true);

  return (
    <div className="max-w-7xl mx-auto flex min-h-[calc(100vh-4rem)]">
      
      {/* ==================== DOCS LEFT SIDEBAR (SARCASTIC FIBERY STYLE) ==================== */}
      <aside className="w-64 shrink-0 border-r border-[#E8E1D5] bg-[#F7F3EB] p-4 text-xs font-sans hidden md:block overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16">
        
        {/* Category 1: Philosophical Rants */}
        <div className="mb-5">
          <button
            onClick={() => setOpenRants(!openRants)}
            className="w-full flex items-center justify-between text-[#251D1A] font-extrabold text-xs uppercase tracking-wider mb-2 cursor-pointer"
          >
            <span className="text-[#C15C3D]">Philosophical Rants</span>
            <ChevronDown
              className={`w-3 h-3 text-[#7A6E65] transition-transform ${openRants ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {openRants && (
            <ul className="space-y-1 pl-2 border-l border-[#DDD4C5]">
              <li>
                <button
                  onClick={() => setActiveDoc('what-is-funcundo')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'what-is-funcundo'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  What is FuncUndo?
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('why-funcundo')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'why-funcundo'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Why FuncUndo?
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('vs-the-world')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'vs-the-world'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  FuncUndo vs. Git & The World
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('the-scalpel-manifesto')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'the-scalpel-manifesto'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  The Scalpel Manifesto
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Category 2: The Nerd Engine */}
        <div className="mb-5">
          <button
            onClick={() => setOpenEngine(!openEngine)}
            className="w-full flex items-center justify-between text-[#251D1A] font-extrabold text-xs uppercase tracking-wider mb-2 cursor-pointer"
          >
            <span className="text-[#1C5C4D]">The Nerd Engine</span>
            <ChevronDown
              className={`w-3 h-3 text-[#7A6E65] transition-transform ${openEngine ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {openEngine && (
            <ul className="space-y-1 pl-2 border-l border-[#DDD4C5]">
              <li>
                <button
                  onClick={() => setActiveDoc('tree-sitter-wasm')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'tree-sitter-wasm'
                      ? 'bg-[#EFE9DF] text-[#1C5C4D] font-bold border-l-2 border-[#1C5C4D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Tree-sitter WASM Worker
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('relational-blast-radius')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'relational-blast-radius'
                      ? 'bg-[#EFE9DF] text-[#1C5C4D] font-bold border-l-2 border-[#1C5C4D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Relational Blast Radius Graph
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('sqlite-wasm-storage')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'sqlite-wasm-storage'
                      ? 'bg-[#EFE9DF] text-[#1C5C4D] font-bold border-l-2 border-[#1C5C4D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  SQLite WASM (Zero Cloud)
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Category 3: Survival Guide */}
        <div className="mb-5">
          <button
            onClick={() => setOpenGuide(!openGuide)}
            className="w-full flex items-center justify-between text-[#251D1A] font-extrabold text-xs uppercase tracking-wider mb-2 cursor-pointer"
          >
            <span>Survival Guide</span>
            <ChevronDown
              className={`w-3 h-3 text-[#7A6E65] transition-transform ${openGuide ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {openGuide && (
            <ul className="space-y-1 pl-2 border-l border-[#DDD4C5]">
              <li>
                <button
                  onClick={() => setActiveDoc('installation-guide')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer font-bold ${
                    activeDoc === 'installation-guide'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] border-l-2 border-[#C15C3D]'
                      : 'text-[#251D1A] hover:text-[#C15C3D] hover:bg-[#EAE3D6]'
                  }`}
                >
                  ⚡ Installation Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('keybindings')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'keybindings'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Keybindings (Ctrl+Alt+Z)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('function-resurrection')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'function-resurrection'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Resurrecting Deleted Ghosts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveDoc('vacuum-settings')}
                  className={`w-full text-left px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                    activeDoc === 'vacuum-settings'
                      ? 'bg-[#EFE9DF] text-[#C15C3D] font-bold border-l-2 border-[#C15C3D]'
                      : 'text-[#5A5047] hover:text-[#251D1A] hover:bg-[#EAE3D6]'
                  }`}
                >
                  Retention & Vacuum Settings
                </button>
              </li>
            </ul>
          )}
        </div>

      </aside>

      {/* ==================== CENTER DOCUMENTATION READING PANEL ==================== */}
      <main className="flex-1 min-w-0 p-6 sm:p-10 lg:p-12 overflow-y-auto font-sans">
        
        {/* ==================== ARTICLE 1: WHAT IS FUNCUNDO? ==================== */}
        {activeDoc === 'what-is-funcundo' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">The Definition</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                What is FuncUndo?
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                A Visual Studio Code extension built for engineers who suffer from aggressive refactoring syndrome.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              At its core, <strong className="text-[#251D1A]">FuncUndo is Git, but at the function level</strong>—and without all the boring ceremony. It watches your workspace files. Every time you save, it parses JavaScript, TypeScript, and TSX files using WebAssembly Tree-sitter in background worker threads.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] text-xs font-mono text-[#5A5047] space-y-2">
              <div className="text-[#C15C3D] font-bold">// The Core Difference:</div>
              <div>Standard Undo: "Undo the last 50 keystrokes anywhere in this 800-line file."</div>
              <div className="text-[#251D1A] font-bold">FuncUndo: "Rewind only function calculateTax() by 1 version. Leave the rest of the file alone."</div>
            </div>

            <h3 className="text-xl font-bold text-[#251D1A] pt-4">No AI Hallucinations. Just Pure AST Math.</h3>
            <p className="text-sm text-[#5A5047] leading-relaxed">
              We know you are exhausted by every tool promising that an LLM will magically write, refactor, and deploy your startup by next Tuesday. FuncUndo contains zero AI hype. It calculates SHA-256 hashes of concrete AST tokens, ignores non-executable noise like formatting and comments, and stores snapshots in a local SQLite file right on your computer.
            </p>
          </article>
        )}

        {/* ==================== ARTICLE 2: WHY FUNCUNDO? ==================== */}
        {activeDoc === 'why-funcundo' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">The Motivation</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Why FuncUndo? (The Anti-Steamroller Manifesto)
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Because files are an arbitrary storage container. Developers think in functions.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              When was the last time you thought to yourself: <em>"Gosh, I really wish reverting that buggy regex on line 42 would also destroy the 3 database queries I wrote on lines 90 through 180"</em>?
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border-2 border-[#E8E1D5]">
                <h4 className="font-bold text-[#251D1A] text-sm mb-1">Reason 1: True Non-Linear Branching</h4>
                <p className="text-xs text-[#5A5047] leading-relaxed">
                  In VS Code, if you undo 4 times and accidentally type a single comma, your entire forward redo stack is incinerated. FuncUndo records parent snapshot IDs (<code className="text-[#C15C3D] font-mono">parentSnapshotId</code>). When you redo, a native QuickPick menu lets you pick which divergent refactoring timeline you want to jump into.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border-2 border-[#E8E1D5]">
                <h4 className="font-bold text-[#251D1A] text-sm mb-1">Reason 2: Blast Radius Awareness</h4>
                <p className="text-xs text-[#5A5047] leading-relaxed">
                  Standard undo is blind. You revert a function signature, and you have no idea you just silently broke 6 callers across 3 different files until your CI test suite blows up. FuncUndo checks caller relations in real time before and after reversions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border-2 border-[#E8E1D5]">
                <h4 className="font-bold text-[#251D1A] text-sm mb-1">Reason 3: Session Persistence</h4>
                <p className="text-xs text-[#5A5047] leading-relaxed">
                  You close VS Code to go eat lunch. When you open it back up, the native undo stack is empty. FuncUndo persists history in SQLite across restarts, reboots, and power outages.
                </p>
              </div>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 3: VS THE WORLD (THE BIG COMPARISON) ==================== */}
        {activeDoc === 'vs-the-world' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">The Comparison</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                FuncUndo vs. Git Undo & The World
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Why "just use Git" or "just hit Ctrl+Z" is advice given by people who don't refactor quickly.
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#5A5047] leading-relaxed">
              <p>
                People often ask: <em>"Why do I need a function-level undo extension when I already have Git and Ctrl+Z?"</em>
              </p>
              <p>
                Because those two tools exist on polar opposite extremes of the granularity spectrum:
              </p>
            </div>

            {/* Visual Granularity Bar */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] text-xs font-mono space-y-3">
              <div className="font-bold text-[#251D1A]">THE GRANULARITY SPECTRUM:</div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="p-2 rounded bg-[#EFE9DF] text-[#7A6E65] w-1/3 text-center">
                  Ctrl+Z (Single Keystrokes)
                </span>
                <span className="p-2 rounded bg-[#C15C3D] text-white font-bold w-1/3 text-center shadow-sm">
                  ⚡ FuncUndo (Function ASTs)
                </span>
                <span className="p-2 rounded bg-[#EFE9DF] text-[#7A6E65] w-1/3 text-center">
                  Git (Whole Repo Commits)
                </span>
              </div>
            </div>

            {/* The Big Table */}
            <div className="rounded-2xl border-2 border-[#251D1A] bg-white overflow-x-auto shadow-sm my-6">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b-2 border-[#251D1A] bg-[#EFE9DF] text-[#251D1A]">
                    <th className="p-4 font-extrabold">Capability</th>
                    <th className="p-4 font-bold text-[#5A5047]">Standard Ctrl+Z</th>
                    <th className="p-4 font-bold text-[#5A5047]">Git Commits & Stash</th>
                    <th className="p-4 font-extrabold text-[#C15C3D] bg-[#FDF1EE]">FuncUndo</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-[#E8E1D5] text-[#5A5047]">
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Scope</td>
                    <td className="p-4 text-[#C15C3D]">Entire file buffer (destructive)</td>
                    <td className="p-4">Whole commit diff</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Exact function boundary</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Mental Overhead</td>
                    <td className="p-4">Zero (until you lose code)</td>
                    <td className="p-4 text-[#C15C3D]">High (commit messages, stash pop conflicts)</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Zero (automatic on save)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Forward Redo</td>
                    <td className="p-4 text-[#C15C3D]">Killed if you type anything</td>
                    <td className="p-4">Manual branches</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Non-linear tree branch picker</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Blast Radius Radar</td>
                    <td className="p-4 text-[#C15C3D]">Blind text replacement</td>
                    <td className="p-4">Requires running test suites</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Pre-revert SAFE/WARN/DANGER graph</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Formatting Noise</td>
                    <td className="p-4 text-[#C15C3D]">Records enters, spaces, comments</td>
                    <td className="p-4">Shows up in diffs</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Filtered out via SHA-256 AST</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#251D1A]">Persistence</td>
                    <td className="p-4 text-[#C15C3D]">Wiped when editor tab closes</td>
                    <td className="p-4">Permanent (.git)</td>
                    <td className="p-4 font-bold text-[#251D1A] bg-[#FDF1EE]">Embedded local SQLite across reboots</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#E1F3EE] border border-[#BDE0D5] text-xs text-[#1C5C4D]">
              <strong>Summary:</strong> Use Git for team pull requests and production deployment. Use standard Ctrl+Z for 3-second typos on the active line. Use FuncUndo for fearless 2 AM refactoring inside functions.
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 4: THE SCALPEL MANIFESTO ==================== */}
        {activeDoc === 'the-scalpel-manifesto' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">The Philosophy</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                The Scalpel Manifesto: Surgical vs. Sledgehammer
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Why we use vscode.WorkspaceEdit instead of full-file overwrites.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              When you ask traditional extensions or backup tools to restore code, they take the easy route: they read a cached version of the entire file from disk and overwrite the active editor buffer.
            </p>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              This is a <strong className="text-[#251D1A]">sledgehammer</strong>. Overwriting the whole file destroys your cursor position, collapses your folds, triggers lint re-evaluations across 800 lines, and most importantly: destroys any unrelated edits you made in the file.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] space-y-3">
              <h4 className="font-bold text-[#251D1A] text-sm">How the Scalpel Works:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-[#5A5047]">
                <li>Identifies the enclosing function boundary where your cursor currently sits.</li>
                <li>Retrieves the exact AST character coordinates (start row/col and end row/col).</li>
                <li>Builds an atomic <code className="font-mono text-[#C15C3D]">vscode.WorkspaceEdit</code> that swaps only those exact characters.</li>
                <li>Preserves cursor focus, sibling function states, and file formatting intact.</li>
              </ol>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 5: TREE-SITTER WASM WORKER ==================== */}
        {activeDoc === 'tree-sitter-wasm' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#1C5C4D] uppercase tracking-wider">Architecture</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                WebAssembly Tree-sitter Worker
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                How we parse ASTs at 60 frames per second without stuttering your editor.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              Visual Studio Code runs all extension code on a single thread called the Extension Host. If an extension runs a heavy AST parser on that main thread, your cursor lags, typing drops letters, and the editor feels sluggish.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] space-y-3">
              <div className="text-xs font-mono text-[#1C5C4D] font-bold">PARSER WORKER SPECIFICATIONS:</div>
              <ul className="list-disc pl-5 text-xs text-[#5A5047] space-y-1.5 font-mono">
                <li>Engine: <code className="text-[#251D1A]">web-tree-sitter</code> compiled to WebAssembly (C-bindings).</li>
                <li>Threading: Dedicated Node.js <code className="text-[#251D1A]">worker_threads</code> with IPC message passing.</li>
                <li>Gating: Changes are RAM-gated and debounced per file (200ms delay).</li>
                <li>Crash Resilience: ParserWorkerManager automatically resurrects crashed workers.</li>
              </ul>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 6: RELATIONAL BLAST RADIUS ==================== */}
        {activeDoc === 'relational-blast-radius' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#1C5C4D] uppercase tracking-wider">Safety Engine</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Relational Blast Radius Graph
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Know before you break downstream callers across 4 different files.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              When you refactor a function in <code className="text-[#251D1A] font-mono">api.ts</code>, you might forget that <code className="text-[#251D1A] font-mono">checkout.ts</code> and <code className="text-[#251D1A] font-mono">webhook.ts</code> rely on its return structure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="p-4 rounded-xl bg-[#E1F3EE] border border-[#BDE0D5] text-xs">
                <div className="font-bold text-[#1C5C4D] mb-1">SAFE (0 Callers)</div>
                <div className="text-[11px] text-[#2F6B5E]">Private or unreferenced function. Revert with zero fear.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FFF8D6] border border-[#E8DFB3] text-xs">
                <div className="font-bold text-[#8A6D1C] mb-1">WARNING (1-3 Callers)</div>
                <div className="text-[11px] text-[#785E16]">Upstream callers detected. Check hover tooltips.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FCECE8] border border-[#F4CCC4] text-xs">
                <div className="font-bold text-[#C15C3D] mb-1">DANGER (4+ Callers)</div>
                <div className="text-[11px] text-[#A64528]">Critical dependency hub. Dependency graph recommended.</div>
              </div>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 7: SQLITE WASM ==================== */}
        {activeDoc === 'sqlite-wasm-storage' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#7A6E65] uppercase tracking-wider">Storage & Privacy</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Embedded SQLite WASM: Zero Cloud, 100% Offline
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Your code belongs on your hard drive. Not in our training cluster.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              We have zero interest in reading your code, selling your telemetry, or building an LLM from your proprietary software.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] space-y-2 text-xs text-[#5A5047]">
              <div>• <strong>Storage File:</strong> Stored locally in <code className="font-mono text-[#251D1A]">funcundo.sqlite</code> inside the VS Code workspace extension storage folder.</div>
              <div>• <strong>Library:</strong> Uses <code className="font-mono text-[#251D1A]">sql.js</code> (SQLite compiled to WebAssembly) with Drizzle ORM.</div>
              <div>• <strong>Telemetry:</strong> Exact count of network requests sent by FuncUndo: <strong>0</strong>.</div>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE: INSTALLATION GUIDE ==================== */}
        {activeDoc === 'installation-guide' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">Getting Started</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Installation Guide: How to Equip the Scalpel
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Four painless ways to install FuncUndo in under 30 seconds. Pick whichever matches your workflow.
              </p>
            </div>

            {/* METHOD 1: VS CODE GUI (THE POINT & CLICK WAY) */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#E8E1D5] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">Method 01 (Recommended)</span>
                <span className="text-[11px] font-mono text-[#7A6E65] bg-[#EFE9DF] px-2 py-0.5 rounded">Visual Studio Code GUI</span>
              </div>
              <h3 className="text-lg font-bold text-[#251D1A]">Install via Extensions Marketplace</h3>
              
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#5A5047] leading-relaxed">
                <li>Launch <strong>Visual Studio Code</strong> on your computer.</li>
                <li>
                  Open the Extensions view by clicking the block icon in the left Activity Bar, or press <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Ctrl+Shift+X</kbd> (Windows/Linux) or <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Cmd+Shift+X</kbd> (macOS).
                </li>
                <li>
                  In the search box at the top, type <code className="font-mono font-bold text-[#C15C3D] bg-[#FCECE8] px-1.5 py-0.5 rounded">funcUndo</code>.
                </li>
                <li>
                  Look for <strong>FuncUndo</strong> published by <strong>ChronosDev</strong> with the official blue-and-cyan clock symbol.
                </li>
                <li>
                  Click the blue <strong>Install</strong> button.
                </li>
              </ol>

              {/* Official VS Code Marketplace Screenshot */}
              <div className="rounded-xl overflow-hidden border border-[#382C27] bg-[#181412] shadow-md">
                <div className="px-3.5 py-2 bg-[#252526] border-b border-[#333333] flex items-center justify-between text-[11px] font-mono text-[#CCCCCC]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#86EFAC] inline-block"></span>
                    <span className="font-bold text-[#FAF7F2]">VS Code Marketplace Search Result</span>
                  </div>
                  <span className="text-[10px] text-[#A39482]">Publisher: ChronosDev</span>
                </div>
                <div className="p-2 sm:p-3 bg-[#181412]">
                  <img
                    src="/vscode-marketplace-funcundo.png"
                    alt="Official FuncUndo Extension in VS Code Marketplace by ChronosDev"
                    className="w-full h-auto rounded-lg border border-[#2D2420] object-cover block"
                  />
                </div>
                <div className="px-4 py-2.5 bg-[#1F1917] border-t border-[#2D2420] flex flex-wrap items-center justify-between gap-2 text-xs text-[#A39482]">
                  <span className="flex items-center gap-1.5 text-[#F7B93E]">
                    <span>✓</span>
                    <span>Official Release: <strong>ChronosDev</strong></span>
                  </span>
                  <span className="text-[11px] text-[#86EFAC] font-mono">Semantic version tracking for granular code history</span>
                </div>
              </div>
            </div>

            {/* METHOD 2: TERMINAL ONE-LINER */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#E8E1D5] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#1C5C4D] uppercase tracking-wider">Method 02 (The Hacker Way)</span>
                <span className="text-[11px] font-mono text-[#7A6E65] bg-[#EFE9DF] px-2 py-0.5 rounded">Terminal / CLI</span>
              </div>
              <h3 className="text-lg font-bold text-[#251D1A]">Run from PowerShell, Bash, or Command Prompt</h3>
              <p className="text-xs text-[#5A5047]">
                Open your terminal and paste this command:
              </p>
              <div className="p-3.5 rounded-xl bg-[#251D1A] text-[#FAF7F2] font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#C15C3D] font-bold">$</span>
                  <span className="text-[#86EFAC]">code --install-extension chronos.funcundo</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('code --install-extension chronos.funcundo');
                    alert('Copied to clipboard!');
                  }}
                  className="px-2 py-1 rounded bg-[#382C27] hover:bg-[#4A3831] text-xs text-[#F7B93E] font-sans font-semibold transition-all cursor-pointer"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* METHOD 3: QUICK OPEN (CTRL+P) */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#E8E1D5] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#7A6E65] uppercase tracking-wider">Method 03</span>
                <span className="text-[11px] font-mono text-[#7A6E65] bg-[#EFE9DF] px-2 py-0.5 rounded">VS Code Quick Open</span>
              </div>
              <h3 className="text-lg font-bold text-[#251D1A]">Install via Quick Open Palette</h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[#5A5047]">
                <li>Inside VS Code, press <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Ctrl+P</kbd> (or <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Cmd+P</kbd> on macOS).</li>
                <li>Paste this string: <code className="font-mono font-bold text-[#C15C3D] bg-[#FCECE8] px-1.5 py-0.5 rounded">ext install chronos.funcundo</code></li>
                <li>Press <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Enter</kbd>.</li>
              </ol>
            </div>

            {/* VISUAL INDICATOR: FINDING THE SYMBOL IN VS CODE SIDEBAR */}
            <SidebarSymbolCallout />

            {/* VERIFICATION WALKTHROUGH */}
            <div className="p-6 rounded-2xl bg-[#FFF8EE] border-2 border-[#EADFCF] space-y-3">
              <h3 className="text-base font-bold text-[#251D1A] flex items-center gap-2">
                <span>🎯</span>
                <span>Verification: Your First 30 Seconds with FuncUndo</span>
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[#5A5047] leading-relaxed">
                <li>Open any <code className="font-mono font-bold">.ts</code>, <code className="font-mono font-bold">.tsx</code>, or <code className="font-mono font-bold">.js</code> file in your workspace.</li>
                <li>Notice the bottom status bar: you will see <code className="font-mono text-[#C15C3D]">FuncUndo: Ready</code>.</li>
                <li>Type something silly or break the syntax inside a function, then press <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Ctrl+S</kbd> to save.</li>
                <li>With your cursor inside the function, press <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Ctrl+Alt+Z</kbd> (or <kbd className="font-mono bg-[#EFE9DF] border border-[#DDD4C5] px-1.5 py-0.5 rounded font-bold">Cmd+Alt+Z</kbd>).</li>
                <li>Watch only that function rewind. Sibling functions stay 100% frozen.</li>
              </ol>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 8: KEYBINDINGS ==================== */}
        {activeDoc === 'keybindings' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">Cheat Sheet</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Keyboard Shortcuts & Commands
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Commit these to muscle memory and never lose a function again.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#251D1A] bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#EFE9DF] border-b border-[#251D1A] text-[#251D1A]">
                  <tr>
                    <th className="p-3.5 font-bold">Command</th>
                    <th className="p-3.5 font-bold">Windows / Linux</th>
                    <th className="p-3.5 font-bold">macOS</th>
                    <th className="p-3.5 font-bold">What It Does</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-[#E8E1D5] text-[#5A5047]">
                  <tr>
                    <td className="p-3.5 font-bold text-[#C15C3D]">chronos.undoFunction</td>
                    <td className="p-3.5"><kbd className="bg-[#EFE9DF] border border-[#DDD4C5] px-2 py-0.5 rounded font-bold">Ctrl+Alt+Z</kbd></td>
                    <td className="p-3.5"><kbd className="bg-[#EFE9DF] border border-[#DDD4C5] px-2 py-0.5 rounded font-bold">Cmd+Alt+Z</kbd></td>
                    <td className="p-3.5">Rewinds the function enclosing your cursor by 1 snapshot.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#C15C3D]">chronos.redoFunction</td>
                    <td className="p-3.5"><kbd className="bg-[#EFE9DF] border border-[#DDD4C5] px-2 py-0.5 rounded font-bold">Ctrl+Alt+Y</kbd></td>
                    <td className="p-3.5"><kbd className="bg-[#EFE9DF] border border-[#DDD4C5] px-2 py-0.5 rounded font-bold">Cmd+Alt+Y</kbd></td>
                    <td className="p-3.5">Steps forward with the non-linear QuickPick branch picker.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#251D1A]">chronos.showDependencyGraph</td>
                    <td className="p-3.5 text-[#A39482]">—</td>
                    <td className="p-3.5 text-[#A39482]">—</td>
                    <td className="p-3.5">Opens interactive HTML5 Canvas codebase graph panel.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#251D1A]">chronos.mergeFunctions</td>
                    <td className="p-3.5 text-[#A39482]">—</td>
                    <td className="p-3.5 text-[#A39482]">—</td>
                    <td className="p-3.5">Merges history of two functions after a refactor/rename.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 9: FUNCTION RESURRECTION ==================== */}
        {activeDoc === 'function-resurrection' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">Ghost Detection</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Resurrecting Deleted Ghosts
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Did you delete a helper function 40 minutes ago and now another function needs it?
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              In standard VS Code, if you delete a function, save, and later write new code that attempts to call it, your only option is to pray you remember how it was written or dig through Git reflog diffs.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] text-xs font-mono text-[#5A5047] space-y-2">
              <div className="text-[#C15C3D] font-bold">// How FuncUndo Ghost Resurrection works:</div>
              <div>1. Checks live AST call expressions against active functions in the file.</div>
              <div>2. If a call references a function deleted from the file buffer, but present in SQLite history:</div>
              <div className="text-[#251D1A] font-bold">3. Triggers an alert: "FuncUndo: 'generateReport' calls deleted function(s): 'calculateDiscount'. These exist in your history."</div>
            </div>
          </article>
        )}

        {/* ==================== ARTICLE 10: VACUUM SETTINGS ==================== */}
        {activeDoc === 'vacuum-settings' && (
          <article className="space-y-6">
            <div className="border-b border-[#E8E1D5] pb-6">
              <span className="text-xs font-mono font-bold text-[#7A6E65] uppercase tracking-wider">Configuration</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight mt-1 mb-3">
                Retention & Vacuum Settings
              </h1>
              <p className="text-base text-[#5A5047] leading-relaxed">
                Keep your SQLite database featherlight without losing important history.
              </p>
            </div>

            <p className="text-sm text-[#5A5047] leading-relaxed">
              Configure these in your VS Code Settings (<kbd className="font-mono bg-[#EFE9DF] px-1.5 py-0.5 rounded border border-[#DDD4C5]">Ctrl+,</kbd>):
            </p>

            <div className="rounded-2xl border-2 border-[#251D1A] bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#EFE9DF] border-b border-[#251D1A] text-[#251D1A]">
                  <tr>
                    <th className="p-3.5 font-bold">Setting</th>
                    <th className="p-3.5 font-bold">Type</th>
                    <th className="p-3.5 font-bold">Default</th>
                    <th className="p-3.5 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-[#E8E1D5] text-[#5A5047]">
                  <tr>
                    <td className="p-3.5 font-bold text-[#C15C3D]">funcundo.retentionDays</td>
                    <td className="p-3.5">number</td>
                    <td className="p-3.5 font-bold text-[#251D1A]">30</td>
                    <td className="p-3.5">Days to retain snapshots before eligible older records are pruned during startup vacuum.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#C15C3D]">funcundo.minSnapshotsToKeep</td>
                    <td className="p-3.5">number</td>
                    <td className="p-3.5 font-bold text-[#251D1A]">20</td>
                    <td className="p-3.5">Guarantees a minimum number of recent snapshots per function, regardless of how old they are.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        )}

      </main>

    </div>
  );
};
