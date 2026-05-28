'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicPreloader() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress tied to actual page load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setLoaded(true), 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: force complete after 3s
    const fallback = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoaded(true), 300);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="cinematic-preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Logo SVG */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* N letterform path */}
            <motion.path
              d="M20 80V20L50 60L80 20V80"
              stroke="url(#preloaderGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Dot accent */}
            <motion.circle
              cx="80"
              cy="80"
              r="4"
              fill="var(--orange-primary)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <defs>
              <linearGradient id="preloaderGrad" x1="20" y1="20" x2="80" y2="80">
                <stop offset="0%" stopColor="var(--blue-primary)" />
                <stop offset="100%" stopColor="var(--orange-primary)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Brand name */}
          <motion.div
            className="mt-4 text-lg font-bold tracking-wider"
            style={{
              background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            NUEERA
          </motion.div>

          {/* Progress bar */}
          <div className="preloader-progress-bar">
            <motion.div
              className="preloader-progress-fill"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            className="mt-3 text-xs text-[var(--text-muted)] font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
