import React, { useState } from "react";
import "../scss/intro.scss";
import { intros } from "../assets/projectdata";

const Intro = () => {
  const [selectedIntroIndex, setSelectedIntroIndex] = useState(null);

  const handleHashtagClick = (index) => {
    setSelectedIntroIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="intro">
      <div className="intro_container">
        <div className="hi">
          <h1>
            안녕하세요. <br />
            <span className="front-end">프론트엔드 개발자</span>
            <br /> <span className="intro_name">장유진</span>입니다.
          </h1>
          <div className="hashtag">
            {intros.map((intro, index) => (
              <span
                key={index}
                onClick={() => handleHashtagClick(index)}
                className={selectedIntroIndex === index ? "active" : null}
              >
                {intros[index].hashtag}
              </span>
            ))}
          </div>
        </div>
        {selectedIntroIndex !== null && (
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
        )}
      </div>
    </div>
  );
};

export default Intro;
