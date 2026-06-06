'use client';

import {
  Heart, ShoppingCart, Dumbbell, Cloud, GraduationCap,
  Building2, UtensilsCrossed, Rocket,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';

const INDUSTRIES = [
  {
    icon: Heart,
    name: 'Healthcare & Wellness',
    description: 'HIPAA-compliant platforms, patient portals, and healthtech solutions.',
    color: 'blue' as const,
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce & Retail',
    description: 'Conversion-optimized stores, inventory systems, and omnichannel experiences.',
    color: 'orange' as const,
  },
  {
    icon: Dumbbell,
    name: 'Fitness & Sports',
    description: 'Booking platforms, member management, and brand experiences.',
    color: 'blue' as const,
  },
  {
    icon: Cloud,
    name: 'SaaS & Tech',
    description: 'Scalable dashboards, analytics platforms, and API integrations.',
    color: 'orange' as const,
  },
  {
    icon: GraduationCap,
    name: 'Education & EdTech',
    description: 'Learning management systems, online courses, and student portals.',
    color: 'blue' as const,
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Property listing platforms, virtual tours, and CRM solutions.',
    color: 'orange' as const,
  },
  {
    icon: UtensilsCrossed,
    name: 'Food & Hospitality',
    description: 'Restaurant platforms, delivery systems, and reservation engines.',
    color: 'blue' as const,
  },
  {
    icon: Rocket,
    name: 'Startups & MVPs',
    description: 'Rapid prototyping, MVP development, and launch-ready products.',
    color: 'orange' as const,
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[15%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[10%] left-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>Industries We Serve</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Solutions for <span className="gradient-text">Every Sector</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            From healthcare to hospitality, we bring deep domain expertise and a results-driven approach to every industry.
          </SectionDescription>
        </FadeUp>

        {/* Industry Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <FadeUp key={industry.name} delay={0.1 + idx * 0.06}>
              <div className="glass-card rounded-2xl p-5 md:p-6 text-center group h-full">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110
                    ${industry.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                      : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                    }`}
                >
                  <industry.icon
                    className={`w-6 h-6 md:w-7 md:h-7 ${
                      industry.color === 'blue'
                        ? 'text-[var(--blue-primary)]'
                        : 'text-[var(--orange-primary)]'
                    }`}
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-1.5">
                  {industry.name}
                </h3>
                <p className="text-[var(--text-muted)] text-xs md:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
