import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Navigation from "../Components/Navigation";

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
    </div>
  );
};

export default ProjectDetail;
