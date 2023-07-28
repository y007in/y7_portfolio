import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/ProjectList";
import { ProjectData } from "../assets/projectdata";

const Project = ({ title, leftChild, rightChild }) => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div className="Project">
      <Navigation
        title={"Project"}
        leftChild={<button>Back</button>}
        rightChild={<button onClick={handleAbout}>About</button>}
      />
      <ProjectList data={ProjectData} />
    </div>
  );
};

export default Project;
