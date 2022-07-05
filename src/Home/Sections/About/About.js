import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import "./About.css";
const About = () => {
  return (
    <Fragment>
      <div id="about" className="about-div">
        <Fade duration={2000} triggerOnce>
          <p className="about-title">About me</p>
        </Fade>
        <div className="about-info-div">
          <Fade duration={3000} triggerOnce>
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
          <p className="about-title">Skills/Knowledge</p>
          <div className="info-div">
            <div className="about-info">
              <div className="skills">
                <p className="about-info">- Javascript</p>
                <p className="about-info">- HTML</p>
                <p className="about-info">- CSS</p>
                <p className="about-info">- React</p>
                <p className="about-info">- PWA</p>
                <p className="about-info">- Redux</p>
                <p className="about-info">- Typescript</p>
                <p className="about-info">- PERN Apps</p>
              </div>
            </div>
          </div>
          <Fade duration={4000} triggerOnce>
            <div className="about-button-div">
              <button className="about-button">View Resume</button>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
