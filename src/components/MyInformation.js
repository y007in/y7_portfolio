import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiCalendarAlt } from "react-icons/bi";
import { SiVelog } from "react-icons/si";
import "../assets/scss/MyInformation.scss";

const MyInformation = () => {
  return (
    <div className="myInfo">
      <main className="myInfo_container">
        <div className="about_title">
          <h1>About</h1>
        </div>
        <section className="about_content">
          <article className="about_personal">
            <h2>장유진</h2>
            <ul className="about_personalBox">
              <li>
                <BiCalendarAlt />
                1998.07.13
              </li>
              <li>
                <a href="mailto:ujin4719@kakao.com">
                  <HiOutlineMail />
                  ujin4719@kakao.com
                </a>
              </li>
              <li>
                <a href="tel:01099620590">
                  <BiPhone /> +82 10-9962-0590
                </a>
              </li>
            </ul>
            <ul className="about_personalBox">
              <li>
                <FaGithub
                  onClick={() =>
                    window.open("https://github.com/y007in", "_blank")
                  }
                />
                Github
              </li>
              <li>
                <SiVelog
                  onClick={() =>
                    window.open("https://velog.io/@yoojin4719", "_blank")
                  }
                />
                Blog
              </li>
            </ul>
          </article>
          <section className="about_info">
            <article className="edu">
              <div className="info_title">교육</div>
              <ul className="info_list">
                <li className="date">2023.03 - 2023.08</li>
                <li className="content">
                  웹퍼블리셔&리액트 활용 프론트엔드 웹 SW 개발자 과정
                </li>
              </ul>
              <ul className="info_list">
                <li className="date">2019.03 - 2024.02</li>
                <li className="content">
                  국립안동대학교 멀티미디어공학과 졸업 예정
                </li>
              </ul>
              <ul className="info_list">
                <li className="date">2014.03 - 2017.02</li>
                <li className="content">신목고등학교 졸업</li>
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
        </section>
      </main>
    </div>
  );
};

export default MyInformation;
