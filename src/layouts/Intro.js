import { useState, useEffect } from "react";

import "assets/scss/main.scss";

const Intro = () => {
  const [isIntroPage, setIsIntroPage] = useState(false);

  const handleScroll = () => {
    setIsIntroPage(window.scrollY < window.innerHeight);
  };

  useEffect(() => {
    setIsIntroPage(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="intro">
      <section className="intro_container">
        <article className="intro_txt">
          <span>안녕하세요.</span>
          <span className={`developer ${isIntroPage ? "isActive" : ""}`}>
            공감하는 FE개발자
          </span>
          <div className="box_introName">
            <div className={`intro_name ${isIntroPage ? "isActive" : ""}`}>
              <span>장</span>
              <span>유</span>
              <span>진</span>
            </div>
            <span>입니다.</span>
          </div>
        </article>
        <article className="intro_explain">
          사용자 인터페이스(UI)의 개발을 넘어 사용자 경험(UX)에 대한 깊은 이해를
          바탕으로 사용자들이 더 나은 경험을 할 수 있도록 지속해서 고민합니다.
        </article>
      </section>
    </div>
  );
};

export default Intro;
