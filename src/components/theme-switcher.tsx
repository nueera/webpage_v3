'use client';

import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

export type ThemePreset = 'nueera-og' | 'midnight' | 'electric' | 'cyberpunk';

interface ThemeOption {
  id: ThemePreset;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  vars: Record<string, string>;
}

const THEME_PRESETS: ThemeOption[] = [
  {
    id: 'nueera-og',
    name: 'NueEra',
    primaryColor: '#0052FF',
    secondaryColor: '#FF7700',
    vars: {
      '--blue-primary': '#0052FF',
      '--blue-soft': '#4D8DFF',
      '--blue-deep': '#0036B3',
      '--orange-primary': '#FF7700',
      '--orange-soft': '#FF9A33',
      '--glow-blue': 'rgba(0, 82, 255, 0.45)',
      '--glow-orange': 'rgba(255, 119, 0, 0.45)',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight Blue',
    primaryColor: '#3b82f6',
    secondaryColor: '#06b6d4',
    vars: {
      '--blue-primary': '#3b82f6',
      '--blue-soft': '#60a5fa',
      '--blue-deep': '#1d4ed8',
      '--orange-primary': '#06b6d4',
      '--orange-soft': '#22d3ee',
      '--glow-blue': 'rgba(59, 130, 246, 0.4)',
      '--glow-orange': 'rgba(6, 182, 212, 0.4)',
    },
  },
  {
    id: 'electric',
    name: 'Electric Orange',
    primaryColor: '#ff5722',
    secondaryColor: '#ffb300',
    vars: {
      '--blue-primary': '#ff5722',
      '--blue-soft': '#ff8a65',
      '--blue-deep': '#e64a19',
      '--orange-primary': '#ffb300',
      '--orange-soft': '#ffe082',
      '--glow-blue': 'rgba(255, 87, 34, 0.4)',
      '--glow-orange': 'rgba(255, 179, 0, 0.4)',
    },
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    primaryColor: '#a855f7',
    secondaryColor: '#ec4899',
    vars: {
      '--blue-primary': '#a855f7',
      '--blue-soft': '#c084fc',
      '--blue-deep': '#7e22ce',
      '--orange-primary': '#ec4899',
      '--orange-soft': '#f472b6',
      '--glow-blue': 'rgba(168, 85, 247, 0.4)',
      '--glow-orange': 'rgba(236, 72, 153, 0.4)',
    },
  },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemePreset>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nueera_ambient_theme') as ThemePreset;
      if (saved && THEME_PRESETS.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'nueera-og';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const preset = THEME_PRESETS.find((t) => t.id === currentTheme);
    if (!preset) return;

    const root = document.documentElement;
    Object.entries(preset.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
  }, [currentTheme]);

  const applyTheme = (themeId: ThemePreset) => {
    setCurrentTheme(themeId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nueera_ambient_theme', themeId);
    }
    setIsOpen(false);
  };

  const activePreset = THEME_PRESETS.find((t) => t.id === currentTheme) || THEME_PRESETS[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-all duration-200"
        aria-label="Toggle Accent Theme"
        title="NueEra Brand Theme Options"
      >
        <Palette className="w-3.5 h-3.5 text-[var(--blue-primary)]" />
        <span className="hidden sm:inline">{activePreset.name}</span>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activePreset.primaryColor }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activePreset.secondaryColor }} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-[var(--bg-glass-strong)] border border-white/20 backdrop-blur-2xl shadow-2xl p-2 z-50 animate-fade-in-up">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] px-3 py-1 mb-1">
            NueEra Color Theme
          </div>
          {THEME_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyTheme(preset.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                currentTheme === preset.id
                  ? 'bg-[var(--blue-primary)]/15 text-[var(--blue-primary)] font-bold'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-glass)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>{preset.name}</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: preset.primaryColor }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: preset.secondaryColor }} />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
