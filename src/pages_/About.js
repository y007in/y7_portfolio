import { SkillIcon } from "../assets/projectdata";

import Navigation from "../components_/Navigation";
import MyInformation from "../components_/MyInformation";
import Footer from "../components_/Footer";
import Skill from "../components_/Skill";
import Intro from "../components_/Intro";
import ProjectSlide from "../components_/ProjectSlide";

const About = ({ scrollRef, handleScrollView }) => {
  return (
    <div className="About">
      <Navigation handleScrollView={handleScrollView} />
      <Intro />
      <div ref={(el) => (scrollRef.current[0] = el)}>
        <Skill skillIcon={SkillIcon} />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)}>
        <ProjectSlide />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)}>
        <MyInformation />
      </div>
      <Footer />
    </div>
  );
};

export default About;
