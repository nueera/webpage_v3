'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, Globe, Megaphone, Cpu, Palette, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';

const QUIZ_STEPS = [
  {
    question: 'What best describes your current need?',
    options: [
      { id: 'website', label: 'Build a new website or app', icon: Globe },
      { id: 'growth', label: 'Grow my existing business online', icon: Megaphone },
      { id: 'automate', label: 'Automate or streamline processes', icon: Cpu },
      { id: 'design', label: 'Redesign my brand or product', icon: Palette },
    ],
  },
  {
    question: 'What is your timeline?',
    options: [
      { id: 'asap', label: 'ASAP — Need it fast', icon: Sparkles },
      { id: 'month', label: 'Within a month', icon: Lightbulb },
      { id: 'quarter', label: 'Within 3 months', icon: Lightbulb },
      { id: 'flexible', label: 'Flexible — quality matters most', icon: CheckCircle2 },
    ],
  },
];

const SERVICE_RECOMMENDATIONS: Record<string, { title: string; desc: string; icon: typeof Globe }> = {
  'website-asap': { title: 'Website & App Launch System', desc: 'Our rapid deployment framework delivers production-ready websites in as little as 2 weeks.', icon: Globe },
  'website-month': { title: 'Full-Stack Development', desc: 'Comprehensive web and mobile development with conversion-optimized UX, built for scale.', icon: Globe },
  'website-quarter': { title: 'Enterprise Platform Build', desc: 'Complex, scalable platforms with custom integrations, advanced features, and thorough testing.', icon: Globe },
  'website-flexible': { title: 'Custom Digital Product', desc: 'We craft bespoke digital solutions tailored to your unique business requirements.', icon: Globe },
  'growth-asap': { title: 'Growth Sprint Package', desc: 'Intensive 4-week growth sprint with SEO, paid ads, and content strategy.', icon: Megaphone },
  'growth-month': { title: 'Growth Marketing System', desc: 'Data-driven acquisition funnels and performance marketing that compounds over time.', icon: Megaphone },
  'growth-quarter': { title: 'Comprehensive Digital Strategy', desc: 'Full digital transformation with long-term growth roadmap and measurable KPIs.', icon: Megaphone },
  'growth-flexible': { title: 'Brand Authority Building', desc: 'Establish market leadership with content strategy, thought leadership, and community.', icon: Megaphone },
  'automate-asap': { title: 'Quick Automation Audit', desc: 'Identify and implement the top 3 automation opportunities in your workflow within weeks.', icon: Cpu },
  'automate-month': { title: 'Tech Automation System', desc: 'Eliminate manual bottlenecks with intelligent automation that frees your team.', icon: Cpu },
  'automate-quarter': { title: 'Digital Transformation', desc: 'End-to-end process digitization with custom tools, integrations, and training.', icon: Cpu },
  'automate-flexible': { title: 'AI-Powered Solutions', desc: 'Leverage AI and machine learning to automate complex decisions and workflows.', icon: Cpu },
  'design-asap': { title: 'Rapid Brand Refresh', desc: 'Quick brand identity update with logo, color palette, and key brand assets in 2 weeks.', icon: Palette },
  'design-month': { title: 'Complete Brand System', desc: 'Full brand identity including logo, guidelines, marketing collateral, and social templates.', icon: Palette },
  'design-quarter': { title: 'Brand & Product Design', desc: 'Comprehensive design system for brand identity plus UI/UX for your digital products.', icon: Palette },
  'design-flexible': { title: 'Design Thinking Workshop', desc: 'Collaborative design sprint to ideate, prototype, and validate your vision before building.', icon: Palette },
};

export function ServiceSelector() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const recommendation = showResult
    ? SERVICE_RECOMMENDATIONS[`${answers[0]}-${answers[1]}`] || SERVICE_RECOMMENDATIONS['website-flexible']
    : null;

  const RecIcon = recommendation?.icon || Globe;

  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] bottom-[-10%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Find Your Solution</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              What Do You <span className="gradient-text">Need?</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Answer 2 quick questions and we will recommend the perfect solution for your business.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <FadeUp key={currentStep}>
              <div>
                {/* Progress indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {QUIZ_STEPS.map((_, idx) => (
                    <div key={idx} className="flex items-center gap-3 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                        ${idx < currentStep ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white' :
                          idx === currentStep ? 'bg-[var(--blue-primary)] text-white shadow-[0_0_12px_var(--glow-blue)]' :
                          'bg-[var(--bg-glass)] text-[var(--text-muted)] border border-[var(--border-soft)]'}`}>
                        {idx < currentStep ? '✓' : idx + 1}
                      </div>
                      {idx < QUIZ_STEPS.length - 1 && (
                        <div className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${idx < currentStep ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]' : 'bg-[var(--border-soft)]'}`} />
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                  {QUIZ_STEPS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUIZ_STEPS[currentStep].options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className="service-quiz-option haptic-ripple flex items-center gap-4 text-left"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[var(--blue-primary)]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[var(--blue-primary)]" />
                        </div>
                        <span className="font-medium text-[var(--text-primary)] text-sm">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ) : (
            <FadeUp>
              <div className="service-quiz-result text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_24px_var(--glow-blue)]">
                  <RecIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-[var(--orange-primary)] mb-2">Recommended for you</p>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{recommendation?.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-md mx-auto">{recommendation?.desc}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <PremiumButton onClick={() => window.open('https://wa.me/917066607424', '_blank')}>
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </PremiumButton>
                  <button onClick={handleReset} className="text-[var(--text-muted)] text-sm font-medium hover:text-[var(--blue-primary)] transition-colors">
                    Start Over
                  </button>
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
