'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Code2, Target, Zap, Shield, Users, RefreshCw,
  Award, ThumbsUp, Clock, ArrowRight,
  Star, ChevronRight, Quote,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp, AnimatedCounter, GlassCard } from '@/components/ui-extensions';
import { PremiumButton } from '@/components/premium-button';

/* ─── Data ────────────────────────────────────────────── */

const differentiators = [
  { icon: Code2, title: 'Business-First Engineering', desc: "We're not just coders. Every line of code we write is tied to your revenue and growth metrics.", color: 'blue' },
  { icon: Target, title: 'Measured Delivery', desc: 'Clear KPIs, weekly progress updates, and transparent reporting — you always know where your project stands.', color: 'orange' },
  { icon: Zap, title: 'Rapid Execution', desc: 'Our delivery framework gets projects live 40% faster than traditional agencies without compromising quality.', color: 'blue' },
  { icon: Shield, title: 'Enterprise-Grade Quality', desc: 'Same rigorous standards whether you\'re a startup or enterprise. Security, testing, and performance are non-negotiable.', color: 'orange' },
  { icon: Users, title: 'True Partnership', desc: 'We embed with your team. Not just vendors — strategic partners invested in your long-term success.', color: 'blue' },
  { icon: RefreshCw, title: 'Future-Proof Solutions', desc: 'We build with scalability in mind. Your solution grows as your business grows — no rebuilds needed.', color: 'orange' },
];

const timelineItems = [
  { year: '2023', title: 'The Beginning', desc: 'NueEra was founded in Pune by Nil Shinde and Dipanshu Awandkar with a vision to make premium digital solutions accessible to growing businesses.' },
  { year: '2023', title: 'First Client', desc: 'Landed our first major project — a full e-commerce platform for FreshBite Organics that went on to generate 4x online sales growth.' },
  { year: '2024', title: 'Team Expansion', desc: 'Grew to a team of 8 talented professionals across design, development, marketing, and operations.' },
  { year: '2024', title: '50+ Projects', desc: 'Crossed the 50-project milestone with a 98% client satisfaction rate and partnerships across diverse industries.' },
  { year: '2025', title: 'Full-Service Agency', desc: 'Expanded to a 11-member team offering end-to-end digital solutions including video production, content strategy, and tech automation.' },
  { year: '2025', title: 'Growing Strong', desc: 'Continuing to scale with new partnerships, advanced AI-powered solutions, and a mission to become India\'s most trusted digital partner.' },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Award, desc: 'Across web, mobile, marketing & branding' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: ThumbsUp, desc: 'Based on post-project feedback surveys' },
  { value: 11, suffix: '+', label: 'Team Members', icon: Users, desc: 'Designers, developers, marketers & strategists' },
  { value: 4, suffix: '+', label: 'Years of Excellence', icon: Clock, desc: 'Delivering digital excellence since 2023' },
];

const founders = [
  {
    name: 'Nil Shinde',
    role: 'Founder & Business Growth Lead',
    img: '/assets/images/profiles/nil_shinde.webp',
    bio: 'Visionary entrepreneur with a passion for building scalable businesses. Nil leads NueEra\'s growth strategy and client relationships, ensuring every project drives measurable impact.',
  },
  {
    name: 'Dipanshu Awandkar',
    role: 'Co-Founder & Technology Lead',
    img: '/assets/images/profiles/dipanshu_awandkar.webp',
    bio: 'Full-stack technologist with deep expertise in modern web and cloud technologies. Dipanshu architects solutions that are built to scale and engineered for performance.',
  },
];

const teamMembers = [
  { name: 'Vaibhav Nijampurkar', role: 'Process & Business Development Lead', img: '/assets/images/profiles/vaibhav_nijampurkar.webp', skill: 'Strategy, Business Development' },
  { name: 'Vivek Tethgure', role: 'Senior Developer', img: '/assets/images/profiles/vivek_tethgure.webp', skill: 'React, Next.js, Node.js' },
  { name: 'Vikrant Salunke', role: 'Quality Assurance Lead', img: '/assets/images/profiles/vikrant_salunke.webp', skill: 'QA Automation, Testing' },
  { name: 'Ravi Kambale', role: 'Operations & Delivery Lead', img: '/assets/images/profiles/ravi_kambale.webp', skill: 'Project Management, Agile' },
  { name: 'Nagesh Banger', role: 'Motion Graphics & Video Content Lead', img: '/assets/images/profiles/nagesh_banger.webp', skill: 'After Effects, Premiere Pro' },
  { name: 'Saurabh Shinde', role: 'Process Optimization Lead', img: '/assets/images/profiles/saurabh_shinde.webp', skill: 'Process Design, Analytics' },
  { name: 'Sandhya Shinde', role: 'Project Manager', img: '/assets/images/profiles/sandhya_shinde.webp', skill: 'Scrum, Client Relations' },
  { name: 'Tisha Dalavi', role: 'Marketing & Growth Lead', img: '/assets/images/profiles/tisha_dalavi.webp', skill: 'SEO, Google Ads, Social' },
  { name: 'Mrunmayee Jawale', role: 'Product Strategy Lead', img: '/assets/images/profiles/mrunmayee_Jawale.webp', skill: 'Figma, UX Research' },
];

