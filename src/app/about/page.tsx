'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Search, Lightbulb, Rocket, Shield, Target, Users,
  Eye, Clock, Award, Heart, Handshake, Gem, ArrowRight, TrendingUp, Zap,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp, StaggerContainer, StaggerItem } from '@/components/ui-extensions';
import { TiltEffect } from '@/components/effects/tilt-effect';

const teamMembers = [
  { name: 'Nil Shinde', role: 'Founder & CEO', img: '/assets/images/profiles/nil_shinde.webp' },
  { name: 'Dipanshu Awandkar', role: 'Co-Founder & CTO', img: '/assets/images/profiles/dipanshu_awandkar.webp' },
  { name: 'Vaibhav Nijampurkar', role: 'Lead Developer', img: '/assets/images/profiles/vaibhav_nijampurkar.webp' },
  { name: 'Vivek Tethgure', role: 'Senior Developer', img: '/assets/images/profiles/vivek_tethgure.webp' },
  { name: 'Vikrant Salunke', role: 'UI/UX Designer', img: '/assets/images/profiles/vikrant_salunke.webp' },
  { name: 'Ravi Kambale', role: 'Full Stack Developer', img: '/assets/images/profiles/ravi_kambale.webp' },
  { name: 'Nagesh Banger', role: 'Backend Developer', img: '/assets/images/profiles/nagesh_banger.webp' },
  { name: 'Saurabh Shinde', role: 'DevOps Engineer', img: '/assets/images/profiles/saurabh_shinde.webp' },
  { name: 'Sandhya Shinde', role: 'Project Manager', img: '/assets/images/profiles/sandhya_shinde.webp' },
  { name: 'Tisha Dalavi', role: 'Marketing Specialist', img: '/assets/images/profiles/tisha_dalavi.webp' },
  { name: 'Mrunmayee Jawale', role: 'Content Strategist', img: '/assets/images/profiles/mrunmayee_Jawale.webp' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="container-nueera relative z-10 text-center">
          <SectionBadge>About NueEra</SectionBadge>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">We Build Digital Futures</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A team of creators, engineers, and strategists united by one mission — transforming ambitious ideas into exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <SectionBadge>Philosophy</SectionBadge>
            <SectionTitle className="mt-4">Our Guiding <span className="gradient-text">Principles</span></SectionTitle>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation First', desc: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.' },
              { icon: Target, title: 'Outcome Driven', desc: 'Every decision is guided by measurable impact and tangible business results.' },
              { icon: Shield, title: 'Built to Last', desc: 'We architect for longevity, ensuring solutions scale and evolve with your needs.' },
              { icon: Users, title: 'Collaboration', desc: 'True partnership means working alongside you, not just for you.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="text-center h-full">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28">
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge>Who We Are</SectionBadge>
              <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6 mt-4">A Team That Cares About Your Success</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-4">
                NueEra was founded with a singular vision — to make premium digital solutions accessible to businesses of all sizes. Based in Pune, India, we&apos;ve grown from a small startup into a trusted technology partner.
              </p>
              <p className="text-[var(--text-secondary)]">
                Our team brings together diverse expertise in software engineering, design, marketing, and strategy. We believe the best solutions emerge at the intersection of creativity and technical excellence.
              </p>
            </div>
            <div className="relative">
              <Image src="/assets/images/hero1.webp" alt="NueEra team" width={600} height={400} className="rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '2+', label: 'Years of Excellence', icon: Clock },
              { value: '4+', label: 'Trusted Partners', icon: Handshake },
              { value: '16+', label: 'Projects Delivered', icon: Award },
            ].map((s) => (
              <FadeUp key={s.label}>
                <div className="text-center p-8 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <s.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                  <div className="text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
                  <div className="text-[var(--text-muted)] text-sm">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <SectionBadge>Team</SectionBadge>
            <SectionTitle className="mt-4">Meet Our <span className="gradient-text">Team</span></SectionTitle>
            <SectionDescription className="mx-auto mt-4">The talented people behind NueEra&apos;s success.</SectionDescription>
          </div>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <TiltEffect maxTilt={6} scale={1.02}>
                  <GlassCard className="text-center group">
                    <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)] group-hover:ring-[var(--blue-primary)] transition-all">
                      <Image src={member.img} alt={member.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{member.name}</h3>
                    <p className="text-[var(--text-muted)] text-xs">{member.role}</p>
                  </GlassCard>
                </TiltEffect>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Want to Work With Us?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Whether you have a project in mind or want to join our team, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
