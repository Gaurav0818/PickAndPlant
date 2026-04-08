import React from 'react';
import { CanvasBlockData } from '../data/canvasData';

interface Props {
  data: CanvasBlockData;
  index: number; // Added for animation delay
}

export const CanvasBlock: React.FC<Props> = ({ data, index }) => {
  const isValueProp = data.id === 'value-prop';
  const isCost = data.id === 'cost-structure';
  const isRevenue = data.id === 'revenue-streams';
  
  let bgClass = 'bg-white';
  let borderClass = 'border-brand-green-light/20';
  let titleClass = 'text-brand-green-dark';
  let labelClass = 'text-brand-earth';
  let textClass = 'text-brand-text-mid';
  
  // Special block styling overrides
  if (isValueProp) {
    bgClass = 'bg-gradient-to-br from-brand-green-dark to-brand-green-mid';
    borderClass = 'border-transparent';
    titleClass = 'text-white';
    labelClass = 'text-brand-leaf/70';
    textClass = 'text-white/85';
  } else if (isRevenue) {
    bgClass = 'bg-gradient-to-br from-[#f5f9f7] to-[#e8f5ee]';
    borderClass = 'border-brand-green-light/35';
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 border-[1.5px] shadow-sm transition-transform hover:-translate-y-1 duration-300 ${bgClass} ${borderClass} ${data.gridClass} animate-fade-up`}
      style={{ animationDelay: `${(index + 1) * 0.05}s` }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: data.accentColor }} />
      
      <div className={`text-[9px] font-medium tracking-[2px] uppercase mb-2.5 flex items-center gap-1.5 ${labelClass}`}>
        <span className="text-sm">{data.icon}</span> {data.label}
      </div>
      
      <h3 className={`font-serif text-[15px] md:text-[17px] font-bold mb-3.5 leading-tight ${titleClass}`}>
        {data.title}
      </h3>
      
      <ul className={`flex ${isCost ? 'flex-row flex-wrap gap-x-6 gap-y-2' : 'flex-col gap-2'}`}>
        {data.items.map((item, i) => (
          <li key={i} className={`text-xs leading-relaxed relative pl-3.5 ${textClass}`}>
            <span className="absolute left-0 top-[6px] w-[5px] h-[5px] rounded-full" style={{ backgroundColor: isValueProp ? '#d4a853' : data.accentColor }} />
            {item}
          </li>
        ))}
      </ul>
      
      {isValueProp && <span className="absolute bottom-4 right-4 text-4xl opacity-15">🌱</span>}
    </div>
  );
};