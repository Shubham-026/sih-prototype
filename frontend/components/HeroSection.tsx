"use client";

import React from "react";
import { ArrowRight, BarChart3, ShieldCheck, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center py-6 sm:py-10">
      <div className="my-auto flex flex-col items-center w-full">
        {/* Main Hero Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.12] font-bold tracking-tight mb-6"
        >
          The Gateway Between{" "}
          <span className="text-foreground-primary">Raw Potential</span> and{" "}
          <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]">
            Industry Leadership
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl text-base sm:text-lg text-foreground-muted mb-10 leading-relaxed font-normal"
        >
          SkillHive bridges university graduation and elite industry roles through
          verified skill gap diagnostics, real-time corporate benchmarking, and
          AI-curated career placement pathways.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#audit"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary-container text-surface-base font-semibold text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_28px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] hover:bg-gold-light group cursor-pointer"
          >
            <span>Launch Your Skill Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#centerpiece"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-surface-panel/80 backdrop-blur-md border border-border-gold-glow text-foreground-primary font-semibold text-base flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-surface-elevated hover:border-primary/50 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-primary" />
            <span>Explore Industry Benchmarks</span>
          </motion.a>
        </motion.div>

        {/* Trust Indicator Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.01 }}
          className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-foreground-muted text-xs sm:text-sm py-3.5 px-6 rounded-2xl bg-surface-panel/50 backdrop-blur-md border border-border-gold-glow/50 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full border border-primary/40 bg-surface-elevated flex items-center justify-center text-[10px] text-primary font-bold shadow-sm">
              MIT
            </div>
            <div className="w-7 h-7 rounded-full border border-primary/40 bg-surface-elevated flex items-center justify-center text-[10px] text-primary font-bold shadow-sm">
              STN
            </div>
            <div className="w-7 h-7 rounded-full border border-primary/40 bg-surface-elevated flex items-center justify-center text-[10px] text-primary font-bold shadow-sm">
              CMU
            </div>
            <div className="w-7 h-7 rounded-full border border-primary/40 bg-surface-elevated flex items-center justify-center text-[10px] text-primary font-bold shadow-sm">
              OXF
            </div>
          </div>

          <span className="hidden sm:inline text-border-gold-glow">|</span>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-status-success" />
            <span>
              Trusted by{" "}
              <strong className="text-foreground-primary font-semibold">450+ Tier-1</strong>{" "}
              hiring partners & academic institutes
            </span>
          </div>

          <span className="hidden sm:inline text-border-gold-glow">|</span>

          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">98.4%</span>
            <span>Cohort Placement Index</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        href="#centerpiece"
        aria-label="Scroll down to diagnostic centerpiece"
        className="pt-4 pb-2 flex flex-col items-center gap-1 text-foreground-muted hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted/80 group-hover:text-primary transition-colors">
          Explore Diagnostics
        </span>
        <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
      </motion.a>
    </section>
  );
}
