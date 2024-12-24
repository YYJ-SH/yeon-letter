// src/components/ChristmasCard/Letter/LyricsPopup.tsx
import React from 'react';
import { X } from 'lucide-react';

interface LyricsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LyricsPopup: React.FC<LyricsPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-rose-50 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-rose-400 hover:text-rose-600"
        >
          <X size={24} />
        </button>
        <h2 className="text-rose-600 font-serif text-xl mb-4">🎵 크리스마스 캐롤</h2>
        <pre className="text-gray-700 font-serif whitespace-pre-wrap leading-relaxed">
{`우리의 크리스마스 (엄마 버전)

Verse 1:
하얀 눈이 내리는 밤
카페에 울려퍼진 엄마의 폭소
따뜻했던 모든 날들이
반짝이는 우리의 이야기
은혜라는 이름처럼
엄마는 나의 축복이에요

Chorus:
메리 크리스마스 엄마
박은혜 나의 엄마
당신의 사랑으로
내 삶은 빛나고 있어요
영원히 함께해요
우리의 크리스마스

Verse 2:
꿈결 같은 캐롤 소리에
떠오르는 지난 시간들
한걸음씩 걸어온 길
당신이 있어 행복했죠

Bridge:
때론 힘들고 지칠 때도
엄마 생각에 다시 일어나요
영원히 감사할래요
우리 엄마 은혜처럼

Outro:
메리 크리스마스 엄마
사랑해요 영원히`}
        </pre>
      </div>
    </div>
  );
};

export default LyricsPopup;