import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import "../scss/Navigation.scss";

const Navigation = ({ showNav, handleScrollView, isMenuAct }) => {
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
      <div
        className={showNav ? "Navigation_mobile " : "Navigation_mobile show"}
      >
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
              <NavLink to={"/"}>Skills</NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>Project</NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>About</NavLink>
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
  } else {
    content = (
      <div className={showNav ? "Navigation_pc " : "Navigation_pc show"}>
        <div className="name">Jang YooJin</div>
        <div className="gnb">
          <ul onClick={handleScrollView}>
            <li className={isMenuAct === "Skills" ? "menu active" : "menu"}>
              Skills
            </li>
            <li className={isMenuAct === "Project" ? "menu active" : "menu"}>
              Project
            </li>
            <li className={isMenuAct === "About" ? "menu active" : "menu"}>
              About
            </li>
            <li
              className="menu"
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
