'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, BookOpen, HelpCircle, Settings, Shield, CreditCard, Users } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const categories = [
  { icon: Settings, label: 'Getting Started', count: 5 },
  { icon: CreditCard, label: 'Billing & Pricing', count: 4 },
  { icon: Shield, label: 'Security & Privacy', count: 3 },
  { icon: Users, label: 'Account & Team', count: 4 },
];

const faqs = [
  { cat: 'Getting Started', q: 'How do I get started with NueEra?', a: 'Simply reach out through our contact form or WhatsApp, and we\'ll schedule a free consultation to understand your needs and propose the best solution.' },
  { cat: 'Getting Started', q: 'What information do I need to provide?', a: 'We\'ll need a basic overview of your project, goals, timeline, and budget. Don\'t worry if you don\'t have everything figured out — that\'s what our discovery phase is for.' },
  { cat: 'Getting Started', q: 'How long does it take to start a project?', a: 'After our initial consultation, we typically kick off projects within 1-2 weeks, depending on scope and team availability.' },
  { cat: 'Billing & Pricing', q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit/debit cards, and online payment platforms. For enterprise clients, we also support purchase orders and invoicing.' },
  { cat: 'Billing & Pricing', q: 'Do you offer payment plans?', a: 'Yes! We follow milestone-based payments for project work and monthly billing for ongoing engagements. We\'re flexible and can work with your preferences.' },
  { cat: 'Security & Privacy', q: 'How do you handle data security?', a: 'We follow industry-standard security practices including encryption, secure access controls, and regular security audits. All client data is handled with strict confidentiality.' },
  { cat: 'Account & Team', q: 'Will I have a dedicated project manager?', a: 'Yes, every project is assigned a dedicated project manager who serves as your main point of contact throughout the engagement.' },
  { cat: 'Account & Team', q: 'Can I communicate directly with the development team?', a: 'Absolutely. We encourage open communication and provide regular updates through your preferred channels — Slack, email, or video calls.' },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = !searchQuery ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = !activeCat || faq.cat === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <Breadcrumb items={[{ label: 'Help Center' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Help Center</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">How Can We Help?</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            Find answers to common questions or reach out to our support team.
          </p>
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-sm bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCat(activeCat === cat.label ? null : cat.label)}
                className={`p-6 rounded-2xl text-center transition-all duration-300
                  ${activeCat === cat.label
                    ? 'bg-gradient-to-b from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 border-2 border-[var(--blue-primary)]'
                    : 'bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--border-active)]'
                  }`}
              >
                <cat.icon className={`w-8 h-8 mx-auto mb-2 ${activeCat === cat.label ? 'text-[var(--blue-primary)]' : 'text-[var(--text-muted)]'}`} />
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{cat.label}</h3>
                <p className="text-[var(--text-muted)] text-xs">{cat.count} articles</p>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ List */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 mx-auto text-[var(--text-muted)] mb-4" />
                <p className="text-[var(--text-secondary)]">No results found. Try a different search term.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, i) => (
                <details key={i} className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-glass)] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div>
                      <span className="text-xs text-[var(--blue-primary)] font-medium mb-1 block">{faq.cat}</span>
                      <span className="font-semibold text-[var(--text-primary)] text-sm">{faq.q}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[var(--text-secondary)] text-sm">{faq.a}</p>
                  </div>
                </details>
              ))
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Still Need Help?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Our support team is here to assist you. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Contact Support
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
