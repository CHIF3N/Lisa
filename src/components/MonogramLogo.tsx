import React from 'react';

interface MonogramLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({ size = 'lg' }) => {
  const dimensionClass =
    size === 'sm'
      ? 'w-24 h-24'
      : size === 'md'
      ? 'w-32 h-32'
      : 'w-36 h-36 sm:w-44 sm:h-44';

  return (
    <div className="relative group select-none flex items-center justify-center my-1">
      {/* 1. Outer Rotating Dashed Champagne Gold Ring */}
      <div
        className="absolute -inset-3 sm:-inset-3.5 rounded-full border-2 border-dashed border-[#D4AF37] opacity-80 animate-spin-slow pointer-events-none"
        style={{ animationDuration: '28s' }}
      />

      {/* 2. Secondary Delicate Lavender Dotted Counter-Rotating Ring */}
      <div
        className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-dotted border-[#C084FC]/70 opacity-70 animate-spin-reverse-slow pointer-events-none"
        style={{ animationDuration: '40s' }}
      />

      {/* 3. Soft Ambient Gold Halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#F3E8FF]/40 to-[#E8C872]/25 blur-lg" />

      {/* 4. Main Royal Monogram Medallion */}
      <div
        className={`relative ${dimensionClass} rounded-full p-1 bg-gradient-to-br from-[#FFFDF7] via-[#FAF5FF] to-[#FDF8EB] shadow-2xl shadow-purple-950/20 border-2 border-[#D4AF37] overflow-hidden flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold foil gradients */}
            <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F7E7B4" />
              <stop offset="35%" stop-color="#D4AF37" />
              <stop offset="70%" stop-color="#AA7C11" />
              <stop offset="100%" stop-color="#F2DB94" />
            </linearGradient>

            <linearGradient id="darkPlumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2D1A3F" />
              <stop offset="50%" stop-color="#3A1C54" />
              <stop offset="100%" stop-color="#1F0F2E" />
            </linearGradient>

            <linearGradient id="pearlRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.8" />
              <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#AA7C11" stop-opacity="0.8" />
            </linearGradient>

            {/* Circular Path for Inscribed Text */}
            <path
              id="textPathCircle"
              d="M 120, 120 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
            />
          </defs>

          {/* Inner Medallion Background: Deep Royal Velvet Plum */}
          <circle cx="120" cy="120" r="112" fill="url(#darkPlumGrad)" />

          {/* Inner Gold Concentric Filigree Ring */}
          <circle
            cx="120"
            cy="120"
            r="104"
            stroke="url(#goldLinear)"
            stroke-width="1.5"
            stroke-dasharray="3 3"
            opacity="0.75"
          />
          <circle
            cx="120"
            cy="120"
            r="98"
            stroke="url(#goldLinear)"
            stroke-width="0.8"
            opacity="0.5"
          />

          {/* Micro Stethoscope curve subtle accent around lower rim */}
          <path
            d="M 52,142 C 60,196 180,196 188,142"
            stroke="url(#goldLinear)"
            stroke-width="1.8"
            stroke-linecap="round"
            opacity="0.4"
          />
          <circle cx="120" cy="190" r="3.5" fill="url(#goldLinear)" opacity="0.6" />

          {/* Crest Crown Top Flourish (3-star / tiara accent) */}
          <g opacity="0.9">
            <path
              d="M 120 34 L 122 41 L 129 43 L 122 45 L 120 52 L 118 45 L 111 43 L 118 41 Z"
              fill="url(#goldLinear)"
            />
            <circle cx="102" cy="45" r="1.8" fill="url(#goldLinear)" />
            <circle cx="138" cy="45" r="1.8" fill="url(#goldLinear)" />
          </g>

          {/* INTERTWINED MONOGRAM INITIALS: A E T */}
          <g id="initials" transform="translate(0, 4)">
            {/* Central Main Letter 'E' (Elisabeth) in Royal Serif */}
            <text
              x="120"
              y="136"
              text-anchor="middle"
              font-family="'Playfair Display', 'Cinzel', serif"
              font-size="68"
              font-weight="700"
              font-style="italic"
              fill="url(#goldLinear)"
              letter-spacing="0"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}
            >
              E
            </text>

            {/* Flanking Letter 'A' (Ashu) - Interlaced on Left */}
            <text
              x="82"
              y="132"
              text-anchor="middle"
              font-family="'Playfair Display', serif"
              font-size="44"
              font-weight="600"
              fill="url(#goldLinear)"
              opacity="0.92"
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.4))' }}
            >
              A
            </text>

            {/* Flanking Letter 'T' (Tambe) - Interlaced on Right */}
            <text
              x="158"
              y="132"
              text-anchor="middle"
              font-family="'Playfair Display', serif"
              font-size="44"
              font-weight="600"
              fill="url(#goldLinear)"
              opacity="0.92"
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.4))' }}
            >
              T
            </text>
          </g>

          {/* Moniker Inscription Ribbon below letters */}
          <g transform="translate(0, 15)">
            <text
              x="120"
              y="152"
              text-anchor="middle"
              font-family="'Montserrat', sans-serif"
              font-size="10.5"
              font-weight="700"
              letter-spacing="3"
              fill="#F5E1A4"
              opacity="0.95"
            >
              MSN LISA
            </text>
            <text
              x="120"
              y="166"
              text-anchor="middle"
              font-family="'Montserrat', sans-serif"
              font-size="7.5"
              font-weight="500"
              letter-spacing="2.5"
              fill="#D8B4FE"
              opacity="0.85"
            >
              HEALTHCARE · BEAUTY
            </text>
          </g>

          {/* Delicate Sparkles on Medallion */}
          <circle cx="58" cy="80" r="1.5" fill="#FFEAA7" opacity="0.8" />
          <circle cx="182" cy="80" r="1.5" fill="#FFEAA7" opacity="0.8" />
          <circle cx="70" cy="162" r="1.2" fill="#E9D5FF" opacity="0.7" />
          <circle cx="170" cy="162" r="1.2" fill="#E9D5FF" opacity="0.7" />
        </svg>

        {/* Stethoscope & Flower Corner Badge */}
        <div
          className="absolute -bottom-1 -right-1 bg-gradient-to-br from-[#FFFDF7] to-[#F3E8FF] border border-[#D4AF37] rounded-full p-1.5 shadow-md flex items-center justify-center text-xs sm:text-sm select-none"
          title="MSN Lisa 🌸🩺"
        >
          <span>🌸🩺</span>
        </div>
      </div>
    </div>
  );
};
