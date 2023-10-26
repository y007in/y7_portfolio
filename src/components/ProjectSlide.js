import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/scss/ProjectSlide.scss";
import { ProjectData } from "../assets/projectdata";

const ProjectSlide = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);

  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className="projectSlide">
      <div className="projectSlide_container">
        <div className="projectSlide_Title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Project</h1>
            <button
              className="moveBtn"
              onClick={() => {
                navigate("/project");
              }}
            >
              프로젝트 전체보기 ▶
            </button>
          </div>
          <p className="project_desc">
            * 해당 썸네일 클릭 시 자세한 내용을 볼 수 있습니다.
          </p>
        </div>
        <section className="projects">
          <div className="slide_container">
            <ul
              className="slide_wrapper"
              onMouseEnter={onStop}
              onMouseLeave={onRun}
            >
              <div className={`slide origin ${animate ? "" : "stop"}`}>
                {ProjectData.map((p, i) => (
                  <li
                    className="item_list"
                    key={i}
                    onClick={() => {
                      navigate(`/project/${p.id}`);
                    }}
                  >
                    <div className="item">
                      <img src={p.image} />
                    </div>
                    <div className="item_des">
                      <div className="item_name">
                        <div>{p.name}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className={`slide clone ${animate ? "" : "stop"}`}>
                {ProjectData.map((p, i) => (
                  <li
                    className="item_list"
                    key={i}
                    onClick={() => {
                      navigate(`/project/${p.id}`);
                    }}
                  >
                    <div className="item">
                      <img src={p.image} />
                    </div>

                    <div className="item_name">{p.name}</div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectSlide;
