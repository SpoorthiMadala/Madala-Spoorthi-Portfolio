import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 overflow-hidden border grid-default-color rounded-3xl border-white/10 backdrop-blur-sm shadow-2xl relative">
        <img src="/assets/grid.png" alt="grid" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="flex flex-col items-start gap-20 p-8 sm:gap-24 md:p-10 lg:flex-row lg:p-16 lg:gap-12 relative z-10">
          {/* Left Side: Bio and Contact */}
          <div className="flex-1 text-left">
            <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Hi, I'm Madala Spoorthi
            </h3>
            <p className="mt-6 text-base leading-relaxed sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-0">
              I am a passionate and detail-oriented full-stack developer with a strong foundation in building robust and scalable web applications. I specialize in the MERN stack, leveraging MongoDB, Express.js, React, and Node.js to create seamless and efficient user experiences. My technical expertise extends to various programming languages, frameworks, and tools that enable me to deliver high-quality, professional solutions tailored to meet diverse project requirements.
            </p>
            <div className="flex flex-col items-start gap-6 mt-10">
              <p className="text-lg sm:text-xl font-semibold text-neutral-200">
                Let&apos;s build something amazing together.
              </p>
              <CopyEmailButton />
            </div>
          </div>

          {/* Right Side: Tech Stack (Rotating Icons) */}
          <div className="relative flex items-center justify-center flex-1 w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center scale-[0.85] sm:scale-125 md:scale-150 lg:scale-[1.75]">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
