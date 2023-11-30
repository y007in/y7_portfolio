import {
  hugmom,
  todo,
  mbti,
  portfolio,
  netflix,
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
    github: "https://github.com/That-s-great/Hugmom",
    url: "https://hugmom-b6187.web.app/html/01-intro_logout.html",
    date: "2023.05.08 - 2023.06.30",
    skill: (
      <>
        <li>Html5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>firebase</li>
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
          프로젝트를 통해 <b>체계적인 협업 진행 방식을 습득</b>할 수 있는 좋은
          기회였습니다.
        </li>
        <li>
          프로젝트를 통해 <b>반응형 웹 디자인에 대한 적용시키는 경험</b>을 할 수
          있었습니다.
        </li>
        <li>
          원하는 기능들을 구현하며
          <b>JavaScript의 작동 방식에 대한 직접적인 경험과 이해</b>를 높일 수
          있었습니다.
        </li>
      </>
    ),
    result: (
      <>
        <p className="des_result">
          4명의 프론트엔드 개발자로 구성된 팀에서 두 달 동안 프로젝트를
          진행했습니다. 이 프로젝트를 통해 <b>체계적인 협업 진행 방식을 습득</b>
          할 수 있는 좋은 기회였습니다. 처음으로 PM 역할을 맡아 전체적인
          프로젝트 진행을 책임지고 계획했습니다. 팀 프로젝트를 진행하면서 여러
          명의 개발자와 협업하는 경험을 통해 프로젝트의 틀과 구조를 정하는 것이
          중요함을 깨달았습니다. 팀원 간의 원활한 소통을 통해 복잡성을
          최소화하고 깔끔한 결과물을 도출하는 방법에 대해 배울 수 있었습니다.
          <br />
          프로젝트를 통해
          <b>반응형 웹 디자인에 대한 적용시키는 경험</b>을 할 수 있었습니다.
          특히, 쇼핑몰의 핵심인 상품 배열이 다양한 화면 크기에 어떻게
          최적화되어야 하는지에 대한 고민과 이를 실현하는 CSS 개발 작업을
          진행하며 실질적인 경험을 쌓을 수 있었습니다. <br />
          원하는 기능들을 구현하며
          <b>JavaScript의 작동 방식에 대한 직접적인 경험과 이해</b>를 높일 수
          있었습니다.
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
        <li>netlify</li>
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
    result_summary: (
      <>
        <li>
          <b>React를 활용하여 Create, Read, Update, Delete 기능을 구현</b>
          하였습니다.
        </li>
        <li>
          <b>
            local storage를 활용하여 사용자의 할 일 데이터를 브라우저에 저장
          </b>
          하였습니다.
        </li>
        <li>
          상태관리에
          <b>useReducer를 활용해 복잡해 보이는 상태로직을 효과적으로 관리</b>
          하여 각각 액션에 대한 상태변화를 효율적으로 관리할 수 있었습니다.
        </li>
        <li>
          filter함수를 활용하여 검색창에 입력한 값과 일치하는 내용만을 불러오는
          기능을 구현
        </li>
      </>
    ),
    result: (
      <p className="des_result">
        React를 활용하여 Create, Read, Update, Delete 기능을 구현하였습니다.
        이를 통해 사용자가 할 일 목록을 효과적으로 관리할 수 있도록 했습니다.
        새로고침이나 브라우저가 닫히더라도 데이터가 계속 남아있기를 원해 local
        storage를 활용하여 사용자의 할 일 데이터를 브라우저에 저장하였습니다.
        상태관리에 useReducer를 활용해 복잡해 보이는 상태로직을 효과적으로
        관리하여 각각 액션에 대한 상태변화를 효율적으로 관리할 수 있었습니다.
        useMemo Hook을 사용하여 todo 배열이 변경될 때마다 완료되지 않은
        todo항목의 개수를 실시간으로 계산하여 출력함으로서 성능 최적화에
        기여하였습니다. filter함수를 활용하여 검색창에 입력한 값과 일치하는
        내용만을 불러오는 기능을 구현하여 사용자가 특정 내용dmf 빠르게 찾고
        일정관리 할 수 있도록 하였습니다.
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
        <li>styled-components</li>
        <li>netlify</li>
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
    result_summary: (
      <>
        <li>함수를 활용한 상태변화로 선택한 답변에 따라 답변 결과를 계산</li>
        <li>
          생성된 MBTI 결과값과 ResultData에 저장된 MBTI가 일치하는 내용을 불러와
          출력
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
    des: "프론트엔드 개발자로서 프로필 및 프로젝트들을 소개하기 위한 포트폴리오 페이지",
    github: "https://github.com/y007in/y7_portfolio",
    url: "https://y7portfolio.netlify.app/",
    date: "Last Updated. 2023.11.02",
    skill: (
      <>
        <li>React</li>
        <li>SCSS</li>
        <li>Redux</li>
      </>
    ),
    func: (
      <>
        <li>CSS Media Queries를 활용한 반응형 웹 페이지</li>
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
    result_summary: (
      <>
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
        이 프로젝트를 통해 <b>React의 다양한 훅과 기능들에 대한 깊게 이해</b>할
        수 있던 계기가 되었습니다. 중복 코드를 최소화하기 위한 노력과 고민을
        통해 코드를 더 깔끔하게 구성할 수 있는 능력을 키웠습니다. 또한, 컴포넌트
        간의 상태 변화를 편리하게 하기 위해 Redux를 적용시키게 되었습니다. 이를
        통해
        <b>Redux의 개념과 사용법을 익힐 수 있었습니다.</b> SCSS를 함께 활용하는
        방법을 배우면서
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
