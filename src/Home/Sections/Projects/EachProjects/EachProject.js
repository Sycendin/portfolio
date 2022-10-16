import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
const EachProject = ({ position, imgSwitch, img, data, image, links }) => {
  let slink = [];
  let endlink = "";
  if (links !== undefined) {
    slink = links.split(" ");
    endlink = slink[2].split("/");
  }

  if (links !== undefined) {
    return (
      <Fragment>
        <div className="projects-div">
          <div className="project-div">
            <ReactMarkdown className="mark-test" children={data} />

            <div className="project-button-div">
              <button
                className="project-button"
                onClick={() => window.open(slink[0], "_blank")}
              >
                See Live
              </button>
              <button
                className="project-button"
                onClick={() => window.open(slink[1], "_blank")}
              >
                Source Code
              </button>
              <Link to={`${endlink[3]}/`} style={{ textDecoration: "none" }}>
                <button className="project-button">Features</button>
              </Link>
            </div>
          </div>
          <img
            onClick={() => imgSwitch(position)}
            onTouchStart={() => imgSwitch(position)}
            onTouchEnd={() => imgSwitch(position)}
            alt="project"
            className="project-img"
            height={1080}
            width={1920}
            src={img}
          />
        </div>
      </Fragment>
    );
  }
};
export default EachProject;
