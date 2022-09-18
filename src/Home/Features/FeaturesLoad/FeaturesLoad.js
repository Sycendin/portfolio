import React, { Fragment } from "react";
import "./FeaturesLoad.css";
const FeaturesLoad = () => {
  return (
    <Fragment>
      <div className="fwhole-div">
        <div className="fload-p fmargin fbg"></div>
        {/* return the same div 4 times */}
        {[1, 2, 3, 4].map(() => {
          return <div className="fload-div fmargin fbg"></div>;
        })}
        <div className="fbutton-div fmargin fbg"></div>
      </div>
    </Fragment>
  );
};

export default FeaturesLoad;
