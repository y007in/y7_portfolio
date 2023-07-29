import React, { useState, useEffect } from "react";
import "../scss/ProjectItem.scss";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "../assets/projectdata";

const ProjectItem = ({ projectId }) => {
  const navigate = useNavigate();

  return (
    <div className="ProjectItem">
      <div className="project_container">
        <div className="project_title">
          <h1>{ProjectData[projectId].name}</h1>
          <span className="team">{ProjectData[projectId].team}</span>
        </div>
        <main className="project_content">
          <section className="project_left">
            <div className="project_img">
              <img src={ProjectData[projectId].image} />
            </div>
            <div className="project_des">{ProjectData[projectId].des}</div>
            <div className="buttons">
              <button className="button github">GitHub</button>
              <button className="button url">URL</button>
            </div>
          </section>
          <section className="project_right">
            <div className="project_date">
              <div className="des_title">제작 기간</div>
              <div className="des_content">{ProjectData[projectId].date}</div>
            </div>
            <div className="project_skill">
              <div className="des_title">사용기술</div>
              <div className="des_content">{ProjectData[projectId].skill}</div>
            </div>
            <div className="project_func">
              <div className="des_title">주요 기능</div>
              <div className="des_content">{ProjectData[projectId].func}</div>
            </div>
          </section>
        </main>
      </div>{" "}
      <button className="back_project" onClick={() => navigate("/project")}>
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default ProjectItem;
