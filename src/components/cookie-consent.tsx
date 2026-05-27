'use client';

import { useState, useEffect, useCallback, createContext, useContext } from 'react';

/* ==========================================
   TYPES
   ========================================== */
export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  consentDate: string | null;
  consentVersion: string;
}

interface ConsentContextValue {
  preferences: ConsentPreferences;
  hasConsented: (category: keyof Pick<ConsentPreferences, 'analytics' | 'marketing' | 'functional'>) => boolean;
  updatePreferences: (prefs: Partial<ConsentPreferences>) => void;
  resetConsent: () => void;
  isLoaded: boolean;
}

/* ==========================================
   CONSTANTS
   ========================================== */
const STORAGE_KEY = 'nueera-cookie-consent';
const CONSENT_VERSION = '1.0';

const DEFAULT_PREFERENCES: ConsentPreferences = {
  analytics: false,
  marketing: false,
  functional: false,
  consentDate: null,
  consentVersion: CONSENT_VERSION,
};

/* ==========================================
   HELPERS
   ========================================== */
function loadPreferences(): ConsentPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    // If version mismatch, reset consent (GDPR re-consent)
    if (parsed.consentVersion !== CONSENT_VERSION) return DEFAULT_PREFERENCES;
    return {
      analytics: typeof parsed.analytics === 'boolean' ? parsed.analytics : false,
      marketing: typeof parsed.marketing === 'boolean' ? parsed.marketing : false,
      functional: typeof parsed.functional === 'boolean' ? parsed.functional : false,
      consentDate: parsed.consentDate || null,
      consentVersion: parsed.consentVersion || CONSENT_VERSION,
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function savePreferences(prefs: ConsentPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // localStorage unavailable, fail silently
  }
}

/* ==========================================
   CONTEXT
   ========================================== */
const ConsentContext = createContext<ConsentContextValue | null>(null);

/* ==========================================
   HOOK: useConsent
   ========================================== */
export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    // Fallback: return safe defaults if used outside provider
    return {
      preferences: DEFAULT_PREFERENCES,
      hasConsented: () => false,
      updatePreferences: () => {},
      resetConsent: () => {},
      isLoaded: false,
    };
  }
  return ctx;
}

/* ==========================================
   PROVIDER COMPONENT
   ========================================== */
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<ConsentPreferences>(() => {
    if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
    return loadPreferences();
  });

  // Listen for updates from the banner component and other tabs
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentPreferences>).detail;
      if (detail) setPreferences(detail);
    };
    window.addEventListener('nueera-consent-update', handler);

    // Sync from storage changes in other tabs
    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue) as ConsentPreferences;
          setPreferences(parsed);
        } catch { /* ignore */ }
      }
    };
    window.addEventListener('storage', storageHandler);

    return () => {
      window.removeEventListener('nueera-consent-update', handler);
      window.removeEventListener('storage', storageHandler);
    };
  }, []);

  const hasConsented = useCallback(
    (category: keyof Pick<ConsentPreferences, 'analytics' | 'marketing' | 'functional'>): boolean => {
      return preferences[category] === true;
    },
    [preferences]
  );

  const updatePreferences = useCallback((prefs: Partial<ConsentPreferences>) => {
    setPreferences((prev) => {
      const updated: ConsentPreferences = {
        ...prev,
        ...prefs,
        consentDate: new Date().toISOString(),
        consentVersion: CONSENT_VERSION,
      };
      savePreferences(updated);
      return updated;
    });
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPreferences(DEFAULT_PREFERENCES);
  }, []);

  return (
    <ConsentContext.Provider value={{ preferences, hasConsented, updatePreferences, resetConsent, isLoaded: true }}>
      {children}
    </ConsentContext.Provider>
  );
}

/* ==========================================
   COOKIE CONSENT BANNER COMPONENT
   ========================================== */
