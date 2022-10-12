import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";

export const OtherProjectsPDiv = ({ odata, links3 }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
