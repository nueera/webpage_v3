'use client';

import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper } from '@/components/section-utils';

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <SectionWrapper>
        <div className="container-nueera max-w-3xl">
          <h1 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-8">Terms of Service</h1>
          <div className="space-y-8 text-[var(--text-secondary)] text-sm leading-relaxed">
            <p><em>Last updated: January 1, 2025</em></p>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the services provided by NueEra, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">2. Services</h2>
              <p>NueEra provides IT and digital solutions including but not limited to web development, mobile app development, UI/UX design, branding, digital marketing, and software consulting. The specific scope of services will be defined in individual project agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">3. Project Agreements</h2>
              <p>Each project engagement will be governed by a separate project agreement that outlines the scope, timeline, deliverables, and payment terms. These Terms of Service supplement but do not replace individual project agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">4. Payment Terms</h2>
              <p>Payment terms are defined in individual project agreements. Unless otherwise specified:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>An initial deposit may be required before work begins</li>
                <li>Milestone-based payments apply for project work</li>
                <li>Monthly billing applies for ongoing engagements</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">5. Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership of custom work created specifically for their project. NueEra retains the right to use general knowledge, skills, and experience gained during the project. Pre-existing intellectual property remains the property of its respective owners.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">6. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This obligation survives the termination of any project agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">7. Limitation of Liability</h2>
              <p>NueEra&apos;s total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">8. Contact</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">Email: <span className="text-[var(--blue-primary)] cursor-pointer" role="link" tabIndex={0} onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }} onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = 'mailto:hello@nueera.io'; }}>hello@nueera.io</span></p>
              <p>Address: Kothrud, Pune, Maharashtra, India</p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
