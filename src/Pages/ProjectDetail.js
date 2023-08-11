import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "../scss/ProjectDetail.scss";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToForm = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const { id } = useParams();

  return (
    <div className="projectDetail" ref={moveToTop}>
      <Navigation
        title={"Project"}
        leftChild={<button>Back</button>}
        rightChild={<button onClick={() => navigate("/")}>About</button>}
      />
      <ProjectItem projectId={id} />
      <Footer />
      <button className="top" onClick={onMoveToForm}>
        <FaArrowAltCircleUp />
      </button>
    </div>
  );
};

export default ProjectDetail;
