// src/components/ChristmasCard/TypewriterMessage.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterMessageProps {
  recipient: string;
  message: string;
}

const TypewriterMessage: React.FC<TypewriterMessageProps> = ({ recipient, message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, message]);

  return (
    <pre className="text-slate-300 font-mono whitespace-pre-wrap break-words">
      {displayedText}
      <span className="animate-pulse">_</span>
    </pre>
  );
};

export default TypewriterMessage;