'use client';

import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Megaphone,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  UserCheck,
  LayoutDashboard,
  Search,
  MessageSquareCode,
  Send,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';
import { TiltCard } from './ui/tilt-card';

/* ─── Estimator Data Config ─── */

interface ServiceCategory {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  basePriceInr: number;
  basePriceUsd: number;
  baseWeeks: number;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'web-dev',
    name: 'Web Application & Store',
    desc: 'Headless Next.js storefronts, web applications, and web platforms.',
    icon: Globe,
    basePriceInr: 45000,
    basePriceUsd: 600,
    baseWeeks: 4,
  },
  {
    id: 'mobile-app',
    name: 'Mobile App (iOS & Android)',
    desc: 'Cross-platform mobile apps built with Flutter or React Native.',
    icon: Smartphone,
    basePriceInr: 65000,
    basePriceUsd: 850,
    baseWeeks: 6,
  },
  {
    id: 'ai-automation',
    name: 'AI & Tech Automation',
    desc: 'Custom workflows, Python microservices, and LLM integrations.',
    icon: Cpu,
    basePriceInr: 55000,
    basePriceUsd: 750,
    baseWeeks: 5,
  },
  {
    id: 'ui-ux',
    name: 'UI/UX & Brand Identity',
    desc: 'Component design systems, wireframes, logo marks, and visual guidelines.',
    icon: Palette,
    basePriceInr: 35000,
    basePriceUsd: 450,
    baseWeeks: 3,
  },
  {
    id: 'growth-marketing',
    name: 'Growth Marketing & SEO',
    desc: 'Data-driven acquisition funnels, Google Ads, and technical SEO overhaul.',
    icon: Megaphone,
    basePriceInr: 30000,
    basePriceUsd: 400,
    baseWeeks: 4,
  },
];

interface ScaleOption {
  id: string;
  name: string;
  desc: string;
  multiplier: number;
}

const SCALE_OPTIONS: ScaleOption[] = [
  { id: 'starter', name: 'Starter / MVP', desc: 'Core features built for rapid market launch', multiplier: 1.0 },
  { id: 'growth', name: 'Business Scale', desc: 'Expanded features, analytics, and custom UX', multiplier: 1.5 },
  { id: 'enterprise', name: 'Enterprise Hub', desc: 'Multi-region deployment, high availability, and API scale', multiplier: 2.2 },
];

interface AddonOption {
  id: string;
  name: string;
  inr: number;
  usd: number;
  icon: React.ComponentType<{ className?: string }>;
}

const ADDON_OPTIONS: AddonOption[] = [
  { id: 'auth', name: 'User Auth & Role Management', inr: 10000, usd: 150, icon: UserCheck },
  { id: 'payments', name: 'Payment Gateway Integration', inr: 12000, usd: 160, icon: CreditCard },
  { id: 'dashboard', name: 'Custom Admin Dashboard', inr: 18000, usd: 240, icon: LayoutDashboard },
  { id: 'cms', name: 'CMS & Content Engine', inr: 15000, usd: 200, icon: ShieldCheck },
  { id: 'ai-bot', name: 'AI Chatbot & Smart Search', inr: 25000, usd: 320, icon: MessageSquareCode },
  { id: 'seo-audit', name: 'Speed & SEO Audit Package', inr: 10000, usd: 150, icon: Search },
];

interface TimelineOption {
  id: string;
  name: string;
  modifier: number;
  weeksDelta: number;
}

const TIMELINE_OPTIONS: TimelineOption[] = [
  { id: 'standard', name: 'Standard Delivery Schedule', modifier: 1.0, weeksDelta: 0 },
  { id: 'fast-track', name: 'Fast-Track Sprint (-2 weeks)', modifier: 1.2, weeksDelta: -2 },
  { id: 'flexible', name: 'Flexible Delivery (+2 weeks)', modifier: 0.95, weeksDelta: 2 },
];