const testimonials = [
  {
    quote: 'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Our online sales grew 4x within three months. Their team understood our vision perfectly.',
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'FreshBite Organics',
    rating: 5,
  },
  {
    quote: 'The growth marketing system NueEra implemented drove a 3x increase in organic traffic and doubled our lead generation. Their data-driven approach gave us complete confidence.',
    name: 'Amit Deshmukh',
    role: 'CEO',
    company: 'UrbanFit Gyms',
    rating: 5,
  },
];

/* ─── Helper: Star Rating ───────────────────────────────── */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[var(--orange-primary)] fill-[var(--orange-primary)]' : 'text-[var(--text-muted)]'}`}
        />
      ))}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>

      {/* ═══════════ 1. HERO (enhanced) ═══════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover object-center opacity-20" sizes="100vw" />
        </div>
        {/* Hero mesh overlay */}
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--blue-primary)] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[var(--text-primary)]">About</span>
            </nav>
          </FadeUp>
          <FadeUp delay={0.05}>
            <SectionBadge className="text-base px-5 py-2">About NueEra</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">We Build Digital Futures</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              A team of creators, engineers, and strategists united by one mission — transforming ambitious ideas into exceptional digital experiences.
            </p>
          </FadeUp>
          {/* Inline hero stats */}
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10">
              {[
                { value: 50, suffix: '+', label: 'Projects' },
                { value: 98, suffix: '%', label: 'Satisfaction' },
                { value: 11, suffix: '+', label: 'Team Members' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-extrabold gradient-text">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════ 2. THE NUEERA DIFFERENCE ═══════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>The NueEra Difference</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">Why Teams <span className="gradient-text">Choose Us</span></SectionTitle>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, idx) => (
              <FadeUp key={item.title} delay={0.05 + idx * 0.06}>
                <GlassCard className="h-full text-center group">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110
                    ${item.color === 'blue'
                      ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)]'
                      : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. WHO WE ARE ═══════════ */}
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
                  NueEra was founded with a singular vision — to make premium digital solutions accessible to businesses of all sizes. Based in Pune, India, we&apos;ve grown from a two-person startup into a trusted, full-service digital partner.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-[var(--text-secondary)]">
                  Our 11-member team brings together diverse expertise in software engineering, design, marketing, video production, and business strategy. We believe the best solutions emerge at the intersection of creativity and technical excellence — and that&apos;s exactly where we operate.
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

      {/* ═══════════ 4. COMPANY TIMELINE ═══════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Background orbs */}
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.15 }} />
          <div className="orb orb-orange" style={{ opacity: 0.12 }} />
        </div>
        <div className="container-nueera relative z-10">
          <div className="text-center mb-16">
            <FadeUp>
              <SectionBadge>Our Journey</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">From Idea to <span className="gradient-text">Impact</span></SectionTitle>
            </FadeUp>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)] opacity-30 rounded-full" />
              <div className="grid grid-cols-6 gap-4">
                {timelineItems.map((item, idx) => (
                  <FadeUp key={item.title} delay={0.05 + idx * 0.08}>
                    <div className="flex flex-col items-center text-center">
                      {/* Dot */}
                      <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg shadow-[var(--glow-blue)] mb-6 ring-4 ring-[var(--bg-secondary)]" />
                      {/* Year badge */}
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-[var(--text-primary)] text-sm mb-2">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden relative max-w-md mx-auto">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-5 w-[3px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)] opacity-30 rounded-full" />
            <div className="space-y-10">
              {timelineItems.map((item, idx) => (
                <FadeUp key={item.title} delay={0.05 + idx * 0.06}>
                  <div className="flex gap-5 relative">
                    {/* Dot */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg shadow-[var(--glow-blue)] flex-shrink-0 ring-4 ring-[var(--bg-secondary)]" />
                    {/* Content */}
                    <div className="pt-1">
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. STATS (improved) ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>By The Numbers</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">Impact That <span className="gradient-text">Speaks</span></SectionTitle>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <FadeUp key={s.label} delay={idx * 0.08}>
                <div className="stat-card text-center">
                  <s.icon className="w-7 h-7 mx-auto mb-3 text-[var(--blue-primary)]" />
                  <div className="text-5xl font-extrabold gradient-text mb-2">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm mb-1">{s.label}</div>
                  <div className="text-[var(--text-muted)] text-xs">{s.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TEAM (enhanced) ═══════════ */}
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

      {/* ═══════════ 7. TESTIMONIALS ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Client Love</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">What Our Partners <span className="gradient-text">Say</span></SectionTitle>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <FadeUp key={t.name} delay={0.05 + idx * 0.1}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <Quote className="w-5 h-5 text-[var(--orange-primary)] flex-shrink-0" />
                    <StarRating rating={t.rating} />
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 relative z-10">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</div>
                      <div className="text-[var(--text-muted)] text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. CTA (improved) ═══════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="cta-mesh" aria-hidden="true">
          <div className="glow glow-center" />
        </div>
        <div className="container-nueera text-center relative z-10">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Build Something <span className="gradient-text">Extraordinary?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Join 50+ businesses that trust NueEra to engineer their digital growth. Book a free strategy call and get your custom roadmap.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917020810392?text=Hi%20NueEra!%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              <PremiumButton>Book Strategy Call</PremiumButton>
            </a>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-base transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] active:scale-[0.98]">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-[var(--text-muted)] text-xs mt-6">
              🔒 Free consultation • No obligation • NDA protected
            </p>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
