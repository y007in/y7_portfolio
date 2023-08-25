import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "../scss/ProjectDetail.scss";

import Navigation from "../Components/Navigation";
import ProjectItem from "../Components/ProjectItem";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
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
  const { id } = useParams();

  return (
    <div className="projectDetail" ref={moveToTop}>
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
        rightChild={<button onClick={() => navigate("/")}>About</button>}
      />
      <ProjectItem projectId={id} />
      <Footer />
      {showButton && (
        <button className="top" onClick={onMoveToTop}>
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
