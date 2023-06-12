import {
  FaBriefcase,
  FaCode,
  FaCss3Alt,
  FaGraduationCap,
  FaHtml5,
} from 'react-icons/fa';
import { AiFillHtml5, AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsTools } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiExternalLink, FiFileText, FiSend } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';

import Profile from './assets/소개.jpg';
import Reading from './assets/독서.jpg';
import Metting from './assets/모임.jpg';
import Question from './assets/질문.jpg';
import Learn from './assets/학습.jpg';
import Developer from './assets/개발자.jpg';

import Work_react1 from './assets/project/react/Clone Website1.png';
import Work_react2 from './assets/project/react/Clone Website2.png';
import Work_react3 from './assets/project/react/Clone Website3.png';
import Work_react4 from './assets/project/react/Clone Website4.png';
import Work_react5 from './assets/project/react/Clone Website5.png';
import Work_react6 from './assets/project/react/Clone Website6.png';
import Work_react7 from './assets/project/react/NotesApp.png';
import Work_react8 from './assets/project/react/SearchTools.png';
import Work_react9 from './assets/project/react/TicTacToeApp.png';
import Work_react10 from './assets/project/react/QuizApp.png';
import Work_react11 from './assets/project/react/WoodleApp.png';
import Work_react12 from './assets/project/react/CryptoPriceApp.png';

import Work_personal1 from './assets/project/personal/portfolio.png';

import Work_JS1 from './assets/project/javascript/DragTools.png';
import Work_JS2 from './assets/project/javascript/TypingGameApp.png';
import Work_JS3 from './assets/project/javascript/TetrisApp.png';
import Work_JS4 from './assets/project/javascript/MineSearchApp.png';
import Work_JS5 from './assets/project/javascript/WhackGospherApp.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import HTML1 from './assets/HTML1.jpg';
import CSS1 from './assets/CSS1.jpg';
import CSS2 from './assets/CSS2.jpg';
import CSS3 from './assets/CSS3.jpg';
import CSS4 from './assets/CSS4.jpg';
import JS1 from './assets/JS1.jpg';
import JS2 from './assets/JS2.jpg';
import JS3 from './assets/JS3.jpg';
import JS4 from './assets/JS4.jpg';
import JS5 from './assets/JS5.jpg';
import JS6 from './assets/JS6.jpg';
import TS1 from './assets/TS1.jpg';
import TS2 from './assets/TS2.jpg';
import TS3 from './assets/TS3.jpg';
import RJS1 from './assets/React1.jpg';
import RJS2 from './assets/React2.jpg';
import RJS3 from './assets/React3.jpg';
import RJS4 from './assets/React4.jpg';

import Logo_html from './assets/HTML-logo.png';
import Logo_css from './assets/CSS-logo.png';
import Logo_js from './assets/JavaScript-logo.png';
import Logo_ts from './assets/TypeScript-logo.png';
import Logo_react from './assets/React-logo.png';

// social links
export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <AiOutlineHome className='nav__icon' />,
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <BsFillPersonLinesFill className='nav__icon' />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Work',
    icon: <HiOutlineDocumentReport className='nav__icon' />,
    path: '/work',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <FiSend className='nav__icon' />,
    path: '/contact',
  },
];

// poersonal info
export const personalInfo = [
  {
    id: 1,
    title: '이름 : ',
    description: '오 영택',
  },
  {
    id: 2,
    title: '나이 : ',
    description: '32',
  },
  {
    id: 3,
    title: '학력 : ',
    description: '고졸검정고시',
  },
  {
    id: 4,
    title: '주소 : ',
    description: '서울 용산구 보광동',
  },
  {
    id: 5,
    title: '휴대폰 : ',
    description: '010-4135-9209',
  },
  {
    id: 6,
    title: '이메일 : ',
    description: 'young-taek@naver.com',
  },
  {
    id: 7,
    title: '키워드 : ',
    description: '학습, 열정, 질문, 철학, 독서, 리더십, 콘텐츠 제작',
  },
  {
    id: 8,
    title: '개발 : ',
    description: '프론트엔드',
  },
];

// about__me-pichture
export const picture = [
  {
    id: 1,
    image: Profile,
    title: '소개',
  },
  {
    id: 2,
    image: Reading,
    title: '독서',
  },
  {
    id: 3,
    image: Metting,
    title: '모임 & 리더십',
  },
  {
    id: 4,
    image: Question,
    title: '질문',
  },
  {
    id: 5,
    image: Learn,
    title: '학습',
  },
  {
    id: 6,
    image: Developer,
    title: '프론트엔드 개발자',
  },
];

