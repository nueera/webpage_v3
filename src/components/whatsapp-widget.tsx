'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Zap, Globe, Cpu } from 'lucide-react';

const QUICK_OPTIONS = [
  {
    icon: Globe,
    label: 'Web & Mobile App',
    text: 'Hi NueEra, I need a custom Web or Mobile App developed for my business.',
  },
  {
    icon: Zap,
    label: 'SEO & Speed Boost',
    text: 'Hi NueEra, I want to optimize my website speed and rank higher on Google.',
  },
  {
    icon: Cpu,
    label: 'AI & Automation',
    text: 'Hi NueEra, I want to automate my business workflows with AI.',
  },
  {
    icon: Sparkles,
    label: 'General Inquiry',
    text: 'Hi NueEra, I would like to schedule a strategy call for a new project.',
  },
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || 'Hi NueEra, I would like to discuss a new project.';
    window.open(
      `https://wa.me/917066607424?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Quick Inquiry Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 rounded-3xl bg-[var(--bg-glass-strong)] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 animate-fade-in-up">
          {/* Popup Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-lg">
                  N
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Talk to NueEra Team</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Replies in &lt; 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close WhatsApp Widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Popup Body */}
          <div className="p-5 space-y-4">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-soft)] text-xs text-[var(--text-secondary)] leading-relaxed">
              👋 Hey there! How can we help transform your digital presence today? Select an option below for instant WhatsApp consultation:
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-2">
              {QUICK_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleOpenWhatsApp(opt.text)}
                  className="w-full p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-emerald-500/50 hover:bg-emerald-500/10 text-left transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <opt.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                      {opt.label}
                    </span>
                  </div>
                  <Send className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {/* Direct WhatsApp CTA Button */}
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs tracking-wide uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-transform duration-200 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> Open Custom WhatsApp Chat
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Toggle WhatsApp Inquiry Widget"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-white" />
        )}
      </button>
    </div>
  );
}
