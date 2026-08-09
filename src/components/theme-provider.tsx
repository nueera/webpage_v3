'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

/* ==========================================
   CUSTOM THEME PROVIDER
   Replaces next-themes ThemeProvider to avoid
   React 19 script-tag warning in Next.js 16.
   No <script> tags are rendered — FOUC prevention
   is handled by an inline script in <head> (layout.tsx).
   ========================================== */

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    return 'dark';
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  // Sync class on <html> whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage unavailable
    }
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    setTimeout(() => {
      setThemeState(newTheme);
      setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 600);
    }, 50);
  }, []);

  // Prevent flash: on server, render with default theme
  // The inline script in <head> handles the initial class before React hydrates
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
