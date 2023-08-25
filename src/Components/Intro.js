import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/intro.scss";
import { intros } from "../assets/projectdata";
import { motion } from "framer-motion";

const Intro = () => {
  const [selectedIntroIndex, setSelectedIntroIndex] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const navigate = useNavigate();
  const moveToSkill = useRef();
  const onMoveToSkill = () => {
    moveToSkill.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
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
        <div className="hi">
          <div className="hashtag">
            {intros.map((intro, index) => (
              <span
                key={index}
                onClick={() => handleHashtagClick(index)}
                /*className={selectedIntroIndex === index ? "active" : null}*/
              >
                {intros[index].hashtag}
              </span>
            ))}
          </div>
          <h1>
            안녕하세요. <br />
            <div style={{ transform: `translateX(-${scrollOffset}px)` }}>
              <span className="front-end">프론트엔드 개발자</span>
            </div>
            <div style={{ transform: `translateX(${scrollOffset}px)` }}>
              <span className="intro_name">장유진</span>입니다.
            </div>
          </h1>
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
      <div className="btns">
        <button className="moveBtn" onClick={onMoveToSkill}>
          더 알아보기
        </button>
        <button
          className="moveBtn"
          onClick={() => {
            navigate("/project");
          }}
        >
          프로젝트 보러가기
        </button>
      </div>
    </div>
  );
};

export default Intro;
