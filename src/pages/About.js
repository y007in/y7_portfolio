import Navigation from "components/Navigation";
import Intro from "components/Intro";
import Skill from "components/Skill";
import ProjectSlide from "components/ProjectSlide";
import MyInformation from "components/MyInformation";
import Footer from "components/Footer";
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
