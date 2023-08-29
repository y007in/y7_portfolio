import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import "../scss/Skill.scss";
import { motion } from "framer-motion";

const skill_icon = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skill = ({ skillIcon }) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 원하는 스크롤 위치를 기준으로 작동 여부 결정
      const scrollThreshold = window.innerHeight - 350;
      if (window.scrollY > scrollThreshold) {
        setShouldAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    setExpandedItemIndex(index === expandedItemIndex ? null : index);
  };
  const navigate = useNavigate();

  let content = null;
  if (windowWidth <= 1024) {
    content = (
      <div className="skills">
        <div className="skill_container">
          <h1>Skills</h1>
          <p className="skillitem_desc">
            * 해당 아이콘 클릭 시 자세한 내용을 볼 수 있습니다.
          </p>
          <div className="skill_list">
            <article className="skillbox">
              <p className="skill_items_title">Front-end</p>
              <div className="skill_items">
                {skillIcon.slice(0, 6).map((item, index) => (
                  <motion.div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index)}
                    variants={skill_icon}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{
                      delay: index * 0.4,
                    }}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    {expandedItemIndex === index && (
                      <div className="overlay">
                        <ul className="skill_des">
                          <FaRegTimesCircle
                            fill="white"
                            onClick={() => setExpandedItemIndex(null)}
                          />
                          <span className="modal_skill_title">
                            {item.skill}
                          </span>
                          {item.des}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </article>
            <article className="skillbox">
              <p className="skill_items_title">Etc</p>
              <div className="skill_items">
                {skillIcon.slice(6, 9).map((item, index) => (
                  <motion.div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index + 5)}
                    variants={skill_icon}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{
                      delay: (index + 6) * 0.4,
                    }}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    {expandedItemIndex === index + 5 && (
                      <div className="overlay">
                        <ul className="skill_des">
                          <FaRegTimesCircle
                            fill="white"
                            onClick={() => setExpandedItemIndex(null)}
                          />
                          <span className="modal_skill_title">
                            {item.skill}
                          </span>
                          {item.des}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="skills">
        <div className="skill_container">
          <h1>Skills</h1>

          <p className="skillitem_desc">
            * 해당 아이콘에 마우스를 올리면 자세한 내용을 볼 수 있습니다.
          </p>
          <div className="skill_list">
            <article className="skillbox">
              <p className="skill_items_title">Front-end</p>
              <div className="skill_items">
                {skillIcon.slice(0, 6).map((item, index) => (
                  <motion.div
                    className="skill_item"
                    variants={skill_icon}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{
                      delay: index * 0.4,
                    }}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    <ul className="skill_des">{item.des}</ul>
                  </motion.div>
                ))}
              </div>
            </article>
            <article className="skillbox">
              <p className="skill_items_title">Etc</p>
              <div className="skill_items">
                {skillIcon.slice(6, 9).map((item, index) => (
                  <motion.div
                    className="skill_item"
                    variants={skill_icon}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    transition={{
                      delay: (index + 6) * 0.4,
                    }}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    <ul className="skill_des">{item.des}</ul>
                  </motion.div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default Skill;
