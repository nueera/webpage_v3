'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, ChevronRight, ChevronDown, Home, Code, Smartphone, Palette, Megaphone, Settings, Video, FileText, Wrench } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { MagneticGlowButton } from './premium-effects';

/* ──────────────────────── Data ──────────────────────── */

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasMegaMenu: true },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/help-center', label: 'Help Center' },
  { href: '/contact', label: 'Contact' },
];

const megaMenuServices = [
  { slug: 'website-development', title: 'Website Development', desc: 'Custom, high-performance web solutions', icon: Code },
  { slug: 'mobile-apps', title: 'Mobile App Development', desc: 'Native & cross-platform mobile apps', icon: Smartphone },
  { slug: 'ui-ux-design', title: 'UI/UX Design', desc: 'Human-centered intuitive experiences', icon: Palette },
  { slug: 'branding', title: 'Branding', desc: 'Strategic brand identities that resonate', icon: Megaphone },
  { slug: 'digital-marketing', title: 'Digital Marketing', desc: 'Data-driven growth strategies', icon: Megaphone },
  { slug: 'software-solutions', title: 'Software Solutions', desc: 'Custom automation & system integration', icon: Settings },
  { slug: 'video-production', title: 'Video Production', desc: 'Compelling cinematic brand stories', icon: Video },
  { slug: 'content-strategy', title: 'Content Strategy', desc: 'Strategic content that drives results', icon: FileText },
  { slug: 'maintenance-support', title: 'Maintenance & Support', desc: 'Proactive monitoring & optimization', icon: Wrench },
];

/* ──────────────────────── Breadcrumb Helper ──────────────────────── */

function getBreadcrumbs(pathname: string): { label: string; href: string }[] {
  const crumbs: { label: string; href: string }[] = [{ label: 'Home', href: '/' }];
  if (pathname === '/') return crumbs;

  const segments = pathname.split('/').filter(Boolean);
  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label, href: currentPath });
  }
  return crumbs;
}

/* ──────────────────────── Dock-Style Navbar with Magnification ──────────────────────── */

const DOCK_ICON_MAP: Record<string, React.ElementType> = {
  '/': Home,
  '/about': Palette,
  '/services': Settings,
  '/portfolio': Code,
  '/pricing': Megaphone,
  '/blog': FileText,
  '/help-center': MessageCircle,
  '/contact': MessageCircle,
};

