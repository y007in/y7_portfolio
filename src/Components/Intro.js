import React, { useState, useEffect } from "react";

import "../scss/intro.scss";
import { intros } from "../assets/projectdata";

const Intro = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
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
            style={{
              transform: `translateX(-${scrollOffset}px)`,
              marginTop: "10px",
              lineHeight: "110%",
            }}
          >
            <div className="hashtag">
              {intros.map((intro, index) => (
                <span key={index}>{intros[index].hashtag}</span>
              ))}
            </div>
            <div className="front-end">프론트엔드 개발자</div>
          </div>
          <div style={{ transform: `translateX(${scrollOffset}px)` }}>
            <span className="intro_name">장유진</span>입니다.
          </div>
        </div>

        {/* <div className="scroll_icon">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
