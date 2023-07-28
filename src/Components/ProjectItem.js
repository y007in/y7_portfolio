import React, { useState, useEffect } from "react";
import "../scss/ProjectItem.scss";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "../assets/projectdata";

const ProjectItem = ({ data }) => {
  const navigate = useNavigate();
  const [projectNo, setProjectNo] = useState(0);

  return (
    <div className="ProjectItem">
      <div className="project_container">
        <div className="project_title">
          <h1>{ProjectData[projectNo].name}</h1>
          <span className="team">{ProjectData[projectNo].team}</span>
        </div>
        <main className="project_content">
          <div className="project_left">
            <div className="project_img">
              <img src={ProjectData[projectNo].image} />
            </div>
            <div className="project_des">{ProjectData[projectNo].des}</div>
            <div className="buttons">
              <button className="button github">GitHub</button>
              <button className="button url">URL</button>
            </div>
          </div>
          <div className="project_right">
            <div className="project_date">
              <div className="des_title">제작 기간</div>
              <div className="des_content">{ProjectData[projectNo].date}</div>
            </div>
            <div className="project_skill">
              <div className="des_title">사용기술</div>
              <div className="des_content">{ProjectData[projectNo].skill}</div>
            </div>
            <div className="project_func">
              <div className="des_title">주요 기능</div>
              <div className="des_content">{ProjectData[projectNo].func}</div>
            </div>
          </div>
        </main>
      </div>{" "}
      <button className="back_project" onClick={() => navigate("/project")}>
        목록으로 돌아가기
      </button>
    </div>
  );
};

export default ProjectItem;
