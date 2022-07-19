import React, { Fragment } from "react";
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
              <p className="about-info">
                I am an aspiring Web Developer who knows HTML, CSS and
                Javascript. I mainly build my websites using React with React
                Hooks, and sometimes Redux. <br /> I have implemented responsive
                websites, as well as making them into a progressive web app.{" "}
                <br /> I have also worked with using PostSQL as a database for
                logins and Redis for managing sessions
              </p>
            </div>
          </Fade>
          <Fade duration={1000} triggerOnce>
            <p className="about-title">Skills/Knowledge</p>
          </Fade>
          <Fade duration={2000} triggerOnce>
            <div className="skills-div">
              <div className="skills-text">- Javascript</div>
              <div className="skills-text">- HTML</div>
              <div className="skills-text">- CSS</div>
              <div className="skills-text">- React</div>
              <div className="skills-text">- NPM</div>
              <div className="skills-text">- PWA</div>
              <div className="skills-text">- Redux</div>
              <div className="skills-text">- Typescript</div>
              <div className="skills-text">- PERN Apps with Node.js</div>
              <div className="skills-text">- MySQL</div>
              <div className="skills-text">- Git</div>
              <div className="skills-text">- Basic Python Knowledge</div>
            </div>
          </Fade>
          <Fade duration={2000} triggerOnce>
            <div className="about-button-div">
              <button
                className="about-button"
                onClick={() =>
                  window.open(
                    "https://cdn.discordapp.com/attachments/747928182891610213/998462332642537572/WebDevResume.pdf",
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
