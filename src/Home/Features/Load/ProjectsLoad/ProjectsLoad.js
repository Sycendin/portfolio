import React, { Fragment } from "react";
import { ProjectsLoadBox } from "./ProjectsLoadBox/ProjectsLoadBox";
import "./ProjectsLoad.css";

const ProjectsLoad = () => {
  return (
    <Fragment>
      <div className="f-wholediv">
        <ProjectsLoadBox />
        <ProjectsLoadBox />
        <ProjectsLoadBox />
        <div className="fbutton-div fmargin fbg"></div>
      </div>
    </Fragment>
  );
};
export default ProjectsLoad;
