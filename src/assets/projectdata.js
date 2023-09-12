import hugmom from "./img/hugmom.JPG";
import todo from "./img/todo.JPG";
import diary from "./img/diary.JPG";
import mbti from "./img/mbti.JPG";
import portfolo from "./img/portfolio.JPG";
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

export const intros = [
  {
    hashtag: "#계획없이는 못사는",
    hashtagDetail: "ff",
  },
  {
    hashtag: "#한번 시작하면 끝을 보는",
    hashtagDetail: "cc",
  },
  {
    hashtag: "#사용자를 위한",
    hashtagDetail: "dd",
  },
];

export const ProjectData = [
  {
    id: 0,
    name: "허그맘(Hugmom)",
    team: "팀 프로젝트",
    image: `${hugmom}`,
    des: "많은 산모들이 산후조리원을 이용하는 추세이며 산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용 쇼핑몰을 제작하게되었습니다. 산후조리원에 있는 산모들 전용몰과 산후조리원에서 나온 후에도 계속해서 사용하고자 하는 산모들 전용몰을 따로 만들어 산후조리원을 졸업하더라도 좋은 물건을 사용할 수 있고 공동구매를 통해서 좀 더 저렴한 값에 사용할 수 있도록 구성하였습니다.  ",
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
        <li>
          반응형 웹으로 제작
          <ul>
            <li>네비게이션바와 상품 배열, 상품선택 형식 다르게 설정</li>
          </ul>
        </li>
        <li>
          자바스크립트를 활용한 기능 구현
          <ul>
            <li>
              저장되어 있는 로그인 정보로만 로그인 가능(아이디 : hugmom123 /
              비밀번호 : hugmom123)
            </li>
            <li>
              각 상품 상세 페이지 상품선택옵션 value값에 가격을 지정해두어
              수량에 따라 가격 계산되어 출력
            </li>
            <li>
              산후조리원 졸업 회원몰 - 공동구매 상세페이지 원하는 상품
              공동구매시작하기 버튼으로 공동 구매자들을 모집해 완료가 되면
              완료되었다는 알림창 띄우기
            </li>
            <li> LIVE에서 채팅남길 수 있는 공간 제작</li>
          </ul>
        </li>
      </>
    ),
  },
  {
    id: 1,
    name: "Todo List",
    team: "개인 프로젝트",
    image: `${todo}`,
    des: "React를 활용하여 Todo List 제작하였고 데이터들을 LocalStorage에 저장될 수 있도록 함",
    github: "https://github.com/y007in/my_todo",
    url: "https://y7mytodolist.netlify.app/",
    date: "2023.07.11 - 2023.07.15",
    skill: (
      <>
        <li>React</li>
        <li>Local Storage</li>
      </>
    ),
    func: "산후조리원코드로 임산부들만 회원가입 가능",
  },
  {
    id: 2,
    name: "MyDiary",
    team: "개인 프로젝트",
    image: `${diary}`,
    des: "React를 활용한 Diary 제작",
    github: "https://github.com/y007in/my_diary",
    url: "https://y7mydiary.netlify.app/",
    date: "2023.07.12 - 2023.07.14",
    skill: (
      <>
        <li>React</li>
        <li>Local Storage</li>
      </>
    ),
    func: "산후조리원코드로 임산부들만 회원가입 가능",
  },
  {
    id: 3,
    name: "MBTI TEST",
    team: "개인 프로젝트",
    image: `${mbti}`,
    des: "많은 산모들이 산후조리원을 이용하는 추세이며 산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용 쇼핑몰인 허그맘을 제작",
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
        <li>산후조리원코드로 임산부들만 회원가입 가능합니다.</li>
        <li>산후조리원코드로 임산부들만 회원가입 가능합니다.</li>
        <li>산후조리원코드로 임산부들만 회원가입 가능합니다.,</li>
      </>
    ),
  },
  {
    id: 4,
    name: "포트폴리오",
    team: "개인 프로젝트",
    image: `${portfolo}`,
    des: "프론트엔드 개발자로써의 장유진을 소개하고 그동안 진행했던 프로젝트들을 모아볼 수 있도록 정리하기 위해서 제작하였습니다. ",
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
        <li>간단한 자기소개, 기술, 인적사항 및 프로젝트 모음</li>
      </>
    ),
  },
  {
    id: 5,
    name: "Netflix",
    team: "개인 프로젝트",
    image: `${netflix}`,
    des: "React와 TypeScript를 활용하여 프로젝트를 진행하여 연습해보고 싶어 제작하게 되었습니다.",
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
