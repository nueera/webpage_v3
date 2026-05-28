'use client';

import { useRef, useEffect, useState } from 'react';
import {
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Users,
  Headphones,
  Search,
  Lightbulb,
  Settings,
  CheckCircle2,
  ArrowRight,
  Globe,
  Cpu,
  Palette,
  Megaphone,
  Target,
  Rocket,
  TrendingUp,
  Lock,
  Handshake,
  Clock,
  Award,
  Layers,
  Activity,
  Wrench,
  Eye,
  BookOpen,
  MessageSquare,
  ArrowRightLeft,
  Star,
  ChevronDown,
  MapPin,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionBadge,
  SectionTitle,
  SectionDescription,
  GlassCard,
  GradientButton,
} from './ui-extensions';
import { SpotlightCard, MotionKineticText, MagneticGlowButton } from './premium-effects';
import { TestimonialCarousel } from './testimonial-carousel';
import { TiltEffect } from './effects/tilt-effect';
import { IntentCTA } from './intent-cta';
import { GradientBorder } from './effects/gradient-border';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

/* ──────────────────────────── Growth Story ──────────────────────────── */
const GROWTH_STEPS = [
  {
    kicker: 'Step 01',
    title: 'Diagnose',
    description:
      'We audit your current systems, identify friction points, and map every opportunity for compounding improvement.',
    icon: Search,
  },
  {
    kicker: 'Step 02',
    title: 'Design',
    description:
      "We architect solutions that don't just solve today's problems—they become the foundation for tomorrow's scale.",
    icon: Lightbulb,
  },
  {
    kicker: 'Step 03',
    title: 'Deploy',
    description:
      'We ship with precision, measure relentlessly, and iterate until every system compounds your growth.',
    icon: Rocket,
  },
];

