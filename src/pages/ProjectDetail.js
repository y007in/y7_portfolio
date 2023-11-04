import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navigation, ProjectItem, Footer } from "layouts";
import { useEffect } from "react";

import { ProjectData } from "assets/projectdata";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const setTitle = (newTitle) => {
    dispatch({ type: "SET_TITLE", payload: newTitle });
  };
  useEffect(() => {
    setTitle(`${ProjectData[id].name}`);
  });

  return (
    <div className="projectDetail">
      <Navigation />
      <ProjectItem projectId={id} />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
