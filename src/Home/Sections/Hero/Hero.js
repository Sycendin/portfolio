import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import "./Hero.css";
const Hero = () => {
  const aboutMe = () => {
    const scrollDiv = document.getElementById("about").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  };
  return (
    <Fragment>
      <Fade duration={2000} triggerOnce>
        <div className="hero-div">
          <div className="content-div">
            <div className="hero-text-span">
              <p className="hero-text">
                Hi, my name is{" "}
                <span className="hero-text-name"> Brandon Shewnarain</span>
              </p>
            </div>
            <p className="hero-text">An aspiring Web Developer</p>
            <div>
              <Fade duration={4000} triggerOnce>
                <button className="hero-button" onClick={() => aboutMe()}>
                  Know more
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
