
import React from 'react';
import { MONTHS_2025 } from '../constants';

const MonthlyPulse: React.FC = () => {
  return (
    <div className="mb-24 bg-slate-900/50 p-6 md:p-10 rounded-[2rem] border-2 border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl">📅</span>
        <h3 className="text-2xl font-black font-quirky text-slate-200">2025 状态心率图</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {MONTHS_2025.map((item, idx) => (
          <div 
            key={idx}
            className={`relative p-4 rounded-2xl border-2 transition-all hover:scale-105 ${
              item.status === 'busy' 
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-400' 
                : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
            }`}
          >
            <div className="text-sm font-bold opacity-70 mb-1">{item.month}</div>
            <div className="text-lg font-black tracking-tight">
              {item.status === 'busy' ? '忙碌 🔥' : '清闲 🍵'}
            </div>
            {item.status === 'busy' && (
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-8 text-slate-500 text-sm font-medium italic text-center">
        * 前10个月全力冲刺，11-12月沉淀与思考。
      </p>
    </div>
  );
};

export default MonthlyPulse;
