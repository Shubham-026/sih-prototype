"use client";

import React from "react";
import { Check, LineChart, Network, Handshake } from "lucide-react";
import { motion } from "motion/react";

const PILLARS = [
  {
    phase: "Phase 01",
    title: "Assess",
    icon: LineChart,
    description:
      "Granular diagnostic separating purely theoretical academia from high-load applied competencies. Instant identification of career-limiting blindspots.",
    features: ["Real-time Code & Logic Audit", "Enterprise Benchmark Matching"],
    accentGlow: false,
  },
  {
    phase: "Phase 02",
    title: "Bridge",
    icon: Network,
    description:
      "Execute bespoke fast-track micro-projects built alongside Staff Engineers. Turn verified skill gaps into demonstrated production-grade capability.",
    features: ["Production Incident Replicas", "1-on-1 Staff Architect Reviews"],
    accentGlow: true,
  },
  {
    phase: "Phase 03",
    title: "Apply",
    icon: Handshake,
    description:
      "Bypass standard resume screeners completely. Get directly introduced to enterprise hiring directors with pre-validated proof of competence.",
    features: ["Guaranteed Recruiter Audits", "Accelerated 48-Hour Technical Passes"],
    accentGlow: false,
  },
];

export default function MethodologySection() {
  return (
    <section id="platform" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-4">
          Tri-Pillar Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] md:leading-[1.2] font-bold text-foreground-primary tracking-tight">
          Precision-Engineered Career Transformation
        </h2>
        <p className="text-base sm:text-lg text-foreground-muted mt-4 leading-relaxed font-normal">
          Replacing opaque resumes with verified behavioral competency proofs that
          global enterprises trust.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`p-8 rounded-2xl glass-panel flex flex-col justify-between group relative overflow-hidden cursor-default ${
                pillar.accentGlow
                  ? "border-primary/45 shadow-[0_0_40px_rgba(212,175,55,0.18)]"
                  : ""
              }`}
            >
              {pillar.accentGlow && (
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              )}

              <div>
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="w-14 h-14 rounded-xl bg-surface-elevated border border-border-gold-glow flex items-center justify-center text-primary mb-6 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                <span className="text-[11px] font-semibold text-primary tracking-[0.2em] uppercase">
                  {pillar.phase}
                </span>

                <h3 className="text-2xl font-bold text-foreground-primary mt-1 mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border-gold-glow/50 flex flex-col gap-2.5">
                {pillar.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-xs font-medium text-foreground-primary group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
