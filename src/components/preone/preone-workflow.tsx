'use client';

import { UserPlus, GraduationCap, CalendarCheck, CreditCard, Target, MessageSquare, FileText } from 'lucide-react';

const WORKFLOW_STEPS = [
  { id: 'admissions', title: 'Admissions', desc: 'Enquiry to Enrolled', icon: UserPlus, color: 'from-[#7C3AED] to-[#8B5CF6]' },
  { id: 'students', title: 'Students', desc: 'Profiles & Grades', icon: GraduationCap, color: 'from-[#2563EB] to-[#3B82F6]' },
  { id: 'attendance', title: 'Attendance', desc: 'Real-time Tracking', icon: CalendarCheck, color: 'from-[#8B5CF6] to-[#A855F7]' },
  { id: 'fees', title: 'Fees & Billing', desc: 'Invoicing & Receipts', icon: CreditCard, color: 'from-[#06B6D4] to-[#0EA5E9]' },
  { id: 'crm', title: 'Leads CRM', desc: 'Pipeline & Visits', icon: Target, color: 'from-[#EC4899] to-[#F43F5E]' },
  { id: 'communication', title: 'Communication', desc: 'Parent Broadcasts', icon: MessageSquare, color: 'from-[#F59E0B] to-[#D97706]' },
  { id: 'reports', title: 'Analytics', desc: 'Growth Reports', icon: FileText, color: 'from-[#22C55E] to-[#10B981]' },
];

export function PreOneWorkflow() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-soft)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      <div className="container-nueera space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[var(--bg-glass)] text-[#2563EB] dark:text-[#60A5FA] border border-[var(--border-soft)]">
            End-to-End Operating System
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            Built for the way <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">modern preschools work.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Everything you need to manage your preschool, from initial parent enquiry to daily operations and annual graduation.
          </p>
        </div>

        {/* Horizontal Workflow Track */}
        <div className="relative">
          {/* Connector Dotted Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed border-[var(--border-soft)] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#7C3AED]/50 group"
                >
                  {/* Step Number Tag */}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    0{idx + 1}
                  </span>

                  {/* Circular Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-md transition-transform group-hover:scale-110 mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Label */}
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">{step.title}</h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
