import React, { useRef, useState } from "react";
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
  const navigate = useNavigate();
  const moveToTop = useRef();
  const onMoveToForm = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moveToSkill = useRef();
  const onMoveToSkill = () => {
    moveToSkill.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="About" ref={moveToTop}>
      <Navigation
        title={"About"}
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
      <button className="top" onClick={onMoveToForm}>
        <FaArrowAltCircleUp />
      </button>
    </div>
  );
};

export default About;
