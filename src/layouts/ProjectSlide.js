import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

import { Slide } from "components";
import "assets/scss/main.scss";

const ProjectSlide = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className="projectSlide">
      <section className="projectSlide_container">
        <header className="title">
          <div className="title_box">
            <h1>Project</h1>
            <button
              className="moveBtn"
              onClick={() => {
                navigate("/project");
              }}
            >
              프로젝트 전체보기 <FaChevronCircleRight />
            </button>
          </div>
          <p className="project_desc">
            * 해당 썸네일 클릭 시 자세한 내용을 볼 수 있습니다.
          </p>
        </header>
        <div className="slide_container">
          <div
            className="slide_wrapper"
            onMouseEnter={onStop}
            onMouseLeave={onRun}
          >
            <ul className={`slide origin ${animate ? "" : "stop"}`}>
              <Slide />
            </ul>
            <ul className={`slide clone ${animate ? "" : "stop"}`}>
              <Slide />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSlide;
