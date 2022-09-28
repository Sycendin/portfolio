import React, { Fragment } from "react";
import "./ProjectsLoad.css";
const ProjectsLoad = () => {
  return (
    <Fragment>
      {" "}
      <div className="f-wholediv">
        {/* <div className="fload-p fmargin fbg"></div> */}
        {/* return the same div 4 times */}
        {[1, 2, 3].map((element) => {
          return (
            <div key={element} className="pload-div fmargin fbg">
              <div className="pload-innerleft fbg">
                <div className="left-content">
                  <div className="pload-text fbgd"></div>
                  <div className="pload-button-div">
                    <div className="pload-button fbgd"></div>
                    <div className="pload-button fbgd"></div>
                    <div className="pload-button fbgd"></div>
                  </div>
                </div>
              </div>
              <div className="pload-innerright fbg"></div>
            </div>
          );
        })}
        <div className="fbutton-div fmargin fbg"></div>
      </div>
    </Fragment>
  );
};
export default ProjectsLoad;
