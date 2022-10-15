import React, { Fragment, useEffect, useState } from "react";
import OtherProjectsM from "./OtherProjectsMobile/OtherProjectsM";
import OtherProjectsLoad from "../../Features/Load/OtherProjectsLoad/OtherProjectsLoad";
import { OtherProjectsTitle } from "./OtherProjectsTitle/OtherProjectsTitle";
import { OtherProjectsPDiv } from "./OtherProjectsPDiv/OtherProjectsPDiv";
import "./OtherProjects.css";

const OtherProjects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [odata, setOData] = useState("Test");
  const [oimage, setOImage] = useState([]);
  const [olinks, setOLinks] = useState([]);
  const [pick, setPick] = useState([0]);
  const otherprojectinfo = ["oprojects", "oprojectimages", "oprojectlinks"];
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    const getOData = async () => {
      // Make 2 fetches to server, one for text data and one for image data
      for (let i = 0; i < 3; i++) {
        const content = await fetch(
          `https://yu-game.herokuapp.com/multimarkdown/${otherprojectinfo[i]}`,
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
          setOData(data);
        } else if (i === 1) {
          setOImage(data);
        } else if (i === 2) {
          setOLinks(data);
        }
      }
    };
    getOData();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // If width is small enough, render condensed other projects
  if (width <= 870 && odata.length < 1 && olinks.length < 1) {
    return (
      <Fragment>
        <OtherProjectsTitle />
        <OtherProjectsLoad />
      </Fragment>
    );
  } else if (width <= 870) {
    return (
      <Fragment>
        <OtherProjectsTitle />
        <OtherProjectsM
          odata={odata[pick]}
          olinks={olinks[pick]}
          oimage={oimage[pick]}
          setPick={setPick}
        />
      </Fragment>
    );
  } else if (odata.length < 1 && olinks.length < 1) {
    return (
      <Fragment>
        <OtherProjectsTitle />
        <OtherProjectsLoad />
      </Fragment>
    );
  } else if (odata.length > 0 && olinks.length > 0) {
    return (
      <Fragment>
        <OtherProjectsTitle />
        <div className="other-div">
          {odata.map((element, index) => {
            return (
              <OtherProjectsPDiv
                key={index}
                odata={odata[index]}
                olinks={olinks[index].split(" ")}
                oimage={oimage[index]}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
};

export default OtherProjects;
