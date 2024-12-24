// src/components/ChristmasCard/Letter/ElegantLetter.tsx
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
      className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl mx-auto max-w-2xl"
      style={{ transformOrigin: "top" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50 rounded-xl" />
      
      <div className="relative z-10">
        {/* 컨트롤 영역 */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onShowLyrics}
            className="text-rose-400 hover:text-rose-300 text-sm font-serif border 
              border-rose-400 px-3 py-1 rounded-md hover:bg-rose-400/10 transition-colors"
          >
            [가사]
          </button>
          <button 
            onClick={onToggleMusic}
            className="focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="text-rose-400 w-6 h-6 cursor-pointer hover:text-rose-300" />
            ) : (
              <Play className="text-rose-400 w-6 h-6 cursor-pointer hover:text-rose-300" />
            )}
          </button>
        </div>

        {/* 사진 영역 */}
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/mom.png"
            alt="Dear Mom"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* 편지 내용 */}
        {showLetter && (
          <div className="prose prose-rose max-w-none">
            <h1 className="text-2xl font-serif text-rose-600 mb-6 text-center">
              사랑하는 엄마에게
            </h1>
            <ElegantTypewriter 
              message={`사랑하는 우리 엄마♡
메리 크리스마스!
예수님 오신 날, 엄마한테 편지 쓰는 예지에요~
엄마, 나 가끔 엄마랑 티격태격하고 맘 상하게 할 때도 많았지? 내 고집대로만 하려고 하고 투정도 부리고... 
그래도 항상 날 이해해주시고 끝없이 사랑해주셔서 정말 고마워요. 엄마가 날 얼마나 사랑하시는지, 이제는 내가 더 잘 알 것 같아요.
엄마도 아시죠? 성경에서 "자식들은 여호와의 기업이요 태의 열매는 그의 상급이로다" 하신 말씀처럼, 난 엄마의 상급이 되고 싶어요. 

하나님이 엄마한테 주신 특별한 선물! 그래서 더 열심히 살고, 엄마 자랑스러운 딸이 되려고 노력하고 있답니다.
우리 가끔 서로 생각이 달라서 부딪힐 때도 있지만, 그래도 그게 다 우리가 더 가까워지는 과정인 것 같아요. 
엄마는 정말 잠언 31장의 현숙한 여인 그 자체! 날 위해서 평생 헌신하시고 사랑으로 키워주셨잖아요. 
이제는 내가 엄마 어깨 좀 가볍게 해드리고 싶어요.
우리 예수님이 보여주신 것처럼, 나도 엄마를 더 이해하고 더 깊이 사랑하고 싶어요. 

매일 기도할 때마다 엄마 건강이랑 행복을 위해서 기도하고 있답니다. 우리가 서로 더 잘 이해하고 소통하면서, 
하나님 안에서 더 끈끈한 모녀가 되었으면 좋겠어요!

이번 크리스마스에는 특별히 더 감사드려요. 엄마의 모든 수고와 헌신, 그리고 한결같은 사랑 정말정말 감사해요. 
우리 예수님의 따뜻한 사랑이 엄마 마음에 가득하시길 기도할게요.

메리 크리스마스, 엄마! 많이 많이 사랑해요 ♡
엄마의 사랑둥이 딸 예지 올림`} // 편지 내용
              speed={70}
            />
          </div>
        )}

        {/* 하단 장식 */}
        <div className="flex justify-center space-x-6 mt-8">
          <Heart className="w-6 h-6 text-rose-400 hover:scale-110 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ElegantLetter;