import React, { useState } from 'react';
import {
  MessageCircle,
  Linkedin,
  Instagram,
  Video,
  Share2,
  Mail,
  ChevronRight,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA, SocialLink } from '../data/profile';

export const ActionLinks: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, link: SocialLink) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-white fill-white/20" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-[#0A66C2]" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-[#E4405F]" />;
      case 'tiktok':
        return <Video className="w-5 h-5 text-[#25F4EE]" />;
      case 'facebook':
        return <Share2 className="w-5 h-5 text-[#1877F2]" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-[#8C6B13]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {PROFILE_DATA.socials.map((link) => {
        const isCopied = copiedId === link.id;

        if (link.id === 'whatsapp') {
          // Highlighted Gold Champagne & Emerald Hero Action Button
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#C49830] text-white shadow-md shadow-amber-900/15 border border-[#F5E1A4]/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-900/25 active:translate-y-0"
            >
              {/* Inner subtle shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center backdrop-blur-xs border border-white/20">
                  {renderIcon(link.icon)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base tracking-wide text-white flex items-center gap-1.5">
                    <span>{link.name}</span>
                    <span className="text-[10px] uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded font-bold text-white">
                      Instant
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-amber-50/90 font-normal">
                    {link.subtitle}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 z-10">
                <button
                  onClick={(e) => handleCopy(e, link)}
                  className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-white transition-colors"
                  title="Copy link"
                  aria-label="Copy link"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          );
        }

        // Lavender Glass / Cream Pearl Links
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md border border-[#E9D5FF]/60 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FAF5FF] to-[#FFFDF7] border border-purple-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                {renderIcon(link.icon)}
              </div>
              <div className="text-left">
                <div className="font-medium text-xs sm:text-sm text-[#2A1B3D] group-hover:text-[#6B21A8] transition-colors">
                  {link.name}
                </div>
                <div className="text-[11px] text-neutral-500 font-sans-clean line-clamp-1">
                  {link.subtitle}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => handleCopy(e, link)}
                className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-purple-50 text-neutral-400 hover:text-neutral-700 transition-all"
                title="Copy link"
                aria-label="Copy link"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <div className="w-6 h-6 rounded-full bg-purple-50 group-hover:bg-amber-50 text-neutral-400 group-hover:text-[#B8860B] flex items-center justify-center transition-colors">
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
