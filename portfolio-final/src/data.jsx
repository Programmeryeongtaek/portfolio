import {
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

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
    percentage: '50',
    content :'asdasd',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '50',
    content :'asdasd',
  },
  {
    id: 3,
    title: 'JavaScript',
    percentage: '50',
    content :'asdasd',
  },
  {
    id: 4,
    title: 'TypeScript',
    percentage: '50',
    standard: '',
    content :'asdasd',
  },
  {
    id: 5,
    title: 'React',
    percentage: '50',
    content :'asdasd',
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