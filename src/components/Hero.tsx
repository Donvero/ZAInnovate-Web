"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, Cpu, Award, Layers } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Identity Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gradient-to-r from-navy-800/90 via-navy-800 to-navy-900/90 px-4 py-1.5 shadow-lg shadow-gold-500/5">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-ping"></span>
            <span className="text-xs font-semibold text-slate-200">
              100% Black Youth-Owned
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-semibold text-gold-400">
              B-BBEE Level 1
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">East London HQ</span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engineering South Africa’s{" "}
            <span className="gold-gradient-text block mt-2 sm:inline">
              Digital Backbone.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            ZAInnovate Technologies is a national technology studio engineering sovereign AI, predictive public governance infrastructure, and offline-first digital engines built for African realities.
          </p>

          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#innovation-lab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/15"
            >
              <span>Explore R&D Flagships (SAMS & Umbono)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-800/80 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:bg-navy-750 hover:border-gold-500/40 transition-all backdrop-blur-sm"
            >
              <span>Our 5 Pillars of Practice</span>
            </a>
          </div>

          {/* Credibility & Impact Metrics Cards */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 text-left">
            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-gold-400">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Predictive Gov
                </span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                R61.2M+
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Irregular public spend intercepted via SAMS
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Offline Engine
                </span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                Zero-Data
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Umbono STEM tutoring for rural learners
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-gold-400">
                <Award className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Empowerment
                </span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                Level 1
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                100% Black Youth Owned B-BBEE
              </p>
            </div>

            <div className="rounded-xl border border-navy-700/80 bg-navy-900/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Layers className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Compliance
                </span>
              </div>
              <div className="mt-2 text-xl sm:text-2xl font-black text-white">
                MFMA / PFMA
              </div>
              <p className="mt-0.5 text-[11px] text-slate-400">
                AGSA Clean Audit alignment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
