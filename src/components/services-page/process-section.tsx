'use client';

import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from '@/components/ui-extensions';
import { processSteps } from './data';

export default function ServicesProcessSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[10%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[5%] left-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Our Process</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              How We Deliver <span className="gradient-text">Every Service</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              A proven four-step methodology that ensures every project delivers measurable business impact.
            </SectionDescription>
          </FadeUp>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] process-line" />

            {processSteps.map((step, idx) => (
              <FadeUp key={step.title} delay={0.15 + idx * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10 ${
                      step.color === 'blue'
                        ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                        : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                    style={{
                      boxShadow:
                        step.color === 'blue'
                          ? '0 0 30px var(--glow-blue), 0 8px 24px rgba(0,0,0,0.2)'
                          : '0 0 30px var(--glow-orange), 0 8px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    Step {String(idx + 1).padStart(2, '0')}
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
            <div className="absolute left-4 top-4 bottom-4 w-[3px] process-line" />

            {processSteps.map((step, idx) => (
              <FadeUp key={step.title} delay={0.1 + idx * 0.1}>
                <div className="relative flex gap-4 pb-8 last:pb-0">
                  <div
                    className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      step.color === 'blue'
                        ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                        : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                    style={{
                      boxShadow:
                        step.color === 'blue'
                          ? '0 0 20px var(--glow-blue)'
                          : '0 0 20px var(--glow-orange)',
                    }}
                  >
                    <step.icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="pt-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                      Step {String(idx + 1).padStart(2, '0')}
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
