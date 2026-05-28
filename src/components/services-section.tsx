'use client';

import { Globe, Cpu, Palette, Megaphone, Lightbulb, ArrowRight } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';

const SERVICES = [
  { icon: Globe, title: 'Website & Mobile App Launch System', description: 'Full-stack development with conversion-optimized UX, built for speed and scale from day one.' },
  { icon: Megaphone, title: 'Growth Marketing System', description: 'Data-driven acquisition funnels, SEO strategy, and performance marketing that compounds over time.' },
  { icon: Cpu, title: 'Tech Automation System', description: 'Eliminate manual bottlenecks with intelligent automation that frees your team to focus on growth.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-backed interfaces that convert visitors into customers and customers into advocates.' },
  { icon: Lightbulb, title: 'Branding & Strategy', description: 'Distinctive brand identities and go-to-market strategies that position you for market leadership.' },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera text-center">
        <FadeUp>
          <SectionBadge>Our Expertise</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Comprehensive <span className="gradient-text">Digital Solutions</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            Five integrated systems designed to transform ambitious businesses into scalable, revenue-driving powerhouses.
          </SectionDescription>
        </FadeUp>

        {/* 3+2 grid layout */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <FadeUp key={service.title} delay={0.1 + idx * 0.08}>
              <GlassCard className="text-left h-full">
                <div className="w-12 h-12 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[var(--orange-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{service.description}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5} className="mt-10">
          <PremiumButton onClick={() => window.location.href = '/services'}>
            View All Services
            <ArrowRight className="w-5 h-5" />
          </PremiumButton>
        </FadeUp>
      </div>
    </section>
  );
}
