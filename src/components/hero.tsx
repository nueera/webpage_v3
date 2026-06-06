'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { GhostButton, AnimatedCounter } from './ui-extensions';
import { PremiumButton } from './premium-button';

/* ──────────────────────── Typing Animation ──────────────────────── */

const TYPING_PHRASES = [
  'We Engineer Growth Systems',
  'We Build Digital Empires',
  'We Drive Business Results',
];

function useTypewriter(phrases: string[], typingSpeed = 60, deletingSpeed = 35, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ textIndex: 0, charIndex: 0, isDeleting: false });
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function tick() {
      const { textIndex, charIndex, isDeleting } = stateRef.current;
      const currentPhrase = phrases[textIndex];

      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          stateRef.current.charIndex = charIndex + 1;
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          timeoutRef.current = setTimeout(tick, typingSpeed + Math.random() * 40);
        } else {
          stateRef.current.isDeleting = true;
          timeoutRef.current = setTimeout(tick, pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          stateRef.current.charIndex = charIndex - 1;
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          stateRef.current.isDeleting = false;
          stateRef.current.textIndex = (textIndex + 1) % phrases.length;
          timeoutRef.current = setTimeout(tick, typingSpeed);
        }
      }
    }

    timeoutRef.current = setTimeout(tick, typingSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

/* ──────────────────────── Hero Component ──────────────────────── */

const METRICS = [
  { value: 16, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
  { value: 4, suffix: '+', label: 'Happy Clients' },
];

const PROOF_ITEMS = [
  'Proven delivery framework',
  'No fluff, just results',
  'Business-first approach',
];

export function Hero() {
  const typedText = useTypewriter(TYPING_PHRASES);
  const heroRef = useRef<HTMLElement>(null);
  const wallpaperRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const img = wallpaperRef.current;
      if (!img) return;
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        img.classList.add('parallax-active');
        img.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)] pt-16 md:pt-20"
    >
      {/* Background wallpaper image */}
      <div className="hero-wallpaper parallax-hero" aria-hidden="true">
        <img
          ref={wallpaperRef}
          src="/assets/images/homewallpaper.webp"
          alt=""
          role="presentation"
          className="hero-wallpaper-img"
        />
      </div>

      {/* Dark/light overlay for text readability */}
      <div className="hero-wallpaper-overlay" aria-hidden="true" />

      {/* Premium gradient mesh background */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue animate-float-orb" />
        <div className="orb orb-orange animate-float-orb" style={{ animationDelay: '-7s', animationDuration: '25s' }} />
        <div className="orb orb-accent animate-float-orb" style={{ animationDelay: '-14s', animationDuration: '30s' }} />
      </div>

      {/* Aurora Northern Lights Effect */}
      <div className="aurora-layer" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className="animate-fade-in-up stagger-1 mb-6">
          <span className="section-badge">Transforming Digital Futures</span>
        </div>

        <h1 className="hero-heading animate-fade-in-up stagger-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-display">
          <span className="heading-gradient">Build Your</span>{' '}
          <span className="gradient-text">Digital Empire</span>
        </h1>

        {/* Typing Animation */}
        <p className="animate-fade-in-up stagger-3 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
          <span className="gradient-text">{typedText}</span>
          <span className="animate-blink gradient-text">|</span>
        </p>

        <p className="hero-description animate-fade-in-up stagger-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
          We craft high-performance digital solutions that transform ambitious
          businesses into scalable, revenue-driving powerhouses. No guesswork.
          Just engineered growth.
        </p>

        {/* CTA buttons - full width on mobile */}
        <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 max-w-md sm:max-w-none mx-auto sm:mx-0">
          <PremiumButton onClick={() => window.open('https://wa.me/917066607424', '_blank')}>
            Book Strategy Call
          </PremiumButton>
          <GhostButton onClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Our Services
          </GhostButton>
        </div>

        {/* Animated metric counters */}
        <div className="animate-fade-in-up stagger-6 flex flex-wrap items-center justify-center gap-4 md:gap-16 mb-10">
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center hero-metric-item">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-[var(--text-muted)] mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Proof items - 2 columns on mobile */}
        <div className="animate-fade-in-up stagger-6 grid grid-cols-2 gap-2 md:gap-4 max-w-sm md:max-w-none mx-auto">
          {PROOF_ITEMS.map((item) => (
            <div key={item} className="hero-proof-item flex items-center justify-center gap-2 text-[var(--text-secondary)] text-sm text-center">
              <CheckCircle2 className="w-4 h-4 text-[var(--orange-primary)] flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
        </div>
      </div>
    </section>
  );
}
