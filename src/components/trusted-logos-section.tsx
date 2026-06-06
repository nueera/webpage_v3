'use client';

import { FadeUp } from './ui-extensions';

const COMPANIES = [
  'FreshBite Organics',
  'UrbanFit Gyms',
  'MediConnect Health',
  'TechVenture Labs',
  'GreenLeaf Solutions',
  'CloudNine Systems',
];

export function TrustedLogosSection() {
  return (
    <section className="relative py-12 bg-[var(--bg-main)] overflow-hidden border-y border-[var(--border-soft)]">
      <div className="container-nueera text-center">
        <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-8 font-semibold">
          Trusted by forward-thinking companies
        </p>
        <div className="relative overflow-hidden">
          {/* Marquee container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...COMPANIES, ...COMPANIES].map((company, idx) => (
              <span
                key={`${company}-${idx}`}
                className="mx-6 md:mx-10 px-6 py-2 rounded-full text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-glass)] border border-[var(--border-soft)] backdrop-blur-sm inline-flex items-center transition-all duration-300 hover:text-[var(--blue-primary)] hover:border-[var(--border-active)] cursor-default select-none"
                style={{ flexShrink: 0 }}
              >
                {company}
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
