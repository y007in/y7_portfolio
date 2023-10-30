import { useNavigate, Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

import "../assets/scss/ProjectItem.scss";
import { ProjectData } from "../assets/projectdata";

const ProjectItem = ({ projectId }) => {
  const navigate = useNavigate();
  return (
    <div className="projectItem">
      <section className="project_container">
        <header className="title">
          <h1>{ProjectData[projectId].name}</h1>
          <span className="team">{ProjectData[projectId].team}</span>
        </header>
        <div className="item_box">
          <section className="project_left">
            <div className="project_img">
              <img
                src={ProjectData[projectId].image}
                alt={ProjectData[projectId].id}
              />
            </div>
            <div className="project_des">{ProjectData[projectId].des}</div>
            <div className="buttons">
              <Link to={ProjectData[projectId].github} target="_blank">
                <button className="button github">
                  <FaGithub fill="white" />
                  GitHub{" "}
                </button>
              </Link>
              <Link to={ProjectData[projectId].url} target="_blank">
                <button className="button url">
                  <FaLink fill="white" />
                  URL
                </button>
              </Link>
            </div>
          </section>
          <section className="project_right">
            <div className="project_date">
              <div className="des_title">제작 기간</div>
              <div className="des_content">{ProjectData[projectId].date}</div>
            </div>
            <div className="project_skill">
              <div className="des_title">사용 기술</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].skill}</ul>
              </div>
            </div>
            <div className="project_func">
              <div className="des_title">주요 기능</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].func}</ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <button className="back_project" onClick={() => navigate("/project")}>
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default ProjectItem;