import React, { Fragment } from "react";
import OtherProjectsBox from "./OtherProjectsBox/OtherProjectsBox";
import "./OtherProjectsLoad.css";
const OtherProjectsLoad = () => {
  return (
    <Fragment>
      <div className="oproject-wholediv fbg">
        <div className="oproject-divl fbg">
          <div className="oproject-div fbg">
            <div className="oproject-both">
              <div className="oproject-inner-leftfbg">
                <div className="left-contents fbg">
                  <div className="oproject-text fbgd"></div>
                  <div className="button-contents fbg">
                    <div className="oproject-button fbgd "></div>
                    <div className="oproject-button fbgd "></div>
                  </div>
                </div>
              </div>

              <div className="oproject-inner-rightfbg">
                <div className="oproject-img fbgd"></div>
              </div>
            </div>
            {/* 
            <div className="oproject-divinnerr "></div> */}
          </div>

          <div className="oproject-div ">
            {/* <div className="oproject-divinnerl ">
              <div className="oproject-text "></div>
            </div>

            <div className="oproject-divinnerr "></div> */}
          </div>
          <div className="oproject-div ">
            {/* <div className="oproject-divinnerl ">
              <div className="oproject-text "></div>
            </div>

            <div className="oproject-divinnerr "></div> */}
          </div>
          <div className="oproject-div ">
            {/* <div className="oproject-divinnerl ">
              <div className="oproject-text "></div>
            </div>

            <div className="oproject-divinnerr "></div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OtherProjectsLoad;
