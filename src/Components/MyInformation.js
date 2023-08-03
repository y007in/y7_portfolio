import React from "react";
import { FaGithub } from "react-icons/fa";
import "../scss/MyInformation.scss";
import velogicon from "../assets/img/velogicon.png";

const myinformation = () => {
  return (
    <div className="MyInformation">
      <main className="MyInformation_container">
        <div className="About_Title">
          <h1>About</h1>
        </div>
        <section className="about_Me">
          <article className="resolution">
            <span>
              loFKSLKDJF;ALKDJS;ALKDSF;ALKSJFL;ASKJDsfsdfsfsdfsdfsdfsdfsdfssfkjsdlfjalskdjfslkdfslkdjfskldjfslkjfslkdjfslkfslkj
            </span>
          </article>
          <article className="me">
            <h3>장유진</h3>
            <ul className="me_detail">
              <li>📆1998.07.13</li>
              <li>
                <a href="mailto:ujin4719@naver.com">📧 ujin4719@naver.com</a>
              </li>
              <li>
                <a href="tel:01099620590"> 📞 +82 10-9962-0590 </a>
              </li>
              <li className="link">
                <FaGithub
                  onClick={() =>
                    window.open("https://github.com/y007in", "_blank")
                  }
                />
                <img
                  src={velogicon}
                  width={24}
                  onClick={() => window.open("https://velog.io/@yoojin4719")}
                />{" "}
              </li>
            </ul>
          </article>
        </section>
        <section className="about_content">
          <article className="edu">
            <div className="info_title">교육</div>
            <ul className="info_list">
              <li className="date">2014.03 - 2017.02</li>
              <li className="content">신목고등학교 졸업</li>
            </ul>
            <ul className="info_list">
              <li className="date">2019.03 - 현재</li>
              <li className="content">국립안동대학교 멀티미디어공학과 재학</li>
            </ul>
            <ul className="info_list">
              <li className="date">2023.03 - 2023.08</li>
              <li className="content">
                웹퍼블리셔&리액트 활용 프론트엔드 웹 SW 개발자 과정
              </li>
            </ul>
          </article>
          <article className="active">
            <div className="info_title">활동</div>
            <ul className="info_list">
              <li className="date">2022.09 - 2022.11</li>
              <li className="content">
                네이버 웨일 대학생 서포터즈 "웨일대학" 개발 직군
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
};

export default myinformation;
