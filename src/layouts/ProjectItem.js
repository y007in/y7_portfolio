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
          <span className="team">{ProjectData[projectId].team}</span>{" "}
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
            {
              <ProjectSection
                title={"개발 인원"}
                content={
                  <ul className="memList">
                    {ProjectData[projectId].team_member
                      ? ProjectData[projectId].team_member
                      : ProjectData[projectId].team}
                  </ul>
                }
              />
            }
            <ProjectSection
              title={"주요 기능"}
              content={
                <ul className="commonList">{ProjectData[projectId].func}</ul>
              }
            />

            <ProjectSection
              title={"관련 링크"}
              content={
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
              }
            />
          </aside>
        </article>
        <aside className="project_bottom">
          <h2 className="dev">DEV.</h2>
          {ProjectData[projectId].role && (
            <ProjectSection
              title={"기여 역할"}
              content={
                <ul className="commonList">{ProjectData[projectId].role}</ul>
              }
            />
          )}

          {ProjectData[projectId].dev_func && (
            <ProjectSection
              title="구현 기능"
              content={
                <ol className="funcList">{ProjectData[projectId].dev_func}</ol>
              }
            />
          )}

          {ProjectData[projectId].result && (
            <ProjectSection
              title="개발 회고"
              content={
                <ul className="funcList">{ProjectData[projectId].result}</ul>
              }
            />
          )}
        </aside>
      </section>
    </div>
  );
};

export default ProjectItem;
