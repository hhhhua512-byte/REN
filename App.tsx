
import React, { useEffect, useState } from 'react';
import { DATA, STICKERS } from './constants';
import KeywordCard from './components/KeywordCard';
import FloatingSticker from './components/FloatingSticker';
import PulseChart from './components/PulseChart';
import ProfileHeader from './components/ProfileHeader';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#1e293b_0%,_#0f172a_100%)] opacity-50"></div>
        {STICKERS.map((emoji, i) => (
          <FloatingSticker key={i} emoji={emoji} delay={i * 0.5} />
        ))}
      </div>

      {/* New Identity Header */}
      <ProfileHeader />

      {/* Title & Narrative Section */}
      <header className="relative z-20 pb-16 text-center px-4">
        <div className="inline-block relative">
          <div className="bg-white text-black font-bold px-6 py-2 inline-block -rotate-1 border-4 border-black text-xl mb-6 shadow-[4px_4px_0px_0px_#ec4899]">
            进化之路：回顾 2025 · 启航 2026
          </div>
        </div>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium opacity-80 mt-4 px-6 leading-relaxed">
          手握百万订单的激荡，到国内项目的深耕转型。这一年，我们在动荡中进化，在“班马”式的黑白纹理中寻找平衡与突破。
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Visual Pulse Chart */}
        <PulseChart />

        {/* Year Cards */}
        <div className="space-y-12">
          {DATA.map((item, index) => (
            <KeywordCard key={item.year} data={item} index={index} />
          ))}
        </div>

        {/* Action Footer Message */}
        <section className="text-center py-20 space-y-10">
          <div className="inline-block p-10 md:p-14 rounded-[3rem] bg-slate-800/40 border-4 border-dashed border-slate-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-pink-600/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <h3 className="text-4xl md:text-6xl font-black font-quirky relative z-10 leading-tight">
              跑通变现逻辑，<br/>
              <span className="text-yellow-400">共同进化，一起加油！</span>
            </h3>
            <p className="mt-8 text-xl text-slate-400 font-bold relative z-10 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-slate-700"></span>
              NEXT GOAL: 每两周 AI 实操分享
              <span className="w-8 h-[2px] bg-slate-700"></span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <button className="bg-white text-black font-black px-10 py-5 rounded-2xl brutal-shadow hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 text-lg">
              <span>保存总结</span> 📸
            </button>
            <button className="bg-pink-600 text-white font-black px-10 py-5 rounded-2xl brutal-shadow-pink hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 text-lg border-2 border-black">
              <span>开启 2026 副本</span> 🎮
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 text-center text-slate-500 font-bold relative z-10 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-md">
        <p className="text-lg">© 2025 班马——华仁 · 进化无止境</p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="text-xs uppercase tracking-[0.3em]">Ambition</span>
          <span className="text-xs uppercase tracking-[0.3em]">Execution</span>
          <span className="text-xs uppercase tracking-[0.3em]">Evolution</span>
        </div>
      </footer>

      {/* Reading Progress Bar */}
      <div 
        className="fixed bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 z-50 origin-left"
        style={{ transform: `scaleX(${Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1)})` }}
      ></div>
    </div>
  );
};

export default App;
