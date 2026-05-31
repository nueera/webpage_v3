'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

/* ──────────────────────── FadeUp (CSS-only) ──────────────────────── */

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className = '', delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    el.classList.add('reveal-section');
    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ──────────────────────── AnimatedCounter ──────────────────────── */

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const rawValue = eased * value;
      const displayValue = decimals > 0 ? parseFloat(rawValue.toFixed(decimals)) : Math.round(rawValue);
      setCount(displayValue as number);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, decimals]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ──────────────────────── ScrollProgress ──────────────────────── */

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

/* ──────────────────────── SectionBadge ──────────────────────── */

export function SectionBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`section-badge ${className}`}>{children}</span>;
}

/* ──────────────────────── SectionTitle ──────────────────────── */

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight font-display ${className}`}>
      {children}
    </h2>
  );
}

/* ──────────────────────── SectionDescription ──────────────────────── */

export function SectionDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-lg text-[var(--text-secondary)] max-w-2xl ${className}`}>{children}</p>
  );
}

/* ──────────────────────── GlassCard (Premium) ──────────────────────── */

export function GlassCard({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`${hover ? 'glass-card' : 'glass-card-no-hover'} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

/* ──────────────────────── GradientButton ──────────────────────── */

export function GradientButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)] text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_var(--orange-glow)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

/* ──────────────────────── GhostButton ──────────────────────── */

export function GhostButton({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-base transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}