type BannerView = 'summary' | 'customize';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<BannerView>('summary');
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [functional, setFunctional] = useState(false);

  useEffect(() => {
    // Only show if no consent decision has been made (GDPR: reject by default)
    const stored = loadPreferences();
    if (!stored.consentDate) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs: ConsentPreferences = {
      analytics: true,
      marketing: true,
      functional: true,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    savePreferences(prefs);
    // Dispatch a custom event so the ConsentProvider can update
    window.dispatchEvent(new CustomEvent('nueera-consent-update', { detail: prefs }));
    setVisible(false);
  };

  const handleRejectAll = () => {
    const prefs: ConsentPreferences = {
      analytics: false,
      marketing: false,
      functional: false,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    savePreferences(prefs);
    window.dispatchEvent(new CustomEvent('nueera-consent-update', { detail: prefs }));
    setVisible(false);
  };

  const handleSaveCustom = () => {
    const prefs: ConsentPreferences = {
      analytics,
      marketing,
      functional,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    savePreferences(prefs);
    window.dispatchEvent(new CustomEvent('nueera-consent-update', { detail: prefs }));
    setVisible(false);
  };

  const handleCustomize = () => {
    setView('customize');
  };

  const handleBack = () => {
    setView('summary');
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[3000]"
      style={{
        animation: 'cookieSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <div
        className="mx-4 mb-4 md:mx-auto md:max-w-2xl rounded-2xl p-6 border border-[var(--border-soft)] relative"
        style={{
          background: 'var(--bg-main)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.15)',
        }}
      >
        {/* Summary View */}
        {view === 'summary' && (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-[var(--blue-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="font-bold text-[var(--text-primary)] text-sm">We value your privacy</h3>
            </div>

            {/* Description */}
            <p className="text-[var(--text-secondary)] text-sm mb-5">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              You can choose which cookies to allow. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
              <span className="text-[var(--text-muted)] text-xs">(Reject by default — GDPR compliant)</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleRejectAll}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
              >
                Reject All
              </button>
              <button
                onClick={handleCustomize}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
              >
                Customize
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn-primary-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              >
                Accept All
              </button>
            </div>
          </div>
        )}

        {/* Customize View */}
        {view === 'customize' && (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-[var(--blue-primary)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3 className="font-bold text-[var(--text-primary)] text-sm">Customize Cookie Preferences</h3>
            </div>

            <p className="text-[var(--text-secondary)] text-sm mb-5">
              Manage your cookie preferences. Strictly necessary cookies cannot be disabled as they are required for the website to function.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-6">
              {/* Functional */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={functional}
                    onChange={(e) => setFunctional(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded border-2 border-[var(--border-soft)] peer-checked:border-[var(--blue-primary)] peer-checked:bg-[var(--blue-primary)] transition-all duration-200 flex items-center justify-center">
                    {functional && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-[var(--text-primary)] text-sm font-semibold block">Functional</span>
                  <span className="text-[var(--text-muted)] text-xs">Enable personalized features and remember your preferences.</span>
                </div>
              </label>

              {/* Analytics */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded border-2 border-[var(--border-soft)] peer-checked:border-[var(--blue-primary)] peer-checked:bg-[var(--blue-primary)] transition-all duration-200 flex items-center justify-center">
                    {analytics && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-[var(--text-primary)] text-sm font-semibold block">Analytics (GA4)</span>
                  <span className="text-[var(--text-muted)] text-xs">Help us understand how visitors interact with our website using Google Analytics 4.</span>
                </div>
              </label>

              {/* Marketing */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 rounded border-2 border-[var(--border-soft)] peer-checked:border-[var(--blue-primary)] peer-checked:bg-[var(--blue-primary)] transition-all duration-200 flex items-center justify-center">
                    {marketing && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-[var(--text-primary)] text-sm font-semibold block">Marketing</span>
                  <span className="text-[var(--text-muted)] text-xs">Used for targeted advertising and measuring ad campaign effectiveness.</span>
                </div>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={handleRejectAll}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
              >
                Reject All
              </button>
              <button
                onClick={handleSaveCustom}
                className="btn-primary-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide-up animation */}
      <style jsx global>{`
        @keyframes cookieSlideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
