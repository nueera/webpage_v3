'use client';

import { useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface GradientBorderProps {
  children: React.ReactNode;
  borderWidth?: number;
  duration?: string;
  className?: string;
}

export function GradientBorder({
  children,
  borderWidth = 2,
  duration = '3s',
  className = '',
}: GradientBorderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const animationStyle = isHovered && !shouldReduceMotion
    ? {
        animation: `gradientBorderRotate ${duration} linear infinite`,
      }
    : {};

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl p-[${borderWidth}px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: `${borderWidth}px`,
      }}
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: isHovered
            ? 'conic-gradient(from var(--gradient-angle, 0deg), var(--blue-primary), var(--orange-primary), var(--blue-primary))'
            : 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
          opacity: isHovered ? 1 : 0.5,
          transition: 'opacity 0.3s ease',
          ...animationStyle,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative rounded-2xl bg-[var(--bg-main)]">
        {children}
      </div>
    </div>
  );
}
