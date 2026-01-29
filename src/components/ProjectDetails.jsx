import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  techStack,
  href,
  githubRepo,
  liveLink,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm p-4">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl object-cover" />
        <div className="p-5 md:p-8">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-sand font-medium">{techStack}</p>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-300 leading-relaxed text-sm">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
            <div className="flex gap-6">
              {githubRepo && (
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium cursor-pointer hover:text-white transition-colors duration-200"
                >
                  <img src="/assets/logos/github.svg" className="size-5" />
                  GitHub
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium cursor-pointer text-sand hover:text-white transition-colors duration-200"
                >
                  <img src="/assets/arrow-up.svg" className="size-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
