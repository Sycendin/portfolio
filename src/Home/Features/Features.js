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
          <div>
            <p className={`projects-section-title ${mode}`}>Projects</p>
          </div>
          <div className="features-div">
            {data.map((element, i) => {
              return (
                <Fragment>
                  <div className="feature-div">
                    <div className="feature-info">
                      <p className="feature-title">{element.title}</p>
                      {element.text.split("#break").map((line, i) => {
                        return <p className="feature-text">{line}</p>;
                      })}
                    </div>
                    <img
                      alt="feature"
                      className="feature-img"
                      height={512}
                      width={512}
                      src={element.image}
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default Features;
