"use client";

import React, { useState } from "react";
import { ArrowRight, Award, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AuditTeaserSection() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    percentile: string;
    target: string;
    gap: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        score: 93,
        percentile: "Top 3.5%",
        target: query.trim(),
        gap: "Kafka Streaming & Distributed Consensus",
      });
    }, 1200);
  };

  return (
    <section id="audit" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-gradient-to-b from-surface-elevated/90 to-surface-panel/95 border border-border-gold-glow p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="flex flex-col max-w-xl">
          <span className="text-[11px] font-semibold text-primary tracking-[0.2em] uppercase mb-2">
            Instant Readiness Scan
          </span>

          <h3 className="text-3xl sm:text-4xl font-bold text-foreground-primary mb-4 leading-tight">
            Ready to verify where you rank among global candidates?
          </h3>

          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6 font-normal">
            Input your target role, university, or GitHub profile to run our 60-second industry
            alignment scan and unlock your verified benchmark report.
          </p>

          {/* Quick Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. distributed systems / github.com/username"
              type="text"
              required
              className="px-4 py-3.5 rounded-xl bg-surface-base/90 border border-border-gold-glow text-foreground-primary placeholder:text-foreground-muted text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex-grow transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 rounded-xl bg-primary-container text-surface-base font-semibold text-sm whitespace-nowrap hover:bg-gold-light transition-all shadow-[0_0_24px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <span>Calculate Score</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Simulation Output Card */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-4 p-4 rounded-xl bg-surface-base/90 border border-primary/40 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center text-primary font-bold">
                    {result.score}%
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground-primary">
                      Candidate Benchmark Verified
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      {result.percentile} for {result.target} · Primary Gap: {result.gap}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-status-success bg-status-success/10 px-2.5 py-1 rounded-full border border-status-success/30">
                  Audited
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Graphical Verification Seal with interactive hover */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface-base/80 border border-border-gold-glow text-center max-w-xs w-full shadow-[0_12px_32px_rgba(0,0,0,0.5)] cursor-default group"
        >
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center mb-4 text-primary bg-primary/5 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">
            <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h4 className="text-lg font-bold text-foreground-primary group-hover:text-primary transition-colors">
            SkillHive Gold Seal
          </h4>
          <p className="text-xs text-foreground-muted mt-1.5 mb-4 leading-relaxed font-normal">
            The globally recognized standard for elite computational talent readiness.
          </p>
          <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
            ISO-9001 COMPATIBLE
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
