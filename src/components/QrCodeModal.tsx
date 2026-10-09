import React, { useState } from 'react';
import { X, Download, Share2, Check, Smartphone, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://msn-lisa.vercel.app';

  if (!isOpen) return null;

  // Clean Google Chart / QR Server API URL for high-res instant QR code rendering
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=FFFDF7&color=2A1B3D&margin=10`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `MSN Lisa | ${PROFILE_DATA.fullName}`,
          text: `Connect with Ashu Elisabeth Tambe (MSN Lisa) - Medico-Surgical Nurse & Entrepreneur`,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share dismissed', err);
      }
    } else {
      handleCopyUrl();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37]/50 shadow-2xl p-6 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-neutral-500 hover:text-neutral-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="inline-flex items-center gap-1 text-[#8C6B13] text-xs font-semibold tracking-wider uppercase mb-1">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Quick Scan Badge</span>
        </div>
        <h3 className="font-serif-luxury text-xl font-bold text-[#2A1B3D] mb-1">
          Connect with {PROFILE_DATA.fullName}
        </h3>
        <p className="font-sans-clean text-xs text-neutral-500 mb-5">
          Scan with any smartphone camera at networking events to open this page instantly.
        </p>

        {/* QR Code Container with Champagne Gold Accent Frame */}
        <div className="relative mx-auto w-56 h-56 p-3 rounded-2xl bg-white border-2 border-[#E8C872] shadow-inner mb-5 flex items-center justify-center">
          <img
            src={qrCodeUrl}
            alt="Scan QR Code"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute inset-x-0 -bottom-3 flex justify-center">
            <span className="bg-[#2A1B3D] text-[#F1D592] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#D4AF37]">
              MSN Lisa 🌸🩺
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={handleCopyUrl}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E8C872] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs hover:opacity-95 transition-opacity"
          >
            {copied ? <Check className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
            <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Page Link'}</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-[#4A2072] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Profile Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};
