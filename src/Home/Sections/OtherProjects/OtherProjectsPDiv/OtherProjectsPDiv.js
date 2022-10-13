import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";

export const OtherProjectsPDiv = ({ odata, olinks, oimage }) => {
  return (
    <Fragment>
      <div className="other-projects">
        <div className="other-info">
          <ReactMarkdown className="mark-test" children={odata} />
          <div className="other-project-button-div">
            {oimage ===
            "https://cdn.discordapp.com/attachments/788247984517283880/991961354095317142/secret.webp" ? (
              <button
                disabled
                className="other-project-button-grey"
                onClick={() => window.open(olinks[0], "_blank")}
              >
                See Live
              </button>
            ) : (
              <button
                className="other-project-button"
                onClick={() => window.open(olinks[0], "_blank")}
              >
                See Live
              </button>
            )}
            <button
              className="other-project-button"
              onClick={() => window.open(olinks[1], "_blank")}
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
            src={oimage}
          ></img>
        </div>
      </div>
    </Fragment>
  );
};
