import React from "react";
import "../scss/ProjectList.scss";
import ProjectThumb from "./ProjectThumb";

const ProjectList = ({ data }) => {
  return (
    <div className="ProjectList">
      <div className="ProjectList_container">
        <div className="ProjectList_Title">
          <h1>Project</h1>
          <p>*해당 썸네일을 클릭하면 자세한 내용을 볼 수 있습니다!</p>
        </div>
        <main className="Projects">
          {data.map((item) => (
            <ProjectThumb key={item.id} {...item} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default ProjectList;
