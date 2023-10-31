import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

import { menuItems } from "../assets/projectdata";
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

  const handleMenuClick = (menuId) => {
    setIsMenuAct(menuId);
    setShowSubNav(false);
  };

  return (
    <nav className={`navigation ${showNav ? "" : "show"}`}>
      <div className="navigation_bar">
        <header className="name" onClick={handlerName}>
          JangYooJin
        </header>
        {currentPath === "/" && (
          <div className="menuList" onClick={subNav}>
            {showSubNav ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>
      {currentPath === "/" && (
        <>
          <div
            className={`gnb ${showSubNav ? "" : "hide"}`}
            onClick={subNav}
          ></div>
          <ul
            className={`gnbList ${showSubNav ? "" : "hide"}`}
            onClick={handleScrollView}
          >
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className={`menu ${isMenuAct === menuItem.id ? " active" : ""}`}
                onClick={() => handleMenuClick(menuItem.id)}
              >
                {menuItem.label}
                {menuItem.id === "GitHub" && <FaGithub />}
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navigation;
