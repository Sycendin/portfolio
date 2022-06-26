import React, { Fragment } from "react";
import "./About.css";
const About = () => {
  return (
    <Fragment>
      <div className="about-div">
        <p className="about-title">About me</p>
        <div className="about-info-div">
          <div className="info-div">
            <p className="about-info">
              I'm an aspiring web Developer who knows HTML, JS and CSS and
              mainly use React to build my websites
            </p>
          </div>
          <div className="about-button-div">
            <button className="about-button">View Resume</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
