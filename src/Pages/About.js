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

const About = () => {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isMenuAct, setIsMenuAct] = useState("");

  const moveToTop = useRef();
  const onMoveToTop = () => {
    moveToTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollRef = useRef([]);
  const handleScrollView = (e) => {
    const name = e.target.innerText;
    const category = {
      Skills: 0,
      Project: 1,
      About: 2,
    };
    scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
    setIsMenuAct(e.target.innerText);
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
        setShowNav(true);
      } else {
        setShowButton(false);
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div className="About">
      <Navigation
        showNav={showNav}
        handleScrollView={handleScrollView}
        isMenuAct={isMenuAct}
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
      {showButton && (
        <button className="top" onClick={onMoveToTop}>
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
};

export default About;
