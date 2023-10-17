import React, { useState, useEffect } from "react";

import "../scss/intro.scss";

const Intro = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
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
          <div
          // style={{
          //   transform: `translateX(-${scrollOffset}px)`,
          //   marginTop: "10px",
          //   lineHeight: "110%",
          // }}
          >
            <div className={isActive ? "isActive front-end" : "front-end"}>
              소통하며 협력하는 개발자
            </div>
          </div>
          <div
          // style={{ transform: `translateX(${scrollOffset}px)` }}
          >
            <span className="intro_name">장유진</span>
            <span>입니다.</span>
          </div>
          {/* <div className="scroll_icon">
            <div className="arrow"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
