import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import "../scss/Navigation.scss";

const Navigation = ({ leftChild, rightChild, title }) => {
  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuItemClick = (menuName) => {
    if (activeMenuItem !== menuName) {
      setActiveMenuItem(menuName);
    }
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

  const handleBack = () => {
    navigate(-1);
  };

  let content = null;
  if (windowWidth <= 1024) {
    content = (
      <div className="Navigation_mobile">
        <div className="leftChild" onClick={handleBack}>
          <FaChevronLeft />
          {leftChild}
        </div>
        <div className="title">{title}</div>
        <div className="rightChild">
          {rightChild}
          <FaChevronRight />
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
            <li
              className={activeMenuItem === "about" ? "active" : ""}
              onClick={() => handleMenuItemClick("about")}
            >
              <Link to={"/"}>About</Link>
            </li>
            <li
              className={activeMenuItem === "project" ? "active" : ""}
              onClick={() => handleMenuItemClick("project")}
            >
              <Link to={"/"}>Project</Link>
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
