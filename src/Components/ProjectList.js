import React from "react";
import "../scss/ProjectList.scss";
import ProjectThumb from "./ProjectThumb";

const ProjectList = ({ data }) => {
  return (
    <div className="ProjectList">
      <main className="ProjectList_container">
        <div className="ProjectList_Title">
          <h1>Project</h1>
          <p>*썸네일 클릭 시 자세한 내용을 볼 수 있습니다.</p>
        </div>
        <section className="Projects">
          {data.map((item) => (
            <ProjectThumb key={item.id} {...item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProjectList;
