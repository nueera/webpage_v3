'use client';

import { CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from '@/components/ui-extensions';
import { services, TechBadge, WhatsAppCTA } from './data';

export default function ServiceCatalogSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>All Services</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Our Service <span className="gradient-text">Catalog</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Seven comprehensive solutions across every area of digital excellence. Each designed for measurable impact.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="space-y-6">
          {services.map((service, idx) => (
            <FadeUp key={service.id} delay={0.05 + idx * 0.04}>
              <div className={`relative ${service.color === 'blue' ? 'service-glow-blue' : 'service-glow-orange'}`}>
                <GlassCard className="p-6 md:p-8 group">
                  {/* Top row: Icon, title, tagline */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                          service.color === 'blue'
                            ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                            : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                        }`}
                      >
                        <service.icon
                          className={`w-7 h-7 ${
                            service.color === 'blue'
                              ? 'text-[var(--blue-primary)]'
                              : 'text-[var(--orange-primary)]'
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{service.title}</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">{service.tagline}</p>
                      </div>
                    </div>

                    {/* Price & Timeline badges — desktop */}
                    <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                        Starting {service.startingPrice}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Two column layout: Deliverables | Technologies */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                        }`} />
                        What&apos;s Included
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              service.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                            }`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {service.deliverables.length > 4 && (
                        <div className="mt-2">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.slice(4).map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                  service.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                                }`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                        }`} />
                        Technologies We Use
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 5).map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                        {service.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                            +{service.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Mini process timeline */}
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 mt-5 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                        }`} />
                        Our Process
                      </h4>
                      <div className="flex items-center gap-1 flex-wrap">
                        {service.process.map((step, stepIdx) => (
                          <div key={step} className="flex items-center gap-1">
                            <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                                service.color === 'blue'
                                  ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                                  : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                              }`}>
                                {stepIdx + 1}
                              </span>
                              {step}
                            </span>
                            {stepIdx < service.process.length - 1 && (
                              <ChevronRight className="w-3 h-3 text-[var(--border-soft)]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom row: Result highlight, Price/Timeline (mobile), CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[var(--border-soft)]">
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Result stat */}
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                        service.color === 'blue'
                          ? 'bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]'
                          : 'bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]'
                      }`}>
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">{service.result}</span>
                      </div>

                      {/* Price & Timeline — mobile */}
                      <div className="flex items-center gap-2 sm:hidden">
                        <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                          {service.startingPrice}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                    <WhatsAppCTA serviceTitle={service.title} />
                  </div>
                </GlassCard>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
