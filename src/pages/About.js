import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import ProjectSlide from "../components/ProjectSlide";
import MyInformation from "../components/MyInformation";
import Footer from "../components/Footer";
import { SkillData, EduAct } from "../assets/projectdata";

const About = ({ scrollRef, handleScrollView }) => {
  return (
    <main className="About">
      <Navigation handleScrollView={handleScrollView} />
      <Intro />
      <div className="about_box" ref={(el) => (scrollRef.current[0] = el)}>
        <Skill SkillData={SkillData} />
      </div>
      <div className="about_box" ref={(el) => (scrollRef.current[1] = el)}>
        <ProjectSlide />
      </div>
      <div className="about_box" ref={(el) => (scrollRef.current[2] = el)}>
        <MyInformation EduAct={EduAct} />
      </div>
      <Footer />
    </main>
  );
};

export default About;
