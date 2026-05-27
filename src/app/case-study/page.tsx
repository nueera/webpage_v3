'use client';

import Link from 'next/link';
import {
  ArrowRight, Building2, Calendar, Users, TrendingUp,
  Shield, Zap, BarChart3, UsersRound,
  Quote, ChevronRight, AlertTriangle, Lightbulb, ListChecks
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const kpis = [
  { value: '10x', label: 'User Growth Capacity', icon: TrendingUp },
  { value: '99.99%', label: 'Service Uptime', icon: Shield },
  { value: '-40%', label: 'Infrastructure Cost', icon: Zap },
  { value: '+31%', label: 'Conversion Lift', icon: BarChart3 },
];

const storyCards = [
  {
    title: 'Challenge',
    icon: AlertTriangle,
    color: 'orange',
    paragraphs: [
      'Rapid user growth exposed reliability bottlenecks. Core journeys were inconsistent, release cycles slowed down, and decision-making was constrained by fragmented analytics.',
    ],
    bullets: [
      'Legacy modules created deployment friction.',
      'Monitoring lacked business-context observability.',
      'Acquisition cost was rising while conversion stalled.',
    ],
  },
  {
    title: 'Approach',
    icon: Lightbulb,
    color: 'blue',
    paragraphs: [
      'We ran a phased execution model covering architecture, delivery operations, and growth experiment loops with shared KPI ownership.',
    ],
    bullets: [
      'Mapped platform events and rebuilt critical workflows.',
      'Introduced release guards, incident playbooks, and SLO tracking.',
      'Shipped onboarding and pricing journey optimization sprints.',
    ],
  },
  {
    title: 'Execution Model',
    icon: ListChecks,
    color: 'blue',
    paragraphs: [
      'A weekly command cadence kept business and engineering aligned from discovery to rollout.',
    ],
    bullets: [
      'Week 1-2: Discovery and system risk audit',
      'Week 3-8: Core platform refactor and telemetry setup',
      'Week 9-12: Conversion experiments and UX release wave',
      'Week 13-16: Stabilization, handoff, and scale readiness',
    ],
  },
];

const impactTiles = [
  {
    title: 'Reliability',
    desc: 'Critical incident frequency dropped by 63% after observability and release controls were introduced.',
    icon: Shield,
    color: 'blue',
  },
  {
    title: 'Delivery Speed',
    desc: 'Deployment lead time improved by 46%, enabling faster iteration on customer-facing improvements.',
    icon: Zap,
    color: 'orange',
  },
  {
    title: 'Growth Efficiency',
    desc: 'Paid acquisition ROI improved through landing and onboarding funnel changes backed by event-level data.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    title: 'Team Alignment',
    desc: 'Shared dashboarding reduced reporting lag and replaced conflicting metrics with one source of truth.',
    icon: UsersRound,
    color: 'orange',
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Case Study' },
      ]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', right: '10%' }} />
        <div className="container-nueera relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <span className="section-badge mb-4 inline-block">Case Study</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Scaling a Neo-Bank to{' '}
                <span className="gradient-text">1M Users</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-lg mb-6">
                How we transformed a high-growth fintech platform from fragile operations to a reliable,
                observable, and conversion-driven product engine.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Building2 className="w-4 h-4 text-[var(--blue-primary)]" /> FinTech
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Calendar className="w-4 h-4 text-[var(--orange-primary)]" /> 16-week program
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Users className="w-4 h-4 text-[var(--blue-primary)]" /> Product / Engineering / Growth
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                >
                  Start Similar Project <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#outcomes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
                >
                  View Outcomes <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual - Radar-like animation */}
            <div className="hidden lg:flex items-center justify-center relative" aria-hidden="true">
              <div className="relative w-[320px] h-[320px]">
                {/* Radar grid circles */}
                {[80, 130, 180].map((r, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[var(--border-soft)]"
                    style={{
                      width: r * 2,
                      height: r * 2,
                      top: `calc(50% - ${r}px)`,
                      left: `calc(50% - ${r}px)`,
                      opacity: 0.4 + i * 0.1,
                    }}
                  />
                ))}
                {/* Center dot */}
                <div
                  className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]"
                  style={{ top: 'calc(50% - 8px)', left: 'calc(50% - 8px)' }}
                />
                {/* Sweep line */}
                <div
                  className="absolute w-[160px] h-[2px] origin-left animate-[spin_6s_linear_infinite]"
                  style={{
                    top: 'calc(50% - 1px)',
                    left: '50%',
                    background: 'linear-gradient(90deg, var(--blue-primary), transparent)',
                  }}
                />
                {/* Points */}
                {[
                  { top: '20%', left: '60%' },
                  { top: '35%', left: '25%' },
                  { top: '70%', left: '70%' },
                  { top: '55%', left: '40%' },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full animate-pulse"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      background: i % 2 === 0 ? 'var(--blue-primary)' : 'var(--orange-primary)',
                      boxShadow: i % 2 === 0 ? 'var(--effect-glow-blue)' : 'var(--effect-glow-orange)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Grid */}
      <section id="outcomes" className="bg-[var(--bg-secondary)]">
        <SectionWrapper>
          <div className="container-nueera">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="text-center p-8 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--border-active)] transition-all duration-300"
                >
                  <kpi.icon className="w-7 h-7 mx-auto mb-3 text-[var(--blue-primary)]" />
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">{kpi.value}</div>
                  <div className="text-[var(--text-muted)] text-sm">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Story Section */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="The Story" title="From Challenge to Outcome" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {storyCards.map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    card.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/10'
                      : 'bg-[var(--orange-primary)]/10'
                  }`}>
                    <card.icon className={`w-5 h-5 ${
                      card.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                    }`} />
                  </div>
                  <h2 className="text-xl font-extrabold text-[var(--text-primary)]">{card.title}</h2>
                </div>
                {card.paragraphs.map((p, i) => (
                  <p key={i} className="text-[var(--text-secondary)] text-sm mb-4">{p}</p>
                ))}
                <ul className="space-y-2">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        card.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                      }`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Impact Breakdown */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader
            badge="Impact"
            title="Impact Breakdown"
            description="Measured business outcomes from architecture, delivery, and growth improvements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactTiles.map((tile) => (
              <div key={tile.title} className="glass-card rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  tile.color === 'blue'
                    ? 'bg-[var(--blue-primary)]/10'
                    : 'bg-[var(--orange-primary)]/10'
                }`}>
                  <tile.icon className={`w-6 h-6 ${
                    tile.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                  }`} />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{tile.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{tile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Client Quote */}
      <SectionWrapper>
        <div className="container-nueera">
          <blockquote className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center relative">
            <Quote className="w-10 h-10 text-[var(--blue-primary)] opacity-30 absolute top-6 left-6" />
            <p className="text-lg md:text-xl text-[var(--text-primary)] italic leading-relaxed mb-6">
              NueEra did not just fix technical issues. They rebuilt our operating confidence.
              We now release faster, measure clearly, and scale without fear.
            </p>
            <cite className="text-[var(--text-muted)] text-sm not-italic font-medium">
              — Head of Product, Digital Banking Client
            </cite>
          </blockquote>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-4">
            Want results like this for your business?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            We can map your system constraints and deliver a practical, phase-wise execution plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
