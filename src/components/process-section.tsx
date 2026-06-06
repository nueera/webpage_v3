'use client';

import { Search, Target, Wrench, TrendingUp } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';

const PROCESS_STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business, market, and competition to identify growth opportunities.',
    color: 'blue',
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy',
    description: 'We craft a custom roadmap with clear milestones and measurable KPIs.',
    color: 'orange',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Build',
    description: 'Our team builds and launches your solution with precision and speed.',
    color: 'blue',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    description: 'We optimize and scale your digital presence for sustainable growth.',
    color: 'orange',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] top-[30%] right-[10%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
        <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.03] bottom-[20%] left-[5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>Our Process</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            How We <span className="gradient-text">Work</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            A proven four-step methodology that takes your business from idea to impact.
          </SectionDescription>
        </FadeUp>

        {/* Desktop: Horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] process-line" />

            {PROCESS_STEPS.map((step, idx) => (
              <FadeUp key={step.title} delay={0.15 + idx * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10
                    ${step.color === 'blue'
                      ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                      : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }
                    shadow-[0_0_30px_var(--glow-blue)]`}
                    style={{
                      boxShadow: step.color === 'blue'
                        ? '0 0 30px var(--glow-blue), 0 8px 24px rgba(0,0,0,0.2)'
                        : '0 0 30px var(--glow-orange), 0 8px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[220px]">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-4 top-4 bottom-4 w-[3px] process-line" />

            {PROCESS_STEPS.map((step, idx) => (
              <FadeUp key={step.title} delay={0.1 + idx * 0.1}>
                <div className="relative flex gap-4 pb-8 last:pb-0">
                  {/* Number circle */}
                  <div className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center z-10
                    ${step.color === 'blue'
                      ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                      : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                    style={{
                      boxShadow: step.color === 'blue'
                        ? '0 0 20px var(--glow-blue)'
                        : '0 0 20px var(--glow-orange)',
                    }}
                  >
                    <step.icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="pt-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
