import React, { useState } from 'react';
import { Sparkles, Activity, HeartHandshake, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const NoteSection: React.FC = () => {
  const [activePersonaTab, setActivePersonaTab] = useState<'quote' | 'nurse' | 'beauty'>('quote');

  return (
    <div className="w-full mb-6">
      {/* Luxury Note Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-[#FAF5FF] to-[#FFFDF7] border border-[#D4AF37]/35 shadow-sm p-5 sm:p-6 text-left">
        {/* Decorative Champagne Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F3E8FF] to-transparent pointer-events-none rounded-tr-3xl" />
        <div className="absolute top-3 right-3 text-[#D4AF37]/40 text-xl font-serif select-none">
          ✦
        </div>

        {/* Small Persona Selector Pills */}
        <div className="flex items-center gap-1.5 mb-4 p-1 rounded-xl bg-purple-100/50 border border-purple-200/40 w-fit text-xs">
          <button
            onClick={() => setActivePersonaTab('quote')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              activePersonaTab === 'quote'
                ? 'bg-white text-[#4A2072] shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Personal Note
          </button>
          <button
            onClick={() => setActivePersonaTab('nurse')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              activePersonaTab === 'nurse'
                ? 'bg-white text-[#4A2072] shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>🩺 Surgical Nurse</span>
          </button>
          <button
            onClick={() => setActivePersonaTab('beauty')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              activePersonaTab === 'beauty'
                ? 'bg-white text-[#4A2072] shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>🌸 Beauty & Lifestyle</span>
          </button>
        </div>

        {/* Tab 1: The Personal Manifesto Note */}
        {activePersonaTab === 'quote' && (
          <div className="transition-all duration-300">
            <div className="flex items-start gap-2 mb-2">
              <span className="font-serif-luxury text-3xl sm:text-4xl leading-none text-[#D4AF37]/60 select-none">
                “
              </span>
              <p className="font-serif-luxury italic text-xs sm:text-[13px] leading-relaxed text-neutral-700 pt-1">
                {PROFILE_DATA.note.quote}
              </p>
            </div>

            {/* Cursive Signature in Champagne Gold */}
            <div className="pt-3 border-t border-[#D4AF37]/25 flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-sans-clean font-medium">
                With Grace & Precision,
              </span>
              <div className="font-signature text-3xl sm:text-4xl text-gold-shimmer font-bold select-none py-1">
                {PROFILE_DATA.note.signature}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: The Medico-Surgical Nurse side */}
        {activePersonaTab === 'nurse' && (
          <div className="transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-serif-luxury font-semibold text-sm text-[#2A1B3D]">
                {PROFILE_DATA.nursePersona.title}
              </h3>
            </div>
            <p className="font-sans-clean text-xs leading-relaxed text-neutral-600 mb-3">
              {PROFILE_DATA.nursePersona.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PROFILE_DATA.nursePersona.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-teal-50/80 border border-teal-100 text-teal-800 text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: The Beauty Creator & Entrepreneur side */}
        {activePersonaTab === 'beauty' && (
          <div className="transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="font-serif-luxury font-semibold text-sm text-[#2A1B3D]">
                {PROFILE_DATA.beautyPersona.title}
              </h3>
            </div>
            <p className="font-sans-clean text-xs leading-relaxed text-neutral-600 mb-3">
              {PROFILE_DATA.beautyPersona.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PROFILE_DATA.beautyPersona.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-purple-50/80 border border-purple-100 text-purple-800 text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
