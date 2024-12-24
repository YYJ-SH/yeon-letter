// src/components/ChristmasCard/Letter/ElegantEnvelope.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
 isOpen: boolean;
 onOpen: () => void;
}

const ElegantEnvelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
 return (
   <motion.div
     className="w-full max-w-2xl mx-auto"
     initial={{ scale: 0.95, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     exit={{ scale: 0.95, opacity: 0 }}
     whileHover={{ scale: 1.02 }}
     onClick={onOpen}
   >
     <div className="relative bg-rose-50 rounded-xl p-8 shadow-2xl cursor-pointer 
       border-2 border-rose-200 overflow-hidden">
       {/* 상단 장식 */}
       <div className="absolute top-0 left-0 w-full h-20 bg-rose-100 
         clip-envelope-edge transform -translate-y-1">
         <div className="h-full bg-gradient-to-b from-rose-200/50"></div>
       </div>

       {/* 봉투 내용 */}
       <div className="relative z-10 text-center py-16 space-y-6">
         {/* 하트 장식 */}
         <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <motion.div
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <Heart className="w-16 h-16 text-rose-400" fill="currentColor" />
           </motion.div>
         </div>

         <h2 className="text-2xl font-serif text-rose-600 mt-16">
           To. 사랑하는 엄마
         </h2>
         
         <p className="text-rose-400 font-light">
           From. 엄마 딸 예지
         </p>

         <motion.button
           className="bg-rose-400 text-white px-6 py-3 rounded-full 
             shadow-lg font-serif text-lg"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           ✉️ 열어보세요
         </motion.button>
       </div>

       {/* 봉투 테두리 효과 */}
       <div className="absolute inset-2 border border-rose-200/50 rounded-lg"></div>
       
       {/* 반짝이는 효과 */}
       <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
     </div>
   </motion.div>
 );
};

export default ElegantEnvelope;