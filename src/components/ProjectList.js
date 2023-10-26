import ProjectThumb from "./ProjectThumb";
import "../assets/scss/ProjectList.scss";

const ProjectList = ({ data }) => {
  return (
    <div className="projectList">
      <main className="projectList_container">
        <div className="projectList_Title">
          <h1>Project</h1>
          <p>*썸네일 클릭 시 자세한 내용을 볼 수 있습니다.</p>
        </div>
        <section className="projects">
          {data.map((item) => (
            <ProjectThumb key={item.id} {...item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProjectList;
