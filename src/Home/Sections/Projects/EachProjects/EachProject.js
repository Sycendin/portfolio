import React, { Fragment } from "react";
import { projectData } from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";
const EachProject = ({ position, imgSwitch, img }) => {
  return (
    <Fragment>
      <div className="projects-div">
        <div className="project-div">
          <p className="project-title">{projectData[position].title}</p>
          {projectData[position].text.split("#break").map((line, i) => {
            return (
              <p key={i} className="project-info">
                {line}
              </p>
            );
          })}

          <div className="project-button-div">
            <button
              className="project-button"
              onClick={() =>
                window.open(projectData[position].links[0], "_blank")
              }
            >
              See Live
            </button>
            <button
              className="project-button"
              onClick={() =>
                window.open(projectData[position].links[1], "_blank")
              }
            >
              Source Code
            </button>
            <Link
              to={projectData[position].links[2]}
              style={{ textDecoration: "none" }}
            >
              <button className="project-button">Features</button>
            </Link>
          </div>
        </div>
        <img
          onClick={() => imgSwitch(position)}
          onTouchStart={() => imgSwitch(position)}
          onTouchEnd={() => imgSwitch(position)}
          alt="project"
          className="project-img"
          height={1080}
          width={1920}
          src={img}
        />
      </div>
    </Fragment>
  );
};
export default EachProject;
