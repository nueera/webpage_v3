'use client';

import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GhostButton, AnimatedCounter } from './ui-extensions';
import { PremiumButton } from './premium-button';

const METRICS = [
  { value: 16, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
  { value: 4, suffix: '+', label: 'Happy Clients' },
];

const PROOF_ITEMS = [
  'Proven delivery framework',
  'No fluff, just results',
  'Business-first approach',
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)] pt-20"
    >
      {/* Premium gradient mesh background */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue animate-float-orb" />
        <div className="orb orb-orange animate-float-orb" style={{ animationDelay: '-7s', animationDuration: '25s' }} />
        <div className="orb orb-accent animate-float-orb" style={{ animationDelay: '-14s', animationDuration: '30s' }} />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="animate-fade-in-up stagger-1 mb-6">
          <span className="section-badge">Transforming Digital Futures</span>
        </div>

        <h1 className="animate-fade-in-up stagger-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-display">
          <span className="heading-gradient">Build Your</span>{' '}
          <span className="gradient-text">Digital Empire</span>
        </h1>

        <p className="animate-fade-in-up stagger-3 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
          <span className="gradient-text">We Engineer Growth Systems</span>
        </p>

        <p className="animate-fade-in-up stagger-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
          We craft high-performance digital solutions that transform ambitious
          businesses into scalable, revenue-driving powerhouses. No guesswork.
          Just engineered growth.
        </p>

        <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <PremiumButton onClick={() => window.open('https://wa.me/917066607424', '_blank')}>
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </PremiumButton>
          <GhostButton onClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Our Services
          </GhostButton>
        </div>

        {/* Animated metric counters */}
        <div className="animate-fade-in-up stagger-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10">
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-[var(--text-muted)] mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up stagger-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PROOF_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[var(--orange-primary)]" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
        </div>
      </div>
    </section>
  );
}
