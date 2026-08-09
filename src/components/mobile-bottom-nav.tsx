'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Info, Layers, Briefcase, Mail, Star } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: House, href: '/' },
  { id: 'about', label: 'About', icon: Info, href: '/about' },
  { id: 'services', label: 'Services', icon: Layers, href: '/services' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase, href: '/portfolio' },
  { id: 'preone', label: 'PreOne', icon: Star, href: '/preone', isPill: true },
  { id: 'contact', label: 'Contact', icon: Mail, href: '/contact' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[2000] md:hidden w-[96vw] max-w-md pointer-events-auto">
      {/* Floating Glass Container */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="relative flex items-center justify-between px-1.5 py-2 rounded-full bg-[var(--bg-glass-strong)] border border-white/20 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
      >
        {/* Glow Line */}
        <div
          className="absolute -top-px left-6 right-6 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--blue-primary), var(--orange-primary), transparent)',
            opacity: 0.8,
          }}
          aria-hidden="true"
        />

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          if (item.isPill) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all duration-300 active:scale-95 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] border border-white/30 text-white"
              >
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-pink-300 fill-pink-300/40" />
                </div>
                <span className="text-[9px] font-extrabold tracking-tight mt-0.5 text-white">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'text-[var(--text-primary)] font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {/* Active Pill Glow Backdrop */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 border border-[var(--border-active)] shadow-[0_4px_16px_var(--glow-blue)] animate-fade-in" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center">
                <Icon
                  className={`w-4.5 h-4.5 transition-transform duration-300 ${
                    isActive
                      ? 'scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                      : ''
                  }`}
                  strokeWidth={isActive ? 2.4 : 1.8}
                />
              </div>

              {/* Label */}
              <span
                className={`relative z-10 text-[9px] tracking-tight mt-0.5 transition-all duration-200 ${
                  isActive ? 'font-bold text-[var(--text-primary)]' : 'font-medium'
                }`}
              >
                {item.label}
              </span>

              {/* Active Indicator Dot */}
              {isActive && (
                <span
                  className="absolute -bottom-1 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
                    boxShadow: '0 0 8px var(--glow-blue)',
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Safe Area Spacer for iOS Devices */}
      <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  );
}
