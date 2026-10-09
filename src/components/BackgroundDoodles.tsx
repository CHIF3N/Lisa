import React from 'react';

interface BackgroundDoodlesProps {
  opacity?: number;
  speed?: 'gentle' | 'normal' | 'paused';
}

export const BackgroundDoodles: React.FC<BackgroundDoodlesProps> = ({
  opacity = 0.22,
  speed = 'gentle',
}) => {
  const isPaused = speed === 'paused';

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 1. Stethoscope - Top Left */}
      <div
        className={`absolute top-[6%] left-[4%] w-16 h-16 md:w-20 md:h-20 text-[#D4AF37] ${
          isPaused ? '' : 'animate-float-drift'
        }`}
        style={{ animationDelay: '0s', animationDuration: '16s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-sm">
          <path d="M16 12v14a16 16 0 0 0 32 0V12" />
          <path d="M12 12h8M44 12h8" />
          <path d="M32 42v10a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-4" />
          <circle cx="46" cy="46" r="4" fill="currentColor" fillOpacity="0.25" />
          <circle cx="16" cy="10" r="2" fill="currentColor" />
          <circle cx="48" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* 2. Sparkles / Beauty Wand - Top Right */}
      <div
        className={`absolute top-[12%] right-[8%] w-14 h-14 md:w-16 md:h-16 text-[#B580E2] ${
          isPaused ? '' : 'animate-float-gentle'
        }`}
        style={{ animationDelay: '2s', animationDuration: '14s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          {/* 4-point sparkle star */}
          <path d="M32 4 C32 18 36 28 50 32 C36 36 32 46 32 60 C32 46 28 36 14 32 C28 28 32 18 32 4 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M50 10 L54 18 L62 22 L54 26 L50 34 L46 26 L38 22 L46 18 Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      {/* 3. Surgical Scissors / Utensil - Upper Mid Right */}
      <div
        className={`absolute top-[28%] right-[4%] w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] ${
          isPaused ? '' : 'animate-float-drift'
        }`}
        style={{ animationDelay: '4s', animationDuration: '22s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="18" cy="48" r="8" />
          <circle cx="46" cy="48" r="8" />
          <path d="M23 42L48 10" />
          <path d="M41 42L16 10" />
          <circle cx="32" cy="28" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* 4. Heartbeat Pulse & Medical Cross - Mid Left */}
      <div
        className={`absolute top-[36%] left-[3%] w-20 h-14 md:w-24 md:h-16 text-[#A855F7] ${
          isPaused ? '' : 'animate-float-gentle'
        }`}
        style={{ animationDelay: '1s', animationDuration: '12s' }}
      >
        <svg viewBox="0 0 80 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 24h18l6-16 10 32 8-22 5 8h25" />
          <circle cx="70" cy="24" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* 5. Beauty Lipstick / Cosmetic Icon - Center Right */}
      <div
        className={`absolute top-[52%] right-[6%] w-10 h-14 md:w-12 md:h-18 text-[#C5A059] ${
          isPaused ? '' : 'animate-float-drift'
        }`}
        style={{ animationDelay: '3s', animationDuration: '18s' }}
      >
        <svg viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="14" y="28" width="20" height="32" rx="3" fill="currentColor" fillOpacity="0.2" />
          <rect x="16" y="20" width="16" height="8" />
          <path d="M18 20V12C18 7 24 4 28 4L30 20Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>

      {/* 6. Medical First Aid Kit / Cross - Bottom Left */}
      <div
        className={`absolute bottom-[18%] left-[6%] w-14 h-14 md:w-18 md:h-18 text-[#9333EA] ${
          isPaused ? '' : 'animate-float-drift'
        }`}
        style={{ animationDelay: '5s', animationDuration: '20s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="10" y="20" width="44" height="36" rx="6" fill="currentColor" fillOpacity="0.15" />
          <path d="M22 20v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
          <path d="M32 28v20M22 38h20" strokeWidth="3" />
        </svg>
      </div>

      {/* 7. Beauty Butterfly / Aesthetic Flourish - Bottom Right */}
      <div
        className={`absolute bottom-[12%] right-[5%] w-14 h-14 md:w-18 md:h-18 text-[#D4AF37] ${
          isPaused ? '' : 'animate-float-gentle'
        }`}
        style={{ animationDelay: '2.5s', animationDuration: '15s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M32 20v24M30 18a4 4 0 0 1-4-4M34 18a4 4 0 0 0 4-4" />
          <path d="M32 24C24 12 10 18 12 28C14 36 26 36 32 32" fill="currentColor" fillOpacity="0.2" />
          <path d="M32 24C40 12 54 18 52 28C50 36 38 36 32 32" fill="currentColor" fillOpacity="0.2" />
          <path d="M32 34C24 38 16 46 20 52C24 56 30 46 32 40" />
          <path d="M32 34C40 38 48 46 44 52C40 56 34 46 32 40" />
        </svg>
      </div>

      {/* 8. Syringe / Surgical Utensil - Top Center Left */}
      <div
        className={`absolute top-[20%] left-[16%] w-12 h-12 md:w-14 md:h-14 text-[#B8860B] hidden sm:block ${
          isPaused ? '' : 'animate-float-gentle'
        }`}
        style={{ animationDelay: '6s', animationDuration: '17s' }}
      >
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 42l24-24M28 36l4 4M34 30l4 4M40 24l4 4" />
          <rect x="22" y="22" width="28" height="12" rx="2" transform="rotate(-45 36 28)" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 52l10-10M8 56l4-4M50 14l6-6M44 8l12 12" />
        </svg>
      </div>

      {/* 9. Glowing Starlight Doodles scattered */}
      <div
        className="absolute top-[44%] left-[14%] w-8 h-8 text-[#E9D5FF] animate-pulse"
        style={{ animationDuration: '4s' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>

      <div
        className="absolute bottom-[30%] right-[16%] w-6 h-6 text-[#F5E1A4] animate-pulse"
        style={{ animationDuration: '5s' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
    </div>
  );
};
