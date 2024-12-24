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
      <div className="bg-sky-50 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-sky-400 hover:text-sky-600"
        >
          <X size={24} />
        </button>
        <h2 className="text-sky-600 font-serif text-xl mb-4">🎵 크리스마스 캐롤</h2>
        <pre className="text-gray-700 font-serif whitespace-pre-wrap leading-relaxed">
{`우리의 크리스마스 (아빠 버전)

Verse 1:
매일 저녁 들려주시던 기도 소리에
잠들 때마다 속삭여주신 사랑 속에
아버지의 온유한 미소가
저를 지켜주었죠

Chorus:
저는 아빠의 자랑
아빠는 제 기쁨
하나님 주신 선물처럼
우리는 서로의 축복

Verse 2:
힘든 시간 겪으실 때도
한결같은 사랑으로
저를 위해 기도하시는
아버지의 마음

Bridge:
이제는 제가 드릴게요
당신께 든든한 어깨를
약속해요 아버지
영원히 함께할게요`}
        </pre>
      </div>
    </div>
  );
};

export default LyricsPopup;