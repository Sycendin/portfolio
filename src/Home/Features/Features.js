import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Features.css";
import { useMode } from "../ModeContext/ModeContext";
import { Link } from "react-router-dom";
import { dataGame, dataPromo, dataNews } from "./FeaturesData/FeaturesData";
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
  let data = "";
  let title = "";
  let urlValid = true;
  // Set data based on URL and check if URL is valid
  if (currentUrlEnd === "game") {
    data = dataGame;
    title = "Yu-Gi-Oh! Guessing Game";
    feature = ["feature1", "images1"];
  } else if (currentUrlEnd === "promo") {
    data = dataPromo;
    title = "Toronto Blue Jays Promo Page";
    feature = ["feature2", "images2"];
  } else if (currentUrlEnd === "news") {
    data = dataNews;
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
          `http://localhost:3002/multimarkdown/${feature[i]}`,
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
          <ReactMarkdown className="mark-test" children={featureData[0]} />
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
                  <Fragment key={i}>
                    <div className="feature-div">
                      <div className="feature-info">
                        <p className="feature-title">{element.title}</p>
                        {/* Map string data while making a new line at each #break */}
                        {element.text.split("#break").map((line, i) => {
                          return (
                            <p key={i} className="feature-text">
                              {line}
                            </p>
                          );
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
