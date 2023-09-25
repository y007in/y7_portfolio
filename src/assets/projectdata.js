import postme from "./img/postme.png";
import hugmom from "./img/hugmom.JPG";
import todo from "./img/todo.JPG";
import mbti from "./img/mbti.png";
import portfolio from "./img/portfolio.png";
import netflix from "./img/netflix.jpeg";

// import design from "./img/design.png";

import html5 from "./img/html5.png";
import CSS3 from "./img/css-3.png";
import js from "./img/js.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import typescript from "./img/typescript.png";
import photoshop from "./img/photoshop.png";
import illustrator from "./img/illustrator.png";
import figma from "./img/figma.png";

export const intros = [
  "#계획없이는 못사는",
  "#한번 시작하면 끝까지 달리는",
  "#사용자를 위한",
];

export const ProjectData = [
  {
    id: 0,
    name: "Post Me",
    team: "팀 프로젝트 + 개인 프로젝트",
    image: `${postme}`,
    des: "'네이버 웨일'대외활동 확장앱 프로젝트로 Post Me 제작",
    github: "https://github.com/y007in/POSTME",
    url: "https://whale4upostme.netlify.app/",
    date: "2022.8.19 - 2022.09.16",
    skill: (
      <>
        <li>React</li>
        <li>CSS3</li>
      </>
    ),
    func: (
      <>
        <li>x</li>
      </>
    ),
  },
  {
    id: 1,
    name: "허그맘(Hugmom)",
    team: "팀 프로젝트",
    image: `${hugmom}`,
    des: "많은 산모들이 산후조리원을 이용하는 추세이며 산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용 쇼핑몰을 제작 ",
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
        <li>반응형 웹으로 제작</li>
        <li>
          자바스크립트를 활용한 기능 구현
          <ul>
            <li>
              저장되어 있는 로그인 정보로만 로그인 가능
              <br />
              (아이디 : hugmom123 / 비밀번호 : hugmom123)
            </li>
          </ul>
        </li>
      </>
    ),
  },

  {
    id: 2,
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
    id: 3,
    name: "MBTI TEST",
    team: "개인 프로젝트",
    image: `${mbti}`,
    des: "선택한 답변에 따라 MBTI 결과를 생성하는 알고리즘을 활용한 웹페이지 제작",
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
    id: 4,
    name: "포트폴리오",
    team: "개인 프로젝트",
    image: `${portfolio}`,
    des: "프론트엔드 개발자로서 프로필을 소개하고 이전 프로젝트들을 모아놓은 포트폴리오 페이지 제작",
    github: "https://github.com/y007in/y7_portfolio",
    url: "https://y7portfolio.netlify.app/",
    date: "2023.05.30 - 2023.06.30",
    skill: (
      <>
        <li>React</li>
        <li>SCSS</li>
      </>
    ),
    func: (
      <>
        <li>반응형 웹 페이지</li>
        <li>간단한 자기소개, 기술, 인적사항 및 프로젝트 모음</li>
      </>
    ),
  },
  {
    id: 5,
    name: "Netflix",
    team: "개인 프로젝트",
    image: `${netflix}`,
    des: "React와 TypeScript를 활용하여 프로젝트를 진행하여 연습하고자 제작.",
    github: "https://y7netflix.netlify.app/",
    url: "https://github.com/y007in/netflix_typescript",
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
        <li>영화 API를 활용해 영화 데이터를 불러옴</li>
        <li>각 영화 클릭시 해당 영화 상세페이지로 이동</li>
      </>
    ),
  },
];

export const DesignData = {
  name: "졸업작품전시회 홍보물 제작",
  team: "팀 프로젝트",
  // image: `${design} `,
  des: "졸업작품전시회를 홍보하기 위한 포스터, 현수막, 책자를 제작하였습니다.",
  url: "",
  date: "2021.10.18 - 2021.11.12",
  skill: (
    <>
      <li>Adobe Illustrator</li>
      <li>Adobe Photoshop</li>
    </>
  ),
};

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
