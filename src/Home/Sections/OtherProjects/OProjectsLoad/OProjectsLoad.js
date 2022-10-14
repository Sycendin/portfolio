import React from "react";
import { Fade } from "react-awesome-reveal";
import { OtherProjectsTitle } from "../OtherProjectsTitle/OtherProjectsTitle";
import { Fragment } from "react";
const OProjectsLoad = () => {
  return (
    <Fragment>
      <OtherProjectsTitle />
      <div className="oproject-wholediv">
        <div className="oproject-divl">
          <div className="oproject-div">
            <div className="oproject-divinnerl">
              <div className="oproject-text"></div>
            </div>
            <div className="oproject-divinnerr"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OProjectsLoad;
