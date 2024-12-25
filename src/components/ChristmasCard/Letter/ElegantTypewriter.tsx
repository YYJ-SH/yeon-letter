// src/components/ChristmasCard/Letter/ElegantTypewriter.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  message: string;
  speed?: number;  // 타이핑 속도 (ms)
  showCursor?: boolean;
}

const ElegantTypewriter: React.FC<TypewriterProps> = ({ 
  message, 
  speed = 50,
  showCursor = true 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, message, speed]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-serif text-gray-700 leading-relaxed"
    >
      {displayedText}
      {showCursor && currentIndex < message.length && (
        <span className="inline-block w-0.5 h-5 bg-violet-400 ml-1 animate-blink">
        </span>
      )}
    </motion.div>
  );
};

export default ElegantTypewriter;