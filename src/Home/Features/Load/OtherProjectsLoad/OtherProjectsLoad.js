import React, { Fragment } from "react";
import OtherProjectsBox from "./OtherProjectsBox/OtherProjectsBox";
import "./OtherProjectsLoad.css";
const OtherProjectsLoad = () => {
  return (
    <Fragment>
      <div className="oproject-wholediv fbg">
        <div className="oproject-divl fbg">
          <OtherProjectsBox />
          <OtherProjectsBox />
          <OtherProjectsBox />
          <OtherProjectsBox />
        </div>
      </div>
    </Fragment>
  );
};
export default OtherProjectsLoad;
