"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Terminal,
  Database,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Zap,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

export default function VisualCenterpiece() {
  const [bridged, setBridged] = useState(false);

  return (
    <section id="centerpiece" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
      <div className="w-full relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* LEFT GLASS PANEL: Match Score & Live Requisitions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1"
        >
          {/* Match Score Card */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-panel group cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold text-foreground-muted tracking-[0.2em] uppercase">
                Target Alignment
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/25">
                <TrendingUp className="w-3 h-3" />
                Live Index
              </span>
            </div>

            <div className="flex items-center gap-5">
              {/* Circular SVG Metric Ring */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="rgba(245, 245, 240, 0.08)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="url(#goldGradientHero)"
                    strokeDasharray="251.2"
                    strokeDashoffset={bridged ? "5" : "15.07"}
                    strokeLinecap="round"
                    strokeWidth="8"
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="goldGradientHero" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#E8C97A" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground-primary tracking-tight">
                    {bridged ? "98" : "94"}
                    <span className="text-primary text-sm ml-0.5">%</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-foreground-muted font-semibold -mt-1">
                    Match
                  </span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <h4 className="text-base font-semibold text-foreground-primary truncate">
                  Sr. Systems Engineer
                </h4>
                <p className="text-xs text-foreground-muted truncate">
                  High-Throughput Cloud Arch
                </p>
                <div className="flex items-center gap-2 mt-2.5">
                  <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                  <span className="text-xs text-foreground-primary font-medium">
                    {bridged ? "Top 0.8% of Global Pool" : "Top 2% of Global Pool"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live Hiring Feed Ticker */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-5 rounded-2xl glass-panel cursor-default"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-foreground-muted tracking-[0.2em] uppercase">
                Verified Requisitions
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-success" />
              </span>
            </div>

            <div className="space-y-2.5">
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated/70 border border-border-gold-glow/40 text-xs hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Terminal className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground-primary font-medium truncate">
                    NVIDIA · CUDA Systems
                  </span>
                </div>
                <span className="text-primary font-semibold shrink-0 ml-2">
                  Verified $165k
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated/70 border border-border-gold-glow/40 text-xs hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Database className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground-primary font-medium truncate">
                    Snowflake · Query Engine
                  </span>
                </div>
                <span className="text-primary font-semibold shrink-0 ml-2">
                  Verified $172k
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-2.5 rounded-lg bg-surface-elevated/70 border border-border-gold-glow/40 text-xs hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Cpu className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground-primary font-medium truncate">
                    Databricks · Runtime Kernel
                  </span>
                </div>
                <span className="text-primary font-semibold shrink-0 ml-2">
                  Verified $185k
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CENTERPIECE: Luminous Glass-Orb Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 py-4"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center"
          >
            {/* Spinning Gold Geometric Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-spin-slow pointer-events-none shadow-[0_0_35px_rgba(212,175,55,0.25)]" />

            {/* Ambient Radial Golden Nebulae */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/25 via-primary/10 to-primary-container/20 blur-3xl pointer-events-none animate-pulse-subtle" />

            {/* Orb Container */}
            <div className="relative w-full h-full rounded-full p-3 bg-gradient-to-b from-primary/30 via-surface-elevated/40 to-surface-base/90 border-2 border-border-gold-glow shadow-[0_0_70px_rgba(212,175,55,0.28)] backdrop-blur-2xl flex items-center justify-center overflow-hidden group">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/skillhive-emblem.png"
                  alt="SkillHive Glass Orb Emblem"
                  fill
                  sizes="(max-width: 768px) 380px, 440px"
                  className="object-contain rounded-full transform transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)]"
                  priority
                />
              </div>

              {/* Specular Rim Light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-full" />

              {/* Floating Verified Credential Pill */}
              <div className="absolute bottom-6 px-4 py-1.5 rounded-full bg-surface-base/90 border border-primary/50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.9)] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-semibold text-foreground-primary uppercase tracking-[0.18em]">
                  Verified Credential
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT GLASS PANEL: Skill Gap Diagnostics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col gap-4 order-3"
        >
          {/* Diagnostic Gap Radar */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-panel cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold text-foreground-muted tracking-[0.2em] uppercase">
                Diagnostic Gap Radar
              </span>
              <span className="text-[11px] font-medium text-foreground-muted">
                3 Verified · 1 Gap
              </span>
            </div>

            <h4 className="text-base font-semibold text-foreground-primary mb-3">
              Enterprise Stack Validation
            </h4>

            {/* Held Skill Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-panel border border-primary/40 text-[11px] font-semibold text-primary uppercase tracking-wider transition-colors hover:border-primary"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Distributed Systems</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-panel border border-primary/40 text-[11px] font-semibold text-primary uppercase tracking-wider transition-colors hover:border-primary"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Cloud Arch</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-panel border border-primary/40 text-[11px] font-semibold text-primary uppercase tracking-wider transition-colors hover:border-primary"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>TypeScript</span>
              </motion.div>
              {bridged && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-panel border border-status-success/60 text-[11px] font-semibold text-status-success uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-status-success" />
                  <span>Kafka Streaming (Verified)</span>
                </motion.div>
              )}
            </div>

            {/* The Gap Item */}
            {!bridged ? (
              <div className="p-3.5 rounded-xl bg-surface-base/80 border border-status-warning/40 flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-status-warning" />
                    <span className="text-xs font-semibold text-foreground-primary">
                      Kafka Event Streaming
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-status-warning bg-status-warning/10 px-2 py-0.5 rounded">
                    Action Required
                  </span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Missing parameter for Top 10% compensation tier. Projected uplift:{" "}
                  <span className="text-status-success font-semibold">
                    +$24,000/yr
                  </span>
                  .
                </p>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-surface-base/80 border border-status-success/40 flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-status-success" />
                  <span className="text-xs font-semibold text-foreground-primary">
                    Kafka Micro-Lab Complete
                  </span>
                </div>
                <p className="text-xs text-foreground-muted">
                  Production incident replica verified by Staff Architect. Benchmark uplift unlocked!
                </p>
              </div>
            )}

            {/* Interactive Bridge Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setBridged(!bridged)}
              className="w-full py-2.5 px-4 rounded-lg bg-primary/10 border border-primary/35 text-primary text-xs font-semibold hover:bg-primary hover:text-surface-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{bridged ? "Reset Diagnostic Simulation" : "Bridge Gap in 14 Days via Micro-Lab"}</span>
              <Zap className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Candidate Benchmark Standing Card */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-5 rounded-2xl glass-panel cursor-default"
          >
            <div className="flex items-center justify-between text-xs mb-2.5">
              <span className="text-foreground-muted font-medium">Peer Cohort Standing</span>
              <span className="text-primary font-bold text-sm">
                {bridged ? "99.2th Percentile" : "96th Percentile"}
              </span>
            </div>

            {/* Horizontal Gauge with motion animation */}
            <div className="w-full h-2.5 rounded-full bg-surface-elevated overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: bridged ? "99.2%" : "96%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-primary-fixed via-primary to-primary-container"
              />
            </div>

            <div className="flex justify-between text-[11px] text-foreground-muted mt-2 font-mono">
              <span>L3 Median</span>
              <span className="text-primary font-semibold">
                {bridged ? "Your Profile (L5 Ready)" : "Your Profile (L4 Verified)"}
              </span>
              <span>Principal</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
