import React, { Fragment, useState } from "react";
import { useMode } from "../../ModeContext/ModeContext";
import { Slide } from "react-awesome-reveal";
import EachProject from "./EachProjects/EachProject";
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
    if (img === 0) {
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
    } else if (img === 1) {
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
    } else if (img === 2) {
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
        {/* First Project */}
        <Slide triggerOnce delay={250}>
          <EachProject position={0} img={img1} imgSwitch={imgSwitch} />
        </Slide>
        {/* Second Project */}
        <Slide triggerOnce delay={250}>
          <EachProject position={1} img={img2} imgSwitch={imgSwitch} />
        </Slide>
        {/* Third Project */}
        <Slide triggerOnce delay={250}>
          <EachProject position={2} img={img3} imgSwitch={imgSwitch} />
        </Slide>
        <br />
      </div>
    </Fragment>
  );
};

export default Projects;
