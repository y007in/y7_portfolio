import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

import "../assets/scss/Navigation.scss";

const Navigation = ({ handleScrollView }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [showSubNav, setShowSubNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const showNav = useSelector((state) => state.showNav);
  const isMenuAct = useSelector((state) => state.isMenuAct);

  const setIsMenuAct = (menuAct) => {
    dispatch({ type: "SET_MENU_ACT", payload: menuAct });
  };

  const MoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuAct("");
  };

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
      <div className={`navigation_mobile ${showNav ? "" : "show"}`}>
        <div className="main_nav">
          <div className="name" onClick={handlerName}>
            JangYooJin
          </div>
          {currentPath === "/" && (
            <div className="menuList" onClick={subNav}>
              {showSubNav ? <FaTimes /> : <FaBars />}
            </div>
          )}
        </div>
        {currentPath === "/" && showSubNav && (
          <div className="gnb" onClick={subNav}>
            <ul onClick={handleScrollView}>
              <li className={`menu ${isMenuAct === "Skills" ? " active" : ""}`}>
                Skills
              </li>
              <li
                className={`menu ${isMenuAct === "Project" ? " active" : ""}`}
              >
                Project
              </li>
              <li className={`menu ${isMenuAct === "About" ? " active" : ""}`}>
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
      <div className={`navigation_pc ${showNav ? "" : "show"}`}>
        <div className="name" onClick={handlerName}>
          JangYooJin
        </div>
        {currentPath === "/" && (
          <div className="gnb">
            <ul onClick={handleScrollView}>
              <li className={`menu ${isMenuAct === "Skills" ? " active" : ""}`}>
                Skills
              </li>
              <li
                className={`menu ${isMenuAct === "Project" ? " active" : ""}`}
              >
                Project
              </li>
              <li className={`menu ${isMenuAct === "About" ? " active" : ""}`}>
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
  }
  return content;
};

export default Navigation;
