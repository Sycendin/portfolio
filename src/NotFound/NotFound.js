import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Fragment>
      {" "}
      <div className="not-found-div">
        <h1>404 - Not Found!</h1>
        <Link to="/portfolio/home/">
          <button>Go Back Home</button>
        </Link>
      </div>
      {/* <Link to="/">Go Home</Link> */}
    </Fragment>
  );
};

export default NotFound;
