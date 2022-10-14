import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";

export const OtherProjectsTitle = () => {
  return (
    <Fragment>
      <Fade duration={2000} triggerOnce>
        <div id="other-projects" className="other-projects-title">
          <p className="other-title">Other Projects</p>
        </div>
      </Fade>
    </Fragment>
  );
};
