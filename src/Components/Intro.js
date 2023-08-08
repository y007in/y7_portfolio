import React from "react";
import "../scss/intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro_container">
        <h1>
          안녕하세요. <br />
          <span className="front-end">프론트엔드 개발자</span>
          <br /> <span className="intro_name">장유진</span>입니다.
        </h1>
        <div className="introduce">abcdefghijklmnop</div>
      </div>
    </div>
  );
};

export default Intro;
