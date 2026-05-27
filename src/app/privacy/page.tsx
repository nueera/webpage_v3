'use client';

import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper } from '@/components/section-utils';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <SectionWrapper>
        <div className="container-nueera max-w-3xl">
          <h1 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-8">Privacy Policy</h1>
          <div className="space-y-8 text-[var(--text-secondary)] text-sm leading-relaxed">
            <p><em>Last updated: January 1, 2025</em></p>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">1. Introduction</h2>
              <p>NueEra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">2. Information We Collect</h2>
              <p>We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Company name and job title</li>
                <li>Project details and requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <p className="mt-2">We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and browsing behavior.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver and manage our services</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: <span className="text-[var(--blue-primary)] cursor-pointer" role="link" tabIndex={0} onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }} onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = 'mailto:hello@nueera.io'; }}>hello@nueera.io</span></p>
              <p>Address: Kothrud, Pune, Maharashtra, India</p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
