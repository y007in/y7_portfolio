import { useNavigate } from "react-router-dom";
import "assets/scss/main.scss";

const ProjectThumb = ({ id, image, name, team, skill, result_summary }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/project/${id}`);
  };
  return (
    <section className="projectThumb" onClick={goDetail}>
      <article className="project_img">
        <img src={image} alt={`${name} thumbnail`} />
      </article>
      <article className="project_desc">
        <ul>
          <li className="project_title">
            <span className="name">{name}</span>
            <span>{team}</span>
          </li>
          <li className="thumb_des">
            <ul className="skill_list">{skill}</ul>
          </li>
          {result_summary && (
            <li className="thumb_result">
              <ul>{result_summary}</ul>
            </li>
          )}
        </ul>
      </article>
    </section>
  );
};

export default ProjectThumb;
