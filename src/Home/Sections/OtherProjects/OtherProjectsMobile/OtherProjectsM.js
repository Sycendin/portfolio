import React, { Fragment, useState } from "react";
import { data } from "./OtherProjectsData.js";
import "./OtherProjectsM.css";
const OtherProjectsM = () => {
  const [select, setSelect] = useState(0);
  const enter = (event) => {
    event.target.style.backgroundPosition = "0, 0";
  };
  const close = (event) => {
    event.target.style.backgroundPosition = "100% 0";
  };
  const changeSelect = (event) => {
    let button = parseInt(event.target.innerText);
    document.querySelectorAll(".select").forEach(function (button) {
      // Set all buttons to default color
      button.style.background =
        "linear-gradient(to right, #1babff 0%, #41c4ce 50%, rgb(144, 168, 177) 50%, rgb(144, 168, 177) 100%)";
      button.style.backgroundSize = "200% 100%";
      button.style.backgroundPosition = "100% 0";
    });
    // Then set clicked button to new color
    event.target.style.background =
      "linear-gradient(to right, #1babff 0%, #41c4ce 50%, rgb(2, 168, 177) 50%, rgb(2, 168, 177) 100%)";
    event.target.style.backgroundSize = "200% 100%";
    event.target.style.backgroundPosition = "100% 0";
    // Update state to render new project
    setSelect(button - 1);
  };
  return (
    <Fragment>
      <div className="other-projects-title">
        <p className="other-title">Other Projects</p>
      </div>
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
        <div className="select-button-div">
          <button
            className="select-button select"
            onClick={changeSelect}
            onMouseEnter={enter}
            onTouchStart={enter}
            onTouchEnd={close}
            onMouseLeave={close}
          >
            1
          </button>
          <button
            className="select-button select"
            onClick={changeSelect}
            onMouseEnter={enter}
            onTouchStart={enter}
            onTouchEnd={close}
            onMouseLeave={close}
          >
            2
          </button>
          <button
            className="select-button select"
            onClick={changeSelect}
            onMouseEnter={enter}
            onTouchStart={enter}
            onTouchEnd={close}
            onMouseLeave={close}
          >
            3
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OtherProjectsM;
