'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-full flex items-center justify-center
        bg-[var(--bg-glass)] border border-[var(--border-soft)]
        text-[var(--text-secondary)] text-xl
        transition-all duration-300
        hover:bg-[var(--bg-tertiary)] hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)]
        hover:-translate-y-0.5 hover:shadow-lg
        backdrop-blur-xl"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" style={{ animation: 'themeIconAnim 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
      ) : (
        <Moon className="w-5 h-5" style={{ animation: 'themeIconAnim 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} />
      )}
    </button>
  );
}
