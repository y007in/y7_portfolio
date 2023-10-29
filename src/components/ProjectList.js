import ProjectThumb from "./ProjectThumb";
import "../assets/scss/ProjectList.scss";

const ProjectList = ({ data }) => {
  return (
    <div className="projectList">
      <section className="projectList_container">
        <header className="title">
          <h1>Project</h1>
          <p>* 썸네일 클릭 시 자세한 내용을 볼 수 있습니다.</p>
        </header>
        <article className="projects">
          {data.map((item) => (
            <ProjectThumb key={item.id} {...item} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default ProjectList;
