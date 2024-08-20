import "assets/scss/main.scss";

const Skill = ({ SkillData }) => {
  return (
    <div className="skill">
      <section className="skill_container">
        <header className="title">
          <h1>Skills</h1>
        </header>
        {SkillData.map((skillItem, i) => (
          <section key={i} className="skillBox">
            <div className="skillBox_title">
              {i === 0 ? "Front-end" : "Etc"}
            </div>
            <div className="skill_items">
              {skillItem.map((item, j) => (
                <div className="skill_item" key={j}>
                  <div className="skill_icon">
                    <img src={item.icon} alt={`${item.skill} icon`} />
                  </div>
                  <div className="skill_des">
                    <span className="skill_title">{item.skill}</span>
                    <ul>{item.des}</ul>
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
