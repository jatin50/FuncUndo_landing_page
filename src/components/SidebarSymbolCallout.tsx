import React, { useState } from 'react';
import { Eye, CheckCircle2, Sparkles, Compass } from 'lucide-react';

interface SidebarSymbolCalloutProps {
  showHeading?: boolean;
}

export const SidebarSymbolCallout: React.FC<SidebarSymbolCalloutProps> = ({
  showHeading = true,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(true);

  return (
    <div className="rounded-2xl border-2 border-[#E8E1D5] bg-white overflow-hidden shadow-sm hover:border-[#C15C3D] transition-all">
      {showHeading && (
        <div className="p-4 sm:p-5 border-b border-[#E8E1D5] bg-[#FAF7F2] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FCECE8] border border-[#F4CCC4] flex items-center justify-center text-[#C15C3D]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">
                  Visual Locator
                </span>
                <span className="text-[10px] font-mono text-[#1C5C4D] bg-[#E1F3EE] px-2 py-0.5 rounded-full font-bold">
                  VS Code Native
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#251D1A]">
                Where to Find FuncUndo: VS Code Left Activity Bar
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnnotation(!showAnnotation)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all cursor-pointer ${
                showAnnotation
                  ? 'bg-[#C15C3D] text-white'
                  : 'bg-[#EAE3D6] text-[#5A5047] hover:text-[#251D1A]'
              }`}
            >
              {showAnnotation ? '🎯 Pointer Active' : 'Show Pointer'}
            </button>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-2.5 py-1 rounded bg-[#251D1A] text-white hover:bg-[#3B2E2A] text-xs font-mono font-semibold flex items-center gap-1 transition-all cursor-pointer"
            >
              <Eye className="w-3 h-3" />
              <span>{isZoomed ? 'Reset View' : 'Zoom Icon'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Image Frame */}
      <div className="p-4 sm:p-6 bg-[#181412] relative overflow-hidden">
        {/* Subtle grid accent inside preview */}
        <div className="relative rounded-xl overflow-hidden border border-[#382C27] bg-[#1E1E1E] shadow-2xl">
          
          {/* VS Code Window Header */}
          <div className="h-7 bg-[#252526] border-b border-[#333333] px-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block"></span>
              <span className="ml-2 text-[10px] font-mono text-[#CCCCCC]">Visual Studio Code — funcUndo Workspace</span>
            </div>
            <div className="text-[10px] font-mono text-[#858585] hidden sm:block">
              Activity Bar • id: chronos.functionExplorer
            </div>
          </div>

          {/* Screenshot Container with Interactive Reticle Overlay */}
          <div className="relative overflow-hidden group">
            <div
              className={`relative transition-transform duration-300 ${
                isZoomed ? 'scale-150 origin-[2%_40%]' : 'scale-100'
              }`}
            >
              <img
                src="/vscode-sidebar.png"
                alt="Visual Studio Code left sidebar with FuncUndo clock-arrow symbol highlighted"
                className="w-full h-auto object-cover block"
              />

              {/* Glowing Reticle & Indicator Box over FuncUndo Clock Icon (Y: 176px - 188px, centered at 39.8%) */}
              {showAnnotation && (
                <div
                  className="absolute pointer-events-none transition-all duration-300"
                  style={{
                    left: '0.4%',
                    top: '36.8%',
                    width: '2.5%',
                    height: '6.2%',
                    minWidth: '24px',
                    minHeight: '26px',
                  }}
                >
                  {/* Glowing orange pulsing border */}
                  <div className="w-full h-full border-2 border-[#E05638] rounded-md bg-[#E05638]/20 shadow-[0_0_15px_rgba(224,86,56,0.8)] animate-pulse"></div>

                  {/* Crosshair corners */}
                  <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#F7B93E]"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#F7B93E]"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#F7B93E]"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#F7B93E]"></span>
                </div>
              )}
            </div>

            {/* Animated Pointer Arrow & Badge */}
            {showAnnotation && (
              <div
                className={`absolute transition-all duration-300 z-20 ${
                  isZoomed
                    ? 'left-[10%] sm:left-[12%] top-[30%]'
                    : 'left-[3.5%] sm:left-[4.5%] top-[35%]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* SVG Pointer Arrow */}
                  <svg
                    viewBox="0 0 40 24"
                    fill="none"
                    className="w-8 h-5 text-[#E05638] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] shrink-0"
                  >
                    <path
                      d="M38 12 L8 12 M14 6 L4 12 L14 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Annotation Note Card */}
                  <div className="bg-[#FAF7F2] text-[#251D1A] border-2 border-[#C15C3D] rounded-xl p-2 sm:p-3 shadow-xl max-w-[200px] sm:max-w-xs text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E05638] animate-ping shrink-0"></span>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#C15C3D] uppercase tracking-wide truncate">
                        FuncUndo Clock Symbol
                      </span>
                    </div>
                    <div className="font-bold text-[#251D1A] leading-snug text-[11px] sm:text-xs">
                      Counter-clockwise clock-arrow
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#5A5047] mt-0.5 sm:mt-1 leading-tight hidden xs:block">
                      Click in your left sidebar to open <strong>Tracked Functions</strong>.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explanatory Footer / Specs */}
      <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#E8E1D5] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        
        {/* Spec 1: Official SVG Icon */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8E1D5]">
          <div className="w-10 h-10 rounded-lg bg-[#251D1A] text-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#4A3831] p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F7B93E"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full drop-shadow-[0_0_4px_rgba(247,185,62,0.6)]"
            >
              <path d="M3 12a9 9 0 1 0 2.64-6.36L3 8" />
              <path d="M3 3v5h5" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-[#251D1A] flex items-center gap-1">
              <span>Extension Symbol</span>
              <Sparkles className="w-3 h-3 text-[#C15C3D]" />
            </div>
            <div className="text-[11px] text-[#7A6E65] font-mono mt-0.5">
              media/icon.svg (Clock Arrow)
            </div>
            <div className="text-[11px] text-[#5A5047] mt-1">
              Represents AST time-travel and surgical undo.
            </div>
          </div>
        </div>

        {/* Spec 2: Sidebar Container */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8E1D5]">
          <div className="w-10 h-10 rounded-lg bg-[#E1F3EE] text-[#1C5C4D] flex items-center justify-center shrink-0 font-mono font-bold text-sm border border-[#BDE0D5]">
            AST
          </div>
          <div>
            <div className="font-bold text-[#251D1A]">Activity Bar Container</div>
            <div className="text-[11px] text-[#1C5C4D] font-mono mt-0.5">
              id: "funcundo"
            </div>
            <div className="text-[11px] text-[#5A5047] mt-1">
              Sits quietly alongside Explorer, Search, and Git.
            </div>
          </div>
        </div>

        {/* Spec 3: Primary Action */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E8E1D5]">
          <div className="w-10 h-10 rounded-lg bg-[#FCECE8] text-[#C15C3D] flex items-center justify-center shrink-0 border border-[#F4CCC4]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[#251D1A]">Function History View</div>
            <div className="text-[11px] text-[#C15C3D] font-mono mt-0.5">
              chronos.functionExplorer
            </div>
            <div className="text-[11px] text-[#5A5047] mt-1">
              Click anytime to inspect function revisions and restore deleted ghosts.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
