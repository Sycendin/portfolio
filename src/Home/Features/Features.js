import React, { Fragment } from "react";
import "./Features.css";
import { useMode } from "../ModeContext/ModeContext";
import { dataGame } from "./FeaturesData/FeaturesData";
import Darkmode from "../Darkmode/Darkmode";

const Features = () => {
  const mode = useMode();
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 2];
  let data = "";
  if (currentUrlEnd === "game") {
    data = dataGame;
  }

  return (
    <Fragment>
      <div className={`home ${mode}`}>
        <Darkmode />
        <Fragment>
          {data.map((element, i) => {
            return (
              <div key={i} className="feature-div">
                <p className="feature-text">{element.title}</p>
                <p className="feature-text">{element.text}</p>
              </div>
            );
          })}
        </Fragment>
      </div>
    </Fragment>
  );
};

export default Features;
