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

const About = ({ title, rightChild, leftChild }) => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToTop = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moveToSkill = useRef();
  const onMoveToSkill = () => {
    moveToSkill.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
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

  return (
    <div className="About" ref={moveToTop}>
      <Navigation
        title={
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            About
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
      <div className="btns">
        <button className="moveBtn" onClick={onMoveToSkill}>
          더 알아보기
        </button>
        <button
          className="moveBtn"
          onClick={() => {
            navigate("/project");
          }}
        >
          프로젝트 보러가기
        </button>
      </div>
      <div ref={moveToSkill}>
        <Skill skillIcon={SkillIcon} />
      </div>
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
