'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, HelpCircle, Zap, Shield, Users } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per project',
    desc: 'Perfect for startups and small businesses getting their digital presence off the ground.',
    features: [
      'Custom responsive website (up to 5 pages)',
      'Basic SEO setup',
      'Mobile-first design',
      'Contact form integration',
      '1 round of revisions',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Growth',
    price: '$5,500',
    period: 'per project',
    desc: 'For growing businesses ready to scale with a powerful digital platform.',
    features: [
      'Custom web application (up to 15 pages)',
      'Advanced SEO & analytics',
      'CMS integration',
      'E-commerce capability',
      '3 rounds of revisions',
      '90-day post-launch support',
      'Performance optimization',
      'Social media integration',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored',
    desc: 'For established businesses needing complex, scalable, enterprise-grade solutions.',
    features: [
      'Unlimited pages & features',
      'Custom architecture design',
      'API development & integration',
      'AI/ML capabilities',
      'Dedicated project team',
      'Ongoing maintenance & support',
      'Priority response (4h SLA)',
      'Quarterly strategy reviews',
    ],
  },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A Starter project typically takes 2-4 weeks, Growth projects 4-8 weeks, and Enterprise projects are scoped individually. We provide detailed timelines during the discovery phase.' },
  { q: 'What technologies do you use?', a: 'We work with modern tech stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tools for each project\'s unique requirements.' },
  { q: 'Do you offer ongoing support?', a: 'Yes! All our plans include post-launch support. We also offer dedicated maintenance packages for ongoing updates, security patches, and feature enhancements.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. We design our solutions to be scalable, so you can start with a Starter plan and upgrade as your business grows. We\'ll work with you to ensure a smooth transition.' },
  { q: 'What if I\'m not satisfied with the result?', a: 'Your satisfaction is our priority. We include revision rounds in every plan and work iteratively with you. If there are any issues post-launch, our support team is ready to help.' },
  { q: 'Do you work with clients outside India?', a: 'Yes! We work with clients globally. Our team is experienced in remote collaboration and we adapt to your timezone and communication preferences.' },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Pricing' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '50%', left: '50%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Pricing</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Transparent Pricing, Real Value</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose a plan that fits your business needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Principles */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'No Hidden Costs', desc: 'What you see is what you pay. Every cost is transparent from the start.' },
              { icon: Shield, title: 'Value Guarantee', desc: 'If we don\'t deliver on our promises, we\'ll make it right.' },
              { icon: Users, title: 'Flexible Terms', desc: 'Milestone-based payments and customizable scopes to fit your budget.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Tiers */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 relative transition-all duration-300 hover:-translate-y-2 ${
                  tier.featured
                    ? 'bg-gradient-to-b from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 border-2 border-[var(--blue-primary)] shadow-xl'
                    : 'glass-card'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-extrabold gradient-text">{tier.price}</span>
                  <span className="text-[var(--text-muted)] text-sm">/{tier.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--blue-primary)] flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                    ${tier.featured
                      ? 'btn-primary-gradient text-white'
                      : 'border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)]'
                    }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Included" title="What&apos;s Included in Every Plan" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Responsive Design', 'SEO Optimization', 'Performance Tuning',
              'Security Hardening', 'Analytics Setup', 'Source Code Ownership',
              'Documentation', 'Deployment Support', 'Post-Launch Support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--blue-primary)] flex-shrink-0" />
                <span className="text-[var(--text-primary)] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compare Plans */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Compare" title="Compare Plans" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-[var(--border-soft)]">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[var(--text-primary)]">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--text-primary)]">Starter</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--blue-primary)]">Growth</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--text-primary)]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Pages', starter: 'Up to 5', growth: 'Up to 15', enterprise: 'Unlimited' },
                  { feature: 'Revisions', starter: '1 Round', growth: '3 Rounds', enterprise: 'Unlimited' },
                  { feature: 'Support', starter: '30 Days', growth: '90 Days', enterprise: 'Ongoing' },
                  { feature: 'SEO', starter: 'Basic', growth: 'Advanced', enterprise: 'Enterprise' },
                  { feature: 'CMS', starter: '—', growth: '✓', enterprise: '✓' },
                  { feature: 'E-commerce', starter: '—', growth: '✓', enterprise: '✓' },
                  { feature: 'API Integration', starter: '—', growth: '—', enterprise: '✓' },
                  { feature: 'Custom Architecture', starter: '—', growth: '—', enterprise: '✓' },
                  { feature: 'AI/ML Features', starter: '—', growth: '—', enterprise: '✓' },
                  { feature: 'Dedicated Team', starter: '—', growth: '—', enterprise: '✓' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border-soft)]">
                    <td className="py-3 px-4 text-sm text-[var(--text-primary)]">{row.feature}</td>
                    <td className="py-3 px-4 text-sm text-center text-[var(--text-secondary)]">{row.starter}</td>
                    <td className="py-3 px-4 text-sm text-center text-[var(--text-secondary)] font-medium">{row.growth}</td>
                    <td className="py-3 px-4 text-sm text-center text-[var(--text-secondary)]">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-glass)] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[var(--text-primary)] text-sm pr-4">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[var(--text-secondary)] text-sm">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Schedule a free consultation to discuss your project and find the perfect plan.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Book a Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
