// src/components/ChristmasCard/Letter/ElegantLetter.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause, Heart } from 'lucide-react';
import ElegantTypewriter from './ElegantTypewriter';

interface LetterProps {
  showLetter: boolean;
  isPlaying: boolean;
  onToggleMusic: () => void;
  onShowLyrics: () => void;
}

const ElegantLetter: React.FC<LetterProps> = ({ 
  showLetter, 
  isPlaying, 
  onToggleMusic, 
  onShowLyrics 
}) => {
  return (
    <motion.div
      initial={{ rotateX: -90, y: -50 }}
      animate={{ rotateX: 0, y: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl mx-auto max-w-2xl "
      style={{ transformOrigin: "top" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-pink-100/50 rounded-xl " />
      
      <div className="relative z-10">
        {/* 컨트롤 영역 */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onShowLyrics}
            className="text-sky-400 hover:text-sky-300 text-sm font-serif border 
              border-sky-400 px-3 py-1 rounded-md hover:bg-sky-400/10 transition-colors"
          >
            [가사]
          </button>
          <button 
            onClick={onToggleMusic}
            className="focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="text-sky-400 w-6 h-6 cursor-pointer hover:text-sky-300" />
            ) : (
              <Play className="text-sky-400 w-6 h-6 cursor-pointer hover:text-sky-300" />
            )}
          </button>
        </div>

        {/* 사진 영역 */}
        <div className="relative w-full mb-8 rounded-lg overflow-hidden max-h-[200px]">
  <Image
    src="/images/dad.png"
    alt="Dear dad"
    width={400}
    height={200}
    className="w-full h-auto hover:scale-105 transition-transform duration-700"
    priority
  />
 
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* 편지 내용 */}
        {showLetter && (
          <div className="prose prose-sky max-w-none">
            <h1 className="text-2xl font-serif text-sky-600 mb-6 text-center">
              사랑하는 아빠에게
            </h1>
            <div className="max-h-[50vh] overflow-y-auto pr-4">
      
            <ElegantTypewriter 
              message={`사랑하는 아빠께,
이 특별한 크리스마스에 아빠께 제 마음을 전하고 싶어요.
어릴 적부터 지금까지, 아빠는 늘 한결같은 모습으로 저를 사랑해주셨죠. 화 한번 안 내시고 , 늘 온화한 미소로 저를 바라봐 주시던 아빠의 모습이 떠올라요. 때로는 제가 실수를 하고 잘못된 선택을 할 때도, 아빠는 늘 이해와 사랑으로 저를 감싸주셨어요.
매일 저녁 저를 위해 기도해주시던 아버지의 등이 생각이 나요. 아빠의 기도는 제가 어떤 어려움도 이겨낼 수 있다는 믿음이 되었고, 언제나 제 삶의 든든한 버팀목이 되어주었어요.
요즘 힘든 시기를 보내고 계신 것 잘 알아요. 아빠의 한숨, 걱정 어린 표정을 볼 때마다 제 마음도 많이 아파요. 하지만 이사야서에 "두려워하지 말라 내가 너와 함께 함이라" 하신 것처럼, 우리에겐 늘 희망이 있잖아요. 아빠가 저를 위해 늘 든든한 버팀목이 되어주셨듯이, 이제는 제가 아빠의 자랑스러운 딸이 되어 힘이 되어드리고 싶어요.
아빠께서 하시는 모든 일이 저에겐 자랑스러워요. 지금 하시는 일이 비록 힘들고 어려울지라도, 그 모습 자체가 저에겐 큰 가르침이 되고 있어요. 어떤 상황에서도 굽히지 않는 아빠의 성실함과 책임감은 제가 본받고 싶은 모습이에요.
시편의 말씀처럼 "젊은 날의 수고가 헛되지 않을 것"이라 믿어요. "우리가 알거니와 하나님을 사랑하는 자들에게는 모든 것이 합력하여 선을 이루느니라" 하신 말씀을 기억하며, 우리 가족이 함께 이 시간을 이겨내리라 믿습니다.
사랑하는 아빠, 너무 염려하지 마세요. 우리가 함께 있잖아요.
하나님께서 우리 가정을 지키시고 인도하실 거예요. 저는 앞으로도 아빠의 기도와 사랑에 감사하며, 더욱 자랑스러운 딸이 되도록 노력할게요.
이번 크리스마스에는 제가 아빠의 든든한 선물이 되고 싶어요.
다시 한 번 감사드리고, 사랑합니다.
2024년 크리스마스
아빠의 딸 예지 올림`} // 편지 내용
              speed={70}
            />
          </div>
          </div>
        )}

        {/* 하단 장식 */}
        <div className="flex justify-center space-x-6 mt-8">
          <Heart className="w-6 h-6 text-sky-400 hover:scale-110 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ElegantLetter;