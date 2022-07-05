import React, { Fragment } from "react";
import Darkmode from "./Darkmode/Darkmode";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import OtherProjects from "./Sections/OtherProjects/OtherProjects";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import "./Home.css";

const Home = () => {
  // console.log(mode);
  return (
    <Fragment>
      <Darkmode />
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
