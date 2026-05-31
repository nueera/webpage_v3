'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Lightbulb, Rocket, Shield, Target, Users,
  Clock, Award, Handshake, ArrowRight,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp, AnimatedCounter } from '@/components/ui-extensions';

const teamMembers = [
  { name: 'Nil Shinde', role: 'Founder & CEO', img: '/assets/images/profiles/nil_shinde.webp', highlight: true },
  { name: 'Dipanshu Awandkar', role: 'Co-Founder & CTO', img: '/assets/images/profiles/dipanshu_awandkar.webp', highlight: true },
  { name: 'Vaibhav Nijampurkar', role: 'Lead Developer', img: '/assets/images/profiles/vaibhav_nijampurkar.webp', highlight: false },
  { name: 'Vivek Tethgure', role: 'Senior Developer', img: '/assets/images/profiles/vivek_tethgure.webp', highlight: false },
  { name: 'Vikrant Salunke', role: 'UI/UX Designer', img: '/assets/images/profiles/vikrant_salunke.webp', highlight: false },
  { name: 'Ravi Kambale', role: 'Full Stack Developer', img: '/assets/images/profiles/ravi_kambale.webp', highlight: false },
  { name: 'Nagesh Banger', role: 'Backend Developer', img: '/assets/images/profiles/nagesh_banger.webp', highlight: false },
  { name: 'Saurabh Shinde', role: 'DevOps Engineer', img: '/assets/images/profiles/saurabh_shinde.webp', highlight: false },
  { name: 'Sandhya Shinde', role: 'Project Manager', img: '/assets/images/profiles/sandhya_shinde.webp', highlight: false },
  { name: 'Tisha Dalavi', role: 'Marketing Specialist', img: '/assets/images/profiles/tisha_dalavi.webp', highlight: false },
  { name: 'Mrunmayee Jawale', role: 'Content Strategist', img: '/assets/images/profiles/mrunmayee_Jawale.webp', highlight: false },
];

const philosophyItems = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.', color: 'blue' },
  { icon: Target, title: 'Outcome Driven', desc: 'Every decision is guided by measurable impact and tangible business results.', color: 'orange' },
  { icon: Shield, title: 'Built to Last', desc: 'We architect for longevity, ensuring solutions scale and evolve with your needs.', color: 'blue' },
  { icon: Users, title: 'Collaboration', desc: 'True partnership means working alongside you, not just for you.', color: 'orange' },
];

const stats = [
  { value: 2, suffix: '+', label: 'Years of Excellence', icon: Clock },
  { value: 4, suffix: '+', label: 'Trusted Partners', icon: Handshake },
  { value: 16, suffix: '+', label: 'Projects Delivered', icon: Award },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        {/* Hero mesh overlay */}
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          <FadeUp>
            <SectionBadge>About NueEra</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">We Build Digital Futures</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              A team of creators, engineers, and strategists united by one mission — transforming ambitious ideas into exceptional digital experiences.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Philosophy</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">Our Guiding <span className="gradient-text">Principles</span></SectionTitle>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyItems.map((item, idx) => (
              <FadeUp key={item.title} delay={0.1 + idx * 0.08}>
                <div className="glass-card rounded-2xl p-6 text-center h-full">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg
                    ${item.color === 'blue'
                      ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)]'
                      : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeUp>
                <SectionBadge>Who We Are</SectionBadge>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6 mt-4">A Team That Cares About Your Success</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[var(--text-secondary)] text-lg mb-4">
                  NueEra was founded with a singular vision — to make premium digital solutions accessible to businesses of all sizes. Based in Pune, India, we&apos;ve grown from a small startup into a trusted technology partner.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-[var(--text-secondary)]">
                  Our team brings together diverse expertise in software engineering, design, marketing, and strategy. We believe the best solutions emerge at the intersection of creativity and technical excellence.
                </p>
              </FadeUp>
              <FadeUp delay={0.4} className="mt-6">
                <Link href="/services" className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 blur-2xl" aria-hidden="true" />
                <Image src="/assets/images/hero1.webp" alt="NueEra team" width={600} height={400} className="rounded-2xl object-cover relative z-10 border border-[var(--border-soft)]" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s, idx) => (
              <FadeUp key={s.label} delay={idx * 0.1}>
                <div className="stat-card">
                  <s.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                  <div className="text-4xl font-extrabold gradient-text mb-2">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[var(--text-muted)] text-sm">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Team</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">Meet Our <span className="gradient-text">Team</span></SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">The talented people behind NueEra&apos;s success.</SectionDescription>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <FadeUp key={member.name} delay={0.05 + idx * 0.05}>
                <div className={`team-card group ${member.highlight ? 'ring-1 ring-[var(--border-active)]' : ''}`}>
                  <div className="avatar-ring">
                    <Image src={member.img} alt={member.name} width={80} height={80} className="rounded-full object-cover" sizes="80px" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{member.name}</h3>
                  <p className="text-[var(--text-muted)] text-xs">{member.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="cta-mesh" aria-hidden="true">
          <div className="glow glow-center" />
        </div>
        <div className="container-nueera text-center relative z-10">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Want to Work With Us?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Whether you have a project in mind or want to join our team, we&apos;d love to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
