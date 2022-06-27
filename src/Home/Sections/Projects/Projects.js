import React, { Fragment, useState } from "react";
import "./Projects.css";
const Projects = () => {
  const [img1, setImg1] = useState(
    "https://cdn.discordapp.com/attachments/788247984517283880/990860512600399912/gamep1.webp"
  );
  const [img2, setImg2] = useState(
    "https://cdn.discordapp.com/attachments/788247984517283880/990860513086951444/promop1.webp"
  );
  // Switch between images depending on mouse enter/leave
  const imgSwitch = (img, mouse) => {
    if (img === 1) {
      if (mouse === "enter") {
        setImg1(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860512847872011/gamep2.webp"
        );
      } else {
        setImg1(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860512600399912/gamep1.webp"
        );
      }
    } else {
      if (mouse === "enter") {
        setImg2(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860513300852756/promop2.webp"
        );
      } else {
        setImg2(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860513086951444/promop1.webp"
        );
      }
    }
  };
  return (
    <Fragment>
      <div className="projects-section-div">
        <div>
          <p className="projects-section-title">Projects</p>
        </div>
        <div className="projects-div">
          <div className="project-div">
            <p className="project-title">Yu-Gi-Oh! Guessing Game</p>
            <p className="project-info">
              A Yu-Gi-Oh! guessing game where you need to pick the right monster
              card to win.
              <br />
              You can also search for cards using a filter, generate a random
              card and view all archetypes in the game and view all cards within
              that archetype.
            </p>
            <div className="project-button-div">
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://sycendin.github.io/game/game/", "_blank")
                }
              >
                See Live
              </button>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://github.com/Sycendin/game/", "_blank")
                }
              >
                Source Code
              </button>
            </div>
          </div>
          <img
            onMouseEnter={() => imgSwitch(1, "enter")}
            onMouseLeave={() => imgSwitch(1, "leave")}
            onTouchStart={() => imgSwitch(1, "enter")}
            onTouchEnd={() => imgSwitch(1, "leave")}
            alt="project"
            className="project-img"
            height={1080}
            width={1920}
            src={img1}
          />
        </div>
        <br />
        <div className="projects-div">
          <div className="project-div">
            <p className="project-title">Toronto Blue Jays Splash Page</p>
            <p className="project-info">
              A Splash page for the Toronto Blue Jays for their home opener.
              <br />
              You can view their twitter timeline, a hype video, view their
              stats or roster click links to their social media.
            </p>
            <div className="project-button-div">
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://github.com/Sycendin/promo/", "_blank")
                }
              >
                See Live
              </button>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://sycendin.github.io/promo/", "_blank")
                }
              >
                Source Code
              </button>
            </div>
          </div>
          <img
            onMouseEnter={() => imgSwitch(2, "enter")}
            onMouseLeave={() => imgSwitch(2, "leave")}
            onTouchStart={() => imgSwitch(2, "enter")}
            onTouchEnd={() => imgSwitch(2, "leave")}
            alt="project"
            className="project-img"
            height={1080}
            width={1920}
            src={img2}
          />
        </div>
        <br />
      </div>
    </Fragment>
  );
};

export default Projects;
