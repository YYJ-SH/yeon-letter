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
      <div className="bg-violet-50 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-violet-400 hover:text-violet-600"
        >
          <X size={24} />
        </button>
        <h2 className="text-violet-600 font-serif text-xl mb-4">🎵 크리스마스 캐롤</h2>
        <pre className="text-gray-700 font-serif whitespace-pre-wrap leading-relaxed">
{`우리의 크리스마스 (예은이 버전)

Verse 1:
첫 만남부터 지금까지
네 미소는 늘 같은 빛
장난치는 언니 곁에서
변함없이 웃어주던 너

Chorus:
넌 하나님이 준 선물
내 인생의 가장 큰 축복
지친 날에 기대어봐
언니가 안아줄게

Verse 2:
때론 힘들어 보이는 널
지켜보며 마음 아파도
긴 인생의 한 페이지일 뿐
우리 함께 이겨낼 거야

Bridge:
하나님의 시간 속에
모든 것이 아름다워질 거야
네 옆에서 늘 기도할게
영원한 너의 편이 될게`}
        </pre>
      </div>
    </div>
  );
};

export default LyricsPopup;