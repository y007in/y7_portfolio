import React, { useState, useEffect } from "react";

import "../scss/intro.scss";

const Intro = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="intro">
      <div className="intro_container">
        <div className="hi">
          <span>안녕하세요.</span>
          <div>
            <div className={isActive ? "isActive front-end" : "front-end"}>
              소통하며 협력하는 개발자
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div className={isActive ? "isActive intro_name" : "intro_name"}>
                <span>장</span>
                <span>유</span>
                <span>진</span>
              </div>
              <span>입니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
