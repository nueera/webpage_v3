'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Shield, Smartphone, BarChart3, Globe, Cpu,
  Search, PenTool, Rocket, Lightbulb, Target, Users,
  ChevronRight, ArrowRight, Star, BookOpen, TrendingUp,
  Settings, Layers, Database, Eye, Code2, Palette,
  Megaphone, Camera, FileText, Wrench
} from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

/* ───────── Particle Canvas ───────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const count = 60;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.1,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(31, 106, 255, ${p.a})`;
        ctx.fill();
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(31, 106, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-[2] pointer-events-none" />;
}

/* ───────── Hero Section ───────── */
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 168, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      {/* Glow Orbs */}
      <div className="glow-orb-blue" style={{ top: '10%', left: '5%' }} />
      <div className="glow-orb-orange" style={{ top: '50%', left: '50%' }} />
      {/* Particles */}
      <ParticleCanvas />
      {/* Content */}
      <div className="container-nueera relative z-[3] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
        <div>
          <span className="section-badge mb-6 inline-block">Welcome to NueEra</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Build Your Digital Empire
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mb-8">
            We craft high-performance digital solutions that drive growth, elevate brands, and transform businesses for the modern era.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold
                border border-[var(--blue-primary)] text-[var(--blue-primary)]
                hover:bg-[var(--blue-glow)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View Our Work <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '16+', label: 'Projects' },
              { value: '100%', label: 'Satisfaction' },
              { value: '4+', label: 'Happy Clients' },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-extrabold gradient-text">{m.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Visual - 3D Cube */}
        <div className="hidden lg:flex justify-center items-center perspective-[800px]">
          <div className="cube-wrapper">
            <div className="cube">
              <div className="cube-face cube-face-front">Design</div>
              <div className="cube-face cube-face-back">Build</div>
              <div className="cube-face cube-face-right">Launch</div>
              <div className="cube-face cube-face-left">Scale</div>
              <div className="cube-face cube-face-top">Innovate</div>
              <div className="cube-face cube-face-bottom">Grow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Story Section ───────── */
