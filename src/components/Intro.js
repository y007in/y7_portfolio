import { useState, useEffect } from "react";

import "../assets/scss/Intro.scss";

const Intro = () => {
  const [isOpenPage, setIsOpenPage] = useState(false);

  const handleScroll = () => {
    setIsOpenPage(window.scrollY < window.innerHeight);
  };

  useEffect(() => {
    setIsOpenPage(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="intro">
      <section className="intro_container">
        <article className="intro_txt">
          <span>안녕하세요.</span>
          <span className={`developer ${isOpenPage ? "isActive" : ""}`}>
            소통하며 협력하는 개발자
          </span>
          <div className="box_introName">
            <div className={`intro_name ${isOpenPage ? "isActive" : ""}`}>
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
