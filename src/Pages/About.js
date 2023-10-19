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

const About = ({
  showNav,
  isMenuAct,
  scrollRef,
  handleScrollView,
  MoveToTop,
}) => {
  return (
    <div className="About">
      <Navigation
        showNav={showNav}
        handleScrollView={handleScrollView}
        isMenuAct={isMenuAct}
        MoveToTop={MoveToTop}
      />
      <Intro />
      <div ref={(el) => (scrollRef.current[0] = el)}>
        <Skill skillIcon={SkillIcon} />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)}>
        <ProjectSlide />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)}>
        <MyInformation />
      </div>
      <Footer />
    </div>
  );
};

export default About;
