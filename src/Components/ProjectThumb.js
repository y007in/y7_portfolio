import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/ProjectThumb.scss";

const ProjectThumb = ({ id, image, name, skill }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/project/${id}`);
  };
  return (
    <section className="projectThumb" onClick={goDetail}>
      <article className="project_img">
        <img src={image} />
        <article className="project_desc">
          <ul>
            <li className="title">
              <span>{name}</span>
            </li>
            <li className="thumb_des">
              <ul className="skill">{skill}</ul>
            </li>
          </ul>
        </article>
      </article>
    </section>
  );
};

export default ProjectThumb;