function DockItem({
  link,
  isActive,
  scale,
  onNavigate,
}: {
  link: { href: string; label: string };
  isActive: boolean;
  scale: number;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const BASE_SIZE = 36;
  const iconSize = BASE_SIZE * scale;
  const translateY = shouldReduceMotion ? 0 : -(scale - 1) * 14;
  const Icon = DOCK_ICON_MAP[link.href] || Code;

  return (
    <Link
      href={link.href}
      onClick={(e) => onNavigate(e, link.href)}
      className="relative flex flex-col items-center justify-end gap-1 group"
      style={{
        width: iconSize + 8,
        transition: shouldReduceMotion ? 'none' : 'width 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap
          bg-[var(--bg-main)] border border-[var(--border-soft)] text-[var(--text-primary)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
      >
        {link.label}
      </span>
      <motion.div
        className="flex items-center justify-center rounded-xl"
        animate={{ scale, y: translateY }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.8 }}
        style={{
          width: iconSize,
          height: iconSize,
          background: isActive
            ? 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))'
            : 'var(--bg-glass)',
          border: isActive ? 'none' : '1px solid var(--border-soft)',
        }}
      >
        <Icon
          className="transition-colors duration-200"
          style={{
            width: iconSize * 0.48,
            height: iconSize * 0.48,
            color: isActive ? '#ffffff' : 'var(--text-secondary)',
          }}
        />
      </motion.div>
      {isActive && (
        <motion.div
          layoutId="dock-dot"
          className="w-1 h-1 rounded-full bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}

function DockNav({
  scrolled,
  activeLink,
  setActiveLink,
  handleNavClick,
}: {
  scrolled: boolean;
  activeLink: string;
  setActiveLink: (href: string) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [scales, setScales] = useState<Record<string, number>>({});
  const MAGNIFICATION_RANGE = 120;
  const MAX_SCALE = 1.45;

  const updateScales = useCallback((clientX: number) => {
    const newScales: Record<string, number> = {};
    navLinks.forEach((link) => {
      const el = itemRefs.current.get(link.href);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(clientX - center);
      newScales[link.href] = distance < MAGNIFICATION_RANGE
        ? MAX_SCALE - ((MAX_SCALE - 1) * distance) / MAGNIFICATION_RANGE
        : 1;
    });
    setScales(newScales);
  }, []);

  const resetScales = useCallback(() => {
    const reset: Record<string, number> = {};
    navLinks.forEach((link) => { reset[link.href] = 1; });
    setScales(reset);
  }, []);

  if (!scrolled) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -30, scale: 0.85 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[2002] hidden lg:flex items-end gap-1.5 px-3 pb-2 pt-2.5 rounded-2xl navbar-dock"
      onMouseMove={(e) => updateScales(e.clientX)}
      onMouseLeave={resetScales}
    >
      {navLinks.map((link) => (
        <div
          key={link.href}
          ref={(el) => {
            if (el) itemRefs.current.set(link.href, el);
          }}
        >
          <DockItem
            link={link}
            isActive={activeLink === link.href}
            scale={shouldReduceMotion ? 1 : (scales[link.href] ?? 1)}
            onNavigate={(e, href) => {
              handleNavClick(e, href);
              setActiveLink(href);
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}

/* ──────────────────────── Main Navbar Component ──────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState('/');
  const [logoHovered, setLogoHovered] = useState(false);
  const [dockMode, setDockMode] = useState(false);

  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { scrollToElement } = useSmoothScroll({ offset: 80 });
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollYProgress } = useScroll();

  // Track active link from pathname
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Scroll detection for navbar morph + dock mode + progress bar
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      setDockMode(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body lock for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Handle hash links with smooth scroll
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      if (hash) {
        e.preventDefault();
        scrollToElement(hash);
        setMobileOpen(false);
        setMegaMenuOpen(false);
      }
    }
    setActiveLink(href);
  }, [scrollToElement]);

  // Mega menu open/close with debounce
  const openMegaMenu = useCallback(() => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  }, []);

  const closeMegaMenu = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  }, []);

  // Mobile drawer swipe-to-close
  const touchStartRef = useRef({ x: 0, y: 0 });
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    if (deltaX < -60) {
      setMobileOpen(false);
    }
  }, []);

  // Breadcrumbs
  const breadcrumbs = getBreadcrumbs(pathname);
  const isInnerPage = pathname !== '/';

  return (
    <>
      {/* ════════ Scroll Progress Bar ════════ */}
      <div className="fixed top-0 left-0 right-0 z-[2003] h-[2px] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ════════ Dock-Style Floating Navbar (appears after scrolling past hero) ════════ */}
      <AnimatePresence>
        {dockMode && (
          <DockNav
            scrolled={scrolled}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleNavClick={handleNavClick}
          />
        )}
      </AnimatePresence>

      {/* ════════ Main Navbar ════════ */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[2001] flex items-center px-4 md:px-8 transition-all duration-500 ${
          dockMode && scrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        } ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
        style={{
          height: scrolled ? '64px' : '80px',
          background: scrolled ? 'var(--bg-navbar)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
          borderBottom: scrolled
            ? '1px solid transparent'
            : '1px solid transparent',
        }}
      >
        {/* Gradient bottom border on scroll */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] navbar-gradient-border"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--blue-primary), var(--orange-primary), transparent)',
              opacity: scrolled ? 0.6 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}

        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 h-full">
          {/* Left - Logo with Micro-Animation */}
          <div className="justify-self-start flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group relative"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <div
                className="relative flex items-center overflow-hidden rounded-lg transition-transform duration-300"
                style={{
                  transform: scrolled ? 'scale(0.85)' : 'scale(1)',
                }}
              >
                {/* Shimmer overlay on hover */}
                <AnimatePresence>
                  {logoHovered && !shouldReduceMotion && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      exit={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                    />
                  )}
                </AnimatePresence>
                <Image
                  src="/assets/images/lightlogo.webp"
                  alt="NueEra"
                  width={140}
                  height={44}
                  className="h-11 w-auto object-contain block dark:hidden transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <Image
                  src="/assets/images/darklogo.webp"
                  alt="NueEra"
                  width={140}
                  height={44}
                  className="h-11 w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center - Nav Links with Animated Underline Indicator */}
          <div className="justify-self-center hidden lg:flex">
            <ul className="flex list-none gap-1 items-center relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                const isHovered = hoveredLink === link.href;
                const isServicesLink = link.hasMegaMenu;

                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => {
                      setHoveredLink(null);
                      if (isServicesLink) closeMegaMenu();
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-colors duration-200
                        ${isActive
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                          : 'text-[var(--text-primary)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--blue-primary)] hover:to-[var(--orange-primary)]'
                        }
                      `}
                      onMouseEnter={() => {
                        if (isServicesLink) openMegaMenu();
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {link.label}
                        {isServicesLink && (
                          <ChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                          />
                        )}
                      </span>

                      {/* Active Route Glow Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
                            boxShadow: '0 0 8px var(--blue-glow), 0 0 16px var(--orange-glow)',
                          }}
                          animate={shouldReduceMotion ? {} : {
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      )}
                    </Link>

                    {/* Animated Underline Indicator */}
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, var(--blue-primary), var(--orange-primary))',
                          boxShadow: isActive ? '0 0 8px var(--blue-glow)' : 'none',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right - Theme + CTA + Mobile */}
          <div className="justify-self-end flex items-center gap-3">
            <ThemeToggle />
            <MagneticGlowButton
              className="!px-5 !py-2.5 !text-sm hidden md:inline-flex"
              onClick={() => window.open('https://wa.me/917066607424', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </MagneticGlowButton>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center w-12 h-12 rounded-xl
                bg-[var(--bg-mobile-btn)] border border-[var(--border-mobile-btn)]
                transition-all duration-300 hover:border-[var(--blue-primary)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-[var(--blue-primary)]" />
            </button>
          </div>
        </div>

        {/* Breadcrumb Trail */}
        <AnimatePresence>
          {isInnerPage && scrolled && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReducedMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-[-22px] left-0 right-0 flex items-center justify-center"
            >
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-b-lg text-[11px]"
                style={{
                  background: scrolled ? 'var(--bg-navbar)' : 'transparent',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.href} className="flex items-center gap-1.5">
                    {i === 0 && <Home className="w-3 h-3 text-[var(--text-muted)]" />}
                    {i > 0 && <ChevronRight className="w-3 h-3 text-[var(--text-muted)]" />}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="font-semibold gradient-text">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-[var(--text-muted)] hover:text-[var(--blue-primary)] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ════════ Mega Menu Dropdown ════════ */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[80px] left-0 right-0 z-[2000] hidden lg:block"
            onMouseEnter={openMegaMenu}
            onMouseLeave={closeMegaMenu}
          >
            <div className="mx-auto max-w-[1280px] px-8">
              <div
                className="rounded-2xl overflow-hidden mega-menu-panel"
                style={{
                  background: 'var(--bg-main)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px var(--border-soft)',
                }}
              >
                {/* Top accent line */}
                <div className="h-[2px] bg-gradient-to-r from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      Our <span className="gradient-text">Services</span>
                    </h3>
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-[var(--blue-primary)] hover:text-[var(--orange-primary)] transition-colors flex items-center gap-1"
                      onClick={(e) => {
                        handleNavClick(e, '/services');
                        setMegaMenuOpen(false);
                      }}
                    >
                      View All Services <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {megaMenuServices.map((service, i) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={service.slug}
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
                        >
                          <Link
                            href={`/services/${service.slug}`}
                            onClick={(e) => {
                              handleNavClick(e, `/services/${service.slug}`);
                              setMegaMenuOpen(false);
                            }}
                            className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] border border-transparent"
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 group-hover:from-[var(--blue-primary)]/20 group-hover:to-[var(--orange-primary)]/20 transition-colors">
                              <Icon className="w-5 h-5 text-[var(--blue-primary)] group-hover:text-[var(--orange-primary)] transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--blue-primary)] transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════ Mobile Menu Overlay (Enhanced with Gesture + Stagger) ════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[2005]"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={shouldReduceMotion ? { x: 0 } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={shouldReduceMotion ? { x: '100%' } : { x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-[85vw] max-w-[390px] flex flex-col z-[2006] mobile-drawer"
              style={{
                background: 'var(--bg-main)',
              }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Gradient border on left side */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />

              {/* Close button */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--border-soft)]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/lightlogo.webp"
                    alt="NueEra"
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain block dark:hidden"
                  />
                  <Image
                    src="/assets/images/darklogo.webp"
                    alt="NueEra"
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain hidden dark:block"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] cursor-pointer transition-all duration-300 hover:border-[var(--border-active)] hover:bg-[var(--bg-secondary)]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[var(--text-primary)]" />
                </motion.button>
              </div>

              {/* Nav Links - Staggered */}
              <ul className="flex flex-col list-none gap-2 p-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={shouldReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40, filter: 'blur(8px)' }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        if (!link.href.includes('#')) {
                          setMobileOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-sm
                        transition-all duration-250
                        ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                          ? 'bg-gradient-to-r from-[var(--blue-primary)]/15 to-[var(--orange-primary)]/15 text-[var(--blue-primary)] border border-[var(--border-active)] mobile-link-active'
                          : 'text-[var(--text-primary)] border border-transparent hover:bg-[var(--bg-glass)] hover:border-[var(--border-soft)]'
                        }
                      `}
                    >
                      <span className="uppercase tracking-wider text-xs">{link.label}</span>
                      {pathname === link.href ? (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                initial={shouldReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="p-6 pt-4 border-t border-[var(--border-soft)]"
              >
                <MagneticGlowButton
                  className="!w-full !justify-center"
                  onClick={() => window.open('https://wa.me/917066607424', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </MagneticGlowButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
