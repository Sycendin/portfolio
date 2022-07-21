import React, { Fragment } from "react";
import "./Features.css";
import { useMode } from "../ModeContext/ModeContext";
import { dataGame, dataPromo, dataNews } from "./FeaturesData/FeaturesData";
import Darkmode from "../Darkmode/Darkmode";
import NotFound from "../../NotFound/NotFound";

const Features = () => {
  // USe darkmode
  const mode = useMode();
  // Get current url
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 2];
  let data = "";
  let title = "";
  let urlValid = true;
  // Set data based on URL and check if URL is valid
  if (currentUrlEnd === "game") {
    data = dataGame;
    title = "Yu-Gi-Oh! Guessing Game";
  } else if (currentUrlEnd === "promo") {
    data = dataPromo;
    title = "Toronto Blue Jays Promo Page";
  } else if (currentUrlEnd === "news") {
    data = dataNews;
    title = "Mock News Site";
  } else {
    urlValid = false;
  }
  // Always start at top of the page
  window.scrollTo(0, 0);
  if (urlValid !== true) {
    return (
      <Fragment>
        <NotFound />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={`home ${mode}`}>
          <Darkmode />
          <Fragment>
            <div>
              <p className={`projects-section-title ${mode}`}>
                {title} Features
              </p>
            </div>
            <div className="features-div">
              {/* Go through array and map data */}
              {data.map((element, i) => {
                return (
                  <Fragment>
                    <div className="feature-div">
                      <div className="feature-info">
                        <p className="feature-title">{element.title}</p>
                        {/* Map string data while making a new line at each #break */}
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
  }
};

export default Features;
