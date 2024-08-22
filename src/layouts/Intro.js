import { useState, useEffect } from "react";

import "assets/scss/main.scss";
import avatar from "../assets/img/images/avatar.png";

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        <article className="intro_wrap">
          <div className="avatar">
            <img
              src={avatar}
              alt="avatar"
              onLoad={() => setIsLoading(!isLoading)}
              onError={() => alert("Image Load Error")}
            />
          </div>
          <div className="intro_txt">
            <span>안녕하세요.</span>
            <span className={`developer ${isIntroPage ? "isActive" : ""}`}>
              프론트엔드 개발자
            </span>
            <span className="box_introName">
              <div className={`intro_name ${isIntroPage ? "isActive" : ""}`}>
                <span>장</span>
                <span>유</span>
                <span>진</span>
              </div>
              <span>입니다.</span>
            </span>
            <p className="intro_explain">
              사용자 인터페이스(UI) 개발을 넘어 사용자 경험(UX)에 대한 깊은
              이해를 바탕으로 사용자들이 더 나은 경험을 할 수 있도록 지속해서
              고민합니다.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Intro;
