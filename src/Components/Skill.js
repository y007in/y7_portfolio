import React from "react";
import "../scss/Skill.scss";

const Skill = ({ skillIcon }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [showMobileContent, setShowMobileContent] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  window.addEventListener("resize", handleResize);

  const toggleMobileContent = () => {
    setShowMobileContent(!showMobileContent);
  };

  return (
    <div className="skills">
      <div className="skill_container">
        <h1>Skills</h1>
        <div className="skill_list">
          <article className="skillbox">
            <p className="skill_items_title">Front-end</p>
            <div className="skill_items">
              {skillIcon.slice(0, 5).map((item) => (
                <div className="skill_item">
                  <div className="skill_icon">
                    <img src={item.icon} />
                  </div>
                  <p className="skill_name">{item.skill}</p>
                  {isMobile && (
                    <ul
                      className={`${styles.skill_des} ${
                        showMobileContent ? styles["show-mobile"] : ""
                      }`}
                      onClick={toggleMobileContent}
                    >
                      {item.des}
                    </ul>
                  )}
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
                  {isMobile && (
                    <ul
                      className={`${styles.skill_des} ${
                        showMobileContent ? styles["show-mobile"] : ""
                      }`}
                      onClick={toggleMobileContent}
                    >
                      {item.des}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skill;
