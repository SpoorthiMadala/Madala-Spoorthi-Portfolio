import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      center
      className="flex flex-col items-center justify-center bg-[#020617] w-screen h-screen z-[100]"
    >
      <div className="relative flex flex-col items-center">
        {/* HUD Ring Decor */}
        <div className="absolute -inset-10 border border-blue-500/10 rounded-full animate-spin [animation-duration:10s]" />
        <div className="absolute -inset-8 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

        {/* Percentage Number */}
        <div className="relative flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] font-mono tracking-tighter">
            {Math.round(progress)}
            <span className="text-2xl md:text-3xl text-blue-500 ml-1">%</span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-blue-400/60 uppercase tracking-[0.5em] mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            System_Booting...
          </span>
        </div>

        {/* Loading Bar HUD style */}
        <div className="mt-10 w-48 md:w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
