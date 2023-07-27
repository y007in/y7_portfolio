import React from "react";
import "../scss/ProjectItem.scss";
import projectImg from "../img/project_img_hugmom.JPG";

const ProjectItem = () => {
  return (
    <div className="ProjectItem">
      <div className="project_container">
        <div className="project_title">
          <h1>허그맘(Hugmom)</h1>
          <span className="team">팀 프로젝트</span>
        </div>
        <main className="project_content">
          <div className="project_left">
            <div className="project_img">
              <img src={projectImg} />
            </div>
            <div className="project_des">
              많은 산모들이 산후조리원을 이용하는 추세이며 산모들이 신선한
              식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용
              쇼핑몰인 허그맘을 제작
            </div>
            <div className="buttons">
              <button className="button github">GitHub</button>
              <button className="button url">URL</button>
            </div>
          </div>
          <div className="project_right">
            <div className="project_date">
              <div className="des_title">제작 기간</div>
              <div className="des_content">2023.05.30 - 2023.06.30</div>
            </div>
            <div className="project_skill">
              <div className="des_title">사용기술</div>
              <div className="des_content">Html5, CSS3, JavaScript</div>
            </div>
            <div className="project_func">
              <div className="des_title">주요 기능</div>
              <div className="des_content">
                -산후조리원코드로 임산부들만 회원가입 가능합니다. <br />
                - 회원가입시 남편 정보 입력해 남편도 회원가입할 수 있도록
                합니다. <br />
                - 추천인으로 포인트 적립할 수 있는 기능이 있습니다. <br />
                산후조리원 안에 있는 산모들용 / 산후조리원을 나온 산모들용
                페이지 분리 라이브커머스로 특가상품 소개와 실시간으로 주문이
                가능합니다. (모두 적용)
                <br /> -산후조리원코드로 임산부들만 회원가입 가능합니다. <br />
                - 회원가입시 남편 정보 입력해 남편도 회원가입할 수 있도록
                합니다. <br />
                - 추천인으로 포인트 적립할 수 있는 기능이 있습니다. <br />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectItem;
