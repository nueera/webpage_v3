'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from '@/components/ui-extensions';
import { faqData } from './data';

export default function ServicesFaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>FAQ</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Common <span className="gradient-text">Questions</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Everything you need to know about our services and working with NueEra.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <FadeUp key={idx} delay={0.1 + idx * 0.04}>
              <div className={`faq-accordion-item ${openFaqIndex === idx ? 'open' : ''}`}>
                <button
                  className="faq-accordion-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{item.q}</span>
                  <div className="faq-accordion-icon">
                    <Plus className="w-4 h-4" />
                  </div>
                </button>
                <div className={`faq-accordion-content ${openFaqIndex === idx ? 'open' : ''}`}>
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
