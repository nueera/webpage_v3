'use client';

import {
  Zap, Shield, BarChart3, Smartphone, Users, Headphones,
  Search, Lightbulb, Settings, CheckCircle2, ArrowRight,
  Globe, Cpu, Palette, Megaphone, Rocket,
  TrendingUp, Lock, Handshake, Clock, Award, Layers, Activity, Wrench, Star,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionBadge,
  SectionTitle,
  SectionDescription,
  GlassCard,
} from './ui-extensions';
import { SpotlightCard, MagneticGlowButton } from './premium-effects';
import { TiltEffect } from './effects/tilt-effect';
import { GradientBorder } from './effects/gradient-border';

/* ──────────────────────────── Growth Story ──────────────────────────── */
const GROWTH_STEPS = [
  {
    kicker: 'Step 01',
    title: 'Diagnose',
    description: 'We audit your current systems, identify friction points, and map every opportunity for compounding improvement.',
    icon: Search,
  },
  {
    kicker: 'Step 02',
    title: 'Design',
    description: "We architect solutions that don't just solve today's problems—they become the foundation for tomorrow's scale.",
    icon: Lightbulb,
  },
  {
    kicker: 'Step 03',
    title: 'Deploy',
    description: 'We ship with precision, measure relentlessly, and iterate until every system compounds your growth.',
    icon: Rocket,
  },
];

export function GrowthStory() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Growth Story</SectionBadge>
        <SectionTitle className="mt-4">
          From Ambition to <span className="gradient-text">Scalable Results</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Our three-phase methodology transforms raw ambition into predictable, compounding business outcomes.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROWTH_STEPS.map((step) => (
            <StaggerItem key={step.kicker}>
              <TiltEffect maxTilt={6} scale={1.01}>
                <GlassCard className="text-center h-full">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--orange-primary)] tracking-wider uppercase">
                    {step.kicker}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </TiltEffect>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Welcome ──────────────────────────── */
const WELCOME_ITEMS = [
  { icon: Zap, title: 'Lightning Innovation', description: 'Speed-to-market solutions that outpace your competition.' },
  { icon: Shield, title: 'Fortress Security', description: 'Enterprise-grade protection for your digital assets.' },
  { icon: BarChart3, title: 'Data Intelligence', description: 'Turn raw data into strategic business decisions.' },
];

export function Welcome() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Welcome to the Future</SectionBadge>
        <SectionTitle className="mt-4">
          Your Vision, <span className="gradient-text">Our Mission</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          We don&apos;t just build digital products—we engineer growth systems that align with your business DNA and scale with your ambitions.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WELCOME_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--orange-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--orange-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Features ──────────────────────────── */
const FEATURES = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance that keeps users engaged and conversions high.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade protection across every touchpoint of your digital ecosystem.' },
  { icon: Smartphone, title: 'Mobile First', description: 'Responsive experiences built for the devices your customers actually use.' },
  { icon: BarChart3, title: 'Data Driven', description: 'Every decision backed by analytics, not assumptions.' },
  { icon: Users, title: 'Expert Team', description: 'Senior engineers and strategists who ship, not slide.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock monitoring and rapid response when it matters most.' },
];

export function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Premium Solutions</SectionBadge>
        <SectionTitle className="mt-4">
          Why Businesses Choose <span className="gradient-text">NueEra</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <SpotlightCard className="text-left h-full">
                <div className="w-12 h-12 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[var(--orange-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Services ──────────────────────────── */
