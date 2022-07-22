import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Fragment>
      {" "}
      <div className="not-found-div">
        <div className="not-found-content">
          <h1>404 - Not Found!</h1>
          <div className="not-found-button-div">
            <Link to="/portfolio/home/" style={{ textDecoration: "none" }}>
              <button>Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Link to="/">Go Home</Link> */}
    </Fragment>
  );
};

export default NotFound;
