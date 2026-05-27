'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

type CTAStage = 'learn' | 'see' | 'start';

const CTA_LABELS: Record<CTAStage, string> = {
  learn: 'Learn More',
  see: 'See Our Work',
  start: 'Get Started',
};

interface IntentCTAProps {
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function IntentCTA({ className = '', href = '/contact', onClick }: IntentCTAProps) {
  const [stage, setStage] = useState<CTAStage>('learn');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercentage > 0.7) {
        setStage('start');
      } else if (scrollPercentage > 0.35) {
        setStage('see');
      } else {
        setStage('learn');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={href}
      onClick={onClick}
      className={`btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={stage}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {CTA_LABELS[stage]}
        </motion.span>
      </AnimatePresence>
    </a>
  );
}
