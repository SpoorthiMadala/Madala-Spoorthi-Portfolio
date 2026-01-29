import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { skills } from "../constants/index.js";
import { useState, useRef, useEffect } from "react";

const SkillPill = ({ skill }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Magnetic pull effect
        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY, z: 50 }}
            whileHover={{
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.6)",
                scale: 1.1
            }}
            className="px-5 py-2.5 rounded-xl border border-white/10 bg-[#0a1025]/60 text-neutral-300 text-sm md:text-base font-medium transition-colors duration-300 cursor-default flex items-center gap-2 group/pill relative overflow-hidden"
        >
            {/* Internal Glow */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/pill:opacity-100 transition-opacity pointer-events-none" />
            <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full group-hover/pill:bg-blue-400 group-hover/pill:shadow-[0_0_8px_#3b82f6] transition-all" />
            <span className="relative z-10 group-hover/pill:text-white transition-colors">{skill}</span>
        </motion.div>
    );
};

const SkillCard = ({ category }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]), { stiffness: 100, damping: 20 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-10 rounded-[2.5rem] border border-white/5 bg-[#030712]/80 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-700 h-full overflow-hidden shadow-2xl"
        >
            {/* Animated Border Glow Path */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-[-2px] bg-gradient-to-tr from-transparent via-blue-500/40 to-transparent animate-border-glow bg-[length:200%_200%] rounded-[2.5rem]" />
            </div>

            <div style={{ transform: "translateZ(80px)" }} className="relative z-20">
                <div className="flex items-center gap-5 mb-10">
                    <div className="flex flex-col gap-1">
                        <div className="w-6 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                        <div className="w-4 h-[2px] bg-blue-400 opacity-50" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase font-mono group-hover:text-blue-400 transition-colors duration-500 leading-none">
                        {category.category}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                    {category.items.map((skill) => (
                        <SkillPill key={skill} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-6 right-6 w-12 h-12 flex flex-col items-end opacity-20 group-hover:opacity-50 transition-opacity">
                <div className="w-full h-px bg-blue-500" />
                <div className="w-px h-full bg-blue-500" />
            </div>

            {/* Background Matrix-like ID */}
            <div className="absolute bottom-6 left-10 opacity-5 font-mono text-[10px] text-blue-400 pointer-events-none group-hover:opacity-20 transition-opacity">
                0x{Math.random().toString(16).slice(2, 10).toUpperCase()} // SYSTEM_ACCESS_STABLE
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="c-space section-spacing relative py-32" id="skills">
            {/* Background Noise/Grid */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
            </div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start mb-20 text-left"
                >
                    <div className="relative mb-6">
                        <h2 className="text-heading relative z-10">
                            My <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Skills</span>
                        </h2>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-6 -left-6 w-24 h-24 border border-blue-500/10 rounded-full pointer-events-none"
                        />
                    </div>
                    <p className="subtext max-w-2xl text-neutral-400/80 italic font-mono tracking-tighter">
                        {"[ EXECUTING_CAPABILITY_SCAN ... ]"}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 max-w-7xl mx-auto">
                    {skills.map((category) => (
                        <SkillCard key={category.category} category={category} />
                    ))}
                </div>
            </div>

            {/* Side floating decorative text */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 rotate-90 hidden xl:flex items-center gap-4 opacity-10 font-mono text-xs tracking-[1em] text-blue-500">
                <div className="w-20 h-px bg-blue-500" />
                <span>PORTFOLIO_V3</span>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 -rotate-90 hidden xl:flex items-center gap-4 opacity-10 font-mono text-xs tracking-[1em] text-blue-500">
                <span>SPOORTHI_ROOT</span>
                <div className="w-20 h-px bg-blue-500" />
            </div>
        </section>
    );
};

export default Skills;
