import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import MyInformation from "../Components/MyInformation";

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
      <MyInformation />
    </div>
  );
};

export default About;
