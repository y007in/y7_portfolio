import { useParams } from "react-router-dom";

import Navigation from "../componentss/Navigation";
import ProjectItem from "../componentss/ProjectItem";
import Footer from "../componentss/Footer";

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