function StorySection() {
  const steps = [
    { num: '01', icon: Search, title: 'Diagnose', desc: 'We deep-dive into your business landscape to uncover hidden opportunities and pain points.' },
    { num: '02', icon: PenTool, title: 'Design', desc: 'Craft precision strategies and pixel-perfect designs aligned with your brand DNA.' },
    { num: '03', icon: Rocket, title: 'Deploy', desc: 'Launch with confidence using battle-tested development and deployment pipelines.' },
  ];
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <SectionHeader badge="Our Story" title="How We Transform Ideas Into Impact" description="Every project follows our proven three-phase methodology that ensures strategic alignment and measurable results." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-extrabold gradient-text mb-2">{s.num}</div>
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)] shadow-lg">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Welcome Section ───────── */
function WelcomeSection() {
  return (
    <SectionWrapper>
      <div className="container-nueera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-badge mb-4 inline-block">Who We Are</span>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Your Vision, Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6">
              NueEra is a premium IT &amp; digital solutions company based in Pune, India. We specialize in crafting scalable web applications, mobile solutions, and growth-driven digital strategies that help businesses thrive in the modern landscape.
            </p>
            <p className="text-[var(--text-secondary)] mb-8">
              Our team combines deep technical expertise with creative design thinking to deliver solutions that not only look exceptional but perform flawlessly. From startups to enterprises, we partner with visionary leaders who demand excellence.
            </p>
            <Link href="/about" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/assets/images/about.webp"
                alt="About NueEra"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Features Grid ───────── */
function FeaturesSection() {
  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Blazing performance with optimized code and CDN delivery for sub-second load times.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security protocols with end-to-end encryption and compliance standards.' },
    { icon: Smartphone, title: 'Mobile First', desc: 'Responsive designs built mobile-first, ensuring flawless experiences on every device.' },
    { icon: BarChart3, title: 'Data Driven', desc: 'Analytics-powered decisions with real-time insights and performance dashboards.' },
    { icon: Globe, title: 'Global Scale', desc: 'Cloud-native architecture designed to scale seamlessly across regions and traffic spikes.' },
    { icon: Cpu, title: 'AI Enhanced', desc: 'Smart automation and AI-powered features that give your business a competitive edge.' },
  ];
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <SectionHeader badge="Features" title="What Powers Our Solutions" description="Every solution we build comes loaded with enterprise-grade capabilities." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)] shadow-lg">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{f.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Trusted By ───────── */
function TrustedBySection() {
  const chips = ['Startup Founders', 'E-Commerce Brands', 'SaaS Companies', 'Creative Agencies', 'Healthcare', 'Real Estate', 'EdTech', 'Fintech'];
  return (
    <SectionWrapper>
      <div className="container-nueera text-center">
        <p className="text-[var(--text-muted)] text-sm uppercase tracking-widest mb-6 font-semibold">Trusted By Innovators Across</p>
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="px-5 py-2 rounded-full text-sm font-medium
                bg-[var(--bg-glass)] border border-[var(--border-soft)]
                text-[var(--text-secondary)] transition-all duration-300
                hover:border-[var(--border-active)] hover:text-[var(--blue-primary)]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Philosophy Section ───────── */
function PhilosophySection() {
  const items = [
    { icon: Layers, title: 'Systems Over Features', desc: 'We build interconnected systems, not isolated features, ensuring your product scales cohesively.' },
    { icon: Target, title: 'Measure Then Move', desc: 'Data-informed decisions at every step. We track what matters and optimize relentlessly.' },
    { icon: Users, title: 'User-First Design', desc: 'Beautiful interfaces that users love, built on research-backed design principles and testing.' },
    { icon: Lightbulb, title: 'Innovation Through Simplicity', desc: 'The most powerful solutions are often the simplest. We strip away complexity to reveal clarity.' },
  ];
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <SectionHeader badge="Philosophy" title="What Drives Our Thinking" description="Core beliefs that shape every solution we deliver." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)] shadow-lg">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Architecture Section ───────── */
function ArchitectureSection() {
  const layers = [
    { title: 'Presentation Layer', desc: 'Modern frontend frameworks, responsive UI, and blazing-fast performance.', icon: Eye, color: 'blue' },
    { title: 'Business Logic Layer', desc: 'Robust APIs, microservices architecture, and real-time data processing.', icon: Code2, color: 'orange' },
    { title: 'Data Layer', desc: 'Scalable databases, caching systems, and secure data management.', icon: Database, color: 'blue' },
  ];
  return (
    <SectionWrapper>
      <div className="container-nueera">
        <SectionHeader badge="Architecture" title="Three Layers of Excellence" description="Our battle-tested architecture ensures reliability, scalability, and performance." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layers.map((l, i) => (
            <div key={l.title} className="relative glass-card rounded-2xl p-8 text-center overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                l.color === 'blue' ? 'from-[var(--blue-primary)] to-[var(--blue-soft)]' : 'from-[var(--orange-primary)] to-[var(--orange-soft)]'
              }`} />
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${
                l.color === 'blue' ? 'from-[var(--blue-primary)] to-[var(--blue-soft)]' : 'from-[var(--orange-primary)] to-[var(--orange-soft)]'
              } shadow-lg`}>
                <l.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{l.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{l.desc}</p>
              {i < layers.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[var(--text-muted)] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── 3D Showcase Section ───────── */
function ShowcaseSection() {
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="cube-wrapper">
              <div className="cube">
                <div className="cube-face cube-face-front">UI/UX</div>
                <div className="cube-face cube-face-back">Dev</div>
                <div className="cube-face cube-face-right">Cloud</div>
                <div className="cube-face cube-face-left">AI</div>
                <div className="cube-face cube-face-top">Mobile</div>
                <div className="cube-face cube-face-bottom">Data</div>
              </div>
            </div>
          </div>
          <div>
            <span className="section-badge mb-4 inline-block">3D Showcase</span>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Every Angle, Perfected</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6">
              Our solutions are multidimensional — meticulously crafted from every angle. Whether it&apos;s the frontend experience, backend architecture, or the data layer, we ensure perfection at every level.
            </p>
            <Link href="/services" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Services Overview ───────── */
function ServicesOverview() {
  const services = [
    { icon: Camera, title: 'Video Production', desc: 'Cinematic video content that captivates audiences and drives engagement.' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Intuitive, beautiful interfaces that users love and businesses rely on.' },
    { icon: Camera, title: 'Photography', desc: 'Professional photography that tells your brand story with stunning visuals.' },
    { icon: Code2, title: 'Web Development', desc: 'High-performance websites and web apps built with modern frameworks.' },
    { icon: Megaphone, title: 'Digital Marketing', desc: 'Data-driven marketing strategies that maximize ROI and accelerate growth.' },
    { icon: Star, title: 'Branding', desc: 'Comprehensive brand identities that resonate and leave lasting impressions.' },
  ];
  return (
    <SectionWrapper>
      <div className="container-nueera">
        <SectionHeader badge="Services" title="What We Deliver" description="End-to-end digital solutions tailored to your business goals." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)] shadow-lg">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)] hover:-translate-y-0.5 transition-all duration-300">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Why Choose NueEra ───────── */
function WhyChooseSection() {
  const items = [
    { icon: Zap, title: 'Rapid Delivery', desc: 'Agile methodology ensures fast turnaround without compromising quality.' },
    { icon: Shield, title: 'Proven Security', desc: 'Enterprise-grade security built into every layer of your solution.' },
    { icon: TrendingUp, title: 'Scalable Growth', desc: 'Architecture designed to grow with your business from day one.' },
    { icon: Users, title: 'Dedicated Team', desc: 'A focused team assigned to your project with clear accountability.' },
    { icon: Settings, title: 'Full-Stack Expertise', desc: 'Frontend, backend, DevOps, and design — all under one roof.' },
    { icon: Star, title: 'Premium Quality', desc: 'We don\'t cut corners. Every pixel, every line of code is polished.' },
  ];
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <SectionHeader badge="Why Us" title="Why Choose NueEra" description="What sets us apart from the rest." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] transition-all duration-300 hover:border-[var(--border-active)] hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Process Steps ───────── */
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and market landscape through deep research.' },
    { num: '02', title: 'Strategy', desc: 'Crafting a tailored roadmap with clear milestones and success metrics.' },
    { num: '03', title: 'Design', desc: 'Creating pixel-perfect designs that align with your brand and engage users.' },
    { num: '04', title: 'Development', desc: 'Building robust, scalable solutions with clean, maintainable code.' },
    { num: '05', title: 'Testing', desc: 'Rigorous QA ensuring every feature works flawlessly across all platforms.' },
    { num: '06', title: 'Launch', desc: 'Deploying with confidence and providing ongoing support and optimization.' },
  ];
  return (
    <SectionWrapper>
      <div className="container-nueera">
        <SectionHeader badge="Process" title="Our Proven Process" description="Six steps from concept to launch, refined over dozens of successful projects." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-extrabold text-[var(--bg-glass)]">{s.num}</div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white font-bold text-sm mb-3">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Testimonials Stats ───────── */
function TestimonialsStats() {
  const stats = [
    { value: '100%', label: 'Client Satisfaction' },
    { value: '16+', label: 'Projects Delivered' },
    { value: '4+', label: 'Trusted Partners' },
    { value: '24h', label: 'Response Time' },
  ];
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
              <div className="text-[var(--text-muted)] text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Blog Preview ───────── */
function BlogPreview() {
  const posts = [
    { title: '5 Ways AI is Reshaping Web Development in 2025', cat: 'Technology', date: 'Jan 15, 2025' },
    { title: 'The Ultimate Guide to Brand Strategy for Startups', cat: 'Branding', date: 'Jan 10, 2025' },
    { title: 'Mobile-First Design: Why It Matters More Than Ever', cat: 'Design', date: 'Jan 5, 2025' },
  ];
  return (
    <SectionWrapper>
      <div className="container-nueera">
        <SectionHeader badge="Blog" title="Latest Insights" description="Stay ahead with our latest articles on technology, design, and business." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Link key={i} href="/blog" className="glass-card rounded-2xl overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-[var(--blue-primary)] opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{p.cat}</span>
                  <span className="text-[var(--text-muted)] text-xs">{p.date}</span>
                </div>
                <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--blue-primary)] transition-colors">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)] hover:-translate-y-0.5 transition-all duration-300">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── CTA Section ───────── */
function CTASection() {
  return (
    <SectionWrapper className="bg-[var(--bg-secondary)]">
      <div className="container-nueera text-center">
        <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Build Your Digital Empire?</h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
          Let&apos;s transform your vision into reality. Schedule a free consultation with our team and discover how NueEra can accelerate your digital growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/917066607424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold
              bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ───────── Main Page ───────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <WelcomeSection />
      <FeaturesSection />
      <TrustedBySection />
      <PhilosophySection />
      <ArchitectureSection />
      <ShowcaseSection />
      <ServicesOverview />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsStats />
      <BlogPreview />
      <CTASection />
    </>
  );
}
