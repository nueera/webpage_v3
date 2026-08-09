'use client';

import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Building2,
  Headphones,
  CheckCircle2,
  FileCheck,
  Calendar,
  MessageCircle,
  ListTodo,
} from 'lucide-react';
import { PreOneLogo } from './preone-logo';

const FEATURE_HIGHLIGHTS = [
  {
    id: 'admissions',
    badge: 'CRM & Pipeline',
    title: 'Admissions, without the paperwork.',
    copy: 'Capture parent enquiries from web & social channels, schedule school visits, track follow-ups, and convert families through a structured, transparent admissions pipeline.',
    icon: FileCheck,
    visualSteps: ['New Enquiry', 'Contacted', 'School Visit', 'Application', 'Enrolled 🎉'],
    accent: 'from-[#7C3AED] to-[#8B5CF6]',
  },
  {
    id: 'daily-ops',
    badge: 'Attendance & Operations',
    title: 'Know what’s happening every day.',
    copy: 'Instant teacher attendance marking, automated late-arrival alerts to parents, real-time staff ratios, and live classroom activity logging — accessible from mobile or web.',
    icon: Calendar,
    visualSteps: ['96.4% Attendance Today', '18/18 Staff On Duty', 'Automated Daily Digest Sent'],
    accent: 'from-[#2563EB] to-[#06B6D4]',
  },
  {
    id: 'parents',
    badge: 'Parent Engagement',
    title: 'Keep parents connected & involved.',
    copy: 'Give parents peace of mind with real-time updates on meal times, nap hours, learning activities, digital fee receipts, and direct secure teacher announcements.',
    icon: MessageCircle,
    visualSteps: ['Daily Activity Diary', 'Digital Fee Receipts', 'Emergency Broadcasts'],
    accent: 'from-[#EC4899] to-[#F43F5E]',
  },
  {
    id: 'taskmaster',
    badge: 'Task Automation',
    title: 'Turn daily tasks into organized workflows.',
    copy: 'TaskMaster helps principals and center heads assign daily checklists, track sanitation logs, monitor teacher handovers, and eliminate operational bottlenecks.',
    icon: ListTodo,
    visualSteps: ['Morning Checklist Done', 'Sanitation Log Verified', 'Bus Route Tracked'],
    accent: 'from-[#22C55E] to-[#10B981]',
  },
];

const TRUST_PRINCIPLES = [
  { title: 'Secure & Reliable', desc: 'Bank-grade encryption protecting all student and parent records.', icon: Shield },
  { title: 'Easy to Use', desc: 'Intuitive interface designed so any staff member can master it in 10 minutes.', icon: Zap },
  { title: 'Made for Preschools', desc: 'Tailored specifically to early childhood education workflows.', icon: Building2 },
  { title: 'Support That Cares', desc: 'Dedicated onboarding specialist & 24/7 priority customer support.', icon: Headphones },
];

const WHY_PREONE_REASONS = [
  { title: '70% Less Paperwork', desc: 'Eliminate paper registers, physical receipts, and lost enquiry forms.' },
  { title: 'Complete Visibility', desc: 'Real-time dashboard for fees, attendance, and branch performance.' },
  { title: 'Happier Parents', desc: 'Instant updates build trust and boost parent retention year after year.' },
  { title: 'Smarter Operations', desc: 'Standardize daily procedures across single or multiple preschool branches.' },
];

export function PreOneFeatures() {
  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-primary)] space-y-24 py-16 transition-colors duration-300">
      {/* Editorial Feature Showcase */}
      <section className="container-nueera space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[var(--bg-glass)] text-[#7C3AED] dark:text-[#8B5CF6] border border-[#DDD6FE] dark:border-[#7C3AED]/40">
            Feature Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            Everything your preschool needs. <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">Nothing you don't.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            Built with purpose so your team spends less time on admin paperwork and more time delivering quality early education.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-12">
          {FEATURE_HIGHLIGHTS.map((feat, idx) => {
            const Icon = feat.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={feat.id}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 md:p-12 rounded-[32px] bg-[var(--bg-glass)] border border-[var(--border-soft)] ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left Description Column */}
                <div className="flex-1 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--bg-glass-strong)] border border-[var(--border-soft)] text-[#7C3AED] dark:text-[#8B5CF6]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{feat.badge}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {feat.copy}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#7C3AED] dark:text-[#8B5CF6] hover:text-[#5B21B6] transition-colors"
                  >
                    <span>See {feat.badge} in action</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Interactive Pipeline / UI Card Column */}
                <div className="flex-1 w-full p-6 md:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-soft)] shadow-md space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[var(--border-soft)]">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.accent} text-white flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-[var(--text-primary)]">{feat.title} Preview</span>
                  </div>

                  <div className="space-y-2.5">
                    {feat.visualSteps.map((step, sIdx) => (
                      <div
                        key={step}
                        className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] text-xs font-bold text-[var(--text-primary)]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[var(--bg-glass-strong)] text-[var(--text-muted)] flex items-center justify-center text-[10px]">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why PreOne & Trust Section */}
      <section className="container-nueera space-y-16">
        {/* Why PreOne Grid */}
        <div className="p-10 md:p-14 rounded-[36px] bg-gradient-to-br from-[#111827] via-[#1E1B4B] to-[#0F172A] text-white space-y-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#7C3AED]/20 blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/10 text-[#A7F3D0] border border-white/20">
              Why Choose PreOne
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Designed for modern <span className="text-[#8B5CF6]">preschool leadership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {WHY_PREONE_REASONS.map((reason) => (
              <div key={reason.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-[#F5F3FF]">{reason.title}</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Trust Principles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {TRUST_PRINCIPLES.map((principle) => {
            const Icon = principle.icon;

            return (
              <div key={principle.title} className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-glass-strong)] border border-[var(--border-soft)] text-[#7C3AED] dark:text-[#8B5CF6] flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-extrabold text-[var(--text-primary)]">{principle.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{principle.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="container-nueera">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] text-white p-10 md:p-16 overflow-hidden shadow-[0_25px_60px_rgba(124,58,237,0.35)]">
          {/* Background Orbital Rings */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-2 border-white/15 pointer-events-none" />
          <div className="absolute right-10 -bottom-10 w-64 h-64 rounded-full border border-white/20 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <PreOneLogo size="md" showSubtag={true} className="brightness-200" />
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Ready to make your preschool smarter?
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Discover how PreOne can simplify your preschool admissions, attendance, fees, parent communication, and everyday operations.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl bg-white text-[#7C3AED] font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#F5F3FF] transition-all transform hover:-translate-y-1"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl bg-white/15 border border-white/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/25 transition-all"
                >
                  Explore PreOne Features
                </Link>
              </div>
            </div>

            {/* Right Graphic emblem */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-8 shadow-2xl">
                <PreOneLogo size="xl" showSubtag={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
