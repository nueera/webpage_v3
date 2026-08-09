'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('nueera-cookies-accepted');
      if (!accepted) {
        const timer = setTimeout(() => setVisible(true), 3000);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem('nueera-cookies-accepted', 'true'); } catch {}
    setVisible(false);
  };

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${visible ? 'visible' : ''}`}>
      <div className="container-nueera flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-5xl">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-[var(--orange-primary)] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[var(--text-primary)] text-sm font-medium mb-1">We use cookies</p>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={dismiss} className="cookie-banner-btn cookie-dismiss">Dismiss</button>
          <button onClick={accept} className="cookie-banner-btn cookie-accept">Accept All</button>
        </div>
      </div>
    </div>
  );
}
