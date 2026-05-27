'use client';

import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  cursor?: boolean;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  text,
  speed = 50,
  cursor = true,
  className = '',
  cursorClassName = '',
}: TypewriterEffectProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState(() => shouldReduceMotion ? text : '');
  const [isComplete, setIsComplete] = useState(() => shouldReduceMotion);
  const indexRef = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, shouldReduceMotion]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span
          className={`inline-block w-[2px] h-[1em] ml-[2px] align-middle ${
            isComplete ? '' : ''
          } ${cursorClassName}`}
          style={{
            backgroundColor: 'var(--blue-primary)',
            animation: isComplete
              ? 'pulse 1s ease-in-out infinite'
              : 'none',
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
