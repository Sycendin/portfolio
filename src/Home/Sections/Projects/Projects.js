import React, { Fragment } from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <Fragment>
      <div className="projects-section-div">
        <div>
          <p className="projects-section-title">Projects</p>
        </div>
        <div className="projects-div">
          <div className="project-div">
            <p className="project-title">Project 1</p>
            <p className="project-info">Project 1 info</p>
            <div className="project-button-div">
              <button className="project-button">See Live</button>
              <button className="project-button">Source Code</button>
            </div>
          </div>
          <img
            alt="project"
            className="project-img"
            height={1080}
            width={1920}
            src="https://wallpaperset.com/w/full/0/c/4/198595.jpg"
          />
        </div>
        <br />
        <div className="projects-div">
          <div className="project-div">
            <p className="project-title">Project 2</p>
            <p className="project-info">Project 2 info</p>
            <div className="project-button-div">
              <button className="project-button">See Live</button>
              <button className="project-button">Source Code</button>
            </div>
          </div>
          <img
            alt="project"
            className="project-img"
            height={1080}
            width={1920}
            src="https://wallpaperset.com/w/full/0/c/4/198595.jpg"
          />
        </div>
        <br />
      </div>
    </Fragment>
  );
};

export default Projects;