// 활동 & 경험
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2015 - 2017',
    title: '사무보조 및 야간 경비',
    desc: '세광교회 사무보조 및 야간 경비',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - 2018',
    title: '빅데이터 작업',
    desc: '솔트룩스, 단기알바',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - 2022',
    title: '자전거 라이딩',
    desc: '자전거 라이딩 그랜드 슬램 달성 및 여행 기획',
  },
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2015 - present',
    title: '교회내 리더',
    desc: '행정 & 교육 디렉터 및 책임',
  },
  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021.10 - 2022.10',
    title: '청년 전도사',
    desc: '청빙 제안에 따른 활동 / 서향교회(현 보성교회)',
  },
  {
    id: 6,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '2008',
    title: '고등학교 중퇴',
    desc: '고등학교 1학년 중퇴',
  },
  {
    id: 7,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '2009.04',
    title: '검정고시',
    desc: '고졸검정고시 합격',
  },
  {
    id: 8,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '2012 - present',
    title: '독서 모임 참여 및 운영',
    desc: '독서모임 T-100 4년 운영',
  },
  {
    id: 9,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '2017 - presnet',
    title: '강의 모임 기획 및 진행',
    desc: '청강합시다 2회(17-18), 단무지(22-23)',
  },
  {
    id: 10,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '2022.10 - present',
    title: '개발자 공부',
    desc: '프론트엔드 개발자 / 독학사 CS 공부',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    img: Logo_html,
  },
  {
    id: 2,
    title: 'CSS',
    img: Logo_css,
  },
  {
    id: 3,
    title: 'JavaScript',
    img: Logo_js,
  },
  {
    id: 4,
    title: 'TypeScript',
    img: Logo_ts,
  },
  {
    id: 5,
    title: 'React',
    img: Logo_react,
  },
];

export const themeMode = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

// project list
export const projects = [
  {
    id: 1,
    img: Work_react1,
    category: 'React',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 포트폴리오 사이트',
  },
  {
    id: 2,
    img: Work_react2,
    category: 'React',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 포트폴리오 사이트',
  },
  {
    id: 3,
    img: Work_react3,
    category: 'React',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 포트폴리오 사이트',
  },
  {
    id: 4,
    img: Work_react4,
    category: 'React',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 포트폴리오 사이트',
  },
  {
    id: 5,
    img: Work_react5,
    category: 'React',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 포트폴리오 사이트',
  },
  {
    id: 6,
    img: Work_react6,
    category: 'React',
    title: 'Shopping Cart Ecommerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 쇼핑몰 계산 사이트',
  },
  {
    id: 7,
    img: Work_react7,
    category: 'React',
    title: 'Notes App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 메모 추가 앱',
  },
  {
    id: 8,
    img: Work_react8,
    category: 'React',
    title: 'Search Bar',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 검색 구현 앱',
  },
  {
    id: 9,
    img: Work_react9,
    category: 'React',
    title: 'TicTacToe',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 틱택토 게임',
  },
  {
    id: 10,
    img: Work_react10,
    category: 'React',
    title: 'Quiz App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 퀴즈 앱',
  },
  {
    id: 11,
    img: Work_react11,
    category: 'React',
    title: 'Woodle App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 단어 맞추기 게임',
  },
  {
    id: 12,
    img: Work_react12,
    category: 'React',
    title: 'Crypto Price App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 코인 가격 확인앱',
  },
  {
    id: 13,
    img: Work_personal1,
    category: 'Personal',
    title: 'Portfolio Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '개인 포트폴리오 웹사이트',
  },
  {
    id: 14,
    img: Work_JS1,
    category: 'Vanila JS',
    title: 'DragTools',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - Drag 기능',
  },
  {
    id: 15,
    img: Work_JS2,
    category: 'Vanila JS',
    title: 'Typing Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 타이핑 게임',
  },
  {
    id: 16,
    img: Work_JS3,
    category: 'Vanila JS',
    title: 'Tetris Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 테트리스 게임',
  },
  {
    id: 17,
    img: Work_JS4,
    category: 'Vanila JS',
    title: 'Mine Search Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 지뢰찾기 게임',
  },  
  {
    id: 18,
    img: Work_JS5,
    category: 'Vanila JS',
    title: 'Whack Gosper Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Coding',
      },
      {
        icon: <BsTools />,
        title: 'Tools : ',
        desc: 'React',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Learned : ',
        desc: '',
      },
    ],
    description:
      '클론코딩 - 두더지잡기 게임',
  },
];

// Blog
export const post = [
  {
    id: 1,
    category: 'HTML',
    img: <FaHtml5 />,
  },
  {
    id: 2,
    category: 'CSS',
    img: <FaCss3Alt />,
  },
  {
    id: 3,
    category: 'JavaScript',
    img: <SiJavascript />,
  },
];

