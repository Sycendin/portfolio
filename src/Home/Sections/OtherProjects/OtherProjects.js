import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import OtherProjectsM from "./OtherProjectsMobile/OtherProjectsM";
import OtherProjectsLoad from "../../Features/Load/OtherProjectsLoad/OtherProjectsLoad";
import { Fade } from "react-awesome-reveal";
import "./OtherProjects.css";

const OtherProjects = () => {
  let links,
    links2,
    links3 = [];
  const [width, setWidth] = useState(window.innerWidth);
  const [odata, setOData] = useState("Test");
  const [oimage, setOImage] = useState([]);
  const [olinks, setOLinks] = useState([]);
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
  if (olinks.length > 0) {
    console.log(olinks[0].split(" "));
    links = olinks[0].split(" ");
    links2 = olinks[1].split(" ");
    links3 = olinks[2].split(" ");
    // console.log(olinks.split(" "));
  }
  // If width is small enough, render condensed other projects
  if (width <= 870 && odata === "Test") {
    return (
      <Fragment>
        <Fade duration={2000} triggerOnce>
          <div id="other-projects" className="other-projects-title">
            <p className="other-title">Other Projects</p>
          </div>
        </Fade>
        <OtherProjectsLoad />
      </Fragment>
    );
  } else if (width <= 870) {
    return (
      <Fragment>
        <OtherProjectsM />
      </Fragment>
    );
  } else if (odata === "Test") {
    return (
      <Fragment>
        <div id="other-projects" className="other-projects-title">
          <p className="other-title">Other Projects</p>
        </div>
        <OtherProjectsLoad />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Fade duration={2000} triggerOnce>
          <div id="other-projects" className="other-projects-title">
            <p className="other-title">Other Projects</p>
          </div>
        </Fade>
        <div className="other-div">
          <div className="other-projects">
            <div className="other-info">
              <ReactMarkdown className="mark-test" children={odata[0]} />
              <div className="other-project-button-div">
                <button
                  className="other-project-button"
                  onClick={() => window.open(links[0], "_blank")}
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() => window.open(links[1], "_blank")}
                >
                  Source Code
                </button>
              </div>
            </div>
            <div className="other-img-div">
              <img
                alt="mike trout face"
                width={512}
                height={512}
                className="other-img"
                src="https://cdn.discordapp.com/attachments/788247984517283880/991961353545855026/troutface.webp"
              ></img>
            </div>
          </div>
          <div className="other-projects">
            <div className="other-info">
              <ReactMarkdown className="mark-test" children={odata[1]} />
              <div className="other-project-button-div">
                <button
                  disabled
                  className="other-project-button-grey"
                  onClick={() => window.open(links3[0], "_blank")}
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() => window.open(links2[1], "_blank")}
                >
                  Source Code
                </button>
              </div>
            </div>
            <div className="other-img-div">
              <img
                alt="secret message"
                width={512}
                height={512}
                className="other-img"
                src="https://cdn.discordapp.com/attachments/788247984517283880/991961354095317142/secret.webp"
              ></img>
            </div>
          </div>
          <div className="other-projects">
            <div className="other-info">
              <ReactMarkdown className="mark-test" children={odata[2]} />
              <div className="other-project-button-div">
                <button
                  className="other-project-button"
                  onClick={() => window.open(links3[0], "_blank")}
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() => window.open(links3[1], "_blank")}
                >
                  Source Code
                </button>
              </div>
            </div>
            <div className="other-img-div">
              <img
                alt="pong"
                width={512}
                height={512}
                className="other-img"
                src="https://cdn.discordapp.com/attachments/788247984517283880/991961353822675015/pong.webp"
              ></img>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default OtherProjects;
