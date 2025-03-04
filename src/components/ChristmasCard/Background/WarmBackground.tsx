// src/components/ChristmasCard/Background/WarmBackground.tsx
import React from 'react';

const WarmBackground = () => {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-pink-100 to-violet-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-violet-50/30 to-pink-100/50" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

export default WarmBackground;