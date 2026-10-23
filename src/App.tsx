import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScalpelPlayground } from './components/ScalpelPlayground';
import { SidebarSymbolCallout } from './components/SidebarSymbolCallout';
import { FiberyShowcaseSection } from './components/FiberyShowcaseSection';
import { HorrorsSection } from './components/HorrorsSection';
import { DocsView } from './components/DocsView';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'docs'>('landing');

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#251D1A] font-sans antialiased selection:bg-[#E05638]/20 selection:text-[#251D1A] overflow-x-hidden">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onSelectView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Switcher */}
      {currentView === 'landing' ? (
        <main>
          {/* Hero Section */}
          <HeroSection onOpenDocs={() => {
            setCurrentView('docs');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />

          {/* Interactive Scalpel Playground */}
          <ScalpelPlayground />

          {/* VS Code Activity Bar Symbol Showcase */}
          <section className="py-16 border-t border-[#E8E1D5] bg-[#FAF7F2]/60">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCECE8] border border-[#F4CCC4] text-[11px] font-mono text-[#C15C3D] font-bold mb-3">
                  <span>📍</span>
                  <span>Native VS Code Integration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#251D1A] tracking-tight">
                  Zero Clutter. Anchored Right in Your Left Activity Bar.
                </h2>
                <p className="text-xs sm:text-sm text-[#5A5047] mt-2">
                  No floating browser tabs, no cloud dashboards. FuncUndo lives natively inside your VS Code window as a discrete clock-arrow icon on the left sidebar.
                </p>
              </div>

              <SidebarSymbolCallout showHeading={true} />
            </div>
          </section>

          {/* Fibery-Style Modular Showcase with Isometric Models & Reddit Quote */}
          <FiberyShowcaseSection onOpenDocs={() => {
            setCurrentView('docs');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />

          {/* The 3 Horrors of Modern Undoing */}
          <HorrorsSection />

          {/* Teaser to Cynical Docs */}
          <section className="py-16 text-center border-t border-[#E8E1D5]">
            <div className="max-w-3xl mx-auto px-4">
              <span className="text-xs font-mono font-bold text-[#C15C3D] uppercase tracking-wider">
                Hungry for details?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#251D1A] tracking-tight mt-1 mb-4">
                Want to read our cynical comparison with Git & Local History?
              </h2>
              <p className="text-sm text-[#5A5047] mb-6 max-w-xl mx-auto">
                We wrote a full documentation manual covering why Git isn't a scratchpad, how our WebAssembly Tree-sitter worker runs without UI lag, and how to resurrect deleted functions.
              </p>
              <button
                onClick={() => {
                  setCurrentView('docs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-[#251D1A] hover:bg-[#3B2E2A] text-white text-xs font-mono font-bold tracking-tight shadow-md transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read the  Docs</span>
                <span>&rarr;</span>
              </button>
            </div>
          </section>
        </main>
      ) : (
        <DocsView />
      )}

      {/* Footer */}
      <Footer
        onOpenDocs={() => {
          setCurrentView('docs');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPlayground={() => {
          setCurrentView('landing');
          setTimeout(() => {
            document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

    </div>
  );
}

export default App;
