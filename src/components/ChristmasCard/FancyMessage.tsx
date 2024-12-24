// src/components/ChristmasCard/FancyMessage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FancyMessageProps {
  message: string;
  isVisible: boolean;
}

const FancyMessage: React.FC<FancyMessageProps> = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative p-8 rounded-xl bg-white/10 backdrop-blur-sm"
        >
          <div className="relative z-10 text-white font-serif leading-relaxed">
            <div className="whitespace-pre-wrap">{message}</div>
          </div>
          
          {/* 장식적 테두리 */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
          <div className="absolute inset-[2px] border border-white/10 rounded-xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FancyMessage;