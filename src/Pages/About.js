import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "../scss/About.scss";
import { SkillIcon } from "../assets/projectdata";
import Navigation from "../Components/Navigation";
import MyInformation from "../Components/MyInformation";
import Footer from "../Components/Footer";
import Skill from "../Components/Skill";
import Intro from "../Components/Intro";

import ProjectSlide from "../Components/ProjectSlide";

const About = ({ title, rightChild, leftChild }) => {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToTop = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moveToSkill = useRef();
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
  useEffect(() => {
    const handleShowNav = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleShowNav);
    return () => {
      window.removeEventListener("scroll", handleShowNav);
    };
  }, []);

  return (
    <div className="About" ref={moveToTop}>
      <Navigation
        showNav={showNav}
        title={
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            About Me
          </button>
        }
        rightChild={
          <button
            onClick={() => {
              navigate("/project");
            }}
          >
            Project
          </button>
        }
        leftChild={
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        }
      />

      <Intro />
      <div ref={moveToSkill}>
        <Skill skillIcon={SkillIcon} />
      </div>
      <ProjectSlide />
      <MyInformation />
      <Footer />
      {showButton && (
        <button className="top" onClick={onMoveToTop}>
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
};

export default About;
