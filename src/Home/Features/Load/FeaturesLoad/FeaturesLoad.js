import React, { Fragment } from "react";
import { FeatureLoadBox } from "./FeatureLoadBox/FeatureLoadBox";
import "./FeaturesLoad.css";
const FeaturesLoad = () => {
  return (
    <Fragment>
      <div className="f-wholediv">
        <div className="fload-p fmargin fbg"></div>
        {/* return the same div 4 times */}
        <FeatureLoadBox />
        <FeatureLoadBox />
        <FeatureLoadBox />
        <FeatureLoadBox />
        <div className="fbutton-div fmargin fbg"></div>
      </div>
    </Fragment>
  );
};

export default FeaturesLoad;
