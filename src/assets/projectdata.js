import hugmom from "./img/hugmom.JPG";
import todo from "./img/todo.JPG";
import mbti from "./img/mbti.jpeg";
import portfolio from "./img/portfolio.JPG";
import netflix from "./img/netflix.JPG";

import html5 from "./img/html5.png";
import CSS3 from "./img/css-3.png";
import js from "./img/js.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import typescript from "./img/typescript.png";
import photoshop from "./img/photoshop.png";
import illustrator from "./img/illustrator.png";
import figma from "./img/figma.png";

export const menuItems = [
  { label: "Skills", id: "Skills" },
  { label: "Project", id: "Project" },
  { label: "About", id: "About" },
  { label: "", id: "GitHub" },
];

export const ProjectData = [
  {
    id: 0,
    name: "허그맘(Hugmom)",
    team: "팀 프로젝트",
    image: `${hugmom}`,
    des: "산후조리원을 이용하는 산모들이 점차 늘어나는 추세(산후조리원 이용률 : 3년간 75.1% → 81.2% 증가 (2018년 기준) 출처:보건복지부 보고서)이며 산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용 쇼핑몰 제작",
    github: "https://github.com/That-s-great/Hugmom",
    url: "https://hugmom-b6187.web.app/html/01-intro_logout.html",
    date: "2023.05.08 - 2023.06.30",
    skill: (
      <>
        <li>Html5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </>
    ),
    func: (
      <>
        <li>CSS Media Queries를 활용한 반응형 웹으로 제작</li>
        <li>회원가입 및 로그인 조건에 맞는 유효성 검사</li>
        <li>
          select, option태그의 value값을 활용해 선택된 상품에 따라 다른 가격
          출력
        </li>
        <li>FAQ 값과 비교해 일치하는 검색결과 출력</li>
      </>
    ),
  },

  {
    id: 1,
    name: "Todo List",
    team: "개인 프로젝트",
    image: `${todo}`,
    des: "React를 활용하여 CRUD(Create, Read, Update, Delete) 기능을 갖춘 Todo List를 개발하고, 데이터를 브라우저의 LocalStorage에 저장할 수 있도록 구현",
    github: "https://github.com/y007in/my_todo",
    url: "https://y7mytodolist.netlify.app/",
    date: "2023.07.11 - 2023.07.15",
    skill: (
      <>
        <li>React</li>
        <li>Local Storage</li>
      </>
    ),
    func: (
      <>
        <li>생성된 todo 항목은 LocalStorage에 저장, 삭제, 수정이 가능</li>
        <li>검색 기능을 통해 저장된 todo 항목을 검색 가능</li>
        <li>
          useMemo Hook을 활용하여 todo 배열이 변경될 때마다 완료된 todo 항목과
          완료되지 않은 todo 항목의 개수를 실시간으로 계산하고 출력
        </li>
      </>
    ),
  },

  {
    id: 2,
    name: "MBTI TEST",
    team: "개인 프로젝트",
    image: `${mbti}`,
    des: "MZ 세대에게 빼놓을 수 없는 소통 방식으로써 자기 자신을 표현할 수 있는 MBTI의 유행에 따라 MBTI 결과를 생성하는 알고리즘을 활용한 MBTI 검사 웹페이지 제작",
    github: "https://github.com/y007in/mbti",
    url: "https://y7mbti.netlify.app/",
    date: "2023.05.30 - 2023.06.30",
    skill: (
      <>
        <li>React</li>
        <li>styled-components</li>
      </>
    ),
    func: (
      <>
        <li>함수를 활용한 상태변화로 선택한 답변에 따라 답변 결과를 계산</li>
        <li>
          createSearchParams() 함수를 활용하여 해당 MBTI 결과에 기반한 URL을
          생성
        </li>
        <li>
          생성된 MBTI 결과값과 ResultData에 저장된 MBTI가 일치하는 내용을 불러와
          출력
        </li>
      </>
    ),
  },
  {
    id: 3,
    name: "포트폴리오",
    team: "개인 프로젝트",
    image: `${portfolio}`,
    des: "프론트엔드 개발자로서 프로필 및 프로젝트들을 소개하기 위한 포트폴리오 페이지",
    github: "https://github.com/y007in/y7_portfolio",
    url: "https://y7portfolio.netlify.app/",
    date: "Last Updated. 2023.10.26",
    skill: (
      <>
        <li>React</li>
        <li>SCSS</li>
        <li>Redux</li>
      </>
    ),
    func: (
      <>
        <li>CSS Media Queries와 resize 이벤트를 활용한 반응형 웹 페이지</li>
        <li>
          BrowerRouter를 활용해 각 페이지들이 서로 다른 URL에서 렌더링되도록
          설정
        </li>
        <li>
          useRef로 원하는 페이지 이동하거나 선택했을 시 해당 페이지로 이동
        </li>
        <li>Redux를 활용한 컴포넌트간의 상태관리</li>
      </>
    ),
  },
  {
    id: 4,
    name: "Netflix",
    team: "개인 프로젝트",
    image: `${netflix}`,
    des: "코로나시대를 거치며 OTT의 점유율이 늘어남에 따라 사용자들이 많이 접하는 사이트인 넷플릭스를 클론코딩하여 Typescript 기술과 실질적으로 사용되는 서비스를 파악할 수 있던 프로젝트",
    github: "https://github.com/y007in/netflix_typescript",
    url: "https://y7netflix.netlify.app/",
    date: "2023.08.23 - 진행중",
    skill: (
      <>
        <li>React</li>
        <li>Typescript</li>
        <li>styled-components</li>
        <li>framer-motion</li>
      </>
    ),
    func: (
      <>
        <li>
          외부 영화 API를 비동기방식으로 불러와 useQuery를 활용해서 서버로부터
          데이터를 조회해 영화 API데이터를 출력
        </li>
        <li>
          url의 정보와 클릭된 영화의 url이 일치할 경우 해당 영화의 모달창이
          열리도록 설정
        </li>
        <li>
          Props형태로 속성(색상 변수 지정 및 이미지) 전달 가능하도록
          styled-component 활용
        </li>
      </>
    ),
  },
];

