'use client';

import Link from 'next/link';
import { Globe, Share2, Link as LinkIcon, MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Web Development' },
  { href: '/services', label: 'Mobile Apps' },
  { href: '/services', label: 'UI/UX Design' },
  { href: '/services', label: 'Branding' },
  { href: '/services', label: 'Digital Marketing' },
  { href: '/services', label: 'Software Solutions' },
];

function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-soft)] mt-auto" suppressHydrationWarning>
      <div className="container-nueera py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tight gradient-text">NueEra</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              Building digital empires with precision, creativity, and cutting-edge technology.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://facebook.com', icon: Globe, label: 'Website', color: 'hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)]' },
                { href: 'https://instagram.com', icon: Share2, label: 'Instagram', color: 'hover:text-[var(--orange-primary)] hover:border-[var(--orange-primary)]' },
                { href: 'https://linkedin.com', icon: LinkIcon, label: 'LinkedIn', color: 'hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)]' },
                { href: 'https://wa.me/917066607424', icon: MessageCircle, label: 'WhatsApp', color: 'hover:text-green-500 hover:border-green-500' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] transition-all duration-300 ${social.color} hover:-translate-y-0.5`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Email</p>
                <span
                  className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors cursor-pointer"
                  role="link" tabIndex={0}
                  onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = 'mailto:hello@nueera.io'; }}
                >
                  hello@nueera.io
                </span>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-[var(--text-secondary)] text-sm">Kothrud, Pune, Maharashtra</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/917066607424" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-sm hover:text-green-500 transition-colors">
                  +91 70666 07424
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-soft)]">
        <div className="container-nueera py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[var(--text-muted)] text-xs">
            &copy; <CurrentYear /> NueEra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
