// src/components/ChristmasCard/index.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import MagicalBackground from './MagicalBackground';
import FlowerParticles from './Background/FlowerParticles';
import ElegantEnvelope from './Letter/ElegantEnvelope'; 
import ElegantLetter from './Letter/ElegantLetter';
import LyricsPopup from './Letter/LyricsPopup';

const ChristmasCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowLetter(true);
        if (audioRef.current && !isPlaying) {
          toggleMusic();
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isPlaying]);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <MagicalBackground/>
      <FlowerParticles />
      
      <audio ref={audioRef} loop>
        <source src="/music/dad.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-4xl mx-auto px-4 relative">
        {!isOpen && (
          <ElegantEnvelope 
            isOpen={isOpen} 
            onOpen={() => setIsOpen(true)} 
          />
        )}

        {isOpen && (
          <ElegantLetter 
            showLetter={showLetter}
            isPlaying={isPlaying}
            onToggleMusic={toggleMusic}
            onShowLyrics={() => setShowLyrics(true)}
          />
        )}
      </div>

      <LyricsPopup 
        isOpen={showLyrics} 
        onClose={() => setShowLyrics(false)} 
      />
    </div>
  );
};

export default ChristmasCard;