import React, { Fragment } from "react";
import { useMode } from "../../ModeContext/ModeContext";
import { heroButtonData } from "./Herodata/Herodata";
import { Fade } from "react-awesome-reveal";
import "./Hero.css";
const Hero = () => {
  const mode = useMode();
  const aboutMe = (section) => {
    if (section === "pdf") {
      window.open(
        "https://drive.google.com/file/d/1SBp0isHp4PBGVXHY2qn1VVMpw5RCnb0K/view?usp=sharing",
        "_blank"
      );
    } else {
      const scrollDiv = document.getElementById(section).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    }
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
                {heroButtonData.map((button, i) => {
                  return (
                    <button
                      key={i}
                      className={`hero-button ${mode}`}
                      onClick={() => aboutMe(button.link)}
                    >
                      {button.title}
                    </button>
                  );
                })}
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Hero;
