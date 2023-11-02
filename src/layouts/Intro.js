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
            소통하며 협력하는 개발자
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
      </section>
    </div>
  );
};

export default Intro;
