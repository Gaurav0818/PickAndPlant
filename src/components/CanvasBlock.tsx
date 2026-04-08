import type { CanvasBlockData } from '../data/canvasData';

interface Props {
  data: CanvasBlockData;
  index: number;
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
      className={`block ${data.gridClass} ${bgClass} ${borderClass} transition-transform hover:-translate-y-1 duration-300 animate-fade-up`}
      style={{ animationDelay: `${(index + 1) * 0.05}s` }}
    >
      <div className="accent-line" style={{ backgroundColor: data.accentColor }} />

      <div className={`block-label ${labelClass}`}>
        <span className="icon">{data.icon}</span> {data.label}
      </div>

      <h3 className={`block-title ${titleClass}`}>
        {data.title}
      </h3>

      <ul className={isCost ? 'grid grid-cols-2 gap-x-6 gap-y-2' : 'space-y-2'}>
        {data.items.map((item, i) => (
          <li
            key={i}
            className={`text-xs leading-relaxed ${textClass}`}
            style={{ '--bullet-color': isValueProp ? '#d4a853' : data.accentColor } as React.CSSProperties}
          >
            {item}
          </li>
        ))}
      </ul>

      {isValueProp && <span className="absolute bottom-4 right-4 text-4xl opacity-15">🌱</span>}
    </div>
  );
};
