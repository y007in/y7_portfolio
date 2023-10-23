import { SkillIcon } from "../assets/projectdata";

import Navigation from "../components/Navigation";
import MyInformation from "../components/MyInformation";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Intro from "../components/Intro";
import ProjectSlide from "../components/ProjectSlide";

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
