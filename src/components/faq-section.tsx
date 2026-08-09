'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';

const FAQ_DATA = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while complex applications can take 12-16 weeks. We provide a detailed timeline during our strategy call so you know exactly what to expect at every stage.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'We specialize in modern tech stacks including Next.js, React, React Native, Node.js, Python, AWS, and Firebase. We choose the best technology for your specific needs rather than forcing a one-size-fits-all approach.',
  },
  {
    q: 'Do you offer ongoing support after project delivery?',
    a: 'Absolutely. We offer flexible maintenance packages including bug fixes, performance monitoring, security updates, and feature enhancements. Our clients get priority support with a 24-hour response guarantee.',
  },
  {
    q: 'How does your pricing work?',
    a: 'We offer both project-based and retainer pricing models. After understanding your requirements through a free strategy call, we provide a transparent proposal with clear deliverables, timelines, and costs — no hidden fees.',
  },
  {
    q: 'Can you work with our existing team or systems?',
    a: 'Yes, we frequently collaborate with in-house teams and integrate with existing systems. Whether you need us to lead the project or augment your team, we adapt our workflow to fit seamlessly with yours.',
  },
  {
    q: 'What makes NueEra different from other agencies?',
    a: 'We are business-first engineers, not just coders. Every decision we make is tied to your revenue and growth metrics. Our delivery framework ensures measurable results, transparent communication, and zero fluff — just engineered growth.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': FAQ_DATA.map((item) => ({
              '@type': 'Question',
              'name': item.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.a,
              },
            })),
          }),
        }}
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] top-[20%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>FAQ</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Everything you need to know about working with NueEra.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <FadeUp key={idx} delay={0.1 + idx * 0.05}>
              <div className={`faq-accordion-item ${openIndex === idx ? 'open' : ''}`}>
                <button
                  className="faq-accordion-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span>{item.q}</span>
                  <div className="faq-accordion-icon">
                    <Plus className="w-4 h-4" />
                  </div>
                </button>
                <div className={`faq-accordion-content ${openIndex === idx ? 'open' : ''}`}>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
