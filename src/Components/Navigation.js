import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import "../scss/Navigation.scss";

const Navigation = ({ showNav, handleScrollView, isMenuAct, MoveToTop }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [showSubNav, setShowSubNav] = useState(false);
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

  const subNav = () => {
    setShowSubNav(!showSubNav);
  };

  const handlerName = () => {
    navigate("/");
    if (currentPath === "/") MoveToTop();
  };

  let content = null;
  if (windowWidth <= 1024) {
    content = (
      <div
        className={showNav ? "Navigation_mobile " : "Navigation_mobile show"}
      >
        <div className="main_nav">
          <div className="name" onClick={handlerName}>
            Jang YooJin
          </div>
          <div className="menuList" onClick={subNav}>
            {showSubNav ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {showSubNav && (
          <div className="gnb" onClick={subNav}>
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
                onClick={() =>
                  window.open("https://github.com/y007in", "_blank")
                }
              >
                <FaGithub />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    content = (
      <div className={showNav ? "Navigation_pc " : "Navigation_pc show"}>
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
  }
  return content;
};

export default Navigation;
