import { useNavigate } from "react-router-dom";
import "../assets/scss/ProjectThumb.scss";

const ProjectThumb = ({ id, image, name, team, skill }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/project/${id}`);
  };
  return (
    <section className="projectThumb" onClick={goDetail}>
      <article className="project_img">
        <img src={image} alt={id} />
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
        </ul>
      </article>
    </section>
  );
};

export default ProjectThumb;