const SERVICES = [
  { icon: Globe, title: 'Website & Mobile App Launch System', description: 'Full-stack development with conversion-optimized UX, built for speed and scale from day one.' },
  { icon: Megaphone, title: 'Growth Marketing System', description: 'Data-driven acquisition funnels, SEO strategy, and performance marketing that compounds over time.' },
  { icon: Cpu, title: 'Tech Automation System', description: 'Eliminate manual bottlenecks with intelligent automation that frees your team to focus on growth.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-backed interfaces that convert visitors into customers and customers into advocates.' },
  { icon: Lightbulb, title: 'Branding & Strategy', description: 'Distinctive brand identities and go-to-market strategies that position you for market leadership.' },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Expertise</SectionBadge>
        <SectionTitle className="mt-4">
          Comprehensive <span className="gradient-text">Digital Solutions</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <div className="gradient-border h-full">
                <div className="p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[var(--orange-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{service.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.4} className="mt-10">
          <MagneticGlowButton>
            View All Services
            <ArrowRight className="w-5 h-5" />
          </MagneticGlowButton>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── Testimonials ──────────────────────────── */
const TESTIMONIAL_DATA = [
  {
    name: 'Ravi Kambale',
    role: 'Founder',
    company: 'TechVenture',
    content: 'NueEra transformed our digital presence completely. Their systematic approach delivered results beyond our expectations.',
    rating: 5,
    avatar: '/assets/images/profiles/ravi_kambale.webp',
  },
  {
    name: 'Vaibhav Nijampurkar',
    role: 'CEO',
    company: 'GrowthLabs',
    content: 'Working with NueEra was a game-changer for our business. Their growth marketing system helped us achieve 3x revenue growth in just 6 months.',
    rating: 5,
    avatar: '/assets/images/profiles/vaibhav_nijampurkar.webp',
  },
  {
    name: 'Saurabh Shinde',
    role: 'CTO',
    company: 'CloudScale Inc',
    content: 'The technical expertise at NueEra is second to none. They built our entire cloud infrastructure from scratch with 99.99% uptime.',
    rating: 5,
    avatar: '/assets/images/profiles/saurabh_shinde.webp',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[var(--orange-primary)] fill-[var(--orange-primary)]' : 'text-[var(--text-muted)]'}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Success Stories</SectionBadge>
        <SectionTitle className="mt-4">
          Trusted by <span className="gradient-text">Business Leaders</span>
        </SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_DATA.map((testimonial, idx) => (
            <FadeUp key={testimonial.name} delay={idx * 0.1}>
              <GlassCard className="text-left h-full" hover={false}>
                <div className="flex items-center gap-1 mb-3">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)]">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA Section ──────────────────────────── */
export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--orange-primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="section-badge">Transform Your Digital Future</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Ready to Transform <span className="gradient-text">Your Business?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Take the first step toward engineered growth. Our team will map out a clear path from where you are to where you want to be.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-8 flex items-center justify-center gap-6">
          {[
            { icon: Rocket, text: 'Strategic Roadmap' },
            { icon: CheckCircle2, text: '30-min Consultation' },
            { icon: CheckCircle2, text: 'Zero Obligation' },
          ].map((feat) => (
            <div key={feat.text} className="hidden sm:flex items-center gap-2 text-[var(--text-secondary)]">
              <feat.icon className="w-5 h-5 text-[var(--orange-primary)]" />
              <span className="text-sm">{feat.text}</span>
            </div>
          ))}
        </FadeUp>

        <FadeUp delay={0.4} className="mt-10">
          <MagneticGlowButton className="text-lg px-10 py-5">
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </MagneticGlowButton>
          <p className="mt-4 text-[var(--text-muted)] text-sm">We respond within 24 hours</p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── FAQ Section ──────────────────────────── */
const FAQ_ITEMS = [
  {
    question: 'What services does NueEra offer?',
    answer: 'We offer comprehensive digital solutions including web and mobile app development, growth marketing systems, tech automation, UI/UX design, and branding & strategy. Each service is designed to work as part of an integrated growth system.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary by scope. Starter projects take 2-4 weeks, Growth projects 4-8 weeks, and Enterprise projects are scoped individually. We provide detailed timelines during discovery.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. All plans include post-launch support, and we offer dedicated maintenance packages for ongoing updates, security patches, and feature enhancements.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with modern tech stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tools for each project.',
  },
  {
    question: 'How do I get started?',
    answer: 'Book a free strategy call through our website. We\'ll discuss your goals, assess your current digital presence, and outline a clear roadmap for your project.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionBadge>FAQ</SectionBadge>
          <SectionTitle className="mt-4">Frequently Asked <span className="gradient-text">Questions</span></SectionTitle>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <details className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-glass)] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[var(--text-primary)] text-sm pr-4">{item.question}</span>
                  <span className="text-[var(--text-muted)] text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[var(--text-secondary)] text-sm">{item.answer}</p>
                </div>
              </details>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
