'use client';

import Image from 'next/image';

interface PreOneLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtag?: boolean;
  variant?: 'full' | 'imageOnly';
}

export function PreOneLogo({
  className = '',
  size = 'md',
  showSubtag = true,
  variant = 'full',
}: PreOneLogoProps) {
  const sizeClasses = {
    sm: { img: 'h-10 w-auto', badge: 'text-[10px]' },
    md: { img: 'h-16 w-auto', badge: 'text-xs' },
    lg: { img: 'h-24 w-auto', badge: 'text-xs md:text-sm' },
    xl: { img: 'h-32 sm:h-40 md:h-48 w-auto', badge: 'text-xs md:text-sm' },
    hero: { img: 'h-36 sm:h-48 md:h-60 lg:h-72 w-auto', badge: 'text-sm md:text-base font-black' },
  }[size];

  if (variant === 'imageOnly') {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <Image
          src="/assets/images/preone-logo.png"
          alt="PreOne"
          width={600}
          height={320}
          className={`${sizeClasses.img} object-contain filter drop-shadow-xl`}
          priority
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start gap-1.5 ${className}`}>
      <div className="relative flex items-center">
        <Image
          src="/assets/images/preone-logo.png"
          alt="PreOne — Smart Preschool Management"
          width={700}
          height={380}
          className={`${sizeClasses.img} object-contain filter drop-shadow-2xl transition-transform hover:scale-105 duration-300`}
          priority
        />
      </div>
      {showSubtag && (
        <span
          className={`font-black tracking-widest uppercase text-[#7C3AED] dark:text-[#8B5CF6] pl-1.5 ${sizeClasses.badge}`}
        >
          A NueEra Product
        </span>
      )}
    </div>
  );
}
