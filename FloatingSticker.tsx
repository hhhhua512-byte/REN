
import React, { useEffect, useState } from 'react';

interface FloatingStickerProps {
  emoji: string;
  delay?: number;
}

const FloatingSticker: React.FC<FloatingStickerProps> = ({ emoji, delay = 0 }) => {
  const [pos, setPos] = useState({ top: '0%', left: '0%' });

  useEffect(() => {
    setPos({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  }, []);

  return (
    <div
      className="absolute text-4xl select-none pointer-events-none animate-float opacity-30 z-0"
      style={{
        top: pos.top,
        left: pos.left,
        animationDelay: `${delay}s`,
      }}
    >
      {emoji}
    </div>
  );
};

export default FloatingSticker;
