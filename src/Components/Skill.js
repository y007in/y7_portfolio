import React from "react";
import "../scss/Skill.scss";

const Skill = ({ skillIcon }) => {
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
};

export default Skill;
