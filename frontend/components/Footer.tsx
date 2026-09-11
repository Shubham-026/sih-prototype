import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-panel/90 backdrop-blur-xl border-t border-border-gold-glow relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border-gold-glow">
                <Image
                  src="/images/skillhive-logo.png"
                  alt="SkillHive Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center text-xl font-bold tracking-tight">
                <span className="text-foreground-primary">Skill</span>
                <span className="text-primary-container ml-0.5">Hive</span>
              </div>
            </div>

            <p className="text-xs text-foreground-muted leading-relaxed font-normal">
              Elite career acceleration ecosystem precision-engineered for verified talent and
              visionary enterprise.
            </p>

            <span className="text-[10px] font-bold text-primary-container tracking-[0.2em] uppercase">
              LEARN · GROW · BELONG
            </span>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-sm font-semibold text-foreground-primary mb-1">Platform</h4>
            <Link href="#platform" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Skill Ontology
            </Link>
            <Link href="#platform" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Verified Badging
            </Link>
            <Link href="#platform" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Career Pathways
            </Link>
            <Link href="#platform" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Outcome Analytics
            </Link>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-sm font-semibold text-foreground-primary mb-1">Solutions</h4>
            <Link href="#students" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              University Scholars
            </Link>
            <Link href="#industry" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Enterprise Recruiting
            </Link>
            <Link href="#industry" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Cohort Sourcing
            </Link>
            <Link href="#outcomes" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Talent Intelligence
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-sm font-semibold text-foreground-primary mb-1">Resources</h4>
            <Link href="#benchmarks" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Benchmarking Index
            </Link>
            <Link href="#docs" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Documentation
            </Link>
            <Link href="#security" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Security & Trust
            </Link>
            <Link href="#api" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              API Architecture
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-sm font-semibold text-foreground-primary mb-1">Company</h4>
            <Link href="#about" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              About SkillHive
            </Link>
            <Link href="#outcomes" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Placement Reports
            </Link>
            <Link href="#leadership" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Leadership
            </Link>
            <Link href="#contact" className="text-xs text-foreground-muted hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 border-t border-border-gold-glow flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-muted">
            © 2026 SkillHive Inc. Architectural precision in career readiness. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-foreground-muted">
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#honor" className="hover:text-primary transition-colors">
              Honor Code
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
