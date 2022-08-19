import React, { Fragment, useEffect } from "react";
import { useMode, useUpdateMode } from "../ModeContext/ModeContext";
import "./Darkmode.css";
const Darkmode = () => {
  const updateMode = useUpdateMode();
  const mode = useMode();
  let darkModeImg = "";
  let whichMode = window.localStorage.getItem("mode");

  // Set darkmode image based on theme
  if (mode === "light") {
    darkModeImg =
      "https://cdn.discordapp.com/attachments/788247984517283880/993877801285459988/moon.webp";
  } else {
    darkModeImg =
      "https://cdn.discordapp.com/attachments/788247984517283880/993877841294925999/sun.webp";
  }
  // Update Darkmode
  const update = (setting) => {
    if (setting === "dark" || mode === "light") {
      updateMode("dark");
      window.localStorage.setItem("mode", "dark");
    } else {
      updateMode("light");
      window.localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    if (whichMode !== "light" && whichMode !== "dark") {
      // Check for darkmode on browser
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? update("dark")
        : update("light");
    }
    const modeMe = (e) => {
      updateMode(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", modeMe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
