'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GradientButton, GhostButton } from './ui-extensions';
import { ParticleCanvas } from './particle-canvas';
import { ThreeJSHero } from './threejs-hero';

const METRICS = [
  { value: '16+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
  { value: '4+', label: 'Happy Clients' },
];

const PROOF_ITEMS = [
  'Proven delivery framework',
  'No fluff, just results',
  'Business-first approach',
];

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
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Three.js 3D Hero (optional) */}
      <ThreeJSHero enabled={enableThreeJS} />

      {/* Glow Orbs */}
      <div className="glow-orb-orange top-20 -left-40" />
      <div className="glow-orb-blue bottom-20 -right-40" />

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

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="heading-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Build Your{' '}
          <span className="gradient-text">Digital Empire</span>
        </motion.h1>

        {/* Subtitle */}
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
          <GradientButton>
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <GhostButton onClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Our Services
          </GhostButton>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {metric.value}
              </div>
              <div className="text-sm text-[var(--text-muted)] mt-1">{metric.label}</div>
            </div>
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
