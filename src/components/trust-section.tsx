'use client';

import {
  Shield, Clock, ThumbsUp, Headphones, RefreshCw, FileCheck,
} from 'lucide-react';
import { SectionBadge, SectionTitle, GlassCard, FadeUp } from './ui-extensions';

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: 'NDA Protected',
    description: 'All project details are kept strictly confidential with signed NDAs.',
    color: 'blue' as const,
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '98% of projects delivered on or before the agreed timeline.',
    color: 'orange' as const,
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guarantee',
    description: "We don't stop until you're 100% satisfied with the result.",
    color: 'blue' as const,
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Direct access to your project team, not a call center.',
    color: 'orange' as const,
  },
  {
    icon: RefreshCw,
    title: 'Free Revisions',
    description: 'Up to 3 rounds of revisions included in every project.',
    color: 'blue' as const,
  },
  {
    icon: FileCheck,
    title: 'Transparent Pricing',
    description: "No hidden fees. You know exactly what you're paying for.",
    color: 'orange' as const,
  },
];

export function TrustSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[20%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[10%] left-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>Why Clients Trust Us</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Built on <span className="gradient-text">Trust & Transparency</span>
          </SectionTitle>
        </FadeUp>

        {/* Trust items grid: 1 col mobile, 2 cols md, 3 cols lg */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TRUST_ITEMS.map((item, idx) => (
            <FadeUp key={item.title} delay={0.1 + idx * 0.08}>
              <GlassCard className="text-center h-full p-6">
                <div
                  className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    item.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/10'
                      : 'bg-[var(--orange-primary)]/10'
                  }`}
                >
                  <item.icon
                    className={`w-7 h-7 ${
                      item.color === 'blue'
                        ? 'text-[var(--blue-primary)]'
                        : 'text-[var(--orange-primary)]'
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
