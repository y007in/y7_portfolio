import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";

import ProjectSection from "components/ProjectSection";
import { ProjectData } from "assets/projectdata";
import "assets/scss/main.scss";

const ProjectItem = ({ projectId }) => {
  const [isLoading, setIsLoading] = useState(true);
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
                onLoad={() => setIsLoading(!isLoading)}
                onError={() => alert("Image Load Error")}
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
          <ProjectSection
            title={"주요 기능"}
            content={
              <ul className="funcList">{ProjectData[projectId].func}</ul>
            }
          />
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
          {ProjectData[projectId].related_Links && (
            <ProjectSection
              title="관련 자료"
              link={ProjectData[projectId].related_Links}
              content={
                <ul className="link">{ProjectData[projectId].related_Links}</ul>
              }
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