export const SkillData = [
  [
    {
      id: 0,
      skill: "HTML5",
      icon: `${html5}`,
      des: (
        <>
          <li>반응형 웹을 제작할 수 있습니다.</li>
          <li>시멘틱 구조를 활용한 HTML코드를 작성할 수 있습니다.</li>
        </>
      ),
    },
    {
      id: 1,
      skill: "CSS3 (SCSS)",
      icon: `${CSS3}`,
      des: (
        <>
          <li>CSS3를 활용하여 원하는 화면을 구성할 수 있습니다.</li>
          <li>Sass 같은 CSS Preprocessor를 사용할 수 있습니다. </li>
        </>
      ),
    },
    {
      id: 2,
      skill: "JavaScript",
      icon: `${js}`,
      des: (
        <>
          <li>JavaScript 문법을 이해하며 다양한 상황에 적용 가능합니다.</li>
        </>
      ),
    },
    {
      id: 3,
      skill: "React",
      icon: `${react}`,
      des: (
        <>
          <li>react-styled component를 활용한 css개발이 가능합니다.</li>
          <li>hooks의 대한 기초지식을 활용하여 화면을 제작합니다.</li>
        </>
      ),
    },
    {
      id: 4,
      skill: "Redux",
      icon: `${redux}`,
      des: (
        <>
          <li>리덕스를 이용한 상태관리를 한 경험이 있습니다.</li>
        </>
      ),
    },
    {
      id: 5,
      skill: "TypeScript",
      icon: `${typescript}`,
      des: (
        <>
          <li>타입스크립트를 이용해서 프로젝트를 만들어본 경험이 있습니다.</li>
        </>
      ),
    },
  ],
  [
    {
      id: 0,
      skill: "Adobe Illustrator",
      icon: `${illustrator}`,
      des: (
        <>
          <li>다양한 도구들을 이용해 디자인 요소를 제작할 수 있습니다.</li>
          <li>다양한 아이콘들과 포스터, 팜플렛 등을 제작한 경험이 있습니다.</li>
        </>
      ),
    },
    {
      id: 1,
      skill: "Adobe Photoshop",
      icon: `${photoshop}`,
      des: (
        <>
          <li>기초적인 이미지 편집이 가능합니다.</li>
          <li>타임라인을 활용하여 애니메이션 GIF를 제작할 수 있습니다.</li>
        </>
      ),
    },
    {
      id: 2,
      skill: "Figma",
      icon: `${figma}`,
      des: (
        <>
          <li>데스크탑, 모바일 UI/UX 시안을 작업할 수 있습니다.</li>
        </>
      ),
    },
  ],
];

export const EduAct = [
  [
    {
      id: 0,
      date: "2023.03 - 2023.08",
      content: "웹퍼블리셔&리액트 활용 프론트엔드 웹 SW 개발자 과정",
    },
    {
      id: 1,
      date: "2019.03 - 2024.02",
      content: "국립안동대학교 멀티미디어공학과 졸업 예정",
    },
    {
      id: 2,
      date: "2014.03 - 2017.02",
      content: "신목고등학교 졸업",
    },
  ],
  [
    {
      id: 0,
      date: "2022.09 - 2022.11",
      content: " 네이버 웨일 대학생 서포터즈 '웨일대학' 개발 직군",
    },
  ],
];
