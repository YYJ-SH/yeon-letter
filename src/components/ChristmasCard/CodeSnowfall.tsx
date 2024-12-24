// src/components/ChristmasCard/CodeSnowfall.tsx
'use client'
import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  symbol: string;
  size: number;
  opacity: number;  // 다양한 투명도를 위해 추가
}

const CodeSnowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  // 심볼 대폭 추가 및 중복
  const symbols = [
    '{', '}', '<', '>', '(', ')', ';', '*', '//', '[]', '{}', '==', '=>',
    '&&', '||', '++', '--', '!=', '+=', '-=', '/**/', '...', '=>', '<=',
    '/**/', '*/','<>', '[]', '()', '{}', '*', '+', '=', ';;', '??', '::',
    'const', 'let', 'var', '===', '!==', '>=', '<=', '<<', '>>', '||=',
    '{', '}', '<', '>', '(', ')', ';'  // 자주 쓰이는 심볼은 중복 추가
  ];

  useEffect(() => {
    const createSnowflake = () => {
      const id = Math.random();
      return {
        id,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 0.5 + 0.7,  // 0.7 ~ 1.2 배 크기
        opacity: Math.random() * 0.3 + 0.7  // 0.7 ~ 1.0 투명도
      };
    };

    // 눈송이 개수 대폭 증가 (200개)
    const initialSnowflakes = Array.from({ length: 200 }, createSnowflake);
    setSnowflakes(initialSnowflakes);

    // 더 자주 새로운 눈송이 생성 (1초마다)
    const interval = setInterval(() => {
      setSnowflakes(prev => {
        const newFlakes = [...prev];
        // 한 번에 10개의 눈송이 교체
        for(let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * newFlakes.length);
          newFlakes[randomIndex] = createSnowflake();
        }
        return newFlakes;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white text-sm animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            transform: `scale(${flake.size})`,
            textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
            filter: 'blur(0.2px)'  // 약간의 블러 효과로 부드럽게
          }}
        >
          {flake.symbol}
        </div>
      ))}
    </div>
  );
};

export default CodeSnowfall;