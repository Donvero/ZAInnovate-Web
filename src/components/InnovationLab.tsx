"use client";

import React from "react";
import {
  ShieldAlert,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Lock,
  WifiOff,
} from "lucide-react";

export const InnovationLab: React.FC = () => {
  return (
    <section id="innovation-lab" className="relative py-24 bg-[#08101C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold text-gold-400">
            <span>ZAInnovate Labs • Proprietary R&D</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Sovereign Technology Flagships
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            We don’t just build software for clients — we research and engineer foundational national infrastructure to solve systemic South African challenges.
          </p>
        </div>

        {/* Flagship 1: SAMS */}
        <div className="mb-12 rounded-2xl border border-gold-500/30 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="h-4 w-4" />
                <span>Flagship 01 • Predictive Public Governance</span>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
                SAMS: Smart Audit Management System
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A predictive governance sentry that uses pattern-recognition algorithms to flag supply chain irregularities before they become adverse Auditor-General findings. Designed for South African Municipalities, Provincial Treasuries, and National Organs of State.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>Split-Tender Threshold Interception</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>MFMA S116(3) Contract Variation Sentry</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>Persal State Employee & CIPC Cross-check</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>AGSA Clean Audit Readiness Scorecard</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Donvero/ZAInnovate-SAMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-bold text-navy-950 hover:bg-gold-400 transition-colors shadow-md"
                >
                  <span>View SAMS Repository</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  Stack: Next.js 14 • Prisma • PostgreSQL • Tailwind
                </span>
              </div>
            </div>

            {/* Visual preview card */}
            <div className="lg:col-span-5 rounded-xl border border-navy-700 bg-navy-950/80 p-5 shadow-inner">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3 text-xs text-slate-400">
                <span className="font-mono text-gold-400 font-semibold">
                  LIVE RADAR ACTIVE
                </span>
                <span>MFMA Section 62 Guard</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs">
                  <div className="flex justify-between font-semibold text-rose-300">
                    <span>Split Tender Alert (Under R200k)</span>
                    <span>CRITICAL</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300">
                    3 orders totaling R594,000 detected across 48h to avoid open competitive bidding.
                  </p>
                </div>

                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
                  <div className="flex justify-between font-semibold text-amber-300">
                    <span>Sole-Source Deviation Notice</span>
                    <span>HIGH RISK</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300">
                    R2.45M award initiated without prior Accounting Officer approval.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800 flex justify-between items-center text-xs text-slate-400">
                <span>Preserved Public Funds</span>
                <span className="text-white font-bold font-mono">R 61.2 Million</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship 2: Umbono */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <WifiOff className="h-4 w-4" />
                <span>Flagship 02 • Sovereign EdTech</span>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
                Umbono: Offline-First AI Education Engine
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A sovereign AI learning platform built specifically for data-scarce and rural South African environments. Delivers DBE CAPS curriculum-aligned STEM tutoring in isiXhosa, Zulu, Afrikaans, and English with 100% offline functionality.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Dual Storage (IndexedDB + ServiceWorker)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>DBE CAPS Grade 8–12 STEM Coverage</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Multilingual Code-Switching AI Tutor</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero Cellular Data Micro-Burst Sync (&lt;50KB)</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Donvero/ZAInnovate-Umbono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-navy-950 hover:bg-emerald-400 transition-colors shadow-md"
                >
                  <span>View Umbono Repository</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  Stack: Next.js 14 • Service Workers • idb • ONNX Runtime
                </span>
              </div>
            </div>

            {/* Visual preview card */}
            <div className="lg:col-span-5 rounded-xl border border-navy-700 bg-navy-950/80 p-5 shadow-inner">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3 text-xs text-slate-400">
                <span className="font-mono text-emerald-400 font-semibold">
                  OFFLINE CACHE READY
                </span>
                <span>Zero Cellular Data</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-navy-700 bg-navy-900/80 p-3 text-xs">
                  <div className="flex justify-between font-semibold text-white">
                    <span>Grade 11 Mathematics (Trigonometry)</span>
                    <span className="text-emerald-400">Cached (38MB)</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Bilingual lesson: English & isiXhosa audio summaries ready for offline replay.
                  </p>
                </div>

                <div className="rounded-lg border border-navy-700 bg-navy-900/80 p-3 text-xs">
                  <div className="flex justify-between font-semibold text-white">
                    <span>Physical Sciences: Newton&apos;s Laws</span>
                    <span className="text-emerald-400">Cached (42MB)</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Step-by-step vector calculations with zero internet requirement.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800 flex justify-between items-center text-xs text-slate-400">
                <span>Cellular Data Preserved</span>
                <span className="text-white font-bold font-mono">1.42 GB / Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
