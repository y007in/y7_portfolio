import React from "react";
import "../scss/Skill.scss";
import { SkillIcon } from "../assets/projectdata";

const Skill = () => {
  return (
    <div className="skills">
      <div className="skill_container">
        <h1>Skills</h1>
        <div className="skill_list">
          <article className="skillbox">
            <p className="skill_items_title">Front-end</p>
            <div className="skill_items">
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon">d</div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
            </div>
          </article>
          <article className="skillbox">
            <p className="skill_items_title">Etc</p>
            <div className="skill_items">
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon">d</div>
                <p>HTML5</p>
              </div>
              <div className="skill_item">
                <div className="skill_icon"></div>
                <p>HTML5</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skill;
