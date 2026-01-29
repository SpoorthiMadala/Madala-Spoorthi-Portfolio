import { motion, useScroll, useSpring, useTransform, useMotionValue } from "motion/react";
import { useEffect } from "react";


const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, { damping: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth) - 0.5;
      const moveY = (clientY / window.innerHeight) - 0.5;
      mouseX.set(moveX * 2);
      mouseY.set(moveY * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gridX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
  const gridY = useTransform(springY, [-1, 1], ["-2%", "2%"]);
  const circuitsX = useTransform(springX, [-1, 1], ["-5%", "5%"]);
  const circuitsY = useTransform(springY, [-1, 1], ["-3%", "3%"]);
  const codeX = useTransform(springX, [-1, 1], ["-10%", "10%"]);
  const codeY = useTransform(springY, [-1, 1], ["-8%", "8%"]);


  return (
    <section className="absolute inset-0 bg-[#020617]">
      <div className="relative h-screen overflow-hidden">
        {/* Deep Tech Grid */}
        <div
          className="absolute inset-0 w-full h-screen -z-50 opacity-40"
          style={{
            backgroundImage: "url(/assets/tech-grid.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        {/* Parallax Layer: Grid Movement */}
        <motion.div
          className="absolute inset-x-[-5%] inset-y-[-5%] w-[110%] h-[110%] -z-40 opacity-30"
          style={{
            backgroundImage: "url(/assets/tech-grid.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            x: gridX,
            y: gridY,
          }}
        />


        {/* Parallax Layer: Circuits */}
        <motion.div
          className="absolute inset-x-[-10%] inset-y-[-10%] w-[120%] h-[120%] -z-30 opacity-50"
          style={{
            backgroundImage: "url(/assets/tech-circuits.png)",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            x: circuitsX,
            y: circuitsY,
          }}
        />


        {/* Parallax Layer: Floating Code */}
        <motion.div
          className="absolute inset-x-[-15%] inset-y-[-15%] w-[130%] h-[130%] -z-20 opacity-20"
          style={{
            backgroundImage: "url(/assets/tech-code.png)",
            backgroundPosition: "top left",
            backgroundSize: "cover",
            x: codeX,
            y: codeY,
          }}
        />


        {/* Final Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] -z-10" />
      </div>
    </section>
  );
};


export default ParallaxBackground;
