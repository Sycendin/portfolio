import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Features.css";
import { useMode } from "../ModeContext/ModeContext";
import { Link } from "react-router-dom";
import Darkmode from "../Darkmode/Darkmode";
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
  let x = -1;
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
  } else if (featureData.length > 1) {
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
              {featureData.map((i) => {
                console.log(i);
                x = x + 1;
                console.log(x);
                return (
                  <Fragment key={i}>
                    <div className="feature-div">
                      <div className="feature-info">
                        <ReactMarkdown
                          className="mark-test"
                          children={featureData[x]}
                        />
                      </div>
                      {imageData.length > 1 ? (
                        <img
                          alt="feature"
                          className="feature-img"
                          height={512}
                          width={512}
                          src={imageData[x]}
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
      </Fragment>
    );
  }
};

export default Features;
