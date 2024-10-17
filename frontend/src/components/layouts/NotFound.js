import React, { Fragment } from "react";
import "./NotFound.css";
export default function NotFound() {
  return (
    <Fragment>
      <div className="notfound-container">
        <div className="img-container">
          <img
            className="responsive-img"
            src="../images/error1.jpg"
            alt="Error"
          />
        </div>
      </div>
    </Fragment>
  );
}
