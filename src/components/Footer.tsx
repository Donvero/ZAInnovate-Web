"use client";

import React from "react";
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1e2d42] bg-[#070E18] text-slate-400 text-xs">
      {/* Top telemetry ticker strip */}
      <div className="border-b border-[#1e2d42]/70 bg-[#050B13] px-4 py-2.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS OPERATIONAL
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">SAMS Predictive SCM Engine v2.4</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Umbono Edge Sync Gateway v1.8</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>SOVEREIGN ENCLAVE: ZA-CENTRAL-1 (Johannesburg / CPT Edge)</span>
            <span className="text-slate-600">|</span>
            <span className="text-gold-400 font-semibold">POPIA / ISO 27001 Aligned</span>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Studio Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-black text-xl shadow-lg shadow-gold-500/10">
                Z
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white">
                  ZAInnovate Technologies
                </span>
                <span className="block text-[11px] font-mono text-gold-400">
                  (Pty) Ltd • Reg: 2025/572318/07
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-300 max-w-sm">
              A 100% Black Youth-Owned National Technology Studio based in East London, South Africa. Engineering sovereign artificial intelligence, predictive public governance infrastructure, and offline-first digital engines.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[11px] font-semibold text-gold-400">
                B-BBEE Level 1 Contributor
              </span>
              <span className="rounded-md border border-[#1e2d42] bg-navy-900/60 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                135% Procurement Recognition
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              <span>East London, Eastern Cape, Republic of South Africa</span>
            </div>
          </div>

          {/* R&D Flagships */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              R&D Flagships
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/Donvero/ZAInnovate-SAMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-gold-400 transition-colors"
                >
                  <span>SAMS (Smart Audit Management)</span>
                  <ArrowUpRight className="h-3 w-3 text-gold-400" />
                </a>
                <span className="block text-[10px] text-slate-500">
                  MFMA & PFMA Irregularity Radar
                </span>
              </li>
              <li className="pt-1">
                <a
                  href="https://github.com/Donvero/ZAInnovate-Umbono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-gold-400 transition-colors"
                >
                  <span>Umbono Education Engine</span>
                  <ArrowUpRight className="h-3 w-3 text-gold-400" />
                </a>
                <span className="block text-[10px] text-slate-500">
                  Offline-First DBE CAPS Sovereign AI
                </span>
              </li>
              <li className="pt-1">
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Sovereign Enclave SDK
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Pillars */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Studio Practice
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Sovereign AI & Gov Intelligence
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Enterprise Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Low-Bandwidth & Offline Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Mission-Critical Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Youth Tech Incubation Fellowship
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Compliance & Legal
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>
                <span className="text-slate-400">POPIA Act Compliance</span>
              </li>
              <li>
                <span className="text-slate-400">MFMA & PFMA Internal Controls</span>
              </li>
              <li>
                <span className="text-slate-400">Public Audit Act (MI Protocol)</span>
              </li>
              <li>
                <span className="text-slate-400">National Treasury SCM Instruction</span>
              </li>
              <li>
                <span className="text-slate-400">CSD Vendor Integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#1e2d42] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 ZAInnovate Technologies (Pty) Ltd. All rights reserved. &ldquo;Engineering South Africa’s Digital Backbone&rdquo;.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Registration: 2025/572318/07</span>
            <span>•</span>
            <span>East London, South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