export function GrowthStory() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Growth Story</SectionBadge>
        <SectionTitle className="mt-4">
          From Ambition to{' '}
          <span className="gradient-text">Scalable Results</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Our three-phase methodology transforms raw ambition into predictable,
          compounding business outcomes.
        </SectionDescription>

        {/* Steps with connecting line */}
        <div className="mt-12 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-[2px] -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, var(--blue-primary), var(--orange-primary))',
              }}
            />
            {/* Progress dots */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--blue-primary)] ring-4 ring-[var(--bg-secondary)]" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--orange-primary)] ring-4 ring-[var(--bg-secondary)]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--orange-primary)] ring-4 ring-[var(--bg-secondary)]" />
          </div>

          {/* Mobile connecting line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full h-full origin-top"
              style={{
                background: 'linear-gradient(180deg, var(--blue-primary), var(--orange-primary))',
              }}
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {GROWTH_STEPS.map((step, idx) => (
              <StaggerItem key={step.kicker}>
                <TiltEffect maxTilt={6} scale={1.01}>
                  <GlassCard className="text-center h-full relative">
                    {/* Step number circle */}
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
                    {/* Arrow for mobile */}
                    {idx < GROWTH_STEPS.length - 1 && (
                      <div className="md:hidden flex justify-center mt-4">
                        <motion.div
                          animate={{ y: [0, 6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight className="w-5 h-5 text-[var(--orange-primary)] rotate-90" />
                        </motion.div>
                      </div>
                    )}
                  </GlassCard>
                </TiltEffect>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── Welcome ──────────────────────────── */
const WELCOME_ITEMS = [
  {
    icon: Zap,
    title: 'Lightning Innovation',
    description: 'Speed-to-market solutions that outpace your competition.',
  },
  {
    icon: Shield,
    title: 'Fortress Security',
    description: 'Enterprise-grade protection for your digital assets.',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    description: 'Turn raw data into strategic business decisions.',
  },
];

export function Welcome() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Welcome to the Future</SectionBadge>
        <SectionTitle className="mt-4">
          Your Vision,{' '}
          <span className="gradient-text">Our Mission</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          We don&apos;t just build digital products—we engineer growth systems
          that align with your business DNA and scale with your ambitions.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WELCOME_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--orange-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--orange-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
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
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps users engaged and conversions high.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade protection across every touchpoint of your digital ecosystem.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive experiences built for the devices your customers actually use.',
  },
  {
    icon: BarChart3,
    title: 'Data Driven',
    description: 'Every decision backed by analytics, not assumptions.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior engineers and strategists who ship, not slide.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and rapid response when it matters most.',
  },
];

export function Features() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Premium Solutions</SectionBadge>
        <SectionTitle className="mt-4">
          Why Businesses Choose{' '}
          <span className="gradient-text">NueEra</span>
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

/* ──────────────────────────── Trusted By (Marquee) ──────────────────────────── */
const TRUST_CHIPS = [
  { icon: '🏢', name: 'SaaS & Product Teams' },
  { icon: '🤝', name: 'Service Businesses' },
  { icon: '🚀', name: 'Founder-led Brands' },
  { icon: '📈', name: 'Growth-Stage Startups' },
  { icon: '🏥', name: 'Healthcare Tech' },
  { icon: '🎓', name: 'EdTech Platforms' },
  { icon: '🛒', name: 'E-Commerce Brands' },
  { icon: '💰', name: 'FinTech Companies' },
];

const TRUST_STATEMENTS = [
  { icon: CheckCircle2, label: 'Delivery Confidence' },
  { icon: Target, label: 'Business Fit' },
  { icon: TrendingUp, label: 'Scale Readiness' },
];

/* Marquee item for infinite scroll */
function MarqueeItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex animate-marquee ${className}`}>
      {children}
      {children}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20 bg-[var(--bg-main)] border-y border-[var(--border-soft)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-8">
          <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-medium mb-6">
            Trusted By
          </p>
        </FadeUp>

        {/* Marquee / Infinite Scroll */}
        <FadeUp className="mb-8">
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />
            <MarqueeItem className="gap-4">
              {TRUST_CHIPS.map((chip) => (
                <span
                  key={chip.name}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-secondary)] text-sm whitespace-nowrap shrink-0"
                >
                  <span className="text-base">{chip.icon}</span>
                  {chip.name}
                </span>
              ))}
            </MarqueeItem>
          </div>
        </FadeUp>

        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
          {TRUST_STATEMENTS.map((stmt) => (
            <StaggerItem key={stmt.label} className="flex items-center gap-2">
              <stmt.icon className="w-5 h-5 text-[var(--orange-primary)]" />
              <span className="text-[var(--text-primary)] font-medium">{stmt.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ──────────────────────────── Our Approach ──────────────────────────── */
const APPROACH_ITEMS = [
  {
    icon: Layers,
    title: 'Systems Over Features',
    description:
      'We build interconnected systems, not isolated features. Every component serves the whole.',
  },
  {
    icon: Activity,
    title: 'Measure Then Move',
    description:
      "Data-informed decisions at every step. We don't guess—we validate, then iterate.",
  },
  {
    icon: Wrench,
    title: 'Design for Reliability',
    description:
      'Fault-tolerant architectures that keep running when others break down.',
  },
];

export function OurApproach() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Philosophy</SectionBadge>
        <SectionTitle className="mt-4">
          How We <span className="gradient-text">Think</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {APPROACH_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--blue-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--blue-primary)]" />
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

/* ──────────────────────────── Strategic Architecture ──────────────────────────── */
const ARCHITECTURE_LAYERS = [
  {
    kicker: 'Layer 01',
    title: 'Business Context',
    bullets: [
      'Market position analysis',
      'Revenue model mapping',
      'Growth bottleneck identification',
    ],
  },
  {
    kicker: 'Layer 02',
    title: 'System Blueprint',
    bullets: [
      'Technical architecture design',
      'Integration mapping',
      'Scalability planning',
    ],
  },
  {
    kicker: 'Layer 03',
    title: 'Compounding Execution',
    bullets: [
      'Phased delivery roadmap',
      'Performance benchmarking',
      'Continuous optimization loop',
    ],
  },
];

export function StrategicArchitecture() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Execution Architecture</SectionBadge>
        <SectionTitle className="mt-4">
          Structured Delivery for{' '}
          <span className="gradient-text">Predictable Growth</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_LAYERS.map((layer) => (
            <StaggerItem key={layer.kicker}>
              <GlassCard className="text-left h-full">
                <span className="text-xs font-semibold text-[var(--orange-primary)] tracking-wider uppercase">
                  {layer.kicker}
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-2 mb-4">
                  {layer.title}
                </h3>
                <ul className="space-y-2">
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--orange-primary)] shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── 3D Showcase ──────────────────────────── */
const CUBE_FACES = ['Scale', 'Trust', 'Speed', 'Systems', 'Growth', 'Precision'];
const CUBE_CLASSES = [
  'cube-face-front',
  'cube-face-back',
  'cube-face-right',
  'cube-face-left',
  'cube-face-top',
  'cube-face-bottom',
];

export function Showcase3D() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Copy */}
          <div className="flex-1 text-center lg:text-left">
            <SectionBadge>Built Different</SectionBadge>
            <SectionTitle className="mt-4">
              Engineered for{' '}
              <span className="gradient-text">Excellence</span>
            </SectionTitle>
            <SectionDescription className="lg:mx-0 mt-4">
              Our solutions are architected from the ground up with
              performance, security, and scalability at their core.
            </SectionDescription>
            <FadeUp delay={0.3} className="flex items-center gap-8 mt-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-[var(--text-muted)]">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">&lt;2s</div>
                <div className="text-xs text-[var(--text-muted)]">Load Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">A+</div>
                <div className="text-xs text-[var(--text-muted)]">Security</div>
              </div>
            </FadeUp>
          </div>

          {/* Right 3D Cube */}
          <FadeUp delay={0.2} className="flex-shrink-0 relative">
            {/* Glow behind cube */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-[var(--orange-primary)]/10 blur-[80px]" />
            </div>
            <div className="cube-wrapper relative z-10 mx-auto">
              <div className="cube">
                {CUBE_FACES.map((face, i) => (
                  <div key={face} className={`cube-face ${CUBE_CLASSES[i]}`}>
                    {face}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── Services ──────────────────────────── */
const SERVICES = [
  {
    icon: Globe,
    title: 'Website And Mobile App Launch System',
    description:
      'Full-stack development with conversion-optimized UX, built for speed and scale from day one.',
  },
  {
    icon: Megaphone,
    title: 'Growth Marketing System',
    description:
      'Data-driven acquisition funnels, SEO strategy, and performance marketing that compounds over time.',
  },
  {
    icon: Cpu,
    title: 'Tech Automation System',
    description:
      'Eliminate manual bottlenecks with intelligent automation that frees your team to focus on growth.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Research-backed interfaces that convert visitors into customers and customers into advocates.',
  },
  {
    icon: Lightbulb,
    title: 'Branding & Strategy',
    description:
      'Distinctive brand identities and go-to-market strategies that position you for market leadership.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Expertise</SectionBadge>
        <SectionTitle className="mt-4">
          Comprehensive{' '}
          <span className="gradient-text">Digital Solutions</span>
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

/* ──────────────────────────── Why Choose NueEra ──────────────────────────── */
const WHY_ITEMS = [
  { icon: Users, title: 'Expert Team', description: 'Senior talent with proven track records.' },
  { icon: Lock, title: 'Enterprise Security', description: 'Security-first development practices.' },
  { icon: Rocket, title: 'Performance First', description: 'Speed-optimized from architecture to deployment.' },
  { icon: Handshake, title: 'True Partnership', description: 'We succeed when you succeed. Fully aligned.' },
  { icon: Clock, title: 'Fast Delivery', description: 'Agile sprints that ship value every cycle.' },
  { icon: Award, title: 'Proven Results', description: 'Documented outcomes, not empty promises.' },
];

export function WhyChoose() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Advantages</SectionBadge>
        <SectionTitle className="mt-4">
          Why Choose{' '}
          <span className="gradient-text">NueEra</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GradientBorder borderWidth={2} duration="4s">
                <div className="flex items-start gap-4 text-left h-full p-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[var(--orange-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                  </div>
                </div>
              </GradientBorder>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Process ──────────────────────────── */
const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', description: 'Deep-dive into your business, goals, and constraints.' },
  { num: '02', title: 'Strategy', description: 'Craft a roadmap aligned with your growth objectives.' },
  { num: '03', title: 'Design', description: 'Create user-centric interfaces and system architectures.' },
  { num: '04', title: 'Build', description: 'Engineer robust, scalable solutions with clean code.' },
  { num: '05', title: 'Test', description: 'Rigorous QA to ensure reliability and performance.' },
  { num: '06', title: 'Launch', description: 'Deploy, monitor, and optimize for continuous growth.' },
];

export function Process() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Proven Methodology</SectionBadge>
        <SectionTitle className="mt-4">
          Our <span className="gradient-text">Process</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <StaggerItem key={step.num}>
              <GlassCard className="text-center h-full relative">
                <span className="text-4xl font-extrabold gradient-text opacity-30">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
                {/* Arrow connector for desktop */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="process-connector absolute -right-4 top-1/2 -translate-y-1/2">
                    <ArrowRightLeft className="w-4 h-4 rotate-90 lg:rotate-0" />
                  </div>
                )}
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Testimonials ──────────────────────────── */
const TESTIMONIAL_STATS = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '4+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const TESTIMONIAL_DATA = [
  {
    name: 'Ravi Kambale',
    role: 'Founder',
    company: 'TechVenture',
    content:
      'NueEra transformed our digital presence completely. Their systematic approach delivered results beyond our expectations. The team understood our vision and executed flawlessly.',
    rating: 5,
    initials: 'RK',
    avatar: '/assets/images/profiles/ravi_kambale.webp',
  },
  {
    name: 'Vaibhav Nijampurkar',
    role: 'CEO',
    company: 'GrowthLabs',
    content:
      'Working with NueEra was a game-changer for our business. Their growth marketing system helped us achieve 3x revenue growth in just 6 months. Truly exceptional team.',
    rating: 5,
    initials: 'VN',
    avatar: '/assets/images/profiles/vaibhav_nijampurkar.webp',
  },
  {
    name: 'Saurabh Shinde',
    role: 'CTO',
    company: 'CloudScale Inc',
    content:
      'The technical expertise at NueEra is second to none. They built our entire cloud infrastructure from scratch with 99.99% uptime. Their DevOps practices are world-class.',
    rating: 5,
    initials: 'SS',
    avatar: '/assets/images/profiles/saurabh_shinde.webp',
  },
  {
    name: 'Vikrant Salunke',
    role: 'Design Lead',
    company: 'PixelCraft Studio',
    content:
      'NueEra\'s design team brought our brand to life in ways we never imagined. The attention to detail and user-centric approach resulted in a 40% increase in user engagement.',
    rating: 5,
    initials: 'VS',
    avatar: '/assets/images/profiles/vikrant_salunke.webp',
  },
];

/* Star rating display component */
function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-5 h-5' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating
              ? 'text-[var(--orange-primary)] fill-[var(--orange-primary)]'
              : 'text-[var(--text-muted)]'
          }`}
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
          Trusted by{' '}
          <span className="gradient-text">Business Leaders</span>
        </SectionTitle>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIAL_STATS.map((stat) => (
            <FadeUp key={stat.label} delay={0.1}>
              <GlassCard className="text-center" hover={false}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <p className="text-[var(--text-secondary)] text-sm mt-2">{stat.label}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIAL_DATA.map((testimonial, idx) => (
            <FadeUp key={testimonial.name} delay={idx * 0.1}>
              <GlassCard className="text-left h-full" hover={false}>
                <div className="flex items-center gap-1 mb-3">
                  <StarRating rating={testimonial.rating} size="sm" />
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-[var(--text-muted)] text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
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

/* ──────────────────────────── Blog ──────────────────────────── */
const BLOG_POSTS = [
  {
    icon: Search,
    category: 'Growth Strategy',
    title: '5 Systems Every Scaling Business Needs in 2025',
    excerpt: 'Discover the operational systems that separate scaling businesses from stagnating ones.',
    date: 'Jan 15, 2025',
    slug: '/blog/post',
  },
  {
    icon: Settings,
    category: 'Tech Insights',
    title: 'Automation ROI: How to Calculate and Maximize Returns',
    excerpt: 'A practical framework for measuring and optimizing your automation investments.',
    date: 'Jan 8, 2025',
    slug: '/blog/post',
  },
  {
    icon: Eye,
    category: 'Design',
    title: 'The Psychology of High-Converting Landing Pages',
    excerpt: 'Research-backed design principles that turn visitors into customers.',
    date: 'Dec 28, 2024',
    slug: '/blog/post',
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Latest Insights</SectionBadge>
        <SectionTitle className="mt-4">
          Industry Trends &{' '}
          <span className="gradient-text">Growth Strategies</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.title}>
              <a href={post.slug} className="block h-full group">
                <GlassCard className="text-left h-full relative overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center mb-4">
                    <post.icon className="w-5 h-5 text-[var(--orange-primary)]" />
                  </div>
                  <span className="text-xs font-medium text-[var(--blue-primary)] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mt-2 mb-2 line-clamp-2 group-hover:text-[var(--blue-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)] text-xs">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-[var(--blue-primary)] text-xs font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </GlassCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA Section ──────────────────────────── */
const CTA_FEATURES = [
  { icon: Rocket, text: 'Strategic Roadmap' },
  { icon: MessageSquare, text: '30-min Consultation' },
  { icon: CheckCircle2, text: 'Zero Obligation' },
];

/* Animated gradient background for CTA */
function AnimatedGradientBG() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, var(--blue-glow) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, var(--orange-glow) 0%, transparent 50%)',
            'radial-gradient(ellipse at 50% 20%, var(--blue-glow) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, var(--blue-glow) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 opacity-30"
      />
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 80% 80%, var(--orange-glow) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 20%, var(--blue-glow) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 80%, var(--orange-glow) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 opacity-20"
      />
    </div>
  );
}

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Animated Gradient Background */}
      <AnimatedGradientBG />

      {/* Original glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--orange-primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="section-badge">✨ Transform Your Digital Future</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Ready to Transform{' '}
            <span className="gradient-text">Your Business?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Take the first step toward engineered growth. Our team will map out
            a clear path from where you are to where you want to be.
          </p>
        </FadeUp>

        {/* Urgency element */}
        <FadeUp delay={0.25}>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">3 spots left</span> this month for new strategy calls
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {CTA_FEATURES.map((feat) => (
            <div key={feat.text} className="flex items-center gap-2 text-[var(--text-secondary)]">
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
    answer: 'We offer comprehensive digital solutions including web and mobile app development, growth marketing systems, tech automation, UI/UX design, and branding & strategy. Each service is designed to work as part of an integrated growth system, not in isolation.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A standard website takes 4-6 weeks, while complex web applications can take 8-16 weeks. We provide a detailed timeline during our strategy phase so you know exactly what to expect.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer project-based pricing tailored to your specific needs. After our initial strategy call, we provide a transparent proposal with clear deliverables and timelines. No hidden fees, no surprises. We also offer retainer packages for ongoing support.',
  },
  {
    question: 'Do you work with startups or only established businesses?',
    answer: 'We work with both! From early-stage startups to established enterprises. Our methodology adapts to your stage of growth — whether you need an MVP to validate your idea or a full-scale platform to handle millions of users.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, battle-tested technologies including React, Next.js, Node.js, TypeScript, React Native, and cloud platforms like AWS and Vercel. Our tech stack is chosen for performance, scalability, and long-term maintainability.',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'Quality is built into our process at every step. We follow agile methodology with regular sprints, conduct thorough code reviews, implement automated testing, and provide detailed QA reports. Our 100% client satisfaction rate speaks to our commitment.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer: 'We provide post-launch support including bug fixes, performance monitoring, and optimization recommendations. We also offer ongoing maintenance packages and are always available for enhancements as your business grows.',
  },
  {
    question: 'How do I get started with NueEra?',
    answer: 'Simply book a free 30-minute strategy call through our website. We\'ll discuss your goals, challenges, and vision. After the call, we\'ll send you a tailored proposal with a clear roadmap, timeline, and investment details — no obligation required.',
  },
];

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>FAQ</SectionBadge>
          <SectionTitle className="mt-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </SectionTitle>
          <SectionDescription className="mx-auto mt-4">
            Everything you need to know about working with NueEra. Can&apos;t find what you&apos;re looking for? Reach out to us directly.
          </SectionDescription>
        </div>

        <FadeUp delay={0.2} className="mt-12">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border-[var(--border-soft)]"
                >
                  <AccordionTrigger className="text-[var(--text-primary)] text-left text-base font-semibold hover:no-underline hover:text-[var(--blue-primary)] transition-colors py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--text-secondary)] text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeUp>

        {/* CTA under FAQ */}
        <FadeUp delay={0.3} className="mt-8 text-center">
          <p className="text-[var(--text-secondary)] text-sm">
            Still have questions?{' '}
            <a href="/contact" className="text-[var(--blue-primary)] font-semibold hover:underline">
              Contact us
            </a>{' '}
            and we&apos;ll be happy to help.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── Help Center ──────────────────────────── */
export function HelpCenter() {
  return (
    <section id="help" className="relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Help Center</SectionBadge>
        <SectionTitle className="mt-4">
          How Can We{' '}
          <span className="gradient-text">Help You?</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Find answers to common questions, explore our resources, or reach out
          directly. We&apos;re here to help you succeed.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and tutorials' },
            { icon: MessageSquare, title: 'Live Chat', description: 'Chat with our support team' },
            { icon: Headphones, title: 'Phone Support', description: 'Direct line to our experts' },
            { icon: Lightbulb, title: 'Knowledge Base', description: 'Self-service answers 24/7' },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[var(--orange-primary)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
