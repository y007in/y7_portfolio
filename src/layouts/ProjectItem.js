import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

import { ProjectData } from "assets/projectdata";
import "assets/scss/main.scss";

const ProjectItem = ({ projectId }) => {
  return (
    <div className="projectItem">
      <section className="project_container">
        <header className="title">
          <h1>{ProjectData[projectId].name}</h1>
          <span className="team">{ProjectData[projectId].team}</span>
        </header>{" "}
        <div className="project_des">{ProjectData[projectId].des}</div>
        <article className="item_box">
          <aside className="project_left">
            <div className="project_img">
              <img
                src={ProjectData[projectId].image}
                alt={`${ProjectData[projectId].name} thumbnail`}
              />
            </div>

            <div className="buttons">
              <Link to={ProjectData[projectId].github} target="_blank">
                <button className="button github">
                  <FaGithub />
                  GitHub
                </button>
              </Link>
              <Link to={ProjectData[projectId].url} target="_blank">
                <button className="button url">
                  <FaLink />
                  URL
                </button>
              </Link>
            </div>
          </aside>
          <aside className="project_right">
            <section className="project_section">
              <div className="des_title">제작 기간</div>
              <div className="des_content">{ProjectData[projectId].date}</div>
            </section>
            <section className="project_section">
              <div className="des_title">사용 기술</div>
              <div className="des_content skillList">
                <ul>{ProjectData[projectId].skill}</ul>
              </div>
            </section>
            <section className="project_section">
              <div className="des_title">주요 기능</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].func}</ul>
              </div>
            </section>
          </aside>
        </article>
        <article className="project_bottom">
          {/* {ProjectData[projectId].project_schedule && (
            <section className="project_section">
              <div className="des_title">프로젝트 스케줄</div>
              <div className="des_content">
                {ProjectData[projectId].project_schedule}
              </div>
            </section>
          )} */}
          {ProjectData[projectId].project_ui && (
            <section className="project_section">
              <div className="des_title">프로젝트 구조 및 UI</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].project_ui}</ul>
              </div>
            </section>
          )}
          {ProjectData[projectId].dev_func && (
            <section className="project_section">
              <div className="des_title">구현 기능</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].dev_func}</ul>
              </div>
            </section>
          )}
          {ProjectData[projectId].result && (
            <section className="project_section">
              <div className="des_title">느낀 점</div>
              <div className="des_content">
                <ul>{ProjectData[projectId].result}</ul>
              </div>
            </section>
          )}
        </article>
      </section>
    </div>
  );
};

export default ProjectItem;
