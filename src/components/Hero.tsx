"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px w-10 bg-gold-500" />
            <span>East London · South Africa</span>
            <span className="text-slate-600">/</span>
            <span>Independent technology studio</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Software for the places where infrastructure matters.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
            ZAInnovate builds accountable systems for public institutions, South African businesses, and learners working with real constraints: regulation, money, language, and unreliable connectivity.
          </p>

          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#innovation-lab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/15"
            >
              <span>See the work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-800/80 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:bg-navy-750 hover:border-gold-500/40 transition-all backdrop-blur-sm"
            >
              <span>How we work</span>
            </a>
          </div>

          {/* Product areas, not invented impact metrics. */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 text-left">
            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-gold-400">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold text-slate-400">Governance</span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                SAMS
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Rules and evidence for earlier procurement review.
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-semibold text-slate-400">Learning</span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                Umbono
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Offline-first learning for low-bandwidth classrooms and homes.
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-gold-400">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold text-slate-400">Commerce</span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                QuoteForge
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Documents, VAT calculations, and payments for South African SMMEs.
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Layers className="h-4 w-4" />
                <span className="text-xs font-semibold text-slate-400">Procurement</span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                TenderPulse
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Tender discovery and alerts grounded in local procurement workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
