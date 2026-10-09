import React from 'react';

export const BackgroundOverlay: React.FC = () => {
  return (
    <>
      {/* 1. Base Cream White Foundation */}
      <div className="fixed inset-0 bg-[#FFFDF7] -z-30 pointer-events-none" />

      {/* 2. Soft Lavender and Champagne Ambient Light Cones */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none opacity-85"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 15%, rgba(243, 232, 255, 0.85) 0%, transparent 45%),
            radial-gradient(circle at 88% 18%, rgba(241, 213, 146, 0.45) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 253, 247, 0.6) 0%, transparent 60%),
            radial-gradient(circle at 50% 88%, rgba(230, 220, 250, 0.65) 0%, transparent 50%),
            radial-gradient(circle at 82% 85%, rgba(212, 175, 55, 0.3) 0%, transparent 38%)
          `,
        }}
      />

      {/* 3. Subtle Luxury Gold Vignette */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 120px rgba(74, 48, 109, 0.04), inset 0 0 45px rgba(212, 175, 55, 0.06)',
        }}
      />
    </>
  );
};
