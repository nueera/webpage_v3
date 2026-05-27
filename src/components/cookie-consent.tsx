'use client';

import { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nueera-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nueera-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nueera-cookie-consent', 'declined');
    setVisible(false);
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[3000] transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div
        className="mx-4 mb-4 md:mx-auto md:max-w-2xl rounded-2xl p-6 border border-[var(--border-soft)]"
        style={{
          background: 'var(--bg-main)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.15)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)] transition-all duration-200"
          aria-label="Dismiss cookie banner"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-[var(--blue-primary)]" />
          <h3 className="font-bold text-[var(--text-primary)] text-sm">Cookie Settings</h3>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-5 pr-6">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
          By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="btn-primary-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
