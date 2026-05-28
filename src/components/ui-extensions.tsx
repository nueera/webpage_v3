'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUp({ children, className = '', delay = 0, duration = 0.6 }: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <FadeUp>
      <span className={`section-badge ${className}`}>{children}</span>
    </FadeUp>
  );
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <FadeUp delay={0.1}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight font-display ${className}`}>
        {children}
      </h2>
    </FadeUp>
  );
}

export function SectionDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <FadeUp delay={0.2}>
      <p className={`text-lg text-[var(--text-secondary)] max-w-2xl ${className}`}>{children}</p>
    </FadeUp>
  );
}

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
    <div className={`glass-card rounded-2xl p-6 ${hover ? 'cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function GradientButton({
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
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)] text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_var(--orange-glow)] hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

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
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-base transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
