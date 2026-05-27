'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  // Keep ref in sync with state
  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    if (!isFinePointer) return;

    const mediaQuery = window.matchMedia('(pointer: fine)');

    const handleChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isFinePointer]);

  useEffect(() => {
    if (!isFinePointer) return;

    const animate = () => {
      if (dotRef.current) {
        const { x, y } = positionRef.current;
        dotRef.current.style.transform = `translate(${x}px, ${y}px) scale(${isHoveringRef.current ? 2 : 1})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(true);
      }
    };

    const handleElementLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementEnter);
    document.addEventListener('mouseout', handleElementLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementEnter);
      document.removeEventListener('mouseout', handleElementLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isFinePointer, isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        width: isHovering ? '40px' : '16px',
        height: isHovering ? '40px' : '16px',
        borderRadius: '50%',
        backgroundColor: 'white',
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        opacity: isVisible ? 0.8 : 0,
        marginLeft: isHovering ? '-20px' : '-8px',
        marginTop: isHovering ? '-20px' : '-8px',
      }}
      aria-hidden="true"
    />
  );
}
