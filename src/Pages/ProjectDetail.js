import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../scss/ProjectDetail.scss";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="projectDetail">
      <Navigation
        title={"Project"}
        leftChild={<button>Back</button>}
        rightChild={<button onClick={() => navigate("/about")}>About</button>}
      />
      <ProjectItem projectId={id} />
    </div>
  );
};

export default ProjectDetail;
