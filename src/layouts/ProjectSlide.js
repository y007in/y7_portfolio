import "assets/scss/main.scss";
import ProjectList from "./ProjectList";
import { ProjectData } from "assets/projectdata";

const ProjectSlide = () => {
  return (
    <div className="projectSlide">
      <section className="projectSlide_container">
        <header className="title">
          <div className="title_box">
            <h1>Project</h1>
          </div>
          <p className="project_desc">
            * 해당 썸네일 클릭 시 자세한 내용을 볼 수 있습니다.
          </p>
        </header>

        <ProjectList data={ProjectData} />
      </section>
    </div>
  );
};

export default ProjectSlide;
