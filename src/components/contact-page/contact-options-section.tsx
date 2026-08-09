'use client';

import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui-extensions';
import { CONTACT_OPTIONS } from './data';

export default function ContactOptionsSection() {
  return (
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_OPTIONS.map((opt, idx) => (
            <FadeUp key={opt.title} delay={idx * 0.1}>
              <a
                href={opt.href}
                target={opt.href.startsWith('http') || opt.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-2xl p-8 text-center block cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${opt.gradient} shadow-lg`}>
                  <opt.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{opt.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{opt.desc}</p>
                <span className="text-[var(--blue-primary)] text-sm font-semibold inline-flex items-center gap-1">
                  {opt.action} <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
