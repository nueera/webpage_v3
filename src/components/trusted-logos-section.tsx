'use client';

import { Globe, Smartphone, TrendingUp, Cpu, Palette, Sparkles, Cloud } from 'lucide-react';

const SERVICES_CAPABILITIES = [
  { name: 'Web & E-Commerce Development', icon: Globe, color: 'from-[var(--blue-primary)] to-[var(--blue-soft)]' },
  { name: 'Mobile App Development', icon: Smartphone, color: 'from-[var(--orange-primary)] to-[var(--orange-soft)]' },
  { name: 'SEO & Growth Marketing', icon: TrendingUp, color: 'from-emerald-500 to-teal-600' },
  { name: 'AI & Tech Automation', icon: Cpu, color: 'from-purple-500 to-indigo-600' },
  { name: 'UI/UX Design & Prototyping', icon: Palette, color: 'from-pink-500 to-rose-600' },
  { name: 'Branding & Visual Strategy', icon: Sparkles, color: 'from-amber-500 to-yellow-600' },
  { name: 'Cloud & DevOps Solutions', icon: Cloud, color: 'from-cyan-500 to-blue-600' },
];

export function TrustedLogosSection() {
  return (
    <section className="relative py-12 bg-[var(--bg-main)] overflow-hidden border-y border-[var(--border-soft)]" aria-label="Our Digital Capabilities">
      <div className="container-nueera text-center">
        <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-8 font-semibold">
          Our Core Capabilities & Digital Services
        </p>
        <div className="relative overflow-hidden" aria-hidden="true">
          {/* Marquee container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...SERVICES_CAPABILITIES, ...SERVICES_CAPABILITIES].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="mx-4 md:mx-6 px-5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-glass)] border border-[var(--border-soft)] backdrop-blur-sm inline-flex items-center gap-3 transition-all duration-300 hover:text-[var(--blue-primary)] hover:border-[var(--border-active)] hover:scale-105 cursor-default select-none shadow-sm"
                  style={{ flexShrink: 0 }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} text-white flex-shrink-0 shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
