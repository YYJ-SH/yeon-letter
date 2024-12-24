'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, Gift, Music, Heart, Bug, Play, Pause } from 'lucide-react';
import VSCodeEnvelope from './VSCodeEnvelope'; 
import CodeChristmasTree from './CodeChristmasTree'; 
import TypewriterMessage from './TypewriterMessage'; 
import CodeSnowfall from './CodeSnowfall'; 
import Card from '../../ui/card'
import LyricsPopup from './LyricsPopup';

const ChristmasCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showLyrics, setShowLyrics] = useState(false);

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
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      <CodeSnowfall />
      
      <audio ref={audioRef} loop>
        <source src="/song1.mp3" type="audio/mpeg" />
      </audio>
  
      {/* 전체 컨테이너 수정 */}
      <div className="w-full max-w-4xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        {!isOpen && (
          <VSCodeEnvelope 
            isOpen={isOpen} 
            onOpen={() => setIsOpen(true)} 
          />
        )}
  
        {/* 카드 컨테이너 위치 조정 */}
        <div 
          className={`top-0 left-0 w-full transition-all duration-1000 transform px-4
            ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
        >
          <Card className="bg-slate-800 p-6 md:p-8 border border-slate-600 rounded-lg shadow-xl">
            {/* Card 내부의 스크롤 영역 조정 */}
            <div className="flex flex-col max-h-[80vh]">
              {/* 헤더 영역 */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="text-green-400 w-6 h-6" />
                  <span className="text-green-400 font-mono text-sm md:text-base">christmas_message.tsx</span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowLyrics(true)}
                    className="text-green-400 hover:text-green-300 text-sm font-mono border border-green-400 px-3 py-1 rounded-md hover:bg-green-400/10 transition-colors"
                  >
                    [가사보기]
                  </button>
                  <button onClick={toggleMusic} className="focus:outline-none">
                    {isPlaying ? (
                      <Pause className="text-green-400 w-6 h-6 cursor-pointer hover:text-green-300" />
                    ) : (
                      <Play className="text-green-400 w-6 h-6 cursor-pointer hover:text-green-300" />
                    )}
                  </button>
                </div>
              </div>
  
              {/* 컨텐츠 영역 */}
              <div className="flex flex-col md:flex-row  gap-6 md:gap-8 overflow-y-auto ">
                <div className="md:w-1/3 flex-shrink-0">
                  <CodeChristmasTree />
                </div>
  
                <div className="md:w-2/3">
                  {showLetter && (
                   <TypewriterMessage 
                   recipient="지연"
                   message={`const christmasWish = {
 to: "나의 최고의 코딩 메이트- 지연이에게",
 message: \`
이 특별한 크리스마스에, 너에게 이렇게 마음을 전하게 되어 참 기뻐! 
중학교, 고등학교를 거쳐 대학교까지, 우리는 같은 길을 걸어왔지. 처음엔 그저 같은 아파트에 사는 학교 친구였던 우리가, 
이제는 서로의 가장 소중한 동료가 되어있다는 게 참 신기하고 감사해.

우리가 함께한 순간들이 떠올라. 밤늦게까지 디버깅하면서 좌절하고, 또 그 버그를 함께 해결했을 때의 그 기쁨... 
헬스장에서 땀 흘리며 서로를 응원하던 순간들... 늦은 밤 카페에서 즉석음료를 먹으며 나눴던 이야기들... 
그 모든 순간이 내겐 빛나는 보석 같은 추억이야.

지연아, 난 네가 얼마나 강인한 사람인지 알아. 2학년 때 겪었던 그 힘든 시기도, 지금 마주하고 있는 어려움들도, 
모두 네가 얼마나 치열하게 살아왔는지를 보여주는 증거야. 

성적표에 있는 숫자는 그저 숫자일 뿐이야. 그건 네 가치를 정의하지 못해. 
네가 얼마나 열심히 노력하고 있는지, 얼마나 성장하고 있는지를 나는 가장 가까이에서 지켜봐 왔어.

가족들과의 관계, 불확실한 미래에 대한 두려움, 그 모든 것들이 너를 짓누를 때마다 내 어깨에 기대어 쉬어가길 바라. 
나도 한때 너무 힘든 상황 속에 있었고, 그 시간을 견디며 배운 게 있어. 우리는 혼자가 아니라는 걸. 
함께라면 어떤 어둠도 이겨낼 수 있다는 걸.

넌 네가 생각하는 것보다 훨씬 더 특별하고 빛나는 사람이야. 포기하지 마. 
지금 네가 느끼는 압박감과 불안함은 영원하지 않아. 이 또한 지나갈 거야. 
그리고 그 과정에서 난 언제나 네 곁에 있을 거야.

네가 내 친구가 되어준 것은 내 인생의 가장 큰 축복 중 하나야. 
너와 함께한 모든 순간이, 앞으로 함께할 모든 순간이 소중해. 
우리가 꿈꾸는 미래를 향해 한 걸음씩 나아가자. 
지금은 힘들고 어두워 보일지라도, 우리는 반드시 우리만의 빛나는 길을 만들어 갈 수 있을 거야.

메리 크리스마스, 지연아.
넌 정말 특별하고, 소중하고, 사랑받을 자격이 있는 사람이야.
그리고 난 언제나 네 편이야.
영원한 네 친구가 되어줄게.

사랑해 ♡
 \`,
 from: "당신의 코딩 친구 예지가"
};`} 
                 />
                  )}
                </div>
              </div>
  
              {/* 하단 아이콘 */}
              <div className="flex justify-center space-x-6 mt-8">
                <Code2 className="w-6 h-6 text-blue-400 hover:scale-110 transition-transform cursor-pointer" />
                <Bug className="w-6 h-6 text-yellow-400 hover:scale-110 transition-transform cursor-pointer" />
                <Gift className="w-6 h-6 text-purple-400 hover:scale-110 transition-transform cursor-pointer" />
                <Heart className="w-6 h-6 text-red-400 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </Card>
        </div>
      </div>
  
      <LyricsPopup 
        isOpen={showLyrics} 
        onClose={() => setShowLyrics(false)} 
      />
    </div>
  );
};

export default ChristmasCard;