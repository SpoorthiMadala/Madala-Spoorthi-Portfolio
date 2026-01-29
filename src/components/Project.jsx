import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  githubRepo,
  liveLink,
  techStack,
  image,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="group relative flex flex-wrap items-center justify-between py-10 px-6 sm:px-10 -mx-6 sm:-mx-10 rounded-2xl transition-all duration-500 hover:bg-white/[0.03] space-y-8 sm:flex sm:space-y-0 cursor-pointer"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex flex-col gap-2">
          <p className="text-2xl md:text-3xl font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
            {title}
          </p>
          <p className="text-sand text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {techStack}
          </p>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 sm:opacity-100 sm:translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-500"
        >
          <span className="text-sm font-medium">Read More</span>
          <img src="assets/arrow-right.svg" className="w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          techStack={techStack}
          href={href}
          githubRepo={githubRepo}
          liveLink={liveLink}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
