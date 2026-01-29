
import React from 'react';
import { YearReview } from '../types';

interface KeywordCardProps {
  data: YearReview;
  index: number;
}

const KeywordCard: React.FC<KeywordCardProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 mb-24`}>
      {/* Year Display Badge */}
      <div className="flex lg:flex-col justify-center items-center lg:w-48 shrink-0">
        <div className={`relative z-10 w-40 h-40 lg:w-48 lg:h-48 rounded-[2.5rem] flex flex-col items-center justify-center border-4 ${data.secondaryColor} brutal-shadow bg-slate-800 transition-transform hover:scale-105 hover:-rotate-2`}>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Year of</span>
          <span className="text-6xl font-black font-quirky text-white">{data.year}</span>
        </div>
      </div>

      {/* Content Box */}
      <div className={`flex-1 flex flex-col justify-between space-y-6 bg-slate-900/80 p-8 md:p-12 rounded-[3rem] border-4 ${data.secondaryColor} ${isEven ? 'brutal-shadow-pink' : 'brutal-shadow-lime'}`}>
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-quirky leading-tight mb-8">
            {data.title}
          </h2>

          {/* Keywords Pill Grid */}
          <div className="flex flex-wrap gap-3 mb-10">
            {data.keywords.map((kw, idx) => (
              <span
                key={idx}
                className={`${kw.color} text-slate-900 px-5 py-2 rounded-2xl font-black text-lg border-2 border-black brutal-shadow transition-all hover:-translate-y-1 hover:-translate-x-1 cursor-default`}
              >
                {kw.word}
              </span>
            ))}
          </div>

          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            {data.description}
          </p>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-4">
          <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white font-quirky italic">
            " {data.quote} "
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeywordCard;
