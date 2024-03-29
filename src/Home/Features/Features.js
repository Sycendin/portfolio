import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Features.css";
import { useMode } from "../ModeContext/ModeContext";
import { Link } from "react-router-dom";
import Darkmode from "../Darkmode/Darkmode";
import FeaturesLoad from "./Load/FeaturesLoad/FeaturesLoad";
import NotFound from "../../NotFound/NotFound";

const Features = () => {
  const [featureData, setFeatureData] = useState([]);
  const [imageData, setImageData] = useState([]);
  // USe darkmode
  const mode = useMode();
  // Get current url
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 2];
  let feature = [];
  let title = "";
  let urlValid = true;
  // Set data based on URL and check if URL is valid
  if (currentUrlEnd === "game") {
    title = "Yu-Gi-Oh! Guessing Game";
    feature = ["feature1", "images1"];
  } else if (currentUrlEnd === "promo") {
    title = "Toronto Blue Jays Promo Page";
    feature = ["feature2", "images2"];
  } else if (currentUrlEnd === "news") {
    title = "Mock News Site";
    feature = ["feature3", "images3"];
  } else {
    urlValid = false;
  }
  // Always start at top of the page
  window.scrollTo(0, 0);

  useEffect(() => {
    const getData = async () => {
      // Make 2 fetches to server, one for text data and one for image data
      for (let i = 0; i < 2; i++) {
        const content = await fetch(
          `https://yu-game.herokuapp.com/multimarkdown/${feature[i]}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await content.json();
        // Set text data and image data as states
        if (i === 0) {
          setFeatureData(data);
        } else {
          setImageData(data);
        }
      }
    };
    getData();
  }, []);

  if (urlValid !== true) {
    return (
      <Fragment>
        <NotFound />
      </Fragment>
    );
  }

  // Put loading divs when loading data
  else if (featureData.length < 1) {
    return <FeaturesLoad />;
  } else if (featureData.length >= 1) {
    return (
      <div className={`home ${mode}`}>
        <Darkmode />

        <Fragment>
          <div>
            <p className={`projects-section-title ${mode}`}>{title} Features</p>
          </div>
          <div className="features-div">
            {/* Go through array and map data */}
            {featureData.map((i, index) => {
              return (
                <Fragment key={i}>
                  <div className="feature-div">
                    <div className="feature-info">
                      <ReactMarkdown
                        className="mark-test"
                        children={featureData[index]}
                      />
                    </div>
                    {imageData.length > 1 ? (
                      <img
                        alt="feature"
                        className="feature-img"
                        height={512}
                        width={512}
                        src={imageData[index]}
                      />
                    ) : null}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Fragment>
        {/* Home Button */}
        <div className="project-button-div">
          <Link to="/portfolio/home/" style={{ textDecoration: "none" }}>
            <button style={{ marginBottom: 8 }} className="project-button">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Features;
