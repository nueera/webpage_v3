'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GradientButton, GhostButton } from './ui-extensions';
import { MagneticGlowButton, MotionKineticText } from './premium-effects';
import { ParticleCanvas } from './particle-canvas';
import { ThreeJSHero } from './threejs-hero';

const ROTATING_PHRASES = [
  'We Build Digital Empires',
  'We Engineer Growth Systems',
  'We Transform Ambitious Ideas',
];

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

const FLOATING_BADGES = [
  { emoji: '🚀', text: '16+ Projects', position: 'top-[18%] left-[5%] md:left-[8%]', delay: 0 },
  { emoji: '⚡', text: 'Fast Delivery', position: 'top-[30%] right-[3%] md:right-[6%]', delay: 0.5 },
  { emoji: '🎯', text: 'Business-First', position: 'bottom-[25%] left-[3%] md:left-[10%]', delay: 1 },
  { emoji: '💡', text: 'Innovation Led', position: 'bottom-[35%] right-[5%] md:right-[8%]', delay: 1.5 },
];

/* ────── Animated Counter Hook ────── */
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const start = useCallback(() => {
    if (hasStarted || shouldReduceMotion) {
      setCount(target);
      return;
    }
    setHasStarted(true);
    const startTime = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.round(easedProgress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, hasStarted, shouldReduceMotion]);

  return { count, start };
}

/* ────── Rotating Text Component ────── */
function RotatingText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length, shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={shouldReduceMotion ? {} : { opacity: 0, y: -20, filter: 'blur(8px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="gradient-text inline-block"
      >
        {phrases[index]}
      </motion.span>
    </AnimatePresence>
  );
}

/* ────── Metric Counter Component ────── */
function MetricCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, start } = useCounter(value);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="text-center"
      onViewportEnter={() => start()}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {shouldReduceMotion ? value : count}{suffix}
      </div>
      <div className="text-sm text-[var(--text-muted)] mt-1">{label}</div>
    </motion.div>
  );
}

/* ────── Floating Badge Component ────── */
function FloatingBadge({ emoji, text, className, delay }: { emoji: string; text: string; className: string; delay: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 + delay, ease: 'easeOut' }}
      className={`absolute z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border-soft)] shadow-lg cursor-default select-none ${className}`}
    >
      <span className="text-base">{emoji}</span>
      <span className="text-xs font-semibold text-[var(--text-secondary)]">{text}</span>
    </motion.div>
  );
}

/* ────── Gradient Mesh Background ────── */
function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Large gradient blobs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)',
          top: '-20%',
          right: '-10%',
          animation: 'floatSlow 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)',
          bottom: '-15%',
          left: '-5%',
          animation: 'floatSlow 12s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, var(--core-gold) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
          animation: 'breathe 10s ease-in-out infinite',
        }}
      />
      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--blue-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--blue-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

export function Hero({ enableThreeJS = false }: { enableThreeJS?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)] pt-20"
    >
      {/* Gradient Mesh Background */}
      <GradientMesh />

      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Three.js 3D Hero (optional) */}
      <ThreeJSHero enabled={enableThreeJS} />

      {/* Glow Orbs */}
      <div className="glow-orb-orange top-20 -left-40" />
      <div className="glow-orb-blue bottom-20 -right-40" />

      {/* Floating Badges */}
      {FLOATING_BADGES.map((badge) => (
        <FloatingBadge
          key={badge.text}
          emoji={badge.emoji}
          text={badge.text}
          className={badge.position}
          delay={badge.delay}
        />
      ))}

      {/* Content */}
      <motion.div
        variants={shouldReduceMotion ? {} : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="section-badge">⚡ Transforming Digital Futures</span>
        </motion.div>

        {/* Title - Kinetic Typography */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-display"
        >
          <span className="heading-gradient">
            <MotionKineticText text="Build Your" as="span" delay={0.4} className="heading-gradient" />
          </span>{' '}
          <span className="gradient-text">
            <MotionKineticText text="Digital Empire" as="span" delay={0.7} className="gradient-text" />
          </span>
        </motion.h1>

        {/* Rotating Subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 min-h-[2.5rem] sm:min-h-[3rem]"
        >
          <RotatingText phrases={ROTATING_PHRASES} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          We craft high-performance digital solutions that transform ambitious
          businesses into scalable, revenue-driving powerhouses. No guesswork.
          Just engineered growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticGlowButton>
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </MagneticGlowButton>
          <GhostButton onClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Our Services
          </GhostButton>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10"
        >
          {METRICS.map((metric) => (
            <MetricCounter
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </motion.div>

        {/* Proof Strip */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PROOF_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[var(--orange-primary)]" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
