import React, { useState, useEffect } from 'react';
import { RotateCcw, Zap } from 'lucide-react';

export const ScalpelPlayground: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<number>(2);
  const [currentVersion, setCurrentVersion] = useState<number>(3); // 3 = broken, 2 = clean
  const [isLaserActive, setIsLaserActive] = useState<boolean>(false);
  const [btnBounced, setBtnBounced] = useState<boolean>(false);

  const triggerLaserRewind = () => {
    if (selectedFunction !== 2) {
      alert("Click into 'calculateDiscount()' first to test function undoing!");
      return;
    }
    if (currentVersion === 2) {
      alert("Already rewound to v2 (Clean)! Click 'Break function again' to reset.");
      return;
    }

    setBtnBounced(true);
    setTimeout(() => setBtnBounced(false), 150);

    setIsLaserActive(true);

    setTimeout(() => {
      setCurrentVersion(2);
    }, 280);

    setTimeout(() => {
      setIsLaserActive(false);
    }, 600);
  };

  const resetSandbox = () => {
    setCurrentVersion(3);
    setSelectedFunction(2);
  };

  // Physical key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isZ = e.key === 'z' || e.key === 'Z' || e.code === 'KeyZ';
      const isUndoCombo = (e.ctrlKey || e.metaKey) && e.altKey && isZ;

      if (isUndoCombo) {
        e.preventDefault();
        triggerLaserRewind();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFunction, currentVersion]);

  return (
    <section id="playground" className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Tilted Sticky Notes (Fibery signature) */}
        <div className="relative">

          {/* Sticky Note 1 */}
          <div className="hidden lg:block absolute -top-8 -left-12 rotate-[-4deg] z-20 sticky-note bg-[#FFF8D6] border border-[#E8DFB3] p-3 rounded-lg text-xs max-w-[210px] text-[#524419] shadow-md">
            <div className="font-bold mb-0.5">📌 The Friday 4:55 PM bug</div>
            <div className="text-[11px] leading-tight">
              Someone broke this function. Standard Ctrl+Z will nuke all the clean code you wrote above and below.
            </div>
          </div>

          {/* Sticky Note 2 */}
          <div className="hidden lg:block absolute -top-6 -right-10 rotate-[3deg] z-20 sticky-note bg-[#E1F3EE] border border-[#BDE0D5] p-3 rounded-lg text-xs max-w-[210px] text-[#1C5C4D] shadow-md">
            <div className="font-bold mb-0.5">🛡️ Innocent Bystanders</div>
            <div className="text-[11px] leading-tight">
              Lines 1-6 & 16-22 are safe. FuncUndo uses AST coordinates so other functions never get touched.
            </div>
          </div>

          {/* The Playground Frame */}
          <div className="rounded-2xl border-2 border-[#251D1A] bg-[#251D1A] text-[#FAF7F2] shadow-2xl overflow-hidden font-mono text-xs">
            
            {/* Mock VS Code Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1A1412] border-b border-[#382C27] select-none text-[11px]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E05638] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#F7B93E] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#4ADE80] inline-block"></span>
                </div>
                <span className="text-[#EFE9DF] font-semibold">orderService.ts</span>
                <span className="text-[#7A6E65]">— [FuncUndo Granular Buffer]</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                    currentVersion === 2
                      ? 'bg-[#1C5C4D] text-[#86EFAC] border-[#237864]'
                      : 'bg-[#2A201A] text-[#F7B93E] border-[#5A3E26]'
                  }`}
                >
                  {currentVersion === 2 ? 'BLAST RADIUS: 0 (SAFE) — 0 CALLERS BROKEN' : 'BLAST RADIUS: 0 (SAFE)'}
                </span>
                <span className="text-[#7A6E65] text-[10px] hidden sm:inline">WebAssembly Tree-sitter Worker</span>
              </div>
            </div>

            {/* Code Buffer */}
            <div className="p-6 sm:p-8 space-y-4 leading-relaxed text-[#D4C8B8]">

              {/* FUNCTION 1: fetchCart (Untouched) */}
              <div
                onClick={() => setSelectedFunction(1)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  selectedFunction === 1 ? 'fibery-reticle' : 'border-transparent hover:border-[#382C27] hover:bg-[#1A1412]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[#7A6E65] text-[11px] mb-1">
                  <span>Lines 1-6 • <strong className="text-[#FAF7F2]">fetchUserCart(userId)</strong></span>
                  <span className="text-[#86EFAC] bg-[#14261D] px-2 py-0.2 rounded border border-[#237864] text-[10px]">
                    v1 (Pristine & Untouched)
                  </span>
                </div>
                <pre className="text-[#A39482]">
                  <span className="text-[#F7B93E]">export async function </span>
                  <span className="text-[#FAF7F2]">fetchUserCart</span>(
                  <span className="text-[#D4C8B8]">userId</span>: <span className="text-[#E05638]">string</span>) {'{\n'}
                  {'  '}<span className="text-[#F7B93E]">const </span>cart = <span className="text-[#F7B93E]">await </span>redis.<span className="text-[#FAF7F2]">get</span>(<span className="text-[#86EFAC]">{`\`cart:\${userId}\``}</span>);{'\n'}
                  {'  '}<span className="text-[#F7B93E]">return </span>cart ? <span className="text-[#E05638]">JSON</span>.<span className="text-[#FAF7F2]">parse</span>(cart) : [];{'\n'}
                  {'}'}
                </pre>
                <div className="text-[10px] text-[#7A6E65] mt-1.5 italic select-none">
                  // Pristine code. If you press Ctrl+Z in standard VS Code, this gets obliterated too.
                </div>
              </div>

              {/* FUNCTION 2: calculateDiscount (TARGET BROKEN FUNCTION) */}
              <div
                onClick={() => setSelectedFunction(2)}
                className={`p-3.5 rounded-xl transition-all cursor-pointer relative overflow-hidden bg-[#2C211D] ${
                  selectedFunction === 2 ? 'fibery-reticle' : 'border border-transparent'
                }`}
              >
                {/* Laser Sweep Bar */}
                {isLaserActive && (
                  <div
                    className="laser-line-fibery"
                    style={{ animation: 'smoothLaserSweep 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
                  />
                )}

                <div className="flex items-center justify-between text-[11px] mb-2 select-none">
                  <span className="flex items-center gap-2">
                    <span className="text-[#F7B93E] font-bold">Lines 8-14 • calculateDiscount(price, code)</span>
                    <span className="text-[10px] bg-[#3B281B] text-[#F7B93E] px-2 py-0.5 rounded border border-[#6B4627] font-bold">
                      TARGET ACTIVE
                    </span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      currentVersion === 3
                        ? 'text-[#FCA5A5] bg-[#3D1A17] border border-[#7F1D1D]'
                        : 'text-[#86EFAC] bg-[#14261D] border border-[#237864]'
                    }`}
                  >
                    {currentVersion === 3 ? '💥 v3 (Broken at 4:55 PM)' : '● v2 (Clean & Restored)'}
                  </span>
                </div>

                <div className="relative">
                  <pre
                    className={`text-[#FAF7F2] transition-all duration-300 ${
                      isLaserActive ? 'opacity-10 blur-[1.5px] translate-y-0.5' : 'opacity-100 blur-0 translate-y-0'
                    }`}
                  >
                    {currentVersion === 3 ? (
                      <>
                        <span className="text-[#F7B93E]">export function </span>
                        <span className="text-[#FAF7F2]">calculateDiscount</span>(
                        <span className="text-[#D4C8B8]">price</span>: <span className="text-[#E05638]">number</span>, <span className="text-[#D4C8B8]">code</span>?: <span className="text-[#E05638]">string</span>) {'{\n'}
                        {'  '}<span className="text-[#7A6E65]">// Refactor rushed before happy hour broke return type contract</span>{'\n'}
                        {'  '}<span className="text-[#F7B93E]">const </span>multiplier = code ? <span className="text-[#FCA5A5] font-bold">null.getIllegalDiscount()</span> : <span className="text-[#FAF7F2]">0.1</span>;{'\n'}
                        {'  '}<span className="text-[#F7B93E]">return </span><span className="text-[#FCA5A5] font-bold">{`{ error: "NaN_CALCULATION", amount: price * multiplier }`}</span>;{'\n'}
                        {'}'}
                      </>
                    ) : (
                      <>
                        <span className="text-[#F7B93E]">export function </span>
                        <span className="text-[#FAF7F2]">calculateDiscount</span>(
                        <span className="text-[#D4C8B8]">price</span>: <span className="text-[#E05638]">number</span>, <span className="text-[#D4C8B8]">code</span>?: <span className="text-[#E05638]">string</span>): <span className="text-[#E05638]">string</span> {'{\n'}
                        {'  '}<span className="text-[#F7B93E]">const </span>discount = code ? <span className="text-[#FAF7F2]">0.85</span> : <span className="text-[#FAF7F2]">1.0</span>;{'\n'}
                        {'  '}<span className="text-[#F7B93E]">const </span>total = price * discount;{'\n'}
                        {'  '}<span className="text-[#F7B93E]">return </span><span className="text-[#86EFAC]">{`\`$\${total.toFixed(2)}\``}</span>;{'\n'}
                        {'}'}
                      </>
                    )}
                  </pre>
                </div>

                {/* In-Situ Control Pill */}
                <div className="mt-3 pt-2.5 border-t border-[#3D2C24] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#A39482] select-none">
                  <span className="text-[#F7B93E] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7B93E] animate-ping"></span>
                    {currentVersion === 3 ? (
                      <span>
                        Press <kbd className="px-1.5 py-0.5 bg-[#1A1412] border border-[#F7B93E]/60 text-[#F7B93E] rounded font-mono font-bold">Ctrl+Alt+Z</kbd> (or Cmd+Alt+Z) to laser-rewind only this function.
                      </span>
                    ) : (
                      <span className="text-[#86EFAC]">
                        Phew! Lines 8-14 rewound. Surrounding code (L1-6 & L16-22) remained 100% frozen.
                      </span>
                    )}
                  </span>
                  <button
                    onClick={triggerLaserRewind}
                    className={`px-3 py-1 bg-[#C15C3D] hover:bg-[#A94B2E] text-white rounded text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1 ${
                      btnBounced ? 'scale-95' : 'scale-100'
                    }`}
                  >
                    <Zap className="w-3 h-3 fill-current" />
                    <span>Rewind Scalpel</span>
                  </button>
                </div>
              </div>

              {/* FUNCTION 3: generateInvoice (Untouched) */}
              <div
                onClick={() => setSelectedFunction(3)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  selectedFunction === 3 ? 'fibery-reticle' : 'border-transparent hover:border-[#382C27] hover:bg-[#1A1412]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[#7A6E65] text-[11px] mb-1">
                  <span>Lines 16-22 • <strong className="text-[#FAF7F2]">generateInvoice(orderId)</strong></span>
                  <span className="text-[#86EFAC] bg-[#14261D] px-2 py-0.2 rounded border border-[#237864] text-[10px]">
                    v1 (Pristine & Untouched)
                  </span>
                </div>
                <pre className="text-[#A39482]">
                  <span className="text-[#F7B93E]">export function </span>
                  <span className="text-[#FAF7F2]">generateInvoice</span>(
                  <span className="text-[#D4C8B8]">orderId</span>: <span className="text-[#E05638]">string</span>, <span className="text-[#D4C8B8]">total</span>: <span className="text-[#E05638]">number</span>) {'{\n'}
                  {'  '}<span className="text-[#F7B93E]">return </span>{`{ orderId, total, tax: total * 0.08, timestamp: Date.now() }`};{'\n'}
                  {'}'}
                </pre>
                <div className="text-[10px] text-[#7A6E65] mt-1.5 italic select-none">
                  // Notice how lines 1-6 & 16-22 remain frozen during the rewind.
                </div>
              </div>

            </div>

            {/* Sandbox Footer */}
            <div className="flex items-center justify-between px-6 py-2.5 bg-[#1A1412] border-t border-[#382C27] text-[11px] text-[#7A6E65]">
              <div className="flex items-center gap-3">
                <span className="text-[#F7B93E] font-bold">● FuncUndo AST Engine</span>
                <span>|</span>
                <span>
                  {selectedFunction === 2
                    ? `calculateDiscount: [${currentVersion === 3 ? 'v3 active → v2 snapshot ready' : 'v2 restored (Pristine)'}]`
                    : selectedFunction === 1
                    ? 'fetchUserCart: [v1 (Pristine baseline)]'
                    : 'generateInvoice: [v1 (Pristine baseline)]'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetSandbox}
                  className="text-xs text-[#FAF7F2] hover:text-[#F7B93E] underline cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Break function again</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
