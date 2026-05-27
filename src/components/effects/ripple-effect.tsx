'use client';

import { useCallback, useRef } from 'react';

interface RippleEvent {
  x: number;
  y: number;
  id: number;
}

export function useRipple() {
  const ripplesRef = useRef<RippleEvent[]>([]);
  const counterRef = useRef(0);

  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = counterRef.current++;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    target.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }, []);

  return { createRipple };
}

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function RippleEffect({ children, className = '' }: RippleEffectProps) {
  const { createRipple } = useRipple();

  return (
    <div className={className} onClick={createRipple}>
      {children}
    </div>
  );
}
