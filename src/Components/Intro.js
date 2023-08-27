import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/intro.scss";
import { intros } from "../assets/projectdata";
import { FaAnglesDown } from "react-icons/fa6";

const Intro = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const navigate = useNavigate();
  const moveToSkill = useRef();
  const onMoveToSkill = () => {
    moveToSkill.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
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
        {/* <div className="btns">
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
        </div> */}
        <FaAnglesDown />
      </div>
    </div>
  );
};

export default Intro;
