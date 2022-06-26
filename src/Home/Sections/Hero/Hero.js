import React, { Fragment } from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <Fragment>
      <div className="hero-div">
        <div className="content-div">
          <div className="hero-text-span">
            <p className="hero-text">Hi, my name is </p>
            <p className="hero-text-name">Brandon Shewnarain</p>
          </div>
          <p className="hero-text">An aspiring Web Developer</p>
          <div>
            <button className="hero-button">Know more</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
