'use client';

import { Globe, Cpu, Palette, Megaphone, Lightbulb, ArrowRight } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';

const SERVICES = [
  { icon: Globe, title: 'Website & Mobile App Launch System', description: 'Full-stack development with conversion-optimized UX, built for speed and scale from day one.', color: 'blue' },
  { icon: Megaphone, title: 'Growth Marketing System', description: 'Data-driven acquisition funnels, SEO strategy, and performance marketing that compounds over time.', color: 'orange' },
  { icon: Cpu, title: 'Tech Automation System', description: 'Eliminate manual bottlenecks with intelligent automation that frees your team to focus on growth.', color: 'blue' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-backed interfaces that convert visitors into customers and customers into advocates.', color: 'orange' },
  { icon: Lightbulb, title: 'Branding & Strategy', description: 'Distinctive brand identities and go-to-market strategies that position you for market leadership.', color: 'blue' },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Subtle background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[10%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[5%] left-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
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

        {/* Premium service cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <FadeUp key={service.title} delay={0.1 + idx * 0.08}>
              <GlassCard className="text-left h-full group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110
                  ${service.color === 'blue'
                    ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                    : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                  }`}
                  style={{ boxShadow: 'none' }}
                >
                  <service.icon className={`w-6 h-6 ${service.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'}`} />
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
