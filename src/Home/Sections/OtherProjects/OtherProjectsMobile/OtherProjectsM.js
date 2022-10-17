import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { MobileImage } from "./MobileDiv/MobileImage/MobileImage";
import { MobileButton } from "./MobileDiv/MobileButtons/MobileButtons";
import "./OtherProjectsM.css";
const OtherProjectsM = ({ odata, olinks, oimage, setPick }) => {
  const enter = (event) => {
    event.target.style.backgroundPosition = "0, 0";
  };
  const close = (event) => {
    event.target.style.backgroundPosition = "100% 0";
  };
  const changeSelect = (event) => {
    let button = parseInt(event.target.innerText);
    document.querySelectorAll(".select").forEach(function (button) {
      // Set all buttons to default color
      button.style.background =
        "linear-gradient(to right, #1babff 0%, #41c4ce 50%, rgb(144, 168, 177) 50%, rgb(144, 168, 177) 100%)";
      button.style.backgroundSize = "200% 100%";
      button.style.backgroundPosition = "100% 0";
    });
    // Then set clicked button to new color
    event.target.style.background =
      "linear-gradient(to right, #1babff 0%, #41c4ce 50%, rgb(2, 168, 177) 50%, rgb(2, 168, 177) 100%)";
    event.target.style.backgroundSize = "200% 100%";
    event.target.style.backgroundPosition = "100% 0";
    // Update state to render new project
    setPick(button - 1);
  };
  return (
    <Fragment>
      <div className="mobile-projects">
        <div className="mobile-projects-info">
          <ReactMarkdown className="mark-test" children={odata} />
          <div className="mobile-projects-button-div">
            {/* Disabled button for secret message live demo */}
            {oimage ===
            "https://cdn.discordapp.com/attachments/788247984517283880/991961354095317142/secret.webp" ? (
              <button
                disabled
                className="mobile-projects-button-grey"
                onClick={() => window.open(olinks[0], "_blank")}
              >
                See Live
              </button>
            ) : (
              <button
                className="mobile-projects-button"
                onClick={() => window.open(olinks[0], "_blank")}
              >
                See Live
              </button>
            )}
            <button
              className="mobile-projects-button"
              onClick={() => window.open(olinks, "_blank")}
            >
              Source Code
            </button>
          </div>
        </div>
        <MobileImage oimage={oimage} />
        <MobileButton changeSelect={changeSelect} enter={enter} close={close} />
      </div>
    </Fragment>
  );
};

export default OtherProjectsM;
