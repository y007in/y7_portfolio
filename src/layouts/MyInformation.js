import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiCalendarAlt } from "react-icons/bi";
import { SiVelog } from "react-icons/si";

import "assets/scss/main.scss";

const MyInformation = ({ EduAct }) => {
  return (
    <div className="myInfo">
      <section className="myInfo_container">
        <header className="title">
          <h1>About</h1>
        </header>
        <section className="about_box">
          <div className="about_personal">
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
              <li
                className="link"
                onClick={() =>
                  window.open("https://github.com/y007in", "_blank")
                }
              >
                <FaGithub />
                Github
              </li>
              <li
                className="link"
                onClick={() =>
                  window.open("https://velog.io/@yoojin4719", "_blank")
                }
              >
                <SiVelog />
                Blog
              </li>
            </ul>
          </div>
          <div>
            {EduAct.map((eduAct, i) => (
              <div className="about_info" key={i}>
                <div>
                  <div className="info_title">{i === 0 ? "교육" : "활동"}</div>
                  {eduAct.map((item, id) => (
                    <ul className="info_list" key={id}>
                      <li className="date">{item.date}</li>
                      <li className="content">{item.content}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default MyInformation;
