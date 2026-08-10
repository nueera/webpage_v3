'use client';

import Image from 'next/image';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from '@/components/ui-extensions';
import { executiveTeam, ExecutiveMember } from './data';

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function AboutTeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Premium Ambient NueEra Lighting Mesh */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue" style={{ opacity: 0.18, top: '5%', left: '10%' }} />
        <div className="orb orb-orange" style={{ opacity: 0.18, bottom: '10%', right: '10%' }} />
      </div>

      <div className="container-nueera relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeUp>
            <SectionBadge>Leadership & Governance</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.15}>
            <SectionDescription className="mx-auto mt-4 max-w-2xl">
              The visionaries, strategists, and tech architects leading NueEra&apos;s digital transformation.
            </SectionDescription>
          </FadeUp>
        </div>

        {/* 11-Member Executive Grid with Identical Uniform 4:5 Portrait Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {executiveTeam.map((member: ExecutiveMember, idx: number) => {
            return (
              <FadeUp key={member.id} delay={0.04 + idx * 0.04}>
                {/* NueEra Theme Border Outer Frame */}
                <div className="group relative p-[1.5px] rounded-[32px] bg-gradient-to-br from-white/20 via-[var(--border-soft)] to-white/10 hover:from-[var(--blue-primary)] hover:via-[var(--orange-primary)] hover:to-[var(--blue-primary)] transition-all duration-500 shadow-xl hover:-translate-y-1.5 h-full flex flex-col">
                  
                  {/* Glassmorphic Card Interior */}
                  <div className="bg-gradient-to-b from-[var(--bg-card)]/90 via-[var(--bg-glass)] to-[var(--bg-secondary)]/95 backdrop-blur-2xl rounded-[30.5px] p-6 text-center flex flex-col items-center justify-between h-full relative overflow-hidden group-hover:bg-[var(--bg-card)] transition-colors duration-500">
                    
                    {/* Subtle Background Glow inside Card */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 blur-3xl pointer-events-none group-hover:opacity-150 transition-opacity" />

                    <div className="w-full flex flex-col items-center">
                      {/* Uniform 4:5 Aspect Ratio Photo Frame for EVERY Team Member */}
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slate-900/90 border border-white/10 shadow-inner group-hover:border-[var(--orange-primary)]/40 transition-colors">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={320}
                          height={400}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Bottom Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Acronym Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-md tracking-wider uppercase">
                            {member.acronym}
                          </span>
                        </div>

                        {/* Floating LinkedIn Icon Button */}
                        <a
                          href="#"
                          aria-label={`${member.name} LinkedIn`}
                          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[var(--blue-primary)] hover:border-[var(--blue-primary)] transition-all duration-300 shadow-md"
                        >
                          <LinkedInIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Member Name */}
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text-primary)] group-hover:text-[var(--orange-primary)] transition-colors mb-1 tracking-tight">
                        {member.name}
                      </h3>
                      
                      {/* Official Role */}
                      <p className="gradient-text font-semibold text-xs md:text-sm mb-3 tracking-wide">
                        {member.role}
                      </p>

                      {/* Domain Badge Pill */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-[var(--orange-primary)] tracking-wide">
                          {member.domain}
                        </span>
                      </div>
                    </div>

                    {/* Bio Description */}
                    <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed text-center font-normal line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
