import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SkillIcon } from "../assets/projectdata";
import Navigation from "../Components/Navigation";
import MyInformation from "../Components/MyInformation";
import Footer from "../Components/Footer";
import Skill from "../Components/Skill";
import Intro from "../Components/Intro";

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
      <Intro />

      <Skill skillIcon={SkillIcon} />
      <MyInformation />
      <Footer />
    </div>
  );
};

export default About;
