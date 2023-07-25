import React from "react";

import "../scss/Navigation.scss";

const Navigation = ({ title, leftChild }) => {
  return (
    <div className="Navigation">
      <div className="leftChild">{leftChild}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Navigation;
