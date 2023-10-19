import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import "../scss/Navigation.scss";

const Navigation = ({ showNav, handleScrollView, isMenuAct, MoveToTop }) => {
  const navigate = useNavigate();
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const handleBack = () => {
  //   navigate(-1);
  // };
  const handlerName = () => {
    navigate("/");
    MoveToTop();
  };

  return (
    <div className={showNav ? "Navigation " : "Navigation show"}>
      <div className="name" onClick={handlerName}>
        Jang YooJin
      </div>
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
};

export default Navigation;
