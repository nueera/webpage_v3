'use client';

import { useReducedMotion } from 'framer-motion';

interface SkeletonLoaderProps {
  variant: 'card' | 'text' | 'image' | 'avatar';
  count?: number;
  className?: string;
}

function SkeletonPulse({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-[var(--bg-glass)] rounded-md ${className}`}
      aria-hidden="true"
    />
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl p-6 bg-[var(--bg-glass)] border border-[var(--border-soft)]">
      {/* Image placeholder */}
      <SkeletonPulse className="w-full h-48 mb-4 rounded-xl" />
      {/* Title */}
      <SkeletonPulse className="w-3/4 h-5 mb-3" />
      {/* Description lines */}
      <SkeletonPulse className="w-full h-3 mb-2" />
      <SkeletonPulse className="w-5/6 h-3 mb-2" />
      <SkeletonPulse className="w-2/3 h-3" />
    </div>
  );
}

function TextSkeleton() {
  return (
    <div className="space-y-3">
      <SkeletonPulse className="w-full h-4" />
      <SkeletonPulse className="w-5/6 h-4" />
      <SkeletonPulse className="w-4/6 h-4" />
    </div>
  );
}

function ImageSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[var(--bg-glass)] border border-[var(--border-soft)]">
      <SkeletonPulse className="w-full aspect-video" />
    </div>
  );
}

function AvatarSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <SkeletonPulse className="w-10 h-10 rounded-full shrink-0" />
      <div className="space-y-2 flex-1">
        <SkeletonPulse className="w-1/3 h-3" />
        <SkeletonPulse className="w-1/2 h-3" />
      </div>
    </div>
  );
}

export function SkeletonLoader({ variant, count = 1, className = '' }: SkeletonLoaderProps) {
  const skeletons = Array.from({ length: count }, (_, i) => {
    switch (variant) {
      case 'card':
        return <CardSkeleton key={i} />;
      case 'text':
        return <TextSkeleton key={i} />;
      case 'image':
        return <ImageSkeleton key={i} />;
      case 'avatar':
        return <AvatarSkeleton key={i} />;
      default:
        return null;
    }
  });

  return (
    <div
      className={`grid gap-6 ${
        variant === 'card' || variant === 'image'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      } ${className}`}
      role="status"
      aria-label="Loading content"
    >
      {skeletons}
    </div>
  );
}
