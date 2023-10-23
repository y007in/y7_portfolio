import { ProjectData } from "../assets/projectdata";

import Navigation from "../componentss/Navigation";
import ProjectList from "../componentss/ProjectList";
import Footer from "../componentss/Footer";

const Project = () => {
  return (
    <div className="Project">
      <Navigation />
      <ProjectList data={ProjectData} />
      <Footer />
    </div>
  );
};

export default Project;
