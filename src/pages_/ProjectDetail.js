import { useParams } from "react-router-dom";

import Navigation from "../components_/Navigation";
import ProjectItem from "../components_/ProjectItem";
import Footer from "../components_/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div className="projectDetail">
      <Navigation />
      <ProjectItem projectId={id} />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
