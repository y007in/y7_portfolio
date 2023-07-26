import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";

const ProjectDetail = () => {
  return (
    <div className="projectDetail">
      <Navigation
        title={"Project"}
        leftChild={
          <>
            <FontAwesomeIcon icon={faChevronLeft} />
            뒤로가기
          </>
        }
      />
      <ProjectItem />
    </div>
  );
};

export default ProjectDetail;
