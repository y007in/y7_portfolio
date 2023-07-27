import React from "react";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/ProjectList";

const Project = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Project">
      <Navigation title={"Project"} leftChild={"Back"} rightChild={"About"} />
      <ProjectList />
    </div>
  );
};

export default Project;
