import React, { Fragment } from "react";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import OtherProjects from "./Sections/OtherProjects/OtherProjects";
import OtherProjectsM from "./Sections/OtherProjects/OtherProjectsMobile/OtherProjectsM";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <OtherProjectsM />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
