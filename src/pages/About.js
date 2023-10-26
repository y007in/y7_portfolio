import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import ProjectSlide from "../components/ProjectSlide";
import MyInformation from "../components/MyInformation";
import Footer from "../components/Footer";
import { SkillIcon } from "../assets/projectdata";

const About = ({ scrollRef, handleScrollView }) => {
  return (
    <div className="About">
      <Navigation handleScrollView={handleScrollView} />
      <Intro />
      <div className="about_box" ref={(el) => (scrollRef.current[0] = el)}>
        <Skill skillIcon={SkillIcon} />
      </div>
      <div className="about_box" ref={(el) => (scrollRef.current[1] = el)}>
        <ProjectSlide />
      </div>
      <div className="about_box" ref={(el) => (scrollRef.current[2] = el)}>
        <MyInformation />
      </div>
      <Footer />
    </div>
  );
};

export default About;
