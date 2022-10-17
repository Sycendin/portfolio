import React, { Fragment } from "react";

export const MobileButton = ({ changeSelect, enter, close }) => {
  return (
    <Fragment>
      <div className="select-button-div">
        <button
          className="select-button select"
          onClick={changeSelect}
          onMouseEnter={enter}
          onTouchStart={enter}
          onTouchEnd={close}
          onMouseLeave={close}
        >
          1
        </button>
        <button
          className="select-button select"
          onClick={changeSelect}
          onMouseEnter={enter}
          onTouchStart={enter}
          onTouchEnd={close}
          onMouseLeave={close}
        >
          2
        </button>
        <button
          className="select-button select"
          onClick={changeSelect}
          onMouseEnter={enter}
          onTouchStart={enter}
          onTouchEnd={close}
          onMouseLeave={close}
        >
          3
        </button>
      </div>
    </Fragment>
  );
};
