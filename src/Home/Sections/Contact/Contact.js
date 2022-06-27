import React, { Fragment } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import "./Contact.css";
const Contact = () => {
  return (
    <Fragment>
      <div className="contact-div">
        <AttentionSeeker effect="tada" triggerOnce>
          <p className="contact-title">Contact</p>
        </AttentionSeeker>

        <div className="contact-info-div">
          <Fade duration={2000} triggerOnce>
            <p className="contact-info">Contact me via email</p>
          </Fade>
          <Fade duration={3000} triggerOnce>
            <div className="contact-button-div">
              <button
                className="contact-button"
                onClick={() =>
                  window.open("mailto:brandonshewnarain@gmail.com", "_blank")
                }
              >
                Contact Me
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
