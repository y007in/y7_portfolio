import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/ProjectThumb.scss";
import { ProjectData } from "../assets/projectdata";

const ProjectThumb = ({ id, image, name, skill }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/project/${id}`);
  };
  return (
    <section className="projectThumb" onClick={goDetail}>
      <article className="project_img">
        <img src={image} />
      </article>
      <article className="project_desc">
        <ul>
          <li>{name}</li>
          <li>
            <ul className="skill">{skill}</ul>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ProjectThumb;
