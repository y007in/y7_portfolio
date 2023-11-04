import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigation, ProjectList, Footer } from "layouts";
import { ProjectData } from "assets/projectdata";

const Project = () => {
  const dispatch = useDispatch();
  const setTitle = (newTitle) => {
    dispatch({ type: "SET_TITLE", payload: newTitle });
  };
  useEffect(() => {
    setTitle("Project");
  });
  return (
    <div className="Project">
      <Navigation />
      <ProjectList data={ProjectData} />
      <Footer />
    </div>
  );
};

export default Project;
