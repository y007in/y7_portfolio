import hugmom from "./img/hugmom.JPG";
import todo from "./img/todo.JPG";
import diary from "./img/diary.JPG";
import mbti from "./img/mbti.JPG";

import html5 from "./img/html5.png";
import CSS3 from "./img/css-3.png";
import js from "./img/js.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import photoshop from "./img/photoshop.png";
import illustrator from "./img/illustrator.png";
import figma from "./img/figma.png";

export const intros = [
  {
    hashtag: "# OO하는",
    hashtagDetail: "ff",
  },
  {
    hashtag: "# OO적인",
    hashtagDetail: "cc",
  },
  {
    hashtag: "# 사용자를 위한",
    hashtagDetail: "dd",
  },
];

export const ProjectData = [
  {
    id: 0,
    name: "허그맘(Hugmom)",
    team: "팀 프로젝트",
    image: `${hugmom}`,
    des: "많은 산모들이 산후조리원을 이용하는 추세이며 산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는 산모들 전용 쇼핑몰인 허그맘을 제작",
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
        <li>자바스크립트를 활용한 기능 구현</li>
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
    skill: "Adobe Illustrator",
    icon: `${illustrator}`,
    des: (
      <>
        <li>
          펜툴 및 다양한 기타도구들을 이용해 디자인 요소를 제작할 수 있습니다.
        </li>
        <li>다양한 아이콘들과 포스터, 팜플렛 등을 제작한 경험이 있습니다.</li>
      </>
    ),
  },
  {
    id: 6,
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
    id: 7,
    skill: "Figma",
    icon: `${figma}`,
    des: (
      <>
        <li>데스크탑, 모바일 UI/UX 시안을 작업할 수 있습니다.</li>
      </>
    ),
  },
];
