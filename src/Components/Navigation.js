import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import "../scss/Navigation.scss";

const Navigation = ({ leftChild, rightChild, title }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  let content = null;
  if (windowWidth <= 1024) {
    content = (
      <div className="Navigation_mobile">
        <div className="leftChild" onClick={handleBack}>
          <FaChevronLeft fill="white" />
          {leftChild}
        </div>
        <div className="title">{title}</div>
        <div className="rightChild">
          {rightChild}
          <FaChevronRight fill="white" />
        </div>
      </div>
    );
  } else {
    content = (
      <div className="Navigation_pc">
        <div
          className="name"
          onClick={() => {
            navigate("/");
          }}
        >
          Jang YooJin
        </div>
        <div className="gnb">
          <ul>
            <li>
              <NavLink to={"/"}>About Me</NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>Project</NavLink>
            </li>
            <li
              onClick={() => window.open("https://github.com/y007in", "_blank")}
            >
              <FaGithub />
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default Navigation;
