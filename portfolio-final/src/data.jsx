import {
  FaBriefcase,
  FaCode,
  FaCss3Alt,
  FaGraduationCap,
} from 'react-icons/fa';
import { AiFillHtml5, AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsTools } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiExternalLink, FiFileText, FiSend } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';

import Work1 from './assets/Clone Website1.png';
import Work2 from './assets/Clone Website1.png';
import Work3 from './assets/Clone Website1.png';
import Work4 from './assets/Clone Website1.png';
import Work5 from './assets/Clone Website1.png';
import Work6 from './assets/Clone Website1.png';
import Work7 from './assets/Clone Website1.png';

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
    description: '학습, 열정, 질문, 철학',
  },
  {
    id: 8,
    title: '키워드 : ',
    description: '독서, 자전거라이딩, 콘텐츠 제작',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 6,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 7,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 8,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 9,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
  {
    id: 10,
    category: 'learn',
    icon: <FaGraduationCap />,
    year: '기간',
    title: '제목',
    desc: '활동설명',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '95',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '85',
  },
  {
    id: 3,
    title: 'JavaScript',
    percentage: '80',
  },
  {
    id: 4,
    title: 'TypeScript',
    percentage: '60',
  },
  {
    id: 5,
    title: 'React',
    percentage: '80',
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
    img: Work1,
    category: 'Vanila JS',
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
      'asdasdasdsda',
  },
  {
    id: 2,
    img: Work2,
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
      '',
  },
  {
    id: 3,
    img: Work3,
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
      '',
  },
  {
    id: 4,
    img: Work4,
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
      '',
  },
  {
    id: 5,
    img: Work5,
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
      '',
  },
  {
    id: 6,
    img: Work6,
    category: 'Vanila JS',
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
      '',
  },
  {
    id: 7,
    img: Work7,
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
      '',
  },
];

// Blog
export const post = [
  {
    id: 1,
    category: 'HTML',
    img: <AiFillHtml5 />,
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
    subtitle: '교양인문학, 일반철학, 리더십, 경영학, 심리학, 뇌과학, 신학, 자기계발',
    description : '',
    category : 'hobby'
  },
  {
    id: 2,
    title: '글쓰기 & 모임운영',
    subtitle: '생각정리, 강의 코칭, 독서모임 운영, 소모임 진행, 청년부 리더',
    description: '',
    category: 'hobby',
  },
  {
    id: 3,
    title: '개발',
    subtitle: '개인 블로그, 문장 수집 웹, 포트폴리오',
    description: '',
    category: 'hobby',
  },
];

// attitude
export const attitude = [
  {
    id: 1,
    title: '학습',
    subtitle : '일신우일신',
    description: '',
    category: 'attitude',
  },
  {
    id: 2,
    title: '질문',
    subtitle: '무지의 지',
    description: '',
    category: 'attitude',
  },
  {
    id: 3,
    title: '성장을 넘어 성숙',
    subtitle: '다양성의 조화',
    description: '',
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