'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  const curtainVariants = {
    enter: { scaleY: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { scaleY: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.99,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Curtain overlay panels */}
        <motion.div
          className="curtain-overlay"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          variants={curtainVariants}
          style={{ originY: 0 }}
        >
          <div className="curtain-panel" style={{ transformOrigin: 'left center' }} />
          <div className="curtain-panel" style={{ transformOrigin: 'right center' }} />
        </motion.div>

        {/* Page content */}
        <motion.div
          initial={pageVariants.initial}
          animate={pageVariants.animate}
          exit={pageVariants.exit}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
