import React, { Fragment } from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <Fragment>
      <div className="contact-div">
        <p className="contact-title">Contact</p>
        <div className="contact-info-div">
          <p className="contact-info">Contact me via email</p>

          <div className="contact-button-div">
            <button className="contact-button">Contact Me</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
