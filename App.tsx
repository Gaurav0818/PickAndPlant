import React from 'react';
import { canvasBlocks } from './data/canvasData';
import { CanvasBlock } from './components/CanvasBlock';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-text-dark p-6 md:p-10 relative overflow-x-hidden">
      {/* Decorative background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] bg-brand-green-light/10 rounded-[100%] blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[60%] bg-brand-green-mid/10 rounded-[100%] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-9 pb-5 border-b-2 border-brand-green-light gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-brand-green-mid rounded-full rounded-br-sm flex items-center justify-center text-[22px] -rotate-12 shadow-lg shadow-brand-green-mid/30">
              🌿
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-black text-brand-green-dark tracking-tight leading-tight">
                Pick<span className="text-brand-green-light">And</span>Plant
              </h1>
              <div className="text-xs font-medium tracking-[2px] uppercase text-brand-earth mt-1">
                Business Model Canvas
              </div>
            </div>
          </div>
          <div className="bg-brand-green-dark text-brand-leaf text-[11px] font-medium tracking-[1.5px] uppercase py-1.5 px-3.5 rounded-full">
            Home Planting Service
          </div>
        </header>

        {/* Main Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {canvasBlocks.map((block) => (
            <CanvasBlock key={block.id} data={block} />
          ))}
        </div>
      </div>
    </div>
  );
}