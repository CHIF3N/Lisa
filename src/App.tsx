/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import { PROFILE_DATA } from './data/profile';
import { BackgroundOverlay } from './components/BackgroundOverlay';
import { BackgroundDoodles } from './components/BackgroundDoodles';
import { ProfileHeader } from './components/ProfileHeader';
import { NoteSection } from './components/NoteSection';
import { ActionLinks } from './components/ActionLinks';
import { QrCodeModal } from './components/QrCodeModal';

export default function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col justify-between items-center py-6 sm:py-10 px-3 sm:px-4 font-sans-clean overflow-x-hidden">
      {/* 1. Pure Ambient Luxury Background Gradients (No Photos) */}
      <BackgroundOverlay />

      {/* 2. Floating Animated Doodles (Stethoscopes, surgical scissors, hospital crosses, sparkles) */}
      <BackgroundDoodles opacity={0.24} speed="gentle" />

      {/* 3. Top Subtle Header Bar */}
      <header className="z-10 w-full max-w-md flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#4A2072]/85">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-serif-luxury tracking-wide">Networking Edition</span>
        </div>

        <button
          onClick={() => setIsQrModalOpen(true)}
          className="px-2.5 py-1.5 rounded-xl bg-white/80 hover:bg-white text-neutral-700 hover:text-neutral-900 border border-purple-100 shadow-2xs transition-all text-xs flex items-center gap-1.5 hover:-translate-y-0.5"
          title="Scan QR Code"
          aria-label="Show QR Code"
        >
          <QrCode className="w-3.5 h-3.5 text-purple-700" />
          <span className="text-[11px] font-semibold text-[#4A2072]">Quick Scan</span>
        </button>
      </header>

      {/* 4. MAIN LUXURY GLASS CARD */}
      <main className="z-10 w-full max-w-[460px] rounded-[38px] sm:rounded-[44px] glass-card-luxury p-6 sm:p-8 shadow-2xl shadow-purple-950/10 border-2 border-[#D4AF37]/35 relative transition-all">
        {/* Subtle decorative champagne corner flair */}
        <div className="absolute top-4 left-4 text-[#D4AF37]/35 text-xs font-serif pointer-events-none">
          ✦
        </div>
        <div className="absolute top-4 right-4 text-[#D4AF37]/35 text-xs font-serif pointer-events-none">
          ✦
        </div>

        {/* Monogram Crest Logo, Full Name, Title, and Fast-Connect Dock */}
        <ProfileHeader onOpenQrModal={() => setIsQrModalOpen(true)} />

        {/* Note from Ashu Elisabeth Tambe & Gold Cursive Signature */}
        <NoteSection />

        {/* Bold & Luxurious Action Links for Networking */}
        <ActionLinks />

        {/* Small Footnote */}
        <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-neutral-600 font-sans-clean">
          <span className="flex items-center gap-1">
            <span className="font-semibold text-[#2A1B3D]">MSN Lisa</span>
            <span className="text-[#D4AF37]">·</span>
            <span>Healthcare & Aesthetics</span>
          </span>
          <span className="text-[10px] text-neutral-500 font-mono">
            {PROFILE_DATA.contact.rawPhone}
          </span>
        </div>
      </main>

      {/* 5. Minimal Sleek Signature Footer */}
      <footer className="z-10 mt-6 mb-3 text-center max-w-md w-full px-2 flex flex-col items-center gap-1.5">
        <p className="text-[11px] text-neutral-500 font-sans-clean flex items-center justify-center gap-1.5">
          <span className="font-serif-luxury font-semibold text-[#2A1B3D]">Ashu Elisabeth Tambe</span>
          <span className="text-[#D4AF37]">✦</span>
          <span>MSN Lisa 🌸🩺</span>
        </p>

        <p className="text-[10px] text-neutral-600 font-sans-clean tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
          <span className="italic font-serif-luxury text-neutral-600">Built by Sir Chifen | Fanthom Cards</span>
          <span className="text-[#D4AF37]">·</span>
          <a
            href="https://instagram.com/chif_3n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-[#9333EA] transition-colors font-medium underline underline-offset-2 decoration-[#D4AF37]/50"
          >
            Socials @chif_3n
          </a>
        </p>
      </footer>

      {/* 6. QR CODE MODAL FOR EASY IN-PERSON SCANNING */}
      <QrCodeModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </div>
  );
}
