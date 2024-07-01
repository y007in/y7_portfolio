import "assets/scss/main.scss";

const ProjectSection = ({ title, content }) => {
  return (
    <section className="project_section">
      <div className="des_title">{title}</div>
      <div className="des_content">{content}</div>
    </section>
  );
};

export default ProjectSection;
