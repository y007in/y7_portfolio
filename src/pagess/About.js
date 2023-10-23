import { SkillIcon } from "../assets/projectdata";

import Navigation from "../componentss/Navigation";
import MyInformation from "../componentss/MyInformation";
import Footer from "../componentss/Footer";
import Skill from "../componentss/Skill";
import Intro from "../componentss/Intro";
import ProjectSlide from "../componentss/ProjectSlide";

const About = ({
  showNav,
  isMenuAct,
  scrollRef,
  handleScrollView,
  MoveToTop,
}) => {
  return (
    <div className="About">
      <Navigation
        showNav={showNav}
        handleScrollView={handleScrollView}
        isMenuAct={isMenuAct}
        MoveToTop={MoveToTop}
      />
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
