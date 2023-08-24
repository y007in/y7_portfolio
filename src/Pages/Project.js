import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "../scss/Project.scss";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/ProjectList";
import Footer from "../Components/Footer";
import { ProjectData } from "../assets/projectdata";

const Project = ({ title, leftChild, rightChild }) => {
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToForm = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleAbout = () => {
    navigate("/");
  };
  return (
    <div className="Project" ref={moveToTop}>
      <Navigation
        title={
          <button
            onClick={() => {
              navigate("/project");
            }}
          >
            Project
          </button>
        }
        leftChild={<button>Back</button>}
        rightChild={<button onClick={handleAbout}>About</button>}
      />
      <ProjectList data={ProjectData} />
      <Footer />
      <button className="top" onClick={onMoveToForm}>
        <FaArrowAltCircleUp />
      </button>
    </div>
  );
};

export default Project;
