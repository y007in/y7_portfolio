import { Navigation, ProjectList, Footer } from "layouts";
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
