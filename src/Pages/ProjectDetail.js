import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/ProjectDetail.scss";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div className="projectDetail">
      <Navigation
        title={"Project"}
        leftChild={<button>Back</button>}
        rightChild={<button onClick={handleAbout}>About</button>}
      />
      <ProjectItem />
    </div>
  );
};

export default ProjectDetail;
