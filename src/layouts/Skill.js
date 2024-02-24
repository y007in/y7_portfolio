import { useState, useEffect } from "react";

import { SkillModal } from "components";
import "assets/scss/main.scss";

const Skill = ({ SkillData }) => {
  const [expandedItem, setExpandedItem] = useState({});

  const handleSkillClick = (i, j) => {
    setExpandedItem((prev) => ({
      ...prev,
      [i]: prev[i] === j ? null : j,
    }));
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1024) {
  //       setExpandedItem(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="skill">
      <section className="skill_container">
        <header className="title">
          <h1>Skills</h1>
          <p className="title_desc">*</p>
        </header>
        {SkillData.map((skillItem, i) => (
          <section key={i} className="skillBox">
            <div className="skillBox_title">
              {i === 0 ? "Front-end" : "Etc"}
            </div>
            <div className="skill_items">
              {skillItem.map((item, j) => (
                <div
                  className="skill_item"
                  key={j}
                  onClick={() => handleSkillClick(i, j)}
                >
                  <div className="skill_icon">
                    <img src={item.icon} alt={`${item.skill} icon`} />
                  </div>
                  <div className="skill_des">
                    {expandedItem[i] === j && (
                      <SkillModal key={j} des={item.des} skill={item.skill} />
                    )}
                    {/* <ul className="des_pc">{item.des}</ul> */}
                  </div>
                  <p className="skill_name">{item.skill}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Skill;
