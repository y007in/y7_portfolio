import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "../scss/Project.scss";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/ProjectList";
import Footer from "../Components/Footer";
import { ProjectData } from "../assets/projectdata";

const Project = () => {
  return (
    <div className="Project">
      <Navigation />
      <ProjectList data={ProjectData} />
      <Footer />
    </div>
  );
};

export default Project;
