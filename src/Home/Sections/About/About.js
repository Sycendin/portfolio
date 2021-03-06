import React, { Fragment } from "react";
import { dataAbout, AboutMe } from "./AboutData/AboutData";
import { Fade } from "react-awesome-reveal";
import "./About.css";
const About = () => {
  return (
    <Fragment>
      <div id="about" className="about-div">
        <Fade duration={1000} triggerOnce>
          <p className="about-title">About me</p>
        </Fade>
        <div className="about-info-div">
          <Fade duration={2000} triggerOnce>
            <div className="info-div">
              {AboutMe[0].split("#break").map((line, i) => {
                return (
                  <Fragment key={i}>
                    <p className="about-info">{line}</p>
                  </Fragment>
                );
              })}
            </div>
          </Fade>
          <Fade duration={1000} triggerOnce>
            <p className="about-title">Skills/Knowledge</p>
          </Fade>
          <Fade duration={2000} triggerOnce>
            <div className="skills-div">
              {dataAbout.map((element, i) => {
                return (
                  <Fragment key={i}>
                    {" "}
                    <div className="skills-text">- {element.title}</div>
                  </Fragment>
                );
              })}
            </div>
          </Fade>
          <Fade duration={2000} triggerOnce>
            <div className="about-button-div">
              <button
                className="about-button"
                onClick={() =>
                  window.open(
                    "https://cdn.discordapp.com/attachments/747928182891610213/1000965445429506149/Resume-Brandon_Shewnarain_WebDev.pdf",
                    "_blank"
                  )
                }
              >
                View Resume
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
