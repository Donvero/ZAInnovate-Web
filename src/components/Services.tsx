"use client";

import React from "react";
import {
  BrainCircuit,
  CloudCog,
  WifiOff,
  Terminal,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  deliverables: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Sovereign AI & Public Sector Intelligence",
    category: "Algorithmic Governance",
    description:
      "Engineering localized predictive artificial intelligence architectures designed for organs of state, provincial treasuries, and metros. We build deterministic anti-corruption radars, automated regulatory interpreters, and compliance pipelines.",
    icon: BrainCircuit,
    tags: ["Predictive Governance", "Audit Radar", "PFMA/MFMA", "Sovereign LLMs"],
    deliverables: [
      "SCM Tender & Voucher Anomaly Detection",
      "AGSA Material Irregularity Pre-audit Engines",
      "CIPC & Persal Conflict of Interest Graph Resolution",
    ],
  },
  {
    number: "02",
    title: "Enterprise Cloud & Digital Infrastructure",
    category: "Platform Engineering",
    description:
      "Designing high-resilience, POPIA-compliant cloud infrastructures. We architect hybrid systems that blend local South African cloud data centers with on-premise government mainframes for maximum sovereign control.",
    icon: CloudCog,
    tags: ["POPIA Certified", "Hybrid Gov Cloud", "Kubernetes", "Zero Trust"],
    deliverables: [
      "Sovereign In-Country Cloud Migration",
      "High-Availability Municipal Data Warehousing",
      "Disaster Recovery & Resilient Backups",
    ],
  },
  {
    number: "03",
    title: "Low-Bandwidth & Offline-First Engineering",
    category: "Connectivity Resilience",
    description:
      "Creating modern progressive web applications and distributed software engineered for high-latency, data-constrained, or zero-connectivity African operational environments.",
    icon: WifiOff,
    tags: ["PWA", "Service Workers", "IndexedDB", "Delta Sync"],
    deliverables: [
      "Zero-Bandwidth Educational & Field Portals",
      "Opportunistic Micro-Burst Data Synchronization",
      "Local Vector & Quantized SLM On-Device Caching",
    ],
  },
  {
    number: "04",
    title: "Custom Software Architecture & Mission-Critical Systems",
    category: "Full-Cycle Engineering",
    description:
      "Crafting performant enterprise systems using Next.js 14, TypeScript, PostgreSQL, and modern microservices. We build robust solutions that replace brittle legacy spreadsheets and paper trails with cryptographic audit logs.",
    icon: Terminal,
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Immutable Audit Logs"],
    deliverables: [
      "Municipal Workflow Management Platforms",
      "Transversal Contract Monitoring Systems",
      "Automated Citizen Engagement Portals",
    ],
  },
  {
    number: "05",
    title: "Youth Technology Incubation & Skills Sovereignty",
    category: "Human Capital Development",
    description:
      "Operating from East London in the Eastern Cape, we incubate top young software engineers, data scientists, and infrastructure architects to build sovereign South African technical capacity.",
    icon: Sparkles,
    tags: ["Youth Incubation", "B-BBEE Level 1", "Eastern Cape Tech", "Skills Transfer"],
    deliverables: [
      "Hands-on Engineering Fellowships",
      "Open-Source Public Goods Contributions",
      "Applied AI & Full-Stack Apprenticeships",
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-[#0A1322] border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-gold-500 text-xs font-bold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              The 5 Pillars of Practice
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-2xl">
              We engineer sovereign, high-impact digital systems for South African institutions, transforming public sector operations and private sector performance.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-slate-400">
              ZAInnovate Studio Services v3.0
            </span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-navy-700/80 bg-gradient-to-b from-navy-850 to-navy-900/95 p-7 shadow-lg transition-all duration-300 hover:border-gold-500/50 hover:shadow-gold-500/10 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gold-500/90 tracking-wider">
                      PILLAR {pillar.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <span className="mt-4 block text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    {pillar.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-5 space-y-2 border-t border-navy-700/60 pt-4">
                    {pillar.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-navy-700/40">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-navy-950 px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-navy-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
