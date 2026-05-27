'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Search, Lightbulb, Rocket, Shield, Target, Users,
  Eye, Clock, Award, Heart, Handshake, Gem,
  ArrowRight, ChevronRight, Zap, TrendingUp
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';
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
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="glow-orb-blue" style={{ top: '10%', left: '5%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">About NueEra</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">We Build Digital Futures</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A team of creators, engineers, and strategists united by one mission — transforming ambitious ideas into exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Philosophy Panel */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Philosophy" title="Our Guiding Principles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation First', desc: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.' },
              { icon: Target, title: 'Outcome Driven', desc: 'Every decision is guided by measurable impact and tangible business results.' },
              { icon: Shield, title: 'Built to Last', desc: 'We architect for longevity, ensuring solutions scale and evolve with your needs.' },
              { icon: Users, title: 'Collaboration', desc: 'True partnership means working alongside you, not just for you.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge mb-4 inline-block">Who We Are</span>
              <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">A Team That Cares About Your Success</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-4">
                NueEra was founded with a singular vision — to make premium digital solutions accessible to businesses of all sizes. Based in Pune, India, we&apos;ve grown from a small startup into a trusted technology partner for companies across industries.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                Our team brings together diverse expertise in software engineering, design, marketing, and strategy. We believe that the best solutions emerge at the intersection of creativity and technical excellence.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/hero1.webp"
                alt="NueEra team"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Operating Framework */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Framework" title="Our Operating Framework" description="Four steps that define how we deliver excellence, every time." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Listen', desc: 'We start by deeply understanding your challenges, goals, and constraints.' },
              { num: '02', title: 'Architect', desc: 'Design scalable solutions with clear technical and business blueprints.' },
              { num: '03', title: 'Execute', desc: 'Build with precision using agile sprints and continuous delivery.' },
              { num: '04', title: 'Optimize', desc: 'Measure, iterate, and optimize for sustained performance and growth.' },
            ].map((s) => (
              <div key={s.num} className="glass-card rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="text-5xl font-extrabold gradient-text mb-2">{s.num}</div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '2+', label: 'Years of Excellence', icon: Clock },
              { value: '4+', label: 'Trusted Partners', icon: Handshake },
              { value: '16+', label: 'Projects Delivered', icon: Award },
            ].map((s) => (
              <div key={s.label} className="text-center p-8 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <s.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                <div className="text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-primary)] to-[var(--blue-soft)]" />
              <Eye className="w-10 h-10 text-[var(--blue-primary)] mb-4" />
              <h3 className="text-2xl font-extrabold heading-gradient mb-4">Our Vision</h3>
              <p className="text-[var(--text-secondary)]">
                To be the most trusted digital partner for ambitious businesses worldwide, setting the standard for innovation, quality, and client success.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)]" />
              <Rocket className="w-10 h-10 text-[var(--orange-primary)] mb-4" />
              <h3 className="text-2xl font-extrabold heading-gradient mb-4">Our Mission</h3>
              <p className="text-[var(--text-secondary)]">
                To empower businesses with premium digital solutions that drive measurable growth, combining technical excellence with creative innovation.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Journey Timeline */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Journey" title="Our Growth Story" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--blue-primary)] to-[var(--orange-primary)]" />
            {[
              { year: '2023', title: 'Founded', desc: 'NueEra was born with a mission to democratize premium digital solutions.' },
              { year: '2023', title: 'First Major Project', desc: 'Delivered our first enterprise web application, setting the bar high.' },
              { year: '2024', title: 'Team Expansion', desc: 'Grew to 10+ talented professionals across design, development, and marketing.' },
              { year: '2024', title: 'Service Diversification', desc: 'Expanded into mobile apps, branding, and digital marketing services.' },
              { year: '2025', title: 'Growing Strong', desc: '16+ projects delivered with 100% client satisfaction and counting.' },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--blue-primary)] -translate-x-1/2 mt-1.5 ring-4 ring-[var(--bg-main)]" />
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-xs font-bold text-[var(--blue-primary)]">{item.year}</span>
                  <h4 className="font-bold text-[var(--text-primary)]">{item.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Culture */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Culture" title="What Defines Our Culture" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Curiosity', desc: 'We never stop learning, exploring, and questioning the status quo.' },
              { icon: Users, title: 'Collaboration', desc: 'Great things are built together. We champion teamwork and open communication.' },
              { icon: Gem, title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do.' },
              { icon: Heart, title: 'Integrity', desc: 'Honest, transparent, and ethical — in every interaction and decision.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--orange-primary)] to-[var(--core-gold)] shadow-lg">
                  <item.icon className="w-6 h-6 text-[#0B0F14]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Join NueEra */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Careers" title="Why Join NueEra" description="We're always looking for talented individuals who share our passion for excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Continuous learning with mentorship and real project exposure from day one.' },
              { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Work with the latest frameworks, tools, and methodologies in the industry.' },
              { icon: Users, title: 'Collaborative Culture', desc: 'A supportive team environment where your ideas are valued and heard.' },
              { icon: Award, title: 'Competitive Benefits', desc: 'Attractive compensation, flexible hours, and wellness programs.' },
              { icon: Rocket, title: 'Real Impact', desc: 'See your work make a difference for real businesses and real people.' },
              { icon: Heart, title: 'Work-Life Balance', desc: 'We believe in sustainable productivity, not burnout culture.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Team" title="Meet Our Team" description="The talented people behind NueEra's success." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TiltEffect key={member.name} maxTilt={6} scale={1.02}>
                <div className="glass-card rounded-2xl p-6 text-center group">
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)] group-hover:ring-[var(--blue-primary)] transition-all">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{member.name}</h3>
                  <p className="text-[var(--text-muted)] text-xs">{member.role}</p>
                </div>
              </TiltEffect>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Want to Work With Us?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Whether you have a project in mind or want to join our team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/team" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)] hover:-translate-y-0.5 transition-all duration-300">
              View Full Team <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
