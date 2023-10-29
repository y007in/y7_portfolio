import { useState } from "react";

import SkillModal from "./SkillModal";
import "../assets/scss/Skill.scss";

const Skill = ({ SkillData }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleClick = (i) => {
    setExpandedItem(i === expandedItem ? null : i);
  };

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
              {skillItem.map((item, i) => (
                <div
                  className="skill_item"
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <div className="skill_icon">
                    <img src={item.icon} alt={`${item.skill} icon`} />
                  </div>
                  <div className="skill_des_pc">
                    <ul>{item.des}</ul>
                  </div>
                  <p className="skill_name">{item.skill}</p>
                  <div className="skill_des_mobile">
                    {expandedItem === i && (
                      <SkillModal des={item.des} skill={item.skill} />
                    )}
                  </div>
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
