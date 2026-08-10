import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PreOneLogo } from '@/components/preone/preone-logo';
import { PreOneMobileAppMockup } from '@/components/preone/preone-mobile-app-mockup';
import { PreOnePortals } from '@/components/preone/preone-portals';
import { PreOneWorkflow } from '@/components/preone/preone-workflow';
import { PreOneFeatures } from '@/components/preone/preone-features';

export const metadata: Metadata = {
  title: 'PreOne — Smart Preschool Management Platform | NueEra',
  description:
    'PreOne is a modern preschool management platform that brings admissions, students, teachers, attendance, fees, CRM, communication and daily operations into one connected system.',
};

export default function PreOnePage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden selection:bg-[#7C3AED] selection:text-white font-sans transition-colors duration-300">
      {/* Background Soft Radial Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[var(--blue-primary)]/10 blur-[120px]" />
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[var(--orange-primary)]/10 blur-[120px]" />
        <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">

        <div className="container-nueera space-y-16 relative z-10">
          {/* Hero Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--blue-primary)] shadow-sm">
                <Sparkles className="w-4 h-4 text-[var(--blue-primary)]" />
                <span>Introducing PreOne</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-primary)]" />
                <span className="text-[var(--text-muted)]">A NueEra Product</span>
              </div>

              {/* Logo & Headline */}
              <div className="space-y-4">
                <PreOneLogo size="hero" showSubtag={true} />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.1]">
                  Smart Preschool Management.{' '}
                  <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] bg-clip-text text-transparent">
                    Made Simple.
                  </span>
                </h1>
              </div>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                PreOne is an all-in-one management platform for modern preschools. Manage admissions, students, teachers, attendance, fees, parents, CRM and everyday operations — all in one place.
              </p>

              {/* Hero Call-to-Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
                >
                  <span>Explore PreOne</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider hover:bg-[var(--bg-glass-strong)] hover:border-[var(--border-active)] transition-all shadow-sm"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right Hero Product Mobile Visual */}
            <div className="lg:col-span-6 relative">
              {/* Background Ambient Orbit Ring */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#EC4899]/15 to-[#2563EB]/20 blur-2xl pointer-events-none" />

              {/* Live Interactive Mobile App Mockup */}
              <div className="relative z-10">
                <PreOneMobileAppMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <PreOnePortals />

      {/* Workflow Section */}
      <PreOneWorkflow />

      {/* Features & Trust Section */}
      <PreOneFeatures />
    </div>
  );
}
