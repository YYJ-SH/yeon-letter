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
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-pink-100/50 rounded-xl " />
      
      <div className="relative z-10">
        {/* 컨트롤 영역 */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onShowLyrics}
            className="text-violet-400 hover:text-violet-300 text-sm font-serif border 
              border-violet-400 px-3 py-1 rounded-md hover:bg-violet-400/10 transition-colors"
          >
            [가사]
          </button>
          <button 
            onClick={onToggleMusic}
            className="focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="text-violet-400 w-6 h-6 cursor-pointer hover:text-violet-300" />
            ) : (
              <Play className="text-violet-400 w-6 h-6 cursor-pointer hover:text-violet-300" />
            )}
          </button>
        </div>

        {/* 사진 영역 */}
        <div className="relative w-full mb-8 rounded-lg overflow-hidden max-h-[400px]">
  <Image
    src="/images/sis.png"
    alt="Dear sis"
    width={800}
    height={400}
    className="w-full h-auto hover:scale-105 transition-transform duration-700"
    priority
  />
 
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* 편지 내용 */}
        {showLetter && (
          <div className="prose prose-violet max-w-none">
            <h1 className="text-2xl font-serif text-violet-600 mb-6 text-center">
              사랑하는 예은이에게
            </h1>
            <div className="max-h-[50vh] overflow-y-auto pr-4">
      
            <ElegantTypewriter 
              message={`내 사랑하는 동생에게,
예은아, 너는  지금까지, 늘 우리 가족의 빛이자 기쁨이었어.
어릴 때부터 지금까지, 내가 장난을 치고 놀려도 한 번도 화내지 않고 그 예쁜 미소로 받아주던 네가 생각나. 내가 힘들 때면 조용히 와서 안아주고, 내가 웃을 때면 함께 기뻐해주던 네 모습들이 하나하나 다 보물 같아. 우리는 늘 서로의 가장 친한 친구이자 든든한 지지자였지.
요즘 네가 많이 힘들어한다는 걸 언니는 알아. 친구들과의 관계도, 성적 때문에 받는 스트레스도, 그리고 무엇보다 네 자신과의 싸움이 얼마나 힘든지도. 때로는 큰 꿈을 꾸었다가 현실의 벽에 부딪혀 좌절하는 네 모습을 볼 때면, 언니의 마음도 많이 아파.
하지만 동생아, 인생은 정말 길어. 지금의 어려움은 우리 인생이라는 긴 여정에서 한 페이지일 뿐이야. 하나님께서는 "내가 너를 지명하여 불렀나니 너는 내 것이라"고 하셨어. 너는 그분의 귀한 자녀이고, 특별한 목적을 위해 이 땅에 보내진 소중한 존재야.
네가 생각하는 것보다 너는 훨씬 더 특별하고 아름다운 사람이야. 그 순수한 마음씨, 다른 사람을 향한 따뜻한 배려심, 그리고 포기하지 않는 끈기까지. 이 모든 것들이 하나님께서 너에게 주신 특별한 선물이야.
때로는 네가 스스로를 대단하지 않은 사람이라고 생각할 때가 있다는 것도 알아. 하지만 언니가 보는 너는 정말 빛나는 사람이야. 아직 꽃피우지 않은 봉오리처럼, 네 안에는 무한한 가능성이 있어. 조급해하지 마. 하나님께서는 각자에게 맞는 완벽한 시기를 알고 계시니까.
앞으로도 힘든 순간이 올 거야. 하지만 그때마다 기억해줘. 네 옆에는 항상 널 사랑하고 지지하는 언니가 있다는 걸. 네가 지칠 때면 기대어 쉴 수 있는 어깨가 되어줄게. 네가 좌절할 때면 다시 일어설 수 있는 힘이 되어줄게. 그리고 네가 작은 진전을 이룰 때마다 가장 크게 기뻐하고 축하해줄게.
너는 하나님께서 내게 주신 최고의 크리스마스 선물이야. 매일 아침 눈을 뜰 때마다 네가 내 동생이라는 사실에 감사해. 함께 웃고, 함께 울고, 함께 자라날 수 있어서 얼마나 행복한지 몰라.
이번 크리스마스에는 특별히 네게 꼭 전하고 싶은 말이 있어.
넌 정말 사랑받기 위해 태어난 사람이라는 거.
그리고 난 영원히 네 편이 되어줄 거라는 거.
네가 있어 내가 더 행복하고, 네가 내 동생이어서 매일매일이 감사해.
사랑해, 내 귀한 베이비
우리 함께 하나님의 은혜 안에서 더 환한 미래를 향해 걸어가자.
2024년 크리스마스
너를 영원히 사랑하는 언니가`} // 편지 내용
              speed={70}
            />
          </div>
          </div>
        )}

        {/* 하단 장식 */}
        <div className="flex justify-center space-x-6 mt-8">
          <Heart className="w-6 h-6 text-violet-400 hover:scale-110 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ElegantLetter;