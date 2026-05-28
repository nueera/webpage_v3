'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/* ──────────────────────── Magnetic Glow Button ──────────────────────── */
function useIsTouchDevice() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

interface MagneticGlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticGlowButton({
  children,
  className = '',
  onClick,
  strength = 0.3,
}: MagneticGlowButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = useIsTouchDevice();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (shouldReduceMotion || isTouchDevice || !ref.current) return;

      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      el.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    },
    [strength, shouldReduceMotion, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.4s ease-out';
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = '';
    }, 400);
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-glow-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)] text-white font-semibold text-base hover:shadow-[0_0_40px_var(--orange-glow)] hover:scale-105 active:scale-95 ${className}`}
    >
      <span className="btn-glow-ring rounded-xl" />
      <span className="liquid-fill rounded-xl" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/* ──────────────────────── Spotlight Card ──────────────────────── */
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = useIsTouchDevice();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || isTouchDevice || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    },
    [shouldReduceMotion, isTouchDevice]
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass-card spotlight-card rounded-2xl p-6 ${className}`}
    >
      <div className="spotlight-effect rounded-2xl" />
      <div className="spotlight-border rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ──────────────────────── Kinetic Typography ──────────────────────── */
interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export function KineticText({ text, className = '', delay = 0, as: Tag = 'h2' }: KineticTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const chars = text.split('');

  return (
    <Tag className={className} style={{ perspective: '800px' }}>
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="kinetic-char"
          style={{
            animationDelay: `${delay + i * 0.03}s`,
            display: char === ' ' ? 'inline' : 'inline-block',
            width: char === ' ' ? '0.3em' : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}

/* ──────────────────────── Framer Motion Kinetic Text ──────────────────────── */
interface MotionKineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export function MotionKineticText({ text, className = '', delay = 0, as: Tag = 'h2' }: MotionKineticTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, wordIdx) => (
        <span key={`${word}-${wordIdx}`} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0, rotateX: -80 }}
            whileInView={{ y: '0%', opacity: 1, rotateX: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              delay: delay + wordIdx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
