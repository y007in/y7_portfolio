import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "../scss/ProjectDetail.scss";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="projectDetail">
      <Navigation />
      <ProjectItem projectId={id} />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
