import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

import ProjectSection from "components/ProjectSection";
import { ProjectData } from "assets/projectdata";
import "assets/scss/main.scss";

const ProjectItem = ({ projectId }) => {
  return (
    <div className="projectItem">
      <section className="project_container">
        <header className="title">
          <h1>{ProjectData[projectId].name}</h1>
          <span className="team">{ProjectData[projectId].team}</span>
        </header>
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
            <ProjectSection
              title={"제작 기간"}
              content={ProjectData[projectId].date}
            />
            <ProjectSection
              title={"사용 기술"}
              content={
                <ul className="skillList">{ProjectData[projectId].skill}</ul>
              }
            />
            {ProjectData[projectId].role && (
              <ProjectSection
                title={"역할"}
                content={
                  <ul className="funcList">{ProjectData[projectId].role}</ul>
                }
              />
            )}
          </aside>
        </article>
        {/* project_bottom */}
        <article className="project_bottom">
          {ProjectData[projectId].project_schedule && (
            <ProjectSection
              title="프로젝트 스케줄"
              link={ProjectData[projectId].project_schedule}
              content={`${ProjectData[projectId].name} WBS 링크`}
            />
          )}
          {ProjectData[projectId].project_introduction && (
            <ProjectSection
              title="소개 자료"
              link={ProjectData[projectId].project_introduction}
              content={`${ProjectData[projectId].name} 자료 링크`}
            />
          )}
          <ProjectSection
            title={"주요 기능"}
            content={
              <ul className="funcList">{ProjectData[projectId].func}</ul>
            }
          />
          {ProjectData[projectId].project_ui && (
            <ProjectSection
              title="프로젝트 구조 및 UI"
              content={
                <div className="structure">
                  {ProjectData[projectId].project_ui}
                </div>
              }
            />
          )}
          {ProjectData[projectId].dev_func && (
            <ProjectSection
              title="구현 기능"
              content={
                <div className="dev_funcList">
                  {ProjectData[projectId].dev_func}
                </div>
              }
            />
          )}

          {ProjectData[projectId].trouble && (
            <ProjectSection
              title="Trouble Shooting"
              content={ProjectData[projectId].trouble}
            />
          )}
          {ProjectData[projectId].result && (
            <ProjectSection
              title="후기"
              content={<ul>{ProjectData[projectId].result}</ul>}
            />
          )}
        </article>
      </section>
    </div>
  );
};

export default ProjectItem;
