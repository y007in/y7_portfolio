import { useState } from "react";
import { ProjectThumb } from "components";

import "assets/scss/main.scss";

const ProjectList = ({ data }) => {
  const [viewMore, setViewMore] = useState(true);
  return (
    <div className="projectList">
      <section className="projectList_container">
        <article className="projects">
          {[...data]
            .reverse()
            .slice(0, data.length - 2)
            .map((item) => (
              <ProjectThumb key={item.id} {...item} />
            ))}
        </article>

        {viewMore ? (
          <button
            button
            className={`viewMore ${viewMore ? "" : "close"}`}
            onClick={() => setViewMore(!viewMore)}
          >
            + 프로젝트 더보기
          </button>
        ) : (
          <>
            <article className="projects">
              {[...data]
                .reverse()
                .slice(-2)
                .map((item) => (
                  <ProjectThumb key={item.id} {...item} />
                ))}
            </article>
            <button
              button
              className={`viewMore ${viewMore ? "" : "close"}`}
              onClick={() => setViewMore(!viewMore)}
            >
              X 닫기
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default ProjectList;
