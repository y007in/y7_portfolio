import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "../scss/Project.scss";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/ProjectList";
import Footer from "../Components/Footer";
import { ProjectData } from "../assets/projectdata";

const Project = ({ title, leftChild, rightChild }) => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToTop = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  const handleAbout = () => {
    navigate("/");
  };
  return (
    <div className="Project" ref={moveToTop}>
      <ProjectList data={ProjectData} />
    </div>
  );
};

export default Project;
