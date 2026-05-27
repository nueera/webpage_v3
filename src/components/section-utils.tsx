'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function SectionWrapper({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`py-16 md:py-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  center = true,
}: {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="section-badge mb-4 inline-block">{badge}</span>
      )}
      <h2 className={`heading-gradient text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${center ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-[var(--text-secondary)] text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
