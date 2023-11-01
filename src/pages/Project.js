import Navigation from "components/Navigation";
import ProjectList from "components/ProjectList";
import Footer from "components/Footer";
import { ProjectData } from "assets/projectdata";

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
