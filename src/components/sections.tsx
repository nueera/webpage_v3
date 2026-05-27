"use client";

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
} from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SectionBadge,
  SectionTitle,
  SectionDescription,
  GlassCard,
  GradientButton,
} from "./ui-extensions";

/* ──────────────────────────── Growth Story ──────────────────────────── */
const GROWTH_STEPS = [
  {
    kicker: "Step 01",
    title: "Diagnose",
    description:
      "We audit your current systems, identify friction points, and map every opportunity for compounding improvement.",
  },
  {
    kicker: "Step 02",
    title: "Design",
    description:
      "We architect solutions that don't just solve today's problems—they become the foundation for tomorrow's scale.",
  },
  {
    kicker: "Step 03",
    title: "Deploy",
    description:
      "We ship with precision, measure relentlessly, and iterate until every system compounds your growth.",
  },
];

export function GrowthStory() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Growth Story</SectionBadge>
        <SectionTitle className="mt-4">
          From Ambition to{" "}
          <span className="gradient-text">Scalable Results</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Our three-phase methodology transforms raw ambition into predictable,
          compounding business outcomes.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROWTH_STEPS.map((step) => (
            <StaggerItem key={step.kicker}>
              <GlassCard className="text-center h-full">
                <span className="text-xs font-semibold text-[#ff9500] tracking-wider uppercase">
                  {step.kicker}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Welcome ──────────────────────────── */
const WELCOME_ITEMS = [
  {
    icon: Zap,
    title: "Lightning Innovation",
    description: "Speed-to-market solutions that outpace your competition.",
  },
  {
    icon: Shield,
    title: "Fortress Security",
    description: "Enterprise-grade protection for your digital assets.",
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Turn raw data into strategic business decisions.",
  },
];

export function Welcome() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Welcome to the Future</SectionBadge>
        <SectionTitle className="mt-4">
          Your Vision,{" "}
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
                <div className="w-14 h-14 rounded-xl bg-[#ff9500]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#ff9500]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.description}</p>
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
    title: "Lightning Fast",
    description: "Optimized performance that keeps users engaged and conversions high.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade protection across every touchpoint of your digital ecosystem.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive experiences built for the devices your customers actually use.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Every decision backed by analytics, not assumptions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior engineers and strategists who ship, not slide.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and rapid response when it matters most.",
  },
];

export function Features() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Premium Solutions</SectionBadge>
        <SectionTitle className="mt-4">
          Why Businesses Choose{" "}
          <span className="gradient-text">NueEra</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlassCard className="text-left h-full">
                <div className="w-12 h-12 rounded-lg bg-[#ff9500]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#ff9500]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Trusted By ──────────────────────────── */
const TRUST_CHIPS = [
  "SaaS & Product Teams",
  "Service Businesses",
  "Founder-led Brands",
  "Growth-Stage Startups",
];

const TRUST_STATEMENTS = [
  { icon: CheckCircle2, label: "Delivery Confidence" },
  { icon: Target, label: "Business Fit" },
  { icon: TrendingUp, label: "Scale Readiness" },
];

