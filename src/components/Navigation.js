import { useState } from "react";
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

  const subNav = () => {
    setShowSubNav(!showSubNav);
  };

  const handlerName = () => {
    navigate("/");
    if (currentPath === "/") MoveToTop();
  };

  return (
    <nav className={`navigation ${showNav ? "" : "show"}`}>
      <div className="main_nav">
        <header className="name" onClick={handlerName}>
          JangYooJin
        </header>
        {currentPath === "/" && (
          <article className="subMenu">
            <div className="menuList" onClick={subNav}>
              {showSubNav ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`gnb ${showSubNav ? "" : "hide"}`} onClick={subNav}>
              <ul onClick={handleScrollView}>
                <li
                  className={`menu ${isMenuAct === "Skills" ? " active" : ""}`}
                >
                  Skills
                </li>
                <li
                  className={`menu ${isMenuAct === "Project" ? " active" : ""}`}
                >
                  Project
                </li>
                <li
                  className={`menu ${isMenuAct === "About" ? " active" : ""}`}
                >
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
          </article>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
