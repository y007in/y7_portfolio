import { Link } from "react-router-dom";
import "assets/scss/main.scss";

const ProjectSection = ({ title, link, content }) => {
  return (
    <section className="project_section">
      <div className="des_title">{title}</div>
      <div className="des_content">
        {link ? (
          <Link className="link" to={link} target="_blank">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
