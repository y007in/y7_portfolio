import { ProjectData } from "../assets/projectdata";

import Navigation from "../components/Navigation";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

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
