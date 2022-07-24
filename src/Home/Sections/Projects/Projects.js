import React, { Fragment, useState } from "react";
import { useMode } from "../../ModeContext/ModeContext";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./Projects.css";
const Projects = () => {
  const [img1, setImg1] = useState(
    "https://cdn.discordapp.com/attachments/788247984517283880/990860512600399912/gamep1.webp"
  );
  const [img2, setImg2] = useState(
    "https://cdn.discordapp.com/attachments/788247984517283880/990860513086951444/promop1.webp"
  );
  const [img3, setImg3] = useState(
    "https://cdn.discordapp.com/attachments/788247984517283880/990884108550959124/newsp1.webp"
  );
  const mode = useMode();
  // Switch between images depending on mouse enter/leave
  const imgSwitch = (img) => {
    if (img === 1) {
      if (
        img1 ===
        "https://cdn.discordapp.com/attachments/788247984517283880/990860512847872011/gamep2.webp"
      ) {
        setImg1(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860512600399912/gamep1.webp"
        );
      } else {
        setImg1(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860512847872011/gamep2.webp"
        );
      }
    } else if (img === 2) {
      if (
        img2 ===
        "https://cdn.discordapp.com/attachments/788247984517283880/990860513086951444/promop1.webp"
      ) {
        setImg2(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860513300852756/promop2.webp"
        );
      } else {
        setImg2(
          "https://cdn.discordapp.com/attachments/788247984517283880/990860513086951444/promop1.webp"
        );
      }
    } else if (img === 3) {
      if (
        img3 ===
        "https://cdn.discordapp.com/attachments/788247984517283880/990884108550959124/newsp1.webp"
      ) {
        setImg3(
          "https://cdn.discordapp.com/attachments/788247984517283880/990884108311875654/newsp2.webp"
        );
      } else {
        setImg3(
          "https://cdn.discordapp.com/attachments/788247984517283880/990884108550959124/newsp1.webp"
        );
      }
    }
  };
  return (
    <Fragment>
      <div id="projects" className="projects-section-div">
        <div>
          <p className={`projects-section-title ${mode}`}>Projects</p>
        </div>
        <Slide triggerOnce delay={250}>
          <div className="projects-div">
            <div className="project-div">
              <p className="project-title">Yu-Gi-Oh! Guessing Game</p>
              <p className="project-info">
                A Yu-Gi-Oh! guessing game where you need to pick the right
                monster card to win.
                <br />
                You can also search for cards using a filter, generate a random
                card and view all archetypes in the game and view all cards
                within that archetype.
              </p>
              <div className="project-button-div">
                <button
                  className="project-button"
                  onClick={() =>
                    window.open("https://sycendin.github.io/game/", "_blank")
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
                {/* <Link to="/onboarding/profile" state={{ from: "occupation" }}>
                  Next Step
                </Link> */}
                <Link
                  to="/portfolio/home/game/"
                  style={{ textDecoration: "none" }}
                >
                  <button className="project-button">Features</button>
                </Link>
              </div>
            </div>
            <img
              onClick={() => imgSwitch(1)}
              onTouchStart={() => imgSwitch(1)}
              onTouchEnd={() => imgSwitch(1)}
              alt="project"
              className="project-img"
              height={1080}
              width={1920}
              src={img1}
            />
          </div>
        </Slide>
        <br />
        <Slide triggerOnce delay={250}>
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
                    window.open("https://sycendin.github.io/promo/", "_blank")
                  }
                >
                  See Live
                </button>
                <button
                  className="project-button"
                  onClick={() =>
                    window.open("https://github.com/Sycendin/promo/", "_blank")
                  }
                >
                  Source Code
                </button>
                <Link
                  to="/portfolio/home/promo/"
                  style={{ textDecoration: "none" }}
                >
                  <button className="project-button">Features</button>
                </Link>
              </div>
            </div>
            <img
              onClick={() => imgSwitch(2)}
              onTouchStart={() => imgSwitch(2)}
              onTouchEnd={() => imgSwitch(2)}
              alt="project"
              className="project-img"
              height={1080}
              width={1920}
              src={img2}
            />
          </div>
        </Slide>
        <br />
        <Slide triggerOnce delay={250}>
          <div className="projects-div">
            <div className="project-div">
              <p className="project-title">Mock Video Game News Site</p>
              <p className="project-info">
                A Mock news site about video games.
                <br />
                It uses redux instead of hooks and also uses react-bootstrap
              </p>
              <div className="project-button-div">
                <button
                  className="project-button"
                  onClick={() =>
                    window.open("https://sycendin.github.io/news/", "_blank")
                  }
                >
                  See Live
                </button>
                <button
                  className="project-button"
                  onClick={() =>
                    window.open("https://github.com/Sycendin/news/", "_blank")
                  }
                >
                  Source Code
                </button>
                <Link
                  to="/portfolio/home/news/"
                  style={{ textDecoration: "none" }}
                >
                  <button className="project-button">Features</button>
                </Link>
              </div>
            </div>
            <img
              onClick={() => imgSwitch(3)}
              onTouchStart={() => imgSwitch(3)}
              onTouchEnd={() => imgSwitch(3)}
              alt="project"
              className="project-img"
              height={1080}
              width={1920}
              src={img3}
            />
          </div>
        </Slide>
        <br />
      </div>
    </Fragment>
  );
};

export default Projects;
