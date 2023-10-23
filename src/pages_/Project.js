import { ProjectData } from "../assets/projectdata";

import Navigation from "../components_/Navigation";
import ProjectList from "../components_/ProjectList";
import Footer from "../components_/Footer";

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
