"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InnovationLab from "@/components/InnovationLab";
import CorporateData from "@/components/CorporateData";
import {
  Send,
  Building2,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [engagementType, setEngagementType] = useState("sams-governance");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
          engagementType,
          subject: `Strategic Inquiry: ${engagementType}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please check your inputs.");
      }

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Innovation Lab Flagships: SAMS & Umbono */}
      <InnovationLab />

      {/* 3. The 5 Pillars of Studio Practice */}
      <Services />

      {/* 4. Corporate Governance & Transparency */}
      <CorporateData />

      {/* 5. Strategic Public Sector & Enterprise Engagement (Contact) */}
      <section id="contact" className="relative py-24 bg-[#08101C] border-t border-[#1e2d42]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 text-xs font-semibold text-gold-400">
                <span>Studio Direct Access</span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Initiate Strategic Engagement
              </h2>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Whether deploying SAMS across a municipal cluster, rolling out Umbono offline learning pods, or architecting sovereign digital infrastructure — our executive engineering team is ready.
              </p>

              <div className="mt-8 space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 rounded-xl border border-[#1e2d42] bg-navy-900/60 p-4">
                  <Mail className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Executive Direct Inbox</span>
                    <a
                      href="mailto:contact@zainnovate.co.za"
                      className="text-gold-400 font-mono hover:underline"
                    >
                      contact@zainnovate.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#1e2d42] bg-navy-900/60 p-4">
                  <Building2 className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">National Technology Studio</span>
                    <span>East London, Eastern Cape, Republic of South Africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#1e2d42] bg-navy-900/60 p-4">
                  <ShieldCheck className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Statutory Procurement Ready</span>
                    <span>CSD Registered • B-BBEE Level 1 Contributor (135% Recognition)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#1e2d42] bg-gradient-to-b from-navy-850 to-navy-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      Briefing Received
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 max-w-md mx-auto">
                      Thank you. A member of the ZAInnovate Technologies executive engineering panel will review your requirements and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setErrorMessage(null);
                      }}
                      className="mt-6 rounded-lg bg-gold-500 px-5 py-2 text-xs font-bold text-navy-950 hover:bg-gold-400"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-400">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Engagement Domain
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          { id: "sams-governance", label: "SAMS (Predictive Gov & SCM)" },
                          { id: "umbono-edtech", label: "Umbono (Offline-First EdTech)" },
                          { id: "cloud-infra", label: "Sovereign Cloud & Infra" },
                          { id: "custom-engineering", label: "Mission-Critical Systems" },
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setEngagementType(item.id)}
                            className={`rounded-lg border p-2.5 text-left transition-all ${
                              engagementType === item.id
                                ? "border-gold-500 bg-gold-500/10 text-gold-400 font-semibold"
                                : "border-[#1e2d42] bg-navy-950/70 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name / Title
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Adv. Thandiwe Sithole"
                          className="w-full rounded-lg border border-[#1e2d42] bg-navy-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Official Institutional Email
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="t.sithole@buffalocity.gov.za"
                          className="w-full rounded-lg border border-[#1e2d42] bg-navy-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Organ of State / Entity
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Provincial Treasury / Metro / Corp"
                          className="w-full rounded-lg border border-[#1e2d42] bg-navy-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Direct Contact Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+27 (0)43 000 0000"
                          className="w-full rounded-lg border border-[#1e2d42] bg-navy-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Scope of Briefing / Requirements
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on target audit cycle, procurement volume, or student cohort scale..."
                        className="w-full rounded-lg border border-[#1e2d42] bg-navy-950 p-3 text-xs text-white placeholder:text-slate-500 focus:border-gold-500 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 py-3 text-xs font-bold text-navy-950 hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Transmitting Official Briefing...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Official Briefing</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-slate-500">
                      Protected under POPIA Act (Act 4 of 2013). Strict confidentiality guaranteed for all prospective tender and audit consultations.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
