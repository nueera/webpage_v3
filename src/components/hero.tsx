'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GhostButton } from './ui-extensions';
import { MagneticGlowButton, MotionKineticText } from './premium-effects';

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
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, hasStarted, shouldReduceMotion]);

  return { count, start };
}

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
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="gradient-text inline-block"
      >
        {phrases[index]}
      </motion.span>
    </AnimatePresence>
  );
}

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

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)',
            top: '-20%', right: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)',
            bottom: '-15%', left: '-5%',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={shouldReduceMotion ? {} : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="section-badge">Transforming Digital Futures</span>
        </motion.div>

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

        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 min-h-[2.5rem] sm:min-h-[3rem]"
        >
          <RotatingText phrases={ROTATING_PHRASES} />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          We craft high-performance digital solutions that transform ambitious
          businesses into scalable, revenue-driving powerhouses. No guesswork.
          Just engineered growth.
        </motion.p>

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

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10"
        >
          {METRICS.map((metric) => (
            <MetricCounter key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PROOF_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[var(--orange-primary)]" />
              {item}
            </div>
          ))}
        </motion.div>

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
