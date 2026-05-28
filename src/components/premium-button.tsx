'use client';

import type { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PremiumButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: PremiumButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
        bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)]
        text-white font-semibold text-base
        transition-all duration-300
        hover:shadow-[0_8px_32px_var(--orange-glow)] hover:scale-[1.02]
        active:scale-[0.98]
        relative overflow-hidden
        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
        ${className}`}
    >
      {children}
    </button>
  );
}
