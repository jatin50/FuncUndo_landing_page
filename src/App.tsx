import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScalpelPlayground } from './components/ScalpelPlayground';
import { SidebarSymbolCallout } from './components/SidebarSymbolCallout';
import { FiberyShowcaseSection } from './components/FiberyShowcaseSection';
import { HorrorsSection } from './components/HorrorsSection';
import { DocsView } from './components/DocsView';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';
import { updateSEO, initGoogleAnalytics } from './utils/seo';

type ViewType = 'landing' | 'docs' | 'privacy' | '404';

function getInitialView(): ViewType {
  if (typeof window === 'undefined') return 'landing';
  const path = window.location.pathname.toLowerCase();
  if (path === '/' || path === '') return 'landing';
  if (path.startsWith('/docs')) return 'docs';
  if (path.startsWith('/privacy')) return 'privacy';
  if (path === '/404') return '404';
  return '404';
}

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);

  // Initialize analytics and handle browser history
  useEffect(() => {
    initGoogleAnalytics();

    const handlePopState = () => {
      setCurrentView(getInitialView());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO and sync browser history URL on view change
  const navigateTo = (view: ViewType, path?: string) => {
    setCurrentView(view);
    const targetPath = path || (view === 'landing' ? '/' : `/${view}`);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view === 'landing') {
      updateSEO({
        title: 'FuncUndo · Version Control for Functions (VS Code Extension)',
        description: 'Granular, AST-aware function-level version control and relational blast-radius safety engine for Visual Studio Code. 100% offline SQLite with zero cloud telemetry.',
        canonicalPath: '/',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#251D1A] font-sans antialiased selection:bg-[#E05638]/20 selection:text-[#251D1A] overflow-x-hidden flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onSelectView={(view) => navigateTo(view)}
      />

      {/* Main Content Switcher */}
      {currentView === 'landing' && (
        <main>
          {/* Hero Section */}
          <HeroSection onOpenDocs={() => navigateTo('docs')} />

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
          <FiberyShowcaseSection onOpenDocs={() => navigateTo('docs')} />

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
                onClick={() => navigateTo('docs')}
                className="px-6 py-3 rounded-xl bg-[#251D1A] hover:bg-[#3B2E2A] text-white text-xs font-mono font-bold tracking-tight shadow-md transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read the Sarcastic Docs</span>
                <span>&rarr;</span>
              </button>
            </div>
          </section>
        </main>
      )}

      {currentView === 'docs' && (
        <DocsView onSelectHome={() => navigateTo('landing')} />
      )}

      {currentView === 'privacy' && (
        <PrivacyPolicy
          onBack={() => navigateTo('landing')}
          onOpenDocs={() => navigateTo('docs')}
        />
      )}

      {currentView === '404' && (
        <NotFound
          onGoHome={() => navigateTo('landing')}
          onGoDocs={() => navigateTo('docs')}
        />
      )}

      {/* Footer */}
      <Footer
        onOpenDocs={() => navigateTo('docs')}
        onOpenPlayground={() => {
          navigateTo('landing');
          setTimeout(() => {
            document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
        onOpenPrivacy={() => navigateTo('privacy')}
      />

    </div>
  );
}

export default App;
