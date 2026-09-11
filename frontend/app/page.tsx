import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisualCenterpiece from "@/components/VisualCenterpiece";
import MethodologySection from "@/components/MethodologySection";
import AuditTeaserSection from "@/components/AuditTeaserSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-base text-foreground-primary relative overflow-x-hidden">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface-base relative">
        {/* Architectural Ambient Gradients & Blueprint Dot Matrix */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
          <div className="absolute top-[25%] -left-48 w-[500px] h-[500px] bg-primary-container/5 blur-[120px] rounded-full" />
          <div className="absolute top-[55%] -right-48 w-[600px] h-[600px] bg-secondary/5 blur-[130px] rounded-full" />
          <div className="absolute inset-0 blueprint-grid opacity-60" />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Bespoke Visual Centerpiece: Match Score Ring, Crystalline Orb & Gap Radar */}
        <VisualCenterpiece />

        {/* Tri-Pillar Architecture: Assess · Bridge · Apply */}
        <MethodologySection />

        {/* High Conversion Interactive Audit Teaser & Gold Seal */}
        <AuditTeaserSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
