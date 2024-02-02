import HugmomStructure from "components/HugmomStructure.js";
import {
  hugmom,
  todo,
  mbti,
  portfolio,
  postme,
  html5,
  CSS3,
  js,
  react,
  redux,
  typescript,
  photoshop,
  illustrator,
  figma,
} from "./img/index.js";
import PortfolioFunc from "components/PortfolioFunc.js";

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
    des: (
      <p>
        <b>허그맘(Hugmom)</b>은 산후조리원에 있는 산모들을 위한 전용
        쇼핑몰입니다.
        <br />
        산후조리원을 이용하는 산모들이 점차 늘어나는 추세(산후조리원 이용률 :
        3년간 75.1% → 81.2% 증가 (2018년 기준) 출처:보건복지부 보고서 )이며
        산모들이 신선한 식품과 좋은 제품들을 찾는다고 하여 산후조리원에 있는
        산모들 전용 쇼핑몰 제작하게 되었습니다.
      </p>
    ),
    project_schedule:
      "https://docs.google.com/spreadsheets/d/1MtjmPCrxJHxQhnfbZxrM255c43mUKCU-Ay_SBuumT1g/edit#gid=163560579",
    project_ui: <HugmomStructure />,
    github: "https://github.com/That-s-great/Hugmom",
    url: "https://hugmom-b6187.web.app/html/01-intro_logout.html",
    date: "2023.05.08 - 2023.06.30",
    skill: (
      <>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Firebase</li>
      </>
    ),
    func: (
      <>
        <li>메인 페이지와 shop 페이지의 상품들의 나열</li>
        <li>각 상품 페이지들 상세 페이지의 상품 소개 및 가격 출력</li>
        <li>Live 페이지</li>
        <li>회원가입 및 마이페이지의 유효성 검사</li>
      </>
    ),
    result_summary: (
      <>
        <li>
          허그맘(Hugmom)은 산후조리원에 있는 산모들을 위한 전용 쇼핑몰입니다.
        </li>
        <li>
          프로젝트를 통해 <b>체계적인 협업 진행 방식을 습득</b>할 수 있는 좋은
          기회였습니다.
        </li>
        <li>
          프로젝트를 통해 <b>반응형 웹 디자인에 대한 적용시키는 경험</b>을 할 수
          있었습니다.
        </li>
        <li>
          원하는 기능들을 구현하며
          <b> JavaScript의 작동 방식에 대한 직접적인 경험과 이해</b>를 높일 수
          있었습니다.
        </li>
      </>
    ),
    result: (
      <>
        <p className="des_result">
          4명의 프론트엔드 개발자로 구성된 팀에서 두 달 동안 프로젝트를
          진행했습니다. 이 프로젝트를 통해
          <b> 체계적인 협업 진행 방식을 습득</b>
          할 수 있는 좋은 기회였습니다. 처음으로 PM 역할을 맡아 전체적인
          프로젝트 진행을 책임지고 계획하게 되면서 팀 프로젝트를 진행하는데에
          여러 명의 개발자와 협업하는 경험을 통해 프로젝트의 틀과 구조를 정하는
          것이 중요함을 깨달았습니다. 팀원 간의 원활한 소통을 통해 복잡성을
          최소화하고 깔끔한 결과물을 도출하는 방법에 대해 배울 수 있었습니다.
          <br />
          프로젝트를 통해
          <b> 반응형 웹 디자인에 대한 적용시키는 경험</b>을 할 수 있었습니다.
          특히, 쇼핑몰의 핵심인 상품 배열이 다양한 화면 크기에 어떻게
          최적화되어야 하는지에 대한 고민과 이를 실현하는 CSS 개발 작업을
          진행하며 실질적인 경험을 쌓을 수 있었습니다. <br />
          원하는 기능들을 구현하며
          <b> JavaScript의 작동 방식에 대한 직접적인 경험과 이해</b>를 높일 수
          있었습니다. 하지만 너무 많은 중복코드로 인해 코드가 깔끔하지 못한 것에
          대한 수정이 필요하겠다는 생각이 들었습니다. 다음에는 중복코드를 줄여
          좀 더 정돈된 코드를 작성할 수 있도록 할 예정입니다.
        </p>
      </>
    ),
  },
  {
    id: 1,
    name: "Todo List",
    team: "개인 프로젝트",
    image: `${todo}`,
    des: (
      <p>
        React를 활용하여 개발한 Todo List입니다.
        <br />
        Todo 항목을 추가, 수정 및 삭제가 가능하며 항목검색 기능을 구현한
        웹사이트 입니다.
      </p>
    ),
    github: "https://github.com/y007in/my_todo",
    url: "https://y7mytodolist.netlify.app/",
    date: "2023.07.11 - 2023.07.15",
    skill: (
      <>
        <li>React</li>
        <li>Local Storage</li>
        <li>Netlify</li>
      </>
    ),
    func: (
      <>
        <li>todo 항목 추가, 삭제, 수정</li>
        <li>todo 리스트에서 원하는 항목 검색</li>
        <li>
          완료된 todo 항목과 완료되지 않은 todo 항목의 개수를 실시간으로 출력
        </li>
      </>
    ),
    dev_func: (
      <ul>
        <li>
          React를 활용하여 Create, Read, Update, Delete 기능을 구현 하였습니다.
        </li>
        <li>
          Local Storage를 활용하여 사용자의 할 일 데이터를 브라우저에 저장
          하였습니다.
        </li>
        <li>
          상태관리에 useReducer를 활용해 복잡해 보이는 상태로직을 관리 하여 각각
          액션에 대한 상태변화를 효율적으로 관리할 수 있었습니다.
        </li>
        <li>
          filter함수를 활용한 검색 기능으로 검색 창에 입력한 값과 일치하는
          내용만을 불러오는 기능을 구현
        </li>
      </ul>
    ),
    result_summary: (
      <>
        <li>할일을 관리하기 위한 React 기반의 Todo List 페이지입니다. </li>
        <li>
          <b>상태관리와 local storage</b>를 다뤄보면서 React 기반의 개발에 대한
          실전적인 경험을 쌓을 수 있었습니다.
        </li>
        <li>
          사용자가 편리하고 직관적으로 이해하고 효과적으로 활용할 수 있도록
          고민해 <b>사용자의 관점에서 바라보며 개발을 진행</b>하였습니다.
        </li>
      </>
    ),
    result: (
      <p className="des_result">
        투두리스트를 활용한 프로젝트를 통해 React에서의 CRUD 기능을 익히는
        과정에서 여러 가지 편리한 기능들을 추가하여 사용자 경험을 향상 하고자
        하였습니다.
        <b>
          간단한 기능이더라도 사용자가 직관적으로 이해하고 효과적으로 활용할 수
          있도록 고민하여 구현
        </b>
        했습니다. 프로젝트에서는 투두리스트의 주된 기능인
        <b>Create, Read, Update, Delete를 구현</b>하여 사용자가 편리하게 할 일을
        관리할 수 있도록 하였습니다. 상태로직을 효과적으로 관리하기 위해 React의
        <b>
          useReducer훅을 활용하여 상태 변화를 효율적으로 관리할 수 있었습니다.
        </b>
        <br />
        뿐만 아니라, 투두리스트를 사용하는 사용자들을 고려하여 새로고침이나
        브라우저가 닫히더라도
        <b> 데이터가 유지되도록 Local Storage를 활용하여 데이터를 관리</b>
        했습니다. 이를 통해 사용자들이 지속적으로 투두리스트를 활용할 수 있게끔
        신경 쓰는 경험을 쌓았습니다. 프로젝트를 통해 투두리스트를 개발하는
        과정에서 상태 관리와 로컬 스토리지를 다뤄보면서 React 기반의 프론트엔드
        개발에 대한 실전적인 경험을 쌓을 수 있었습니다.
      </p>
    ),
  },

  {
    id: 2,
    name: "MBTI TEST",
    team: "개인 프로젝트",
    image: `${mbti}`,
    des: (
      <p>
        선택한 답변에 따라 MBTI 결과를 생성하는 알고리즘을 활용한 웹페이지
        제작하였습니다. <br />
        MZ 세대에게 빼놓을 수 없는 소통 방식으로써 자기 자신을 표현할 수 있는
        MBTI의 유행에 따라 MBTI 결과를 생성하는 알고리즘을 활용한 MBTI 검사
        웹페이지 제작하였습니다.
      </p>
    ),
    github: "https://github.com/y007in/mbti",
    url: "https://y7mbti.netlify.app/",
    date: "2023.05.30 - 2023.06.30",
    skill: (
      <>
        <li>React</li>
        <li>Styled-components</li>
        <li>Netlify</li>
      </>
    ),
    func: (
      <>
        <li>
          선택지 하나 선택 시 다음 질문으로 넘어가며 마지막 질문지에서 선택지
          선택 후에 결과페이지로 이동
        </li>
        <li>선택된 결과에 따라 결과값 필터링</li>
      </>
    ),
    dev_func: (
      <ul>
        <li>함수를 활용한 상태변화로 선택한 답변에 따라 답변 결과를 계산</li>
        <li>
          createSearchParams() 함수를 활용하여 해당 MBTI 결과에 기반한 URL을
          생성
        </li>
        <li>
          생성된 MBTI 결과값과 ResultData에 저장된 MBTI가 일치하는 내용을 불러와
          출력
        </li>
      </ul>
    ),
    result_summary: (
      <>
        <li>MBTI를 검사해볼 수 있는 웹페이지 입니다.</li>
        <li>
          다양한 자바스크립트 문법을 적용시켜 볼 수 있었던 프로젝트였습니다.
        </li>
        <li>
          답변들을 선택하여 생성된 MBTI 결과값과 ResultData에 저장된 MBTI가
          일치하는 내용을 불러와 해당 페이지를 출력합니다.
        </li>
      </>
    ),
    result: (
      <p className="des_result">
        알고리즘과 상황에 맞는 다양한 자바스크립트 문법을 적용시켜 볼 수 있었던
        프로젝트였습니다.
      </p>
    ),
  },
  {
    id: 3,
    name: "포트폴리오",
    team: "개인 프로젝트",
    image: `${portfolio}`,
    des: "프론트엔드 개발자로서 프로필 및 프로젝트들을 소개하기 위한 포트폴리오 페이지입니다.",
    github: "https://github.com/y007in/y7_portfolio",
    url: "https://y7portfolio.netlify.app/",
    date: "Last Updated. 2023.12.02",
    skill: (
      <>
        <li>React</li>
        <li>SCSS</li>
        <li>Redux</li>
        <li>Netlify</li>
      </>
    ),
    func: <li>간단한 자기소개, 기술 및 프로젝트 모음</li>,
    dev_func: <PortfolioFunc />,
    result_summary: (
      <>
        <li>개인 프로필과 프로젝트를 소개하기 위한 포트폴리오 페이지입니다.</li>
        <li>
          <b>React의 다양한 훅과 기능들에 대한 깊게 이해</b>할 수 있던 계기가
          되었습니다.
        </li>
        <li>
          컴포넌트 간의 상태 변화를 편리하게 하기 위해
          <b>Redux를 적용시키며 Redux의 개념과 사용법을 익힐 수 있었습니다.</b>
        </li>
        <li>
          SCSS를 함께 활용하는 방법을 배우면서
          <b>
            코드의 가독성과 재사용성을 높일 수 있는 SCSS의 강점을 느낄 수
            있었습니다.
          </b>
        </li>
      </>
    ),
    result: (
      <p className="des_result">
        이 프로젝트를 통해 <b> React의 다양한 훅과 기능들에 대한 깊게 이해</b>할
        수 있던 계기가 되었습니다. 중복 코드를 최소화하기 위한 노력과 고민을
        통해 코드를 더 깔끔하게 구성할 수 있는 능력을 키웠습니다. <br />
        또한, 컴포넌트 간의 상태 변화를 편리하게 하기 위해 Redux를 적용시키게
        되었습니다. 이를 통해
        <b> Redux의 개념과 사용법을 익힐 수 있었습니다.</b> 편리하게 상태관리가
        가능했으며 또한 상태값을 재사용 할 수 있어 굉장히 효율적인 개발을 할 수
        있었습니다. <br />
        SCSS를 함께 활용하는 방법을 배우면서
        <b>
          코드의 가독성과 재사용성을 높일 수 있는 SCSS의 강점을 느낄 수
          있었습니다.
        </b>
        SCSS를 통해 좀 더 깔끔하고 효율적인 코드를 작성하는 경험은 앞으로의
        프로젝트에서 더 다양한 기능들을 공부하고 적용해보고자 합니다.
      </p>
    ),
  },
  {
    id: 4,
    name: "Post Me",
    team: "팀 프로젝트(기획, 디자인, 개발, 마케팅)",
    image: `${postme}`,
    des: (
      <p>
        하루의 시작, 나를 위한 행복의 틈을 만드는 '네이버 웨일'의 확장앱을
        제작하였습니다.
        <br />
        네이버 웨일 대학생 서포터즈 “웨일대학”에서 다양한 직군들과 팀별로 진행한
        확장앱 프로젝트입니다.
      </p>
    ),
    project_introduction:
      "https://drive.google.com/file/d/1ARCrkId512yYxQbNYn08t3daX0yBnuUw/view?usp=sharing",
    github: "https://github.com/y007in/POSTME",
    url: "https://whale4upostme.netlify.app/",
    date: "2022.08.19 - 2022.09.16",
    skill: (
      <>
        <li>React</li>
        <li>Local Storage</li>
        <li>Netlify</li>
      </>
    ),
    func: (
      <>
        <li>매일 하루에 하나씩 질문에 대한 답변 작성 가능</li>
        <li>
          10개의 편지를 기록하면 마이페이지에 우체통 생성되어 작성했었던 답변들
          확인 가능
        </li>
      </>
    ),
    dev_func: (
      <ul>
        <li>React를 활용하여 제작한 확장앱입니다.</li>
        <li>
          json 파일에 저장되어 있는 질문리스트들이 local storage에 저장되어 있는
          질문을 불러오며 사용자가 작성한 답을 저장하여 불러옵니다.
        </li>
      </ul>
    ),
    result_summary: (
      <>
        <li>자신에 대해 알아가고 기록할 수 있는 Post me 확장앱입니다. </li>
        <li>
          다양한 직무의 사람들과 협업하며 직무과의 흐름을 알 수 있었던
          프로젝트였습니다.
        </li>
      </>
    ),
    result: (
      <p className="des_result">
        네이버 웨일 서포터즈 ‘웨일대학’은 네이버 웨일 브라우저의 인지도를 높이고
        실제 사용까지 이어질 수 있도록 하는 활동이었습니다. 프로젝트를 통해
        처음으로
        <b>다양한 직무의 사람들과 협업을 할 수 있었습니다.</b> 프로젝트가
        완성되는 과정에서 각 분야가 어떤 부분에 주의를 기울이고 필요로 하는지에
        대한 인사이트를 얻을 수 있었습니다. 다양한 직무의 사람들과 협업하면서,
        기획과 UI 디자인에 대해 자세히 알지 못하는 저에게는 높은 퀄리티의
        결과물을 도출해낼 수 있었습니다. 그러나 항상 저만의 스타일로
        작업해왔기에 다른 팀원들이 원하는 기술을 구현하기 어려운 부분도
        있었습니다. 이러한 과정은 어렵지만 협업에서 나아가
        <b>문제에 대한 해결책을 찾아 나가는 용기를 길러주는 시간이었습니다.</b>
        당시에는 완벽하게 완성되지 않았지만, 추후에 기능을 추가하고 보다 다듬어
        확장앱으로서의 가치를 높여 등록할 계획입니다. 이러한 경험을 통해
        지속적인 성장과 더 나은 결과물을 만들어내기 위해 노력하고 있습니다.
        <br />
        또한 네이버 프론트엔드 개발 실무진분들에게 피드백을 들으며 수정해야할
        것과 주의해야할 사항들을 배우고 접할 수 있어 저의 개발 공부 과정에서 큰
        도움과 개발에 대한 생각이 새로 확립되는 터닝포인트가 되었습니다.
      </p>
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
      content: "국립안동대학교 소프트웨어공학과(멀티미디어공학과) 졸업 예정",
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
