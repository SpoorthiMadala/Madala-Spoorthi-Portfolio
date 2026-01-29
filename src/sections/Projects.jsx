import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 150 });
  const springY = useSpring(y, { damping: 25, stiffness: 150 });
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    x.set(e.clientX + 25);
    y.set(e.clientY + 25);
  };
  const [preview, setPreview] = useState(null);
  const showPreview = preview && window.innerWidth >= 1024;
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className="mt-10 flex flex-col">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>
      <AnimatePresence>
        {showPreview && (
          <motion.img
            key={preview}
            className="fixed top-0 left-0 z-50 object-cover h-64 rounded-xl shadow-2xl pointer-events-none w-96 border border-white/10"
            src={preview}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ x: springX, y: springY }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
