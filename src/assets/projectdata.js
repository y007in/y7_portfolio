import postme from "./img/postme.png";
import hugmom from "./img/hugmom.JPG";
import todo from "./img/todo.JPG";
import mbti from "./img/mbti.png";
import portfolio from "./img/portfolio.png";
import netflix from "./img/netflix.jpeg";

import html5 from "./img/html5.png";
import CSS3 from "./img/css-3.png";
import js from "./img/js.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import typescript from "./img/typescript.png";
import photoshop from "./img/photoshop.png";
import illustrator from "./img/illustrator.png";
import figma from "./img/figma.png";

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
        <li>
          입력한 내용이 조건에 부합하지 않을 경우와 부합할 경우에 따른 메시지
          출력
        </li>
        <li>
          select, option태그의 value값을 활용해 선택된 상품에 따라 다른 가격
          출력
        </li>
        <li>
          input태그의 값과 FAQ의 값을 비교해 test()메서드를 통해 일치할 경우
          true, 일치하지 않을 경우 false값을 반환해 값에 따라 다른 CSS를 적용
        </li>
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
          생성"
        </li>
        <li>
          useSearchParams() Hook을 활용해 URL에 생성된 MBTI 결과값과
          ResultData에 저장된 MBTI가 일치하는 내용을 불러와 출력
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
    date: "2023.07.03 - 2023.09.30",
    skill: (
      <>
        <li>React</li>
        <li>SCSS</li>
      </>
    ),
    func: (
      <>
        <li>
          CSS Media Queries와 useEffect로 window객체에 발생되는 resize 이벤트를
          활용한 반응형 웹 페이지
        </li>
        <li>
          React-router-dom의 BrowserRouter를 활용해 각 페이지들이 서로 다른
          URL에서 렌더링되도록 설정{" "}
        </li>
        <li>useState와 @keyframe을 활용한 무한루프 슬라이드 구현</li>
        <li>CSS의 가독성과 재활용성을 높이기 위해 SCSS 활용</li>
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
          Fetch(), .then()을 함수로 외부 영화 API를 비동기방식으로 불러와
          useQuery를 활용해서 서버로부터 데이터를 조회해 영화 API데이터를 출력
        </li>
        <li>
          React-router-dom의 BrowserRouter를 활용해 서로 다른 URL에서 영화들이
          렌더링되도록 설정
        </li>
        <li>
          useMatch함수를 통해 url의 정보와 클릭된 영화의 url이 일치할 경우 해당
          영화의 모달창이 열리도록 설정
        </li>
        <li>
          Props형태로 속성(색상 변수 지정 및 이미지) 전달 가능하도록
          styled-component 활용
        </li>
        <li>
          상태변화에 따른 Framer-motion을 활용한 애니메이션 효과 적용(슬라이드,
          네비게이션바)
        </li>
      </>
    ),
  },
  // {
  //   id: 5,
  //   name: "Post Me",
  //   team: "팀 프로젝트 + 개인 프로젝트",
  //   image: `${postme}`,
  //   des: "'네이버 웨일'대외활동 확장앱 프로젝트로 Post Me 제작",
  //   github: "https://github.com/y007in/POSTME",
  //   url: "https://whale4upostme.netlify.app/",
  //   date: "2022.8.19 - 2022.09.16",
  //   skill: (
  //     <>
  //       <li>React</li>
  //       <li>CSS3</li>
  //     </>
  //   ),
  //   func: (
  //     <>
  //       <li>x</li>
  //     </>
  //   ),
  // },
];

// export const DesignData = {
//   name: "졸업작품전시회 홍보물 제작",
//   team: "팀 프로젝트",
//   // image: `${design} `,
//   des: "졸업작품전시회를 홍보하기 위한 포스터, 현수막, 책자를 제작하였습니다.",
//   url: "",
//   date: "2021.10.18 - 2021.11.12",
//   skill: (
//     <>
//       <li>Adobe Illustrator</li>
//       <li>Adobe Photoshop</li>
//     </>
//   ),
// };

export const SkillIcon = [
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
        <li>리덕스를 이용한 상태관리를 이용한 경험이 있습니다.</li>
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

  {
    id: 6,
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
    id: 7,
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
    id: 8,
    skill: "Figma",
    icon: `${figma}`,
    des: (
      <>
        <li>데스크탑, 모바일 UI/UX 시안을 작업할 수 있습니다.</li>
      </>
    ),
  },
];
