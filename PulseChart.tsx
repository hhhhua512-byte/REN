
import React from 'react';

const PulseChart: React.FC = () => {
  // Energy levels: 0-100 (Busy: 80-100, Leisure: 10-30)
  const data = [
    95, 85, 100, 80, 90, 85, 98, 92, 88, 95, // Jan - Oct (Busy)
    25, 15  // Nov - Dec (Leisure)
  ];

  const labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  
  const width = 1000;
  const height = 200;
  const padding = 40;
  const points = data.map((val, i) => {
    const x = padding + (i * (width - padding * 2) / (data.length - 1));
    const y = height - padding - (val * (height - padding * 2) / 100);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="mb-24 bg-slate-900/40 p-8 rounded-[3rem] border-2 border-slate-800 backdrop-blur-xl relative overflow-hidden group">
      {/* Background Zebra Stripe Subtle Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,#fff,#fff_10px,#000_10px,#000_20px)]"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-3xl animate-pulse">📉</span>
          <h3 className="text-2xl font-black font-quirky text-slate-100">2025 状态心率：从繁华到沉淀</h3>
        </div>
        <div className="flex gap-4 text-xs font-bold uppercase tracking-tighter">
          <span className="flex items-center gap-1 text-rose-500"><span className="w-2 h-2 bg-rose-500 rounded-full"></span> 忙碌爆发</span>
          <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span> 深度思考</span>
        </div>
      </div>

      <div className="relative h-[250px] w-full z-10">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">
          {/* Gradient for the line */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="80%" stopColor="#f43f5e" />
              <stop offset="90%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path 
            d={`M ${padding},${height-padding} L ${points} L ${width-padding},${height-padding} Z`} 
            fill="url(#fillGradient)"
            className="transition-all duration-1000"
          />

          {/* Main Pulse Line */}
          <polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            className="transition-all duration-1000"
          />

          {/* Data Points */}
          {data.map((val, i) => {
            const x = padding + (i * (width - padding * 2) / (data.length - 1));
            const y = height - padding - (val * (height - padding * 2) / 100);
            return (
              <g key={i} className="group/dot">
                <circle 
                  cx={x} cy={y} r="6" 
                  fill={i < 10 ? '#f43f5e' : '#10b981'} 
                  className="transition-all duration-300 group-hover/dot:r-10"
                />
                <text 
                  x={x} y={height - 10} 
                  textAnchor="middle" 
                  className="fill-slate-500 text-[14px] font-bold font-quirky"
                >
                  {labels[i]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 relative z-10">
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-rose-500/30">
          <div className="text-rose-400 font-black text-sm mb-1 uppercase tracking-wider">High Energy Phase (Jan-Oct)</div>
          <p className="text-slate-400 text-sm">手握百万订单，转战国内名城、恒力项目。开足马力，无畏挑战。</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-emerald-500/30">
          <div className="text-emerald-400 font-black text-sm mb-1 uppercase tracking-wider">Reflect Phase (Nov-Dec)</div>
          <p className="text-slate-400 text-sm">暴雷之后的冷静期。总结短板，学习总包与AI深度应用。</p>
        </div>
      </div>
    </div>
  );
};

export default PulseChart;
