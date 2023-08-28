import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../scss/ProjectList.scss";
import { ProjectData } from "../assets/projectdata";

const rowVariants = {
  hidden: {
    x: window.innerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 5,
  },
};
const ProjectList = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(ProjectData.length / offset));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = 3;
  return (
    <div className="ProjectList">
      <main className="ProjectList_container">
        <div className="ProjectList_Title">
          <h1>Project</h1>
          <p>*해당 썸네일에 마우스를 올려보세요.</p>
        </div>

        <div className="slider">
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <motion.section
              className="Projects"
              key={index}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 1 }}
            >
              {ProjectData.slice(offset * index, offset * index + offset).map(
                (project, projectIndex) => (
                  <section className="projectThumb" key={projectIndex}>
                    <article className="project_img">
                      <img src={project.image} />
                      {/* <article className="project_desc">
                    <ul>
                      <li className="title">
                        <span>{project.name}</span>
                      </li>
                      <li className="thumb_des">
                        <ul className="skill">{project.skill}</ul>
                      </li>
                    </ul>
                  </article> */}
                    </article>
                  </section>
                )
              )}
            </motion.section>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
