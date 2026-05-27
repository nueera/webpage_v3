'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ParallaxCardsProps {
  children: React.ReactNode;
  maxRotation?: number;
  className?: string;
}

function useIsTouchDevice() {
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  return isTouch;
}

export function ParallaxCards({
  children,
  maxRotation = 10,
  className = '',
}: ParallaxCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = useIsTouchDevice();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || isTouchDevice) return;

      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rx = ((y - centerY) / centerY) * -maxRotation;
      const ry = ((x - centerX) / centerX) * maxRotation;

      setRotateX(rx);
      setRotateY(ry);
    },
    [maxRotation, shouldReduceMotion, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  if (shouldReduceMotion || isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        perspective: 800,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
}
