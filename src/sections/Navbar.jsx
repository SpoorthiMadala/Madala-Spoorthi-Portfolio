import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

function Navigation({ isMobile }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul className={`nav-ul ${!isMobile ? "lg:gap-10" : ""}`}>
      {navLinks.map((link, index) => (
        <li
          key={link.name}
          className="relative nav-li"
          onMouseEnter={() => !isMobile && setHoveredIndex(index)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
        >
          <a className="nav-link" href={link.href}>
            {link.name}
          </a>
          {!isMobile && (
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="nav-pill"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
            </AnimatePresence>
          )}
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 z-50 w-full border-b backdrop-blur-xl bg-primary/40 border-white/5">
      <div className="mx-auto c-space max-w-[1600px]">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tighter transition-colors text-neutral-400 hover:text-white"
          >
            Madala Spoorthi<span className="text-aqua"></span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 transition-all rounded-full cursor-pointer text-neutral-400 hover:text-white hover:bg-white/10 focus:outline-none lg:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-5 h-5"
              alt="toggle"
            />
          </button>

          <nav className="hidden lg:flex">
            <Navigation isMobile={false} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t lg:hidden bg-primary/95 backdrop-blur-2xl border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="py-8">
              <Navigation isMobile={true} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
