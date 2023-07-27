import React from "react";
import "../scss/ProjectList.scss";
import projectImg from "../img/project_img_hugmom.JPG";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="ProjectList_Title">
        <h1>Project</h1>
        <p>*썸네일 클릭 시 자세한 내용을 볼 수 있습니다.</p>
      </div>
      <main className="Projects">
        <div className="Project">
          <div className="project_img">
            <img src={projectImg} />
          </div>
          <div className="project_desc">#djWjrn</div>
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
