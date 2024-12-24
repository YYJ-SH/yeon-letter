// src/components/ChristmasCard/LyricsPopup.tsx
'use client';
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
      <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h2 className="text-green-400 font-mono text-xl mb-4">🎵 Christmas Carol Lyrics</h2>
        <pre className="text-slate-300 font-mono whitespace-pre-wrap">
{`우리의 코딩 크리스마스 (Our Coding Christmas)

Verse 1:
모니터 불빛 아래 이 밤
커밋 메시지처럼 떠올려보면
함께 디버깅하던 그 시간
별처럼 빛나고 있네요

Chorus:
메리 크리스마스 지연아
우리 함께한 코딩처럼
이 겨울도 따뜻하게
서로를 비춰주는 빛이 되어요

Verse 2:
에러 날 때면 도와준 날들
성공시켰던 우리 프로젝트
시간이 흘러도 변함없이
함께 성장해가요

Bridge:
버그를 찾아도
솔루션을 찾아도
우리의 우정이
더욱 깊어지길

Final Chorus:
메리 크리스마스 지연아
새로 만들어갈 서비스도
우리 함께라면 언제나
더 완벽해질 거예요

Outro:
이 특별한 크리스마스처럼
우리 코딩 우정 영원하기를...`}
        </pre>
      </div>
    </div>
  );
};

export default LyricsPopup;