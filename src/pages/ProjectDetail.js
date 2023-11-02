import { useParams } from "react-router-dom";

import { Navigation, ProjectItem, Footer } from "layouts";

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
