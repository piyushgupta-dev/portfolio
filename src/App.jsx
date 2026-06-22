import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skillls/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import CampusImpact from "./sections/CampusImpact/CampusImpact";
import InnovationLab from "./sections/InnovationLab/InnovationLab";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CampusImpact />
        <InnovationLab />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;