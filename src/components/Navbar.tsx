"use client";

import React, { useState } from "react";
import { ShieldCheck, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top National Identity Bar */}
      <div className="border-b border-navy-800 bg-[#060D17] px-4 py-1.5 text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="font-semibold text-slate-200">
              ZAInnovate Technologies (Pty) Ltd
            </span>
            <span className="text-slate-600">•</span>
            <span className="hidden sm:inline">Reg: 2025/572318/07</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-gold-400 font-semibold">B-BBEE Level 1</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400">East London, South Africa</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">National Delivery</span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className="sticky top-0 z-50 border-b border-navy-700/80 bg-[#0E1B2E]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-black text-xl shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              Z
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-gold-400 transition-colors">
                  ZAInnovate
                </span>
                <span className="text-xs font-semibold text-gold-500 font-mono">
                  TECH
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                National Technology Studio
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#services" className="hover:text-gold-400 transition-colors">
              Pillars of Practice
            </a>
            <a href="#innovation-lab" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <span>R&D Flagships (SAMS & Umbono)</span>
              <span className="rounded bg-gold-500/15 px-1.5 py-0.5 text-[9px] font-bold text-gold-400 uppercase">
                Active
              </span>
            </a>
            <a href="#corporate" className="hover:text-gold-400 transition-colors">
              Corporate Governance
            </a>
            <a href="#mission" className="hover:text-gold-400 transition-colors">
              Our Studio
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gold-500 px-4 py-2 text-xs font-bold text-navy-950 hover:bg-gold-400 transition-all shadow-md shadow-gold-500/10 hover:shadow-gold-500/20"
            >
              <span>Engage Our Studio</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-lg border border-navy-700 bg-navy-800 p-2 text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-navy-700 bg-navy-900/98 px-6 py-4 space-y-3 text-sm">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-gold-400"
            >
              Pillars of Practice
            </a>
            <a
              href="#innovation-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-gold-400"
            >
              R&D Flagships (SAMS & Umbono)
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-gold-400"
            >
              Corporate Governance
            </a>
            <a
              href="#mission"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-gold-400"
            >
              Our Studio
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block pt-2 text-gold-400 font-semibold"
            >
              Engage Our Studio →
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
