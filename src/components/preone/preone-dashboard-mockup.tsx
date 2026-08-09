'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarCheck,
  CreditCard,
  Target,
  FileBarChart,
  Settings,
  Bell,
  CheckCircle2,
  TrendingUp,
  Search,
} from 'lucide-react';
import { PreOneLogo } from './preone-logo';

const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'students', label: 'Students', icon: GraduationCap },
  { id: 'teachers', label: 'Teachers', icon: Users },
  { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
  { id: 'fees', label: 'Fees & Billing', icon: CreditCard },
  { id: 'crm', label: 'Admissions CRM', icon: Target },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const RECENT_ACTIVITIES = [
  { id: 1, title: 'New Admission Completed', detail: 'Aarav Sharma enrolled in Playgroup A', time: '10 mins ago', type: 'admission', color: 'bg-emerald-500' },
  { id: 2, title: 'Fee Payment Received', detail: '₹24,500 received for Q3 Tuition', time: '25 mins ago', type: 'fee', color: 'bg-blue-500' },
  { id: 3, title: 'Daily Attendance Marked', detail: '177/184 students marked present', time: '1 hour ago', type: 'attendance', color: 'bg-purple-500' },
  { id: 4, title: 'New Teacher Onboarded', detail: 'Meera Kapoor joined Nursery B', time: '3 hours ago', type: 'teacher', color: 'bg-pink-500' },
];

export function PreOneDashboardMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="relative w-full rounded-[28px] bg-white border border-[#E2E8F0] shadow-[0_25px_70px_rgba(124,58,237,0.12)] overflow-hidden text-[#111827] select-none font-sans">
      {/* Window Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-xs font-semibold text-[#64748B] tracking-wide">PreOne Cloud Workspace — Little Scholars Academy</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-3 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search students, fees..."
              readOnly
              className="pl-8 pr-4 py-1 rounded-full text-xs bg-white border border-[#CBD5E1] text-[#334155] placeholder-[#94A3B8] outline-none"
            />
          </div>
          <button className="relative p-1.5 rounded-full hover:bg-[#E2E8F0] text-[#64748B]">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EC4899]" />
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-[#CBD5E1]">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
              AD
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-[#111827] leading-tight">Anita Desai</span>
              <span className="text-[10px] text-[#64748B] leading-tight">Principal / Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex min-h-[520px]">
        {/* Sidebar */}
        <aside className="w-56 bg-[#F8FAFC] border-r border-[#E2E8F0] p-4 hidden lg:flex flex-col justify-between">
          <div className="space-y-6">
            <PreOneLogo size="sm" showSubtag={false} />
            <nav className="space-y-1">
              {SIDEBAR_ITEMS.map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-md'
                        : 'text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#111827]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#F5F3FF] to-[#EFF6FF] border border-[#DDD6FE] text-center">
            <p className="text-[11px] font-bold text-[#7C3AED]">PreOne v2.4 Active</p>
            <p className="text-[10px] text-[#64748B] mt-0.5">All 8 Portals Synced</p>
          </div>
        </aside>

        {/* Main Content View */}
        <main className="flex-1 p-5 md:p-6 bg-[#FFFFFF] space-y-6 overflow-y-auto">
          {/* Header Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="p-4 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] space-y-2">
              <div className="flex items-center justify-between text-[#7C3AED]">
                <span className="text-xs font-semibold text-[#64748B]">Total Students</span>
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#111827]">184</span>
                <span className="text-[10px] font-bold text-[#22C55E] flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +12
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-2">
              <div className="flex items-center justify-between text-[#2563EB]">
                <span className="text-xs font-semibold text-[#64748B]">Active Teachers</span>
                <Users className="w-4 h-4" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#111827]">18</span>
                <span className="text-[10px] font-bold text-[#2563EB]">100% Present</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] space-y-2">
              <div className="flex items-center justify-between text-[#8B5CF6]">
                <span className="text-xs font-semibold text-[#64748B]">Today Attendance</span>
                <CalendarCheck className="w-4 h-4" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#111827]">96.4%</span>
                <span className="text-[10px] font-bold text-[#8B5CF6]">177 / 184</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] space-y-2">
              <div className="flex items-center justify-between text-[#22C55E]">
                <span className="text-xs font-semibold text-[#64748B]">Monthly Fees</span>
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-[#111827]">₹4.85L</span>
                <span className="text-[10px] font-bold text-[#22C55E]">94% Paid</span>
              </div>
            </div>
          </div>

          {/* Analytics & Activity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">Attendance & Activity Trend</h4>
                  <p className="text-xs text-[#64748B]">Monthly attendance percentage across all grades</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-[#7C3AED] bg-[#F5F3FF] border border-[#DDD6FE]">
                  Academic Year 2026
                </span>
              </div>

              {/* Chart Visual */}
              <div className="h-44 w-full flex items-end justify-between gap-2 pt-6 px-2">
                {[
                  { month: 'Jun', val: 88, color: 'from-[#7C3AED] to-[#8B5CF6]' },
                  { month: 'Jul', val: 92, color: 'from-[#7C3AED] to-[#8B5CF6]' },
                  { month: 'Aug', val: 95, color: 'from-[#2563EB] to-[#06B6D4]' },
                  { month: 'Sep', val: 91, color: 'from-[#7C3AED] to-[#8B5CF6]' },
                  { month: 'Oct', val: 97, color: 'from-[#2563EB] to-[#06B6D4]' },
                  { month: 'Nov', val: 94, color: 'from-[#7C3AED] to-[#8B5CF6]' },
                  { month: 'Dec', val: 98, color: 'from-[#2563EB] to-[#EC4899]' },
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-[#E2E8F0] rounded-t-lg h-32 relative flex items-end overflow-hidden">
                      <div
                        className={`w-full rounded-t-lg bg-gradient-to-t ${bar.color} transition-all duration-500 group-hover:brightness-110`}
                        style={{ height: `${bar.val}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-[#64748B]">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activities Stream */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#111827]">Live Activity Feed</h4>
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              </div>

              <div className="space-y-3">
                {RECENT_ACTIVITIES.map((act) => (
                  <div key={act.id} className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${act.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#111827] truncate">{act.title}</p>
                      <p className="text-[11px] text-[#64748B] truncate">{act.detail}</p>
                      <span className="text-[9px] text-[#94A3B8]">{act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