export function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20 bg-[#0a0e27] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-8">
          <p className="text-sm text-white/40 uppercase tracking-widest font-medium mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeUp>

        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
          {TRUST_STATEMENTS.map((stmt) => (
            <StaggerItem key={stmt.label} className="flex items-center gap-2">
              <stmt.icon className="w-5 h-5 text-[#ff9500]" />
              <span className="text-white/70 font-medium">{stmt.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Our Approach ──────────────────────────── */
const APPROACH_ITEMS = [
  {
    icon: Layers,
    title: "Systems Over Features",
    description:
      "We build interconnected systems, not isolated features. Every component serves the whole.",
  },
  {
    icon: Activity,
    title: "Measure Then Move",
    description:
      "Data-informed decisions at every step. We don't guess—we validate, then iterate.",
  },
  {
    icon: Wrench,
    title: "Design for Reliability",
    description:
      "Fault-tolerant architectures that keep running when others break down.",
  },
];

export function OurApproach() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Philosophy</SectionBadge>
        <SectionTitle className="mt-4">
          How We <span className="gradient-text">Think</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {APPROACH_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-[#00a8ff]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#00a8ff]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
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
    kicker: "Layer 01",
    title: "Business Context",
    bullets: [
      "Market position analysis",
      "Revenue model mapping",
      "Growth bottleneck identification",
    ],
  },
  {
    kicker: "Layer 02",
    title: "System Blueprint",
    bullets: [
      "Technical architecture design",
      "Integration mapping",
      "Scalability planning",
    ],
  },
  {
    kicker: "Layer 03",
    title: "Compounding Execution",
    bullets: [
      "Phased delivery roadmap",
      "Performance benchmarking",
      "Continuous optimization loop",
    ],
  },
];

export function StrategicArchitecture() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Execution Architecture</SectionBadge>
        <SectionTitle className="mt-4">
          Structured Delivery for{" "}
          <span className="gradient-text">Predictable Growth</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_LAYERS.map((layer) => (
            <StaggerItem key={layer.kicker}>
              <GlassCard className="text-left h-full">
                <span className="text-xs font-semibold text-[#ff9500] tracking-wider uppercase">
                  {layer.kicker}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">
                  {layer.title}
                </h3>
                <ul className="space-y-2">
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#ff9500] shrink-0 mt-0.5" />
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
const CUBE_FACES = ["Scale", "Trust", "Speed", "Systems", "Growth", "Precision"];
const CUBE_CLASSES = [
  "cube-face-front",
  "cube-face-back",
  "cube-face-right",
  "cube-face-left",
  "cube-face-top",
  "cube-face-bottom",
];

export function Showcase3D() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Copy */}
          <div className="flex-1 text-center lg:text-left">
            <SectionBadge>Built Different</SectionBadge>
            <SectionTitle className="mt-4">
              Engineered for{" "}
              <span className="gradient-text">Excellence</span>
            </SectionTitle>
            <SectionDescription className="lg:mx-0 mt-4">
              Our solutions are architected from the ground up with
              performance, security, and scalability at their core.
            </SectionDescription>
            <FadeUp delay={0.3} className="flex items-center gap-8 mt-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-white/40">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">&lt;2s</div>
                <div className="text-xs text-white/40">Load Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">A+</div>
                <div className="text-xs text-white/40">Security</div>
              </div>
            </FadeUp>
          </div>

          {/* Right 3D Cube */}
          <FadeUp delay={0.2} className="flex-shrink-0 relative">
            {/* Glow behind cube */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#ff9500]/10 blur-[80px]" />
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
    title: "Website And Mobile App Launch System",
    description:
      "Full-stack development with conversion-optimized UX, built for speed and scale from day one.",
  },
  {
    icon: Megaphone,
    title: "Growth Marketing System",
    description:
      "Data-driven acquisition funnels, SEO strategy, and performance marketing that compounds over time.",
  },
  {
    icon: Cpu,
    title: "Tech Automation System",
    description:
      "Eliminate manual bottlenecks with intelligent automation that frees your team to focus on growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-backed interfaces that convert visitors into customers and customers into advocates.",
  },
  {
    icon: Lightbulb,
    title: "Branding & Strategy",
    description:
      "Distinctive brand identities and go-to-market strategies that position you for market leadership.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Expertise</SectionBadge>
        <SectionTitle className="mt-4">
          Comprehensive{" "}
          <span className="gradient-text">Digital Solutions</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <div className="gradient-border h-full">
                <div className="p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#ff9500]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#ff9500]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm">{service.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.4} className="mt-10">
          <GradientButton>
            View All Services
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── Why Choose NueEra ──────────────────────────── */
const WHY_ITEMS = [
  { icon: Users, title: "Expert Team", description: "Senior talent with proven track records." },
  { icon: Lock, title: "Enterprise Security", description: "Security-first development practices." },
  { icon: Rocket, title: "Performance First", description: "Speed-optimized from architecture to deployment." },
  { icon: Handshake, title: "True Partnership", description: "We succeed when you succeed. Fully aligned." },
  { icon: Clock, title: "Fast Delivery", description: "Agile sprints that ship value every cycle." },
  { icon: Award, title: "Proven Results", description: "Documented outcomes, not empty promises." },
];

export function WhyChoose() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Our Advantages</SectionBadge>
        <SectionTitle className="mt-4">
          Why Choose{" "}
          <span className="gradient-text">NueEra</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="flex items-start gap-4 text-left h-full">
                <div className="w-10 h-10 rounded-lg bg-[#ff9500]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#ff9500]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Process ──────────────────────────── */
const PROCESS_STEPS = [
  { num: "01", title: "Discovery", description: "Deep-dive into your business, goals, and constraints." },
  { num: "02", title: "Strategy", description: "Craft a roadmap aligned with your growth objectives." },
  { num: "03", title: "Design", description: "Create user-centric interfaces and system architectures." },
  { num: "04", title: "Build", description: "Engineer robust, scalable solutions with clean code." },
  { num: "05", title: "Test", description: "Rigorous QA to ensure reliability and performance." },
  { num: "06", title: "Launch", description: "Deploy, monitor, and optimize for continuous growth." },
];

export function Process() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27]">
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
                <h3 className="text-lg font-bold text-white mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm">{step.description}</p>
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
  { value: "4.9/5", label: "Average Rating" },
  { value: "4+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction Rate" },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Success Stories</SectionBadge>
        <SectionTitle className="mt-4">
          Trusted by{" "}
          <span className="gradient-text">Business Leaders</span>
        </SectionTitle>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIAL_STATS.map((stat) => (
            <FadeUp key={stat.label} delay={0.1}>
              <GlassCard className="text-center" hover={false}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <p className="text-white/50 text-sm mt-2">{stat.label}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Testimonial Cards */}
        <StaggerContainer className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <StaggerItem>
            <GlassCard className="text-left h-full" hover={false}>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff9500]">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                &ldquo;NueEra transformed our digital presence completely. Their systematic
                approach delivered results beyond our expectations. The team
                understood our vision and executed flawlessly.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9500] to-[#00a8ff] flex items-center justify-center text-white font-bold text-sm">
                  RK
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Ravi Kambale</p>
                  <p className="text-white/40 text-xs">Founder, TechVenture</p>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
          <StaggerItem>
            <GlassCard className="text-left h-full" hover={false}>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff9500]">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                &ldquo;Working with NueEra was a game-changer for our business.
                Their growth marketing system helped us achieve 3x revenue growth
                in just 6 months. Truly exceptional team.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#ff9500] flex items-center justify-center text-white font-bold text-sm">
                  VN
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Vaibhav Nijampurkar</p>
                  <p className="text-white/40 text-xs">CEO, GrowthLabs</p>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── Blog ──────────────────────────── */
const BLOG_POSTS = [
  {
    icon: Search,
    category: "Growth Strategy",
    title: "5 Systems Every Scaling Business Needs in 2025",
    excerpt: "Discover the operational systems that separate scaling businesses from stagnating ones.",
    date: "Jan 15, 2025",
  },
  {
    icon: Settings,
    category: "Tech Insights",
    title: "Automation ROI: How to Calculate and Maximize Returns",
    excerpt: "A practical framework for measuring and optimizing your automation investments.",
    date: "Jan 8, 2025",
  },
  {
    icon: Eye,
    category: "Design",
    title: "The Psychology of High-Converting Landing Pages",
    excerpt: "Research-backed design principles that turn visitors into customers.",
    date: "Dec 28, 2024",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Latest Insights</SectionBadge>
        <SectionTitle className="mt-4">
          Industry Trends &{" "}
          <span className="gradient-text">Growth Strategies</span>
        </SectionTitle>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.title}>
              <GlassCard className="text-left h-full">
                <div className="w-10 h-10 rounded-lg bg-[#ff9500]/10 flex items-center justify-center mb-4">
                  <post.icon className="w-5 h-5 text-[#ff9500]" />
                </div>
                <span className="text-xs font-medium text-[#00a8ff] uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-white/30 text-xs">{post.date}</span>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA Section ──────────────────────────── */
const CTA_FEATURES = [
  { icon: Rocket, text: "Strategic Roadmap" },
  { icon: MessageSquare, text: "30-min Consultation" },
  { icon: CheckCircle2, text: "Zero Obligation" },
];

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#0a0e27] overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff9500]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="section-badge">✨ Transform Your Digital Future</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Take the first step toward engineered growth. Our team will map out
            a clear path from where you are to where you want to be.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {CTA_FEATURES.map((feat) => (
            <div key={feat.text} className="flex items-center gap-2 text-white/70">
              <feat.icon className="w-5 h-5 text-[#ff9500]" />
              <span className="text-sm">{feat.text}</span>
            </div>
          ))}
        </FadeUp>

        <FadeUp delay={0.4} className="mt-10">
          <GradientButton className="text-lg px-10 py-5">
            Start Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <p className="mt-4 text-white/30 text-sm">We respond within 24 hours</p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ──────────────────────────── Help Center ──────────────────────────── */
export function HelpCenter() {
  return (
    <section id="help" className="relative py-20 md:py-28 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionBadge>Help Center</SectionBadge>
        <SectionTitle className="mt-4">
          How Can We{" "}
          <span className="gradient-text">Help You?</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Find answers to common questions, explore our resources, or reach out
          directly. We&apos;re here to help you succeed.
        </SectionDescription>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Documentation", description: "Comprehensive guides and tutorials" },
            { icon: MessageSquare, title: "Live Chat", description: "Chat with our support team" },
            { icon: Headphones, title: "Phone Support", description: "Direct line to our experts" },
            { icon: Lightbulb, title: "Knowledge Base", description: "Self-service answers 24/7" },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="text-center h-full">
                <div className="w-12 h-12 rounded-lg bg-[#ff9500]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#ff9500]" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
