// src/components/ChristmasCard/Background/FlowerParticles.tsx
import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  size: number;
  rotation: number;
  color: string;
}

const FlowerParticles = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const colors = [
    'rgb(255, 223, 220)',  // 연한 핑크
    'rgb(255, 182, 193)',  // 중간 핑크
    'rgb(255, 228, 196)',  // 피치
    'rgb(255, 218, 185)',  // 살구색
  ];

  useEffect(() => {
    const createPetal = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 15 + 10,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    });

    const initialPetals = Array.from({ length: 30 }, createPetal);
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = [...prev];
        for(let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * newPetals.length);
          newPetals[randomIndex] = createPetal();
        }
        return newPetals;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            opacity: 0.8,
          }}
        >
          <div
            className="w-4 h-4 rotate-45 rounded-full"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              backgroundColor: petal.color,
              transform: `rotate(${petal.rotation}deg)`,
              boxShadow: '0 0 10px rgba(255, 182, 193, 0.3)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FlowerParticles;