// hobby
export const hobby = [
  {
    id: 1,
    title: '독서',
    subtitle: '교양인문학 / 일반철학 / 리더십 / 경영학 / 심리학 / 뇌과학 / 신학 / 자기계발',
    description : 
      '흥미와 관심사를 따라 넓은 독서를 하면서 통합적인 사고를 맛볼 수 있었습니다. 지식이 쌓이는 것을 체감하면서 자신감이 차오르고 내면이 단단해지는 삶을 살아가고 있습니다.',
    category : 'hobby'
  },
  {
    id: 2,
    title: '글쓰기 & 모임운영',
    subtitle: '생각정리, 강의 코칭, 독서모임 운영, 소모임 진행, 청년부 리더',
    description: '많은 독서를 통해 얻은 자신감과 지식을 공유하는 시간을 만들고 있습니다. 계속해서 독서모임을 만들고 강의를 진행해왔습니다.',
    category: 'hobby',
  },
  {
    id: 3,
    title: '개발',
    subtitle: '개인 블로그, 문장 수집 웹, 포트폴리오',
    description: '개인적으로 만들고 싶은 작업물들이 떠오르고 있습니다. 천천히 조급하려고 합니다.',
    category: 'hobby',
  },
];

// attitude
export const attitude = [
  {
    id: 1,
    title: '학습',
    subtitle : '일신우일신',
    description: '학습한다는 것은 매일 성장하겠다는 의지입니다. 호기심을 따라, 필요에 따라 자발적으로 하는 수고를 의미합니다. 해야 하는 수동성이 아니라 어떤 목적에서 뛰어나지기 위한 능동적인 공부입니다.',
    category: 'attitude',
  },
  {
    id: 2,
    title: '질문',
    subtitle: '무지의 지',
    description: '어떤 질문을 하느냐에 따라 얻는 답은 달라집니다. "왜?"라는 의문과 "어떻게 하면 더 좋을까?"라는 의도적인 질문을 통해 모름을 채워나가고 있습니다. 또한 질문을 통해 내가 모르는 것을 인지하고, 빠르게 성장하기 위한 도구로 삼고 있습니다.',
    category: 'attitude',
  },
  {
    id: 3,
    title: '성장을 넘어 성숙',
    subtitle: '다양성의 조화',
    description: '다름 속에서 같음을 발견하고, 함께 성장을 얘기하며 살아가고 있습니다. 다양함은 다루기 어렵습니다. 인간관계가 어려운 이유가 그것이라 생각합니다. 하지만 각 사람마다 갖고 있는 강점과 재능을 발견한다면, 더 탁월하고 자연스러워진다는 사실을 알고 있습니다.',
    category: 'attitude',
  },
];

// skills
export const HTML = [
  {
    id: 1,
    image: HTML1,
    title: 'HTML+CSS+자바스크립트', 
  },
];

export const CSS = [
  {
    id: 1,
    image: CSS1,
    title: 'HTML+CSS+자바스크립트', 
  },
  {
    id: 2,
    image: CSS2,
    title: '반응형 웹 페이지 만들기', 
  },
  {
    id: 3,
    image: CSS3,
    title: '인터랙티브 웹 페이지 만들기', 
  },
  {
    id: 4,
    image: CSS4,
    title: '리액트 모던 웹 개발',
  },
];

export const JS = [
  {
    id: 1,
    image: JS1,
    title: 'HTML+CSS+자바스크립트', 
  },
  {
    id: 2,
    image: JS2,
    title: '자바스크립트 입문', 
  },
  {
    id: 3,
    image: JS3,
    title: '초보자를 위한 JavaScript 200제', 
  },
  {
    id: 4,
    image: JS4,
    title: '모던 자바스크립트',
  },
  {
    id: 5,
    image: JS5,
    title: '자바스크립트 코딩의 기술', 
  },
  {
    id: 6,
    image: JS6,
    title: '코어 자바스크립트', 
  },
];

export const TS = [
  {
    id: 1,
    image: TS1,
    title: '러닝 타입스크립트',
  },
  {
    id: 2,
    image: TS2,
    title: '타입스크립트 프로그래밍',
  },
  {
    id: 3,
    image: TS3,
    title: '리액트 모던 웹 개발',
  },
];

export const RJS = [
  {
    id: 1,
    image: RJS1,
    title: '리액트를 다루는 기술',
  },
  {
    id: 2,
    image: RJS2,
    title: '클론코딩 영화평점 웹 서비스',
  },
  {
    id: 3,
    image: RJS3,
    title: '처음 만난 리액트',
  },
  {
    id: 4,
    image: RJS4,
    title: '리액트 모던 웹 개발',
  },
];