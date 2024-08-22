import { useState } from "react";
import { ProjectThumb } from "components";

import "assets/scss/main.scss";

const ProjectList = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);
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
          {!viewMore &&
            [...data]
              .reverse()
              .slice(-2)
              .map((item) => <ProjectThumb key={item.id} {...item} />)}
          <button
            button
            className={`viewMore ${viewMore ? "" : "close"}`}
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "+" : "x"}
          </button>
        </article>
      </section>
    </div>
  );
};

export default ProjectList;
