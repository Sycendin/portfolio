import React, { Fragment } from "react";
export const MobileImage = ({ oimage }) => {
  return (
    <Fragment>
      <div className="mobile-projects-img-div">
        <img
          alt="secret message"
          width={512}
          height={512}
          className="mobile-projects-img"
          src={oimage}
        ></img>
      </div>
    </Fragment>
  );
};
