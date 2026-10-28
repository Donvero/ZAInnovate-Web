"use client";

import React from "react";
import {
  Building2,
  FileBadge2,
  MapPin,
  ShieldCheck,
  Scale,
  Landmark,
  CheckCircle,
} from "lucide-react";

export const CorporateData: React.FC = () => {
  return (
    <section id="corporate" className="py-20 bg-[#0A1322] border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold text-gold-400">
            <span>Institutional Governance</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Corporate Transparency & Governance
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Full compliance data for South African public sector procurement committees, municipal managers, and corporate partners.
          </p>
        </div>

        {/* 4 Corporate Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Registration */}
          <div className="rounded-xl border border-navy-700 bg-navy-900/80 p-6 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/20">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Legal Entity
            </span>
            <h3 className="mt-1 text-base font-bold text-white">
              ZAInnovate Technologies (Pty) Ltd
            </h3>
            <p className="mt-2 text-xs font-mono text-gold-400">
              Reg: 2025/572318/07
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Incorporated under the Companies Act 71 of 2008 of South Africa.
            </p>
          </div>

          {/* Card 2: B-BBEE */}
          <div className="rounded-xl border border-gold-500/40 bg-navy-900/80 p-6 shadow-md ring-1 ring-gold-500/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 text-navy-950 font-bold">
              <FileBadge2 className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
              Empowerment
            </span>
            <h3 className="mt-1 text-base font-bold text-white">
              B-BBEE Level 1 Contributor
            </h3>
            <p className="mt-2 text-xs font-mono text-gold-400">
              135% Procurement Recognition
            </p>
            <p className="mt-2 text-xs text-slate-300">
              100% Black Youth-Owned National Technology Studio.
            </p>
          </div>

          {/* Card 3: Location */}
          <div className="rounded-xl border border-navy-700 bg-navy-900/80 p-6 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/20">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Headquarters
            </span>
            <h3 className="mt-1 text-base font-bold text-white">
              East London, Eastern Cape
            </h3>
            <p className="mt-2 text-xs font-mono text-gold-400">
              Buffalo City Metropolitan
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Operating nationally with cloud edge presence in JHB & CPT.
            </p>
          </div>

          {/* Card 4: Compliance */}
          <div className="rounded-xl border border-navy-700 bg-navy-900/80 p-6 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 border border-gold-500/20">
              <Scale className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Statutory Alignment
            </span>
            <h3 className="mt-1 text-base font-bold text-white">
              PFMA & MFMA Ready
            </h3>
            <p className="mt-2 text-xs font-mono text-gold-400">
              POPIA & AGSA Aligned
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Strict compliance with National Treasury SCM instruction notes.
            </p>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div id="mission" className="mt-12 rounded-2xl border border-navy-700 bg-navy-950 p-8 sm:p-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-500 font-bold">
            National Studio Mission
          </span>
          <blockquote className="mt-4 text-xl sm:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
            &ldquo;Engineering South Africa’s Digital Backbone — through sovereign algorithms, uncompromised public governance, and radical technological equity.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-gold-500"></span>
            <span>Founded in the Eastern Cape • Serving the Republic of South Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateData;
