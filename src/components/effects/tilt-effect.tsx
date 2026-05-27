'use client';

import { useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TiltEffectProps {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
  className?: string;
}

function useIsTouchDevice() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

export function TiltEffect({
  children,
  maxTilt = 8,
  scale = 1.02,
  className = '',
}: TiltEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = useIsTouchDevice();

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

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      // Glare effect
      const glare = el.querySelector('.tilt-glare') as HTMLElement;
      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
        glare.style.opacity = '1';
      }
    },
    [maxTilt, scale, shouldReduceMotion, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    el.style.transition = 'transform 0.5s ease';

    const glare = el.querySelector('.tilt-glare') as HTMLElement;
    if (glare) {
      glare.style.opacity = '0';
    }

    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 500);
  }, []);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = '';
  }, []);

  if (shouldReduceMotion || isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      <div
        className="tilt-glare absolute inset-0 pointer-events-none rounded-inherit opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
    </div>
  );
}
