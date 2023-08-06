import React from "react";
import { useNavigate } from "react-router-dom";

import { SkillIcon } from "../assets/projectdata";
import Navigation from "../Components/Navigation";
import MyInformation from "../Components/MyInformation";
import Footer from "../Components/Footer";
import ProjectIntro from "../Components/ProjectIntro";
import Skill from "../Components/Skill";

const About = ({ title, rightChild, leftChild }) => {
  const navigate = useNavigate();
  return (
    <div className="About">
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
      <ProjectIntro />
      <MyInformation />
      <Skill skillIcon={SkillIcon} />
      <Footer />
    </div>
  );
};

export default About;
