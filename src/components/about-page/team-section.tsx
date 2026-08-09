'use client';

import Image from 'next/image';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from '@/components/ui-extensions';
import { founders, teamMembers } from './data';

export default function AboutTeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Leadership & Team</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">Meet Our <span className="gradient-text">Team</span></SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">The talented people behind NueEra&apos;s success.</SectionDescription>
          </FadeUp>
        </div>

        {/* Founders — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {founders.map((founder, idx) => (
            <FadeUp key={founder.name} delay={0.05 + idx * 0.08}>
              <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-500 hover:border-[var(--border-active)] hover:shadow-[0_0_40px_var(--glow-blue)]">
                {/* Subtle gradient glow behind card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 blur-3xl pointer-events-none group-hover:opacity-150 transition-opacity" />
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
                  <div className="w-[120px] h-[120px] rounded-full p-[3px] bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg shadow-[var(--glow-blue)] flex-shrink-0">
                    <Image src={founder.img} alt={founder.name} width={120} height={120} className="w-full h-full rounded-full object-cover" sizes="120px" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{founder.name}</h3>
                    <p className="gradient-text font-semibold text-sm mb-3">{founder.role}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">{founder.bio}</p>
                    <a href="#" className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--blue-primary)] transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <FadeUp key={member.name} delay={0.05 + idx * 0.05}>
              <div className="team-card group">
                <div className="avatar-ring">
                  <Image src={member.img} alt={member.name} width={80} height={80} className="rounded-full object-cover" sizes="80px" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{member.name}</h3>
                <p className="text-[var(--text-muted)] text-xs mb-2">{member.role}</p>
                {/* Skill tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-secondary)]">
                  {member.skill}
                </span>
                {/* LinkedIn icon */}
                <a href="#" className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--text-muted)] hover:text-[var(--blue-primary)]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
