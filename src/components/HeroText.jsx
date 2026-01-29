import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable", "Efficient"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 lg:mt-32 xl:mt-40 rounded-3xl relative px-4 sm:px-8 md:px-12 lg:px-0">

      {/* Restored Original Left-Aligned Layout */}
      <div className="flex flex-col items-start relative pl-4 sm:pl-8 border-l-2 border-blue-500/20 py-2">
        {/* Decorative Header (terminal style) */}
        <div className="flex items-center gap-3 mb-4 overflow-hidden">
          <div className="w-8 md:w-12 h-[2px] bg-blue-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono text-blue-400/80 tracking-[0.3em] uppercase whitespace-nowrap">
            [ IN_DEV_TERMINAL_V1.0.2 ]
          </span>
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-0 left-[-2px] w-[2px] h-8 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />

        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-medium relative"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">Madala Spoorthi</span>

        </motion.h1>

        <motion.p
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-300 mt-4 leading-tight max-w-[90vw] md:max-w-2xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          A Developer <br className="hidden sm:block" /> Dedicated to Crafting
        </motion.p>

        <motion.div
          className="mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <FlipWords
            words={words}
            className="font-black text-white text-5xl sm:text-6xl lg:text-8xl drop-shadow-[0_0_15px_rgba(96,165,250,0.3)] tracking-tighter"
          />
        </motion.div>

        <motion.p
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-400 mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Web Solutions
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
