'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';

const PORTFOLIO_PROJECTS = [
  {
    title: 'FreshBite E-Commerce Platform',
    description: 'Full-stack e-commerce solution',
    image: '/assets/images/img1.webp',
    category: 'Web Development',
  },
  {
    title: 'UrbanFit Brand Identity',
    description: 'Complete brand redesign',
    image: '/assets/images/img2.webp',
    category: 'Branding',
  },
  {
    title: 'MediConnect Health App',
    description: 'Healthcare platform',
    image: '/assets/images/img3.webp',
    category: 'Mobile App',
  },
  {
    title: 'TechVenture SaaS Dashboard',
    description: 'Analytics platform',
    image: '/assets/images/img4.webp',
    category: 'UI/UX Design',
  },
  {
    title: 'GreenLeaf Marketing System',
    description: 'Growth marketing',
    image: '/assets/images/img5.webp',
    category: 'Marketing',
  },
  {
    title: 'CloudNine Automation Suite',
    description: 'Business automation',
    image: '/assets/images/img6.webp',
    category: 'Tech Automation',
  },
];

export function PortfolioSection() {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / PORTFOLIO_PROJECTS.length;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveDot(Math.min(index, PORTFOLIO_PROJECTS.length - 1));
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / PORTFOLIO_PROJECTS.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] top-[20%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[10%] left-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>Our Portfolio</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Featured <span className="gradient-text">Projects</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            A showcase of our best work — digital products that drive real business results.
          </SectionDescription>
        </FadeUp>

        {/* Mobile: Horizontal snap carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={carouselRef}
            className="snap-carousel snap-carousel-peek flex gap-4 pb-4"
            role="region"
            aria-roledescription="carousel"
            aria-label="Portfolio projects"
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.title}
                className="min-w-[80vw] sm:min-w-[70vw] snap-carousel-item flex-shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${project.title} — ${project.category}`}
              >
                <div className="portfolio-card group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="80vw"
                    />
                    {/* Overlay - always semi-visible on mobile via CSS */}
                    <div className="portfolio-overlay">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-[var(--orange-primary)]/80 backdrop-blur-sm mb-2 w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                  </div>
                  {/* Card content below image */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-[var(--text-primary)]">{project.title}</h3>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.category}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--blue-primary)] px-3 py-1 rounded-full bg-[var(--blue-primary)]/10 border border-[var(--blue-primary)]/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="carousel-dots md:hidden" role="tablist" aria-label="Project navigation">
            {PORTFOLIO_PROJECTS.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot touch-press ${idx === activeDot ? 'active' : ''}`}
                onClick={() => scrollToIndex(idx)}
                role="tab"
                aria-selected={idx === activeDot}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <FadeUp key={project.title} delay={0.1 + idx * 0.08}>
              <div className="portfolio-card group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="portfolio-overlay">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-[var(--orange-primary)]/80 backdrop-blur-sm mb-2 w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
                {/* Card content below image */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">{project.title}</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.category}</p>
                    </div>
                    <span className="text-xs font-semibold text-[var(--blue-primary)] px-3 py-1 rounded-full bg-[var(--blue-primary)]/10 border border-[var(--blue-primary)]/20">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
