// src/components/ChristmasCard/VSCodeEnvelope.tsx
import React from 'react';
import { Terminal, Folder, ChevronRight } from 'lucide-react';

interface VSCodeEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const VSCodeEnvelope: React.FC<VSCodeEnvelopeProps> = ({ isOpen, onOpen }) => {
  return (
    <div 
      className={`transition-all duration-1000 transform cursor-pointer 
        ${isOpen ? 'scale-110 opacity-0' : 'scale-100 opacity-100 hover:scale-105'}
        animate-pulse-slow`}
      onClick={onOpen}
    >
      <div className="bg-slate-800 rounded-lg border border-slate-600">
        <div className="p-4 border-b border-slate-600">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-slate-200 font-mono">VSCode</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Folder className="w-5 h-5 text-yellow-400" />
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-green-400 font-mono">christmas_2024</span>
          </div>

          {/* 사진 추가 */}
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <img 
              src="/images/friends.png" 
              alt="지연이와 예지" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
              Merry Christmas!
            </h2>
            <p className="text-slate-300 font-mono mb-6">
              git commit -m "크리스마스 편지를 열어줘 🎄"
            </p>
            
            {/* 클릭 유도 버튼 */}
            <button className="bg-green-500 text-white px-6 py-2 rounded-full 
              font-mono hover:bg-green-400 transform hover:scale-110 transition-all
              animate-bounce">
              열어보려면 클릭! ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeEnvelope;