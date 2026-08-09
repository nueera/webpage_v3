'use client';

import { useState } from 'react';
import { Code2, Server, Smartphone, Cpu, Cloud, Database, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';
import { TiltCard } from './ui/tilt-card';

interface TechNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile-cloud' | 'ai-automation';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  ring: 'inner' | 'middle' | 'outer';
  proficiency: string;
  description: string;
  useCases: string[];
}

const TECH_NODES: TechNode[] = [
  {
    id: 'nextjs',
    name: 'Next.js 16',
    category: 'frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    ring: 'inner',
    proficiency: 'Core Specialization',
    description: 'React Framework for Server Components, Static Generation, and Edge API routes.',
    useCases: ['High-SEO Enterprise Sites', 'E-Commerce Storefronts', 'SaaS Portals'],
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    icon: Layers,
    color: 'from-cyan-400 to-blue-600',
    ring: 'inner',
    proficiency: 'Expert',
    description: 'Component architecture, concurrent rendering, and custom state hooks.',
    useCases: ['Interactive Web Apps', 'Dynamic Dashboards', 'Design Systems'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    category: 'frontend',
    icon: Sparkles,
    color: 'from-teal-400 to-emerald-500',
    ring: 'inner',
    proficiency: 'Expert',
    description: 'Utility-first CSS engine with glassmorphic animations and dynamic theme tokens.',
    useCases: ['Custom Agency Styling', 'Dark/Light Mode Systems', 'Responsive UI'],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: Server,
    color: 'from-green-500 to-emerald-600',
    ring: 'middle',
    proficiency: 'Expert',
    description: 'Asynchronous event-driven runtime for microservices, WebSockets, and API backends.',
    useCases: ['RESTful APIs', 'Real-Time WebSockets', 'Payment Gateway Webhooks'],
  },
  {
    id: 'python',
    name: 'Python / FastAPI',
    category: 'backend',
    icon: Cpu,
    color: 'from-yellow-500 to-amber-600',
    ring: 'middle',
    proficiency: 'Advanced',
    description: 'High-performance Python backends for asynchronous data processing & AI pipelines.',
    useCases: ['Data Pipelines', 'AI/ML Services', 'Automated Scraping'],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL & Redis',
    category: 'backend',
    icon: Database,
    color: 'from-blue-600 to-indigo-700',
    ring: 'middle',
    proficiency: 'Expert',
    description: 'Relational ACID databases paired with Upstash Redis for sub-millisecond caching.',
    useCases: ['Transactional Stores', 'Session Caching', 'Rate Limiting'],
  },
  {
    id: 'flutter',
    name: 'Flutter & React Native',
    category: 'mobile-cloud',
    icon: Smartphone,
    color: 'from-sky-400 to-indigo-500',
    ring: 'outer',
    proficiency: 'Advanced',
    description: 'Cross-platform native mobile applications for iOS and Android with single codebases.',
    useCases: ['Healthcare Apps', 'E-Commerce Apps', 'On-Demand Service Platforms'],
  },
  {
    id: 'aws',
    name: 'AWS & Docker',
    category: 'mobile-cloud',
    icon: Cloud,
    color: 'from-orange-400 to-amber-500',
    ring: 'outer',
    proficiency: 'Advanced',
    description: 'Containerized deployments, serverless Lambda functions, S3, and CloudFront CDNs.',
    useCases: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Auto-Scaling Microservices'],
  },
  {
    id: 'ai-ml',
    name: 'AI & OpenAI / Gemini',
    category: 'ai-automation',
    icon: ShieldCheck,
    color: 'from-purple-500 to-pink-600',
    ring: 'outer',
    proficiency: 'Advanced',
    description: 'LLM integration, automated document parsing, vector embeddings, and intelligent agents.',
    useCases: ['Smart Customer Support', 'Doc Extraction', 'Automated Workflows'],
  },
];

export function TechOrbitalVisualizer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedNode, setSelectedNode] = useState<TechNode | null>(TECH_NODES[0]);

  const filteredNodes =
    activeCategory === 'all'
      ? TECH_NODES
      : TECH_NODES.filter((n) => n.category === activeCategory);

  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] top-[10%] left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>Engineered Stack</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Our Technology <span className="gradient-text">Orbit</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            We architect digital solutions using battle-tested, ultra-scalable frameworks. Explore our stack below.
          </SectionDescription>
        </FadeUp>

        {/* Category Filters */}
        <FadeUp delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'backend', label: 'Backend & Data' },
            { id: 'mobile-cloud', label: 'Mobile & Cloud' },
            { id: 'ai-automation', label: 'AI & Automation' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white shadow-[0_4px_20px_var(--blue-glow)]'
                  : 'bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-soft)] hover:border-[var(--blue-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </FadeUp>

        {/* Orbit Grid View */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Node Selector Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode?.id === node.id;

              return (
                <TiltCard key={node.id}>
                  <button
                    onClick={() => setSelectedNode(node)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[var(--bg-tertiary)] border-[var(--orange-primary)] shadow-[0_0_24px_rgba(255,154,31,0.25)]'
                        : 'bg-[var(--bg-glass)] border-[var(--border-soft)] hover:border-[var(--blue-primary)]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${node.color} text-white mb-3 shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{node.name}</h4>
                    <span className="text-[10px] font-semibold text-[var(--orange-primary)] uppercase tracking-wider">
                      {node.proficiency}
                    </span>
                  </button>
                </TiltCard>
              );
            })}
          </div>

          {/* Active Detail Showcase Card */}
          {selectedNode && (
            <div className="lg:col-span-5">
              <TiltCard maxDegree={6} scale={1.01}>
                <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-glass)] border border-[var(--border-soft)] backdrop-blur-xl text-left relative overflow-hidden shadow-xl">
                  {/* Subtle top glow bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedNode.color}`}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${selectedNode.color} text-white shadow-lg`}
                    >
                      <selectedNode.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {selectedNode.name}
                      </h3>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[var(--blue-primary)] bg-[var(--blue-primary)]/10 border border-[var(--blue-primary)]/20">
                        {selectedNode.proficiency}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {selectedNode.description}
                  </p>

                  <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Primary Use Cases
                  </h5>
                  <ul className="space-y-2 mb-6">
                    {selectedNode.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-primary)]" />
                        {useCase}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] hover:shadow-lg transition-all"
                  >
                    Build With {selectedNode.name}
                  </button>
                </div>
              </TiltCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
