import React from "react";
import "../scss/ProjectThumb.scss";
import projectImg from "../img/project_img_hugmom.JPG";

const projectThumb = () => {
  return (
    <div className="projectThumb">
      <div className="project_img">
        <img src={projectImg} />
      </div>
      <div className="project_desc">
        <ul>
          <li>#Hugmom</li>
          <li>#Shoppingmall</li>
          <li>
            <ul className="skill">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default projectThumb;
