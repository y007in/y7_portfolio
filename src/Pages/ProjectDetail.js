import { useParams } from "react-router-dom";

import Navigation from "../components/Navigation";
import ProjectItem from "../components/ProjectItem";
import Footer from "../components/Footer";

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
