import React from 'react';
import { MessageCircle, UserPlus, QrCode } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { downloadVCard } from '../utils/vcard';
import { MonogramLogo } from './MonogramLogo';

interface ProfileHeaderProps {
  onOpenQrModal: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onOpenQrModal }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Luxury Royal Monogram Crest (AET - Ashu Elisabeth Tambe) */}
      <div className="mb-4">
        <MonogramLogo size="lg" />
      </div>

      {/* Name with Grand Luxury Serif Typography */}
      <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#2A1B3D] mb-1">
        {PROFILE_DATA.fullName}
      </h1>

      {/* Moniker Badge: MSN Lisa 🌸🩺 */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#F3E8FF] via-[#FFFDF7] to-[#F3E8FF] border border-[#D8B4FE]/60 text-[#4A2072] text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-3">
        <span className="text-[#D4AF37]">✦</span>
        <span>{PROFILE_DATA.alias}</span>
        <span className="text-xs text-[#9333EA]/70 font-medium font-sans-clean">({PROFILE_DATA.credentials})</span>
      </div>

      {/* Professional Headline */}
      <p className="font-sans-clean text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed mb-5 font-normal">
        <span className="font-medium text-[#2A1B3D]">Medico-Surgical Nurse</span>
        <span className="text-[#D4AF37] mx-1.5 font-bold">·</span>
        <span className="font-medium text-[#2A1B3D]">Youth Leader</span>
        <span className="text-[#D4AF37] mx-1.5 font-bold">·</span>
        <span className="font-medium text-[#2A1B3D]">Content Creator</span>
        <span className="text-[#D4AF37] mx-1.5 font-bold">·</span>
        <span className="font-medium text-[#2A1B3D]">Entrepreneur</span>
      </p>

      {/* Quick Action Dock for In-Person Networking */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-xs mb-6">
        {/* WhatsApp Fast Button */}
        <a
          href={PROFILE_DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] text-xs font-semibold transition-all hover:-translate-y-0.5"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Save Contact (vCard) */}
        <button
          onClick={downloadVCard}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37]/15 to-[#F1D592]/25 hover:from-[#D4AF37]/25 hover:to-[#F1D592]/35 border border-[#D4AF37]/50 text-[#8C6B13] text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-xs"
          title="Save Contact directly into phone address book"
        >
          <UserPlus className="w-3.5 h-3.5 text-[#B8860B]" />
          <span>Save Contact</span>
        </button>

        {/* QR Code / Share */}
        <button
          onClick={onOpenQrModal}
          className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 transition-all hover:-translate-y-0.5"
          title="Show QR Code for scanning"
          aria-label="Show QR Code"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
