import React, { Fragment } from "react";
import { useMode, useUpdateMode } from "../ModeContext/ModeContext";
import "./Darkmode.css";
const Darkmode = () => {
  const updateMode = useUpdateMode();
  const mode = useMode();
  let darkModeImg = "";
  if (mode === "light") {
    darkModeImg =
      "https://cdn.discordapp.com/attachments/788247984517283880/993877801285459988/moon.webp";
  } else {
    darkModeImg =
      "https://cdn.discordapp.com/attachments/788247984517283880/993877841294925999/sun.webp";
  }
  const update = () => {
    if (mode === "light") {
      updateMode("dark");
    } else {
      updateMode("light");
    }
  };

  return (
    <Fragment>
      <div className="darkmode-div">
        <img
          alt="darkmode"
          className="darkmode-img"
          height={128}
          width={128}
          src={darkModeImg}
          onClick={update}
        />
      </div>
    </Fragment>
  );
};

export default Darkmode;
