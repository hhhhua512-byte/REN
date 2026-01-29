
import { YearReview, MonthStatus } from './types';

export const MONTHS_2025: MonthStatus[] = [
  { month: '1月', status: 'busy' },
  { month: '2月', status: 'busy' },
  { month: '3月', status: 'busy' },
  { month: '4月', status: 'busy' },
  { month: '5月', status: 'busy' },
  { month: '6月', status: 'busy' },
  { month: '7月', status: 'busy' },
  { month: '8月', status: 'busy' },
  { month: '9月', status: 'busy' },
  { month: '10月', status: 'busy' },
  { month: '11月', status: 'leisure' },
  { month: '12月', status: 'leisure' },
];

export const DATA: YearReview[] = [
  {
    year: "2025",
    title: "从百万订单到落地深耕",
    keywords: [
      { word: "进步", color: "bg-blue-400" },
      { word: "逆势", color: "bg-purple-400" },
      { word: "AI", color: "bg-cyan-400" },
      { word: "转型", color: "bg-orange-400" },
      { word: "落地", color: "bg-green-400" }
    ],
    description: "2025是相当动荡且深刻的一年。开年手握百万订单，经历过太子项目的波折，我们看清了过于依赖海外的短板。于是，我们开始深耕国内市场，通过天地源旅居等项目，完成了从传统地产到总包落地的升级。不仅是AI知识的精进，更是空间与逻辑的闭环。",
    quote: "2025是“我必须改变并真正改变的一年”。",
    themeColor: "from-indigo-600 to-purple-600",
    secondaryColor: "border-purple-400"
  },
  {
    year: "2026",
    title: "赋能团队，跑通新业务逻辑",
    keywords: [
      { word: "掌控", color: "bg-pink-500" },
      { word: "审美", color: "bg-yellow-400" },
      { word: "开拓", color: "bg-red-500" },
      { word: "系统", color: "bg-indigo-500" },
      { word: "主动AI化", color: "bg-lime-400" }
    ],
    description: "2026的目标是成为AI的主人。我立下Flag：每两周组织一次AI实操课，带动团队共同精进。在业务上，不仅要突破行业壁垒，更要跑通变现逻辑，在不确定中寻找确定的增长空间。",
    quote: "让AI成为团队的DNA，大家一起加油！",
    themeColor: "from-rose-500 to-orange-400",
    secondaryColor: "border-pink-400"
  }
];

export const STICKERS = [
  "🚀", "✨", "🤖", "🎨", "📈", "🎯", "🧠", "🔥", "🌈", "💻", "💥", "🖖"
];
