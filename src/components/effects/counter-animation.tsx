'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  children: React.ReactNode;
  className?: string;
}

export function CounterAnimation({
  target,
  duration = 2000,
  suffix = '',
  children,
  className = '',
}: CounterAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

  const animateCount = useCallback(() => {
    if (shouldReduceMotion || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.round(easedProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, shouldReduceMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animateCount, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {shouldReduceMotion ? target : count}{suffix}
    </span>
  );
}
