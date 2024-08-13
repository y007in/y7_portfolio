import { useState } from "react";
import { ProjectThumb } from "components";

import "assets/scss/main.scss";

const ProjectList = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="projectList">
      <section className="projectList_container">
        <header className="title">
          <h1>Project</h1>
          <p>* 썸네일 클릭 시 자세한 내용을 볼 수 있습니다.</p>
        </header>
        <article className="projects">
          {[...data]
            .reverse()
            .slice(0, data.length - 2)
            .map((item) => (
              <ProjectThumb key={item.id} {...item} />
            ))}
          {viewMore ? (
            <>
              {[...data]
                .reverse()
                .slice(-2)
                .map((item) => (
                  <ProjectThumb key={item.id} {...item} />
                ))}
            </>
          ) : (
            <button className="viewMore" onClick={() => setViewMore(!viewMore)}>
              +
            </button>
          )}
        </article>
      </section>
    </div>
  );
};

export default ProjectList;
