import React, { Fragment, useState } from "react";
import { data } from "./OtherProjectsData.js";
import "./OtherProjectsM.css";
const OtherProjectsM = () => {
  const [select, setSelect] = useState(0);
  return (
    <Fragment>
      <div className="mobile-projects">
        <div className="mobile-projects-info">
          <p className="mobile-projects-title">{data[select].title}</p>
          <p className="mobile-projects-text">{data[select].text}</p>
          <div className="mobile-projects-button-div">
            <button
              disabled
              // className="mobile-projects-button-grey"'
              className="mobile-projects-button"
              onClick={() => window.open(`${data[select].links[0]}`, "_blank")}
            >
              See Live
            </button>
            <button
              className="mobile-projects-button"
              onClick={() => window.open(`${data[select].links[1]}`, "_blank")}
            >
              Source Code
            </button>
          </div>
        </div>
        <div className="mobile-projects-img-div">
          <img
            alt="secret message"
            width={512}
            height={512}
            className="mobile-projects-img"
            src={data[select].image}
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default OtherProjectsM;
