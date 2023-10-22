import { useState, useEffect } from "react";

import "../assets/scss/Intro.scss";

const Intro = () => {
  const [isOpenPage, setIsOpenPage] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsOpenPage(false);
    } else {
      setIsOpenPage(true);
    }
  };

  useEffect(() => {
    setIsOpenPage(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="intro">
      <div className="intro_container">
        <div className="intro_txt">
          <span>안녕하세요.</span>
          <div>
            <div className={`front_end ${isOpenPage ? "isActive" : ""}`}>
              소통하며 협력하는 개발자
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div className={`intro_name ${isOpenPage ? "isActive" : ""}`}>
                <span>장</span>
                <span>유</span>
                <span>진</span>
              </div>
              <span>입니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