export function ServiceSelector() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(SERVICE_CATEGORIES[0]);
  const [selectedScale, setSelectedScale] = useState<ScaleOption>(SCALE_OPTIONS[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['auth', 'payments']);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>(TIMELINE_OPTIONS[0]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Calculate totals
  const addonsTotalInr = ADDON_OPTIONS.filter((a) => selectedAddons.includes(a.id)).reduce(
    (sum, a) => sum + a.inr,
    0
  );
  const addonsTotalUsd = ADDON_OPTIONS.filter((a) => selectedAddons.includes(a.id)).reduce(
    (sum, a) => sum + a.usd,
    0
  );

  const rawInr = (selectedCategory.basePriceInr * selectedScale.multiplier + addonsTotalInr) * selectedTimeline.modifier;
  const rawUsd = (selectedCategory.basePriceUsd * selectedScale.multiplier + addonsTotalUsd) * selectedTimeline.modifier;

  const minInr = Math.round(rawInr * 0.9);
  const maxInr = Math.round(rawInr * 1.1);
  const minUsd = Math.round(rawUsd * 0.9);
  const maxUsd = Math.round(rawUsd * 1.1);

  const estimatedWeeks = Math.max(2, Math.round(selectedCategory.baseWeeks * selectedScale.multiplier + selectedTimeline.weeksDelta));

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val);

  const generateWhatsAppMessage = () => {
    const addonsList = ADDON_OPTIONS.filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)
      .join(', ');
    const text = `Hi NueEra! I used your Interactive Estimator on your website.\n\n*Service:* ${selectedCategory.name}\n*Scale:* ${selectedScale.name}\n*Add-ons:* ${addonsList || 'None'}\n*Timeline:* ${selectedTimeline.name}\n*Estimated Investment:* ₹${formatCurrency(minInr)} - ₹${formatCurrency(maxInr)} (~$${minUsd} - $${maxUsd})\n*Estimated Delivery:* ${estimatedWeeks} weeks\n\nI would like to schedule a strategy call to get a formal proposal!`;
    return `https://wa.me/917066607424?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] bottom-[-10%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Instant Project Calculator</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Project Scope & <span className="gradient-text">Cost Estimator</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Select your requirements below to get a transparent investment range and delivery timeline in real time.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Step 1: Select Category */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--blue-primary)] text-white text-[10px] flex items-center justify-center">1</span>
                Select Core Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[var(--bg-tertiary)] border-[var(--blue-primary)] shadow-[0_0_20px_var(--blue-glow)]'
                          : 'bg-[var(--bg-glass)] border-[var(--border-soft)] hover:border-[var(--blue-primary)]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-[var(--blue-primary)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--blue-primary)]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[var(--text-primary)]">{cat.name}</h5>
                        <p className="text-xs text-[var(--text-muted)] leading-tight mt-1 line-clamp-2">{cat.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--blue-primary)] text-white text-[10px] flex items-center justify-center">2</span>
                Project Scale & Complexity
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCALE_OPTIONS.map((scale) => {
                  const isSelected = selectedScale.id === scale.id;

                  return (
                    <button
                      key={scale.id}
                      onClick={() => setSelectedScale(scale)}
                      className={`p-4 rounded-2xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[var(--bg-tertiary)] border-[var(--orange-primary)] shadow-[0_0_16px_rgba(255,154,31,0.25)]'
                          : 'bg-[var(--bg-glass)] border-[var(--border-soft)] hover:border-[var(--orange-primary)]'
                      }`}
                    >
                      <h5 className="text-sm font-bold text-[var(--text-primary)]">{scale.name}</h5>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">{scale.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--blue-primary)] text-white text-[10px] flex items-center justify-center">3</span>
                Feature Add-ons (Optional)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const Icon = addon.icon;

                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl text-left transition-all border flex items-center justify-between ${
                        isChecked
                          ? 'bg-[var(--bg-tertiary)] border-[var(--blue-primary)] text-[var(--text-primary)]'
                          : 'bg-[var(--bg-glass)] border-[var(--border-soft)] text-[var(--text-secondary)] opacity-80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[var(--orange-primary)]" />
                        <span className="text-xs font-semibold">{addon.name}</span>
                      </div>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${isChecked ? 'bg-[var(--blue-primary)] border-[var(--blue-primary)] text-white' : 'border-[var(--border-soft)]'}`}>
                        {isChecked && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Timeline */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--blue-primary)] text-white text-[10px] flex items-center justify-center">4</span>
                Timeline Preference
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_OPTIONS.map((time) => {
                  const isSelected = selectedTimeline.id === time.id;

                  return (
                    <button
                      key={time.id}
                      onClick={() => setSelectedTimeline(time)}
                      className={`p-3.5 rounded-xl text-center text-xs font-semibold transition-all border ${
                        isSelected
                          ? 'bg-[var(--blue-primary)] text-white border-[var(--blue-primary)] shadow-md'
                          : 'bg-[var(--bg-glass)] border-[var(--border-soft)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {time.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <TiltCard maxDegree={4}>
              <div className="p-8 rounded-3xl bg-[var(--bg-glass)] border border-[var(--border-soft)] backdrop-blur-xl text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]" />

                <span className="text-[10px] uppercase font-bold text-[var(--orange-primary)] tracking-wider">
                  Estimated Investment Range
                </span>

                <div className="mt-2 flex items-baseline gap-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-display">
                    ₹{formatCurrency(minInr)} - ₹{formatCurrency(maxInr)}
                  </div>
                </div>
                <div className="text-xs text-[var(--text-muted)] font-medium mt-1">
                  Approx. ${minUsd} - ${maxUsd} USD
                </div>

                <hr className="my-6 border-[var(--border-soft)]" />

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">Core Solution</span>
                    <span className="font-bold text-[var(--text-primary)]">{selectedCategory.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">Target Scope</span>
                    <span className="font-bold text-[var(--text-primary)]">{selectedScale.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">Selected Add-ons</span>
                    <span className="font-bold text-[var(--text-primary)]">{selectedAddons.length} Selected</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">Estimated Timeline</span>
                    <span className="font-bold text-[var(--blue-primary)]">{estimatedWeeks} Weeks</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <PremiumButton
                    onClick={() => window.open(generateWhatsAppMessage(), '_blank')}
                    className="w-full text-xs sm:text-sm py-3.5"
                  >
                    Send Estimate via WhatsApp <Send className="w-4 h-4 ml-1" />
                  </PremiumButton>

                  <button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl text-xs font-semibold text-[var(--text-secondary)] bg-[var(--bg-tertiary)] border border-[var(--border-soft)] hover:border-[var(--blue-primary)] transition-all flex items-center justify-center gap-1.5"
                  >
                    Request Detailed Proposal <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mt-4 text-[10px] text-[var(--text-muted)] text-center">
                  * Final quote provided after technical discovery call. Non-binding estimate.
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
