import React, { useState, useEffect } from "react";
import "../scss/intro.scss";
import { intros } from "../assets/projectdata";
import { motion } from "framer-motion";

const Intro = () => {
  const [selectedIntroIndex, setSelectedIntroIndex] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleHashtagClick = (index) => {
    setSelectedIntroIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
        {/* <motion.div
          className="motion"
          animate={{ rotate: 140 }}
          transition={{ type: "spring", stiffness: 50 }}
        /> */}
        <div
          className="hi"
          style={{ transform: `translateX(-${scrollOffset}px)` }}
        >
          <h1>
            안녕하세요. <br />
            <span className="front-end">프론트엔드 개발자</span>
            <br /> <span className="intro_name">장유진</span>입니다.
          </h1>
          {/* <div className="hashtag">
            {intros.map((intro, index) => (
              <span
                key={index}
                onClick={() => handleHashtagClick(index)}
                className={selectedIntroIndex === index ? "active" : null}
              >
                {intros[index].hashtag}
              </span>
            ))}
          </div> */}
        </div>
        {/* {selectedIntroIndex !== null && (
          <div className="introduce">
            <article className="container project">
              <header>
                <div className="circle_wrap">
                  <div className="circle red"></div>
                  <div className="circle yellow"></div>
                  <div className="circle green"></div>
                </div>
                <div className="title">
                  {intros[selectedIntroIndex].hashtag}
                </div>
              </header>
              <div className="content_project">
                {intros[selectedIntroIndex].hashtagDetail}
              </div>
            </article>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Intro;
