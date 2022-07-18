import React, { Fragment } from "react";
import { useMode } from "../../ModeContext/ModeContext";

import { Fade } from "react-awesome-reveal";
import "./Hero.css";
const Hero = () => {
  const mode = useMode();
  const aboutMe = (section) => {
    const scrollDiv = document.getElementById(section).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  };
  return (
    <Fragment>
      <Fade duration={2000} triggerOnce>
        <div className={`hero-div ${mode}`}>
          <div className={`content-div ${mode}`}>
            <div className="hero-text-span">
              <p className={`hero-text ${mode}`}>
                Hi, my name is{" "}
                <span className="hero-text-name"> Brandon Shewnarain</span>
              </p>
            </div>
            <p className={`hero-text ${mode}`}>An aspiring Web Developer</p>
            <div className="hero-button-div">
              <Fade duration={4000} triggerOnce>
                <button
                  className={`hero-button ${mode}`}
                  onClick={() => aboutMe("about")}
                >
                  About
                </button>
                <button
                  className={`hero-button ${mode}`}
                  onClick={() => aboutMe("projects")}
                >
                  Projects
                </button>
                <button
                  className={`hero-button ${mode}`}
                  onClick={() => aboutMe("other-projects")}
                >
                  Other Projects
                </button>
                <button
                  className={`hero-button ${mode}`}
                  onClick={() => aboutMe("contact")}
                >
                  Contact Me
                </button>
                <button
                  className={`hero-button ${mode}`}
                  onClick={() => aboutMe("footer")}
                >
                  Other Links
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Hero;
