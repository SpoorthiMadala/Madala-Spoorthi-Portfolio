import React, { Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container mx-auto max-w-[1600px] overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
