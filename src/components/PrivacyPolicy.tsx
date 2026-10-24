import React, { useEffect } from 'react';
import { ShieldCheck, Lock, HardDrive, Cpu, ExternalLink, ArrowLeft } from 'lucide-react';
import { updateSEO } from '../utils/seo';

interface PrivacyPolicyProps {
  onBack: () => void;
  onOpenDocs: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, onOpenDocs }) => {
  useEffect(() => {
    updateSEO({
      title: 'Privacy Policy · Zero-Cloud, 100% Offline · FuncUndo',
      description: 'FuncUndo privacy policy: Exactly 0 network requests sent. 100% offline SQLite WASM and local Tree-sitter parsing with zero telemetry.',
      canonicalPath: '/privacy',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Back navigation */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C15C3D] hover:text-[#A94B2E] mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>

      {/* Header with single H1 */}
      <div className="border-b border-[#E8E1D5] pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F3EE] border border-[#BDE0D5] text-xs font-mono text-[#1C5C4D] font-bold mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Zero-Telemetry Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#251D1A] tracking-tight">
          Privacy Policy: Zero Cloud, 100% Offline
        </h1>
        <p className="text-sm text-[#7A6E65] mt-2 font-mono">
          Effective Date: October 25, 2026 · Version: 1.0.0
        </p>
      </div>

      {/* The 4-Pillar Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D5] shadow-sm">
          <div className="flex items-center gap-2 text-[#1C5C4D] font-bold text-sm mb-1">
            <Lock className="w-4 h-4" />
            <span>0 Network Requests</span>
          </div>
          <p className="text-xs text-[#5A5047] leading-relaxed">
            FuncUndo contains zero HTTP clients, tracking pixels, or phone-home pings. It cannot connect to external servers.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E8E1D5] shadow-sm">
          <div className="flex items-center gap-2 text-[#C15C3D] font-bold text-sm mb-1">
            <HardDrive className="w-4 h-4" />
            <span>Local SQLite Only</span>
          </div>
          <p className="text-xs text-[#5A5047] leading-relaxed">
            All function snapshots and diffs are stored inside your local VS Code workspace storage in <code className="font-mono text-[#251D1A]">funcundo.sqlite</code>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E8E1D5] shadow-sm">
          <div className="flex items-center gap-2 text-[#8A6D1C] font-bold text-sm mb-1">
            <Cpu className="w-4 h-4" />
            <span>Local WASM Parsing</span>
          </div>
          <p className="text-xs text-[#5A5047] leading-relaxed">
            Tree-sitter runs directly inside WebAssembly worker threads on your machine. Your source code never leaves your RAM and disk.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E8E1D5] shadow-sm">
          <div className="flex items-center gap-2 text-[#251D1A] font-bold text-sm mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>No AI Training</span>
          </div>
          <p className="text-xs text-[#5A5047] leading-relaxed">
            We do not feed your proprietary code into any LLM or model training cluster. FuncUndo is deterministic math, not AI.
          </p>
        </div>
      </div>

      {/* Detailed Policy Sections */}
      <div className="space-y-8 text-sm text-[#5A5047] leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">1. Overview & Core Philosophy</h2>
          <p>
            FuncUndo is an open-source Visual Studio Code extension engineered by ChronosDev. Our philosophy is simple: <strong>your source code belongs exclusively to you and your computer</strong>. We believe developer tools should operate with the same offline privacy and respect as Unix utilities like <code className="font-mono text-[#251D1A]">grep</code> and <code className="font-mono text-[#251D1A]">diff</code>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">2. Information We Do NOT Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5A5047]">
            <li><strong>No Source Code:</strong> We do not upload, read, mirror, or inspect any files in your workspace.</li>
            <li><strong>No Telemetry or Analytics:</strong> The extension contains no Google Analytics, Mixpanel, Sentry, or custom telemetry probes.</li>
            <li><strong>No Keystroke Logging:</strong> We do not track typing speed, key sequences, or editing habits.</li>
            <li><strong>No Personal Identifiers:</strong> We do not collect names, email addresses, IP addresses, or GitHub tokens.</li>
            <li><strong>No Cloud Sync:</strong> There is no cloud sync tier. The extension works perfectly with your Wi-Fi disconnected.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">3. How Local Storage Operates</h2>
          <p>
            When you save a supported file (<code className="font-mono text-[#251D1A]">.ts</code>, <code className="font-mono text-[#251D1A]">.tsx</code>, <code className="font-mono text-[#251D1A]">.js</code>), FuncUndo computes SHA-256 semantic AST hashes. If a function changed, a snapshot record is written to:
          </p>
          <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#DDD4C5] font-mono text-xs text-[#251D1A]">
            &lt;VS Code Global Storage&gt;/chronos.funcundo/funcundo.sqlite
          </div>
          <p>
            You can inspect, export, or delete this file at any time. When you uninstall FuncUndo or invoke the <code className="font-mono text-[#C15C3D]">FuncUndo: Vacuum Storage</code> command, the local database is cleared.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">4. Website & Marketing Analytics</h2>
          <p>
            This website (<code className="font-mono text-[#251D1A]">funcundo.vercel.app</code>) is hosted on Vercel. Standard Vercel edge access logs may record IP address, user-agent, and requested asset for security and denial-of-service prevention. If Google Analytics is enabled by the site operator, it operates with IP anonymization enabled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">5. GDPR, CCPA & Global Compliance</h2>
          <p>
            Because FuncUndo collects zero personal data, it complies with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) through complete <strong>data minimization by architecture</strong>. There is no user database to breach, sell, or subpoena.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#251D1A]">6. Open Source Auditability</h2>
          <p>
            Do not take our word for it. Every single line of FuncUndo's extension code is open source and verifiable on GitHub under the MIT License:
          </p>
          <a
            href="https://github.com/ChronosTeamx/FuncUndo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C15C3D] hover:underline"
          >
            <span>Audit the Source Code on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>

        <section className="pt-6 border-t border-[#E8E1D5] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#7A6E65]">
            Questions? File an issue on our GitHub repository.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDocs}
              className="text-xs font-bold text-[#251D1A] hover:text-[#C15C3D] transition-colors cursor-pointer"
            >
              Read Documentation &rarr;
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
