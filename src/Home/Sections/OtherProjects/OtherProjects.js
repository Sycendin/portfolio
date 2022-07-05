import React, { Fragment, useEffect, useState } from "react";
import OtherProjectsM from "./OtherProjectsMobile/OtherProjectsM";
import "./OtherProjects.css";

const OtherProjects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width <= 870) {
    return (
      <Fragment>
        <OtherProjectsM />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="other-projects-title">
          <p className="other-title">Other Projects</p>
        </div>
        <div className="other-div">
          <div className="other-projects">
            <div className="other-info">
              <p className="other-title">Mike Trout Gallery</p>
              <p className="other-text">
                A gallery that showcases some of the Mike Trout drawings drawn
                during the baseball lockout.
              </p>
              <div className="other-project-button-div">
                <button
                  className="other-project-button"
                  onClick={() =>
                    window.open("https://sycendin.github.io/gallery/", "_blank")
                  }
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() =>
                    window.open(
                      "https://github.com/Sycendin/gallery/",
                      "_blank"
                    )
                  }
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
              <p className="other-title">Secret Message</p>
              <p className="other-text">
                A Full-Stack app using Redux that lets you log in. <br /> Lets
                you store a secret message on a redis server and then it gives
                you a code which another user can use to decrypt your secret
                message <br /> Uses sessions and allows you to customize your
                profile
              </p>
              <div className="other-project-button-div">
                <button
                  disabled
                  className="other-project-button-grey"
                  onClick={() =>
                    window.open(
                      "https://sycendin.github.io/reduxlogin",
                      "_blank"
                    )
                  }
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() =>
                    window.open(
                      "https://github.com/Sycendin/reduxlogin",
                      "_blank"
                    )
                  }
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
              <p className="other-title">Pong Game </p>
              <p className="other-text">
                A Pong game played against a computer <br /> You can customize
                the difficulty and your pong paddle.
              </p>
              <div className="other-project-button-div">
                <button
                  className="other-project-button"
                  onClick={() =>
                    window.open("https://sycendin.github.io/pong", "_blank")
                  }
                >
                  See Live
                </button>
                <button
                  className="other-project-button"
                  onClick={() =>
                    window.open("https://github.com/Sycendin/pong", "_blank")
                  }
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
