import React from "react";
import { useNavigate } from "react-router-dom";
import "./../../

const ProjectIntro = () => {
  const navigate = useNavigate();
  return (
    <div className="ProjectIntro">
      <div className="ProjectIntro_container">
        프로젝트 멘트
        <button
          onClick={() => {
            navigate("/project");
          }}
        >
          프로젝트 보러가기
        </button>
      </div>
    </div>
  );
};

export default ProjectIntro;
