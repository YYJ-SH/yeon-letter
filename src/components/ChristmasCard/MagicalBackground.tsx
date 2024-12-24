// src/components/ChristmasCard/MagicalBackground.tsx
import React from 'react';

const MagicalBackground = () => {
  return (
    <>
      {/* 오로라 배경 */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute w-full h-full animate-aurora">
            <div className="absolute top-0 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-teal-500/30 blur-3xl animate-aurora-shift" />
          </div>
        </div>
      </div>

      {/* 반짝이는 별들 */}
      <div className="fixed inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* 떨어지는 빛나는 파티클 */}
      <div className="fixed inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-falling"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full blur-sm opacity-80" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MagicalBackground;