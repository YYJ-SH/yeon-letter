// src/components/ChristmasCard/SparklingBackground.tsx
'use client';
import React, { useEffect, useState } from 'react';

const SparklingBackground = () => {
  return (
    <>
      {/* 별빛 효과 */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black" />
      
      {/* 오로라 효과 */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-150vw h-150vh animate-aurora-shift">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-green-500/30 blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* 반짝이는 별들 */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="fixed w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
};

export default SparklingBackground;