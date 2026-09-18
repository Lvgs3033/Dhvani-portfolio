import Loader from "./Loader";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
