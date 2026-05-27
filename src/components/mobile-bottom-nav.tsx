'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, MessageCircle, Users, Layers } from 'lucide-react';

const bottomLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: 'https://wa.me/917066607424', label: 'WhatsApp', icon: MessageCircle, external: true },
  { href: '/about', label: 'About', icon: Users },
  { href: '/portfolio', label: 'Work', icon: Layers },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden
        border-t border-[var(--border-soft)]"
      style={{
        background: 'var(--bg-navbar)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="flex items-center justify-around py-2 px-2">
        {bottomLinks.map((link) => {
          const isActive = !link.external && pathname === link.href;
          const Icon = link.icon;

          if (link.external) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5
                  w-14 h-14 rounded-xl
                  bg-gradient-to-r from-[var(--orange-primary)] to-[var(--core-gold)]
                  text-[#0B0F14] -mt-5 shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold">{link.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-0.5
                w-12 h-12 rounded-xl transition-all duration-200
                ${isActive
                  ? 'text-[var(--blue-primary)] bg-[var(--bg-glass)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--blue-primary)]'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
