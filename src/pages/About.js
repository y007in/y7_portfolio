import {
  Navigation,
  Intro,
  Skill,
  ProjectSlide,
  MyInformation,
  Footer,
} from "layouts";
import { SkillData, EduAct } from "assets/projectdata";

const About = ({ scrollRef, scrollToSection }) => {
  return (
    <main className="About">
      <Navigation scrollToSection={scrollToSection} />
      <Intro />
      {[
        { component: <Skill SkillData={SkillData} /> },
        { component: <ProjectSlide /> },
        { component: <MyInformation EduAct={EduAct} /> },
      ].map((item, index) => (
        <div
          className="about_box"
          key={index}
          ref={(el) => (scrollRef.current[index] = el)}
        >
          {item.component}
        </div>
      ))}
      <Footer />
    </main>
  );
};

export default About;
