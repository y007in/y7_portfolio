import React, { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "../scss/Skill.scss";

const Skill = ({ skillIcon }) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index) => {
    setExpandedItemIndex(index === expandedItemIndex ? null : index);
  };

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
                {skillIcon.slice(0, 5).map((item, index) => (
                  <div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    {expandedItemIndex === index && (
                      <div className="overlay">
                        <ul className="skill_des">
                          <FaRegTimesCircle
                            onClick={() => setExpandedItemIndex(null)}
                          />
                          <span className="modal_skill_title">
                            {item.skill}
                          </span>
                          {item.des}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
            <article className="skillbox">
              <p className="skill_items_title">Etc</p>
              <div className="skill_items">
                {skillIcon.slice(5, 8).map((item, index) => (
                  <div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index + 5)}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    {expandedItemIndex === index + 5 && (
                      <div className="overlay">
                        <ul className="skill_des">
                          <FaRegTimesCircle
                            onClick={() => setExpandedItemIndex(null)}
                          />
                          <span className="modal_skill_title">
                            {item.skill}
                          </span>
                          {item.des}
                        </ul>
                      </div>
                    )}
                  </div>
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
                {skillIcon.slice(0, 5).map((item, index) => (
                  <div className="skill_item">
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    <ul className="skill_des">{item.des}</ul>
                  </div>
                ))}
              </div>
            </article>
            <article className="skillbox">
              <p className="skill_items_title">Etc</p>
              <div className="skill_items">
                {skillIcon.slice(5, 8).map((item) => (
                  <div className="skill_item">
                    <div className="skill_icon">
                      <img src={item.icon} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    <ul className="skill_des">{item.des}</ul>
                  </div>
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
