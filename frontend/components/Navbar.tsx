"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, useScroll } from "motion/react";

const NAV_LINKS = [
  { name: "Platform", href: "#platform", active: true },
  { name: "For Students", href: "#students", active: false },
  { name: "For Industry", href: "#industry", active: false },
  { name: "Skill Graph", href: "#skill-graph", active: false },
  { name: "Placement Outcomes", href: "#outcomes", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-base/90 backdrop-blur-xl border-b border-border-gold-glow shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-surface-base/70 backdrop-blur-lg border-b border-border-gold-glow/60"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-light via-primary-container to-gold-deep z-50 pointer-events-none"
      />
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between relative">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border-gold-glow shadow-[0_0_16px_rgba(212,175,55,0.25)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/skillhive-logo.png"
              alt="SkillHive Brand Mark"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-xl font-bold tracking-tight">
              <span className="text-foreground-primary">Skill</span>
              <span className="text-primary-container ml-0.5">Hive</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground-muted font-medium -mt-0.5">
              Learn · Grow · Belong
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 h-full absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide transition-all py-2 relative font-medium ${
                link.active
                  ? "text-primary-container font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary-container after:shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  : "text-foreground-muted hover:text-foreground-primary hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#audit"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary-container text-surface-base font-semibold text-sm hover:bg-gold-light transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] cursor-pointer"
          >
            <span>Launch Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg bg-surface-panel border border-border-gold-glow text-foreground-primary hover:text-primary-container transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-panel/95 backdrop-blur-2xl border-b border-border-gold-glow px-6 py-6 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.9)] animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md text-base transition-colors ${
                  link.active
                    ? "bg-surface-elevated text-primary-container font-semibold border-l-2 border-primary-container"
                    : "text-foreground-muted hover:text-foreground-primary hover:bg-surface-elevated/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border-gold-glow/50 flex flex-col gap-3">
              <a
                href="#audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-primary-container text-surface-base font-semibold text-center shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-gold-light transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Your Skill Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
