import { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "../assets/scss/Skill.scss";

const Skill = ({ skillIcon }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

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
          <div className="skill_title">
            <h1>Skills</h1>
            <p className="skillItem_desc">
              * 해당 아이콘 클릭 시 자세한 내용을 볼 수 있습니다.
            </p>
          </div>

          <div className="skill_list">
            <article className="skillBox">
              <p className="skill_items_title">Front-end</p>

              <div className="skill_items">
                {skillIcon.slice(0, 6).map((item, index) => (
                  <div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{ opacity: 1 }}
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
                  </div>
                ))}
              </div>
            </article>
            <article className="skillBox">
              <p className="skill_items_title">Etc</p>

              <div className="skill_items">
                {skillIcon.slice(6, 9).map((item, index) => (
                  <div
                    className="skill_item"
                    key={index}
                    onClick={() => handleClick(index + 6)}
                  >
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    {expandedItemIndex === index + 6 && (
                      <div className="overlay">
                        <ul className="skill_des">
                          <FaRegTimesCircle
                            fill="white"
                            onClick={() => setExpandedItemIndex(null)}
                            style={{ opacity: 1 }}
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
          <div className="skill_title">
            <h1>Skills</h1>
            <p className="skillItem_desc">
              * 해당 아이콘에 마우스를 올리면 자세한 내용을 볼 수 있습니다.
            </p>
          </div>
          <div className="skill_list">
            <article className="skillBox">
              <p className="skill_items_title">Front-end</p>

              <div className="skill_items">
                {skillIcon.slice(0, 6).map((item, index) => (
                  <div className="skill_item" key={index}>
                    <div className="skill_icon">
                      <img src={item.icon} alt={`${item.skill} icon`} />
                    </div>
                    <p className="skill_name">{item.skill}</p>
                    <ul className="skill_des">{item.des}</ul>
                  </div>
                ))}
              </div>
            </article>
            <article className="skillBox">
              <p className="skill_items_title">Etc</p>

              <div className="skill_items">
                {skillIcon.slice(6, 9).map((item, index) => (
                  <div className="skill_item" key={index}>
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
