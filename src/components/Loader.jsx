import { Html, useProgress } from "@react-three/drei";

const Loader = ({ position }) => {
  const { progress } = useProgress();

  return (
    <Html
      position={position || [0, 0, 0]}
      center
      distanceFactor={20}
      zIndexRange={[100, 0]}
      className="flex flex-col items-center justify-center pointer-events-none select-none"
    >
      <div className="relative flex flex-col items-center z-[100] scale-125 md:scale-150">
        {/* Glowing aura to ensure visibility against any background */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full" />

        {/* Minimal HUD ring for context */}
        <div className="absolute -inset-10 border border-blue-500/20 rounded-full animate-pulse" />

        {/* Integer Percentage */}
        <span className="text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.4)] font-mono tracking-tighter">
          {Math.round(progress)}
          <span className="text-lg md:text-xl text-blue-500 ml-1 opacity-80">%</span>
        </span>

        {/* Small Progress Bar */}
        <div className="mt-3 w-20 md:w-28 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 shadow-[0_0_8px_#3b82f6] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[8px] font-mono text-blue-400/40 uppercase tracking-[0.3em] mt-2">
          Sync_In_Progress
        </span>
      </div>
    </Html>
  );
};

export default Loader;
