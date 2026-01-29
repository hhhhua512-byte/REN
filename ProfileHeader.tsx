
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ProfileHeader: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Logic to generate a cartoon avatar using Gemini 2.5 Flash Image
  const generateAvatar = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: "Create a vibrant 2D cartoon avatar of a friendly East Asian man with short dark hair and modern glasses, wearing a sleek black jacket. The background should feature abstract zebra patterns in high-contrast black and white with neon accents. Style: Modern, clean vector illustration." }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setAvatarUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Avatar generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-24 pb-12 relative z-30">
      {/* Avatar Container */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-8 border-slate-900 overflow-hidden brutal-shadow bg-slate-800 flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Cartoon Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              {isGenerating ? (
                <div className="animate-spin text-4xl">🌀</div>
              ) : (
                <div className="space-y-2">
                  <div className="text-4xl">👨‍💻</div>
                  <button 
                    onClick={generateAvatar}
                    className="text-[10px] font-black uppercase tracking-tighter bg-white text-black px-2 py-1 rounded"
                  >
                    生成 AI 形象
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black font-black px-3 py-1 rounded-lg border-2 border-black rotate-12 text-sm shadow-sm">
          ZEBRA 2025
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-5xl md:text-7xl font-black font-quirky tracking-tighter text-white">
          2025班马——<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">华仁</span>
        </h1>
        <div className="flex items-center justify-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-sm">
          <span>Designer</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>AI Explorer</span>
          <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
          <span>Zebra Evolution</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
