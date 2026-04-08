import { canvasBlocks } from './data/canvasData';
import { CanvasBlock } from './components/CanvasBlock';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <main className="page relative z-10">
        <header>
          <div className="logo-area">
            <div className="leaf-icon">🌿</div>
            <div>
              <h1>Pick<span>And</span>Plant</h1>
              <div className="subtitle">Business Model Canvas</div>
            </div>
          </div>
          <div className="badge">Home Planting Service</div>
        </header>

        <div className="canvas gap-4">
          {canvasBlocks.map((block, index) => (
            <CanvasBlock key={block.id} data={block} index={index} />
          ))}
        </div>
      </main>
    </div>
  )
}
