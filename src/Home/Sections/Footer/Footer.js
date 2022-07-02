import React, { Fragment } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-div">
        <div className="footer-contents">
          <img
            alt="top-arrow"
            className="top-arrow-img"
            width={1062}
            height={820}
            src={
              "https://cdn.discordapp.com/attachments/788247984517283880/990538566415319040/whiteuparrow.webp"
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ></img>
          <div className="favicon-div">
            <div className="favicon-img-div">
              <img
                alt="indeed"
                className="footer-img"
                width={100}
                height={100}
                src="https://cdn.discordapp.com/attachments/788247984517283880/990540032576196628/indeed.webp"
                onClick={() =>
                  window.open(
                    "https://my.indeed.com/p/brandons-8tjg866",
                    "_blank"
                  )
                }
              ></img>
              <img
                alt="github"
                className="footer-img"
                width={100}
                height={100}
                src="https://cdn.discordapp.com/attachments/788247984517283880/990540032311971880/github.webp"
                onClick={() =>
                  window.open("https://github.com/Sycendin", "_blank")
                }
              ></img>
            </div>
          </div>
          <p className="footer-text">Website Developed By Brandon Shewnarain</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
