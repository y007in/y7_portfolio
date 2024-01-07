import "assets/scss/main.scss";

const PortfolioFunc = () => {
  return (
    <div className="portfolioFunc">
      <ul>
        <li>CSS Media Queries를 활용한 반응형 웹 페이지</li>
        <li>
          BrowerRouter를 활용해 각 페이지들이 서로 다른 URL에서 렌더링되도록
          설정
        </li>
        <li>useRef로 원하는 위치로 이동</li>
        <li>
          Redux를 활용한 컴포넌트간의 상태관리 (showNav : 위치에 따른 상태변화 ,
          isMenuAct : 선택된 menu , title : &lt;title&gt; 태그 내용 )
        </li>
        <li>
          projectData.js에 데이터들을 배열형태로 저장하여 필요한 곳에 불러와
          사용
        </li>
        <li>
          useEffect와 useState를 활용하여 각 페이지마다 &lt;title&gt; 변경
        </li>
      </ul>
      <section className="component_Detail">
        <article className="pages">
          <h1 className="project_subTitle">1. About Page</h1>
          <ul className="componentContent">
            <li>
              Nav의 메뉴를 클릭할 시 useRef Hook을 활용하여 해당 컴포넌트로 이동
            </li>
            <li>
              Skill.js
              <br />- pc버전일 땐 마우스 hover / mobile 버전일 땐 마우스 클릭 시
              각 skill 들에 대한 자세한 설명 나타남
            </li>
            <li>
              ProjectSlide.js
              <br />- mouseEnter 시 멈춤 / mouseLeave 시 슬라이드 움직임
              <br />- 프로젝트 클릭 시 해당 ProjectDetail Page로 이동
            </li>
          </ul>
        </article>
        <article className="pages">
          <h1 className="project_subTitle">2. Project Page</h1>
          <p>Nav에 Project 메뉴 클릭 시 해당 페이지로 이동</p>
          <p>
            Main Page 속 ProjectSlide 컴포넌트에 있는 ‘프로젝트 전체 보기’버튼
            클릭하면 해당 페이지로 이동
          </p>
          <ul className="componentContent">
            <li>화면 사이즈에 따라 요소 재배치</li>
            <li>map 함수를 활용한 ProjectData.js 속 해당 데이터 불러오기</li>
          </ul>
        </article>
        <article className="pages">
          <h1 className="project_subTitle">3. ProjectDetail Page</h1>
          <p>
            Project 페이지에서 프로젝트를 선택하면 해당 프로젝트 페이지로 이동
          </p>
          <p>MainPage에서 프로젝트를 선택하면 해당 프로젝트 페이지로 이동</p>
          <ul className="componentContent">
            <li>
              해당 프로젝트를 클릭하면 react-router-dom을 통해 해당 프로젝트의
              페이지로 넘어가게 되며 그에 관련된 내용을 볼 수 있음
            </li>
            <li>
              map 함수를 활용한 ProjectData.js 속 해당 데이터 불러오기
              <br />- ProjectData속에 있는 데이터만 불러오도록 작성(없는 정보는
              출력되지 않음)
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default PortfolioFunc;
