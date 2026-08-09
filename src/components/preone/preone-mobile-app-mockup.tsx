'use client';

import { useState } from 'react';
import {
  Bell,
  CheckCircle2,
  Calendar,
  Sparkles,
  Heart,
  Camera,
  MessageCircle,
  CreditCard,
  UserCheck,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

const STUDENT_FEED = [
  {
    id: 1,
    student: 'Aarav Sharma',
    grade: 'Playgroup A',
    action: 'Marked Present',
    time: '9:05 AM',
    avatar: '👨‍🎓',
    status: 'Present',
    statusColor: 'bg-emerald-500 text-white',
  },
  {
    id: 2,
    student: 'Riya Varma',
    grade: 'Nursery B',
    action: 'Daily Diary Update: Morning Snack & Art Activity',
    time: '10:30 AM',
    avatar: '👩‍🎓',
    status: 'Activity Logged',
    statusColor: 'bg-purple-500 text-white',
  },
  {
    id: 3,
    student: 'Kabir Mehta',
    grade: 'Kindergarten 1',
    action: 'Q3 Tuition Fee Paid (₹24,500)',
    time: '11:15 AM',
    avatar: '👦',
    status: 'Receipt #892',
    statusColor: 'bg-blue-500 text-white',
  },
];

export function PreOneMobileAppMockup() {
  const [activeTab, setActiveTab] = useState<'attendance' | 'diary' | 'fees'>('attendance');

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto py-4">
      {/* Background Ambient Glow & Floating Elements */}
      <div className="absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-[#7C3AED]/30 via-[#EC4899]/20 to-[#2563EB]/30 blur-3xl pointer-events-none animate-pulse" />

      {/* Floating Notification Badge 1 (Top Right) */}
      <div className="absolute -top-3 -right-4 z-30 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#DDD6FE] shadow-[0_15px_35px_rgba(124,58,237,0.2)] flex items-center gap-3 animate-bounce-gentle">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center shadow-md">
          <Bell className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-black text-[#111827]">Instant Parent Alert</p>
          <p className="text-[10px] text-[#64748B]">177 Parents Notified in 1s</p>
        </div>
      </div>

      {/* Floating Notification Badge 2 (Bottom Left) */}
      <div className="absolute -bottom-4 -left-4 z-30 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-[#BFDBFE] shadow-[0_15px_35px_rgba(37,99,235,0.2)] flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white flex items-center justify-center shadow-md">
          <CreditCard className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-black text-[#111827]">Auto Receipt Sent</p>
          <p className="text-[10px] font-bold text-[#22C55E]">₹24,500 Received via UPI</p>
        </div>
      </div>

      {/* Main Smartphone Bezel Frame */}
      <div className="relative z-20 rounded-[44px] p-3.5 bg-[#0F172A] border-4 border-slate-700 shadow-[0_30px_90px_rgba(15,23,42,0.4)]">
        {/* Phone Speaker Notch / Dynamic Island */}
        <div className="w-28 h-5 bg-[#020617] rounded-full mx-auto mb-3 flex items-center justify-center gap-2 border border-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
        </div>

        {/* Mobile App Screen Content */}
        <div className="rounded-[34px] bg-[#F8FAFC] overflow-hidden text-[#111827] flex flex-col min-h-[580px] shadow-inner font-sans">
          {/* Mobile Top Bar */}
          <div className="p-4 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#2563EB] text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/preone-logo.png"
                  alt="PreOne"
                  width={100}
                  height={50}
                  className="h-7 w-auto object-contain filter brightness-200"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold">
                  🔔
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-[#7C3AED] font-black text-xs flex items-center justify-center shadow-md">
                  MA
                </div>
              </div>
            </div>

            {/* Teacher Greeting */}
            <div>
              <p className="text-[11px] font-medium text-white/80">Welcome back,</p>
              <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                Ms. Ananya Kapoor <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              </h3>
              <p className="text-[10px] text-white/70">Playgroup A Lead Teacher • Room 102</p>
            </div>

            {/* Quick Live Stats Pill */}
            <div className="p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-bold text-white">Today's Attendance</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-400 text-slate-950">
                24 / 25 Present
              </span>
            </div>
          </div>

          {/* Quick Action Chips Grid */}
          <div className="p-4 space-y-4 flex-1">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab('attendance')}
                className={`p-2.5 rounded-2xl border text-center transition-all ${
                  activeTab === 'attendance'
                    ? 'bg-[#F5F3FF] border-[#7C3AED] text-[#7C3AED] shadow-sm font-bold'
                    : 'bg-white border-[#E2E8F0] text-[#64748B]'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-[#7C3AED]" />
                <span className="text-[10px] font-extrabold block">1-Tap Roll</span>
              </button>

              <button
                onClick={() => setActiveTab('diary')}
                className={`p-2.5 rounded-2xl border text-center transition-all ${
                  activeTab === 'diary'
                    ? 'bg-[#FDF2F8] border-[#EC4899] text-[#EC4899] shadow-sm font-bold'
                    : 'bg-white border-[#E2E8F0] text-[#64748B]'
                }`}
              >
                <Camera className="w-5 h-5 mx-auto mb-1 text-[#EC4899]" />
                <span className="text-[10px] font-extrabold block">Daily Diary</span>
              </button>

              <button
                onClick={() => setActiveTab('fees')}
                className={`p-2.5 rounded-2xl border text-center transition-all ${
                  activeTab === 'fees'
                    ? 'bg-[#EFF6FF] border-[#2563EB] text-[#2563EB] shadow-sm font-bold'
                    : 'bg-white border-[#E2E8F0] text-[#64748B]'
                }`}
              >
                <CreditCard className="w-5 h-5 mx-auto mb-1 text-[#2563EB]" />
                <span className="text-[10px] font-extrabold block">Collect Fee</span>
              </button>
            </div>

            {/* Live Feed Title */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-black text-[#111827]">Live Classroom Stream</span>
              <span className="text-[10px] font-bold text-[#7C3AED] flex items-center gap-0.5">
                Real-time Sync <ShieldCheck className="w-3 h-3" />
              </span>
            </div>

            {/* Feed Cards List */}
            <div className="space-y-2.5">
              {STUDENT_FEED.map((item) => (
                <div key={item.id} className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.avatar}</span>
                      <div>
                        <p className="text-xs font-black text-[#111827]">{item.student}</p>
                        <p className="text-[9px] text-[#64748B]">{item.grade}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#475569] pt-1 border-t border-[#F1F5F9]">
                    <span className="font-medium text-[#334155]">{item.action}</span>
                    <span className="text-[#94A3B8]">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom App Navigation Bar */}
          <div className="p-3 bg-white border-t border-[#E2E8F0] flex items-center justify-around text-[#64748B]">
            <button className="flex flex-col items-center gap-0.5 text-[#7C3AED] font-bold">
              <Calendar className="w-4 h-4" />
              <span className="text-[9px]">Class</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-[#7C3AED]">
              <MessageCircle className="w-4 h-4" />
              <span className="text-[9px]">Chat</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-[#7C3AED]">
              <Heart className="w-4 h-4" />
              <span className="text-[9px]">Care</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-[#7C3AED]">
              <ChevronRight className="w-4 h-4" />
              <span className="text-[9px]">More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
