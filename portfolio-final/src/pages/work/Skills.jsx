import React, { useState } from 'react';
import { HTML, CSS, JS, TS, RJS, skills } from '../../data';
import 'react-circular-progressbar/dist/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const Skills = () => {
  const [toggleState, setToggleState] = useState(4);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className='skills__ability grid'>
        {skills.map(({ img, title }, index) => {
          return (
            <div 
              key={index} 
              className={toggleState === {index} 
                ? 'skills__ability-box skills__active' 
                : 'skills__ability-box'}
              onClick={() => toggleTab(index)}
            >
              <img src={img} alt="" className='skills__logo'/>
              <span className="skills__title">
                {title}
              </span>
            </div>
          )
        })}
      </div>
        
      <div className=
        {toggleState === 0 ? "skills__content-active" : "skills__content"}>
        <div className='skills__table'>
          <div className="skills__know-title">
            <div>HTML 역사</div>
            <div>HTML 정의</div>
            <div>HTML 역할</div>
            <div>HTML 속성</div>
            <div>meta 태그</div>
          </div>
        </div>
        <Swiper 
          className='skills__study'
          modules={[ Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {HTML.map(({ id, image, title }) => {
            return (
              <SwiperSlide className='skills__card' key={id}>
                <img src={image} alt="" className="skills__img" />
                <h4 className="skills__book">{title}</h4>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className=
        {toggleState === 1 ? "skills__content-active" : "skills__content"}>
        <div className='skills__table'>
          <ul className="skills__know-title">
            <li>CSS 역사</li>
            <li>CSS 정의</li>
            <li>CSS 역할</li>
            <li>프레임워크</li>
            <li>CSS 속성</li>
            <li>flex-box</li>
            <li>grid</li>
          </ul>
        </div>
        <Swiper 
          className='skills__study'
          modules={[ Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {CSS.map(({ id, image, title }) => {
            return (
              <SwiperSlide className='skills__card' key={id}>
                <img src={image} alt="" className="skills__img" />
                <h4 className="skills__book">{title}</h4>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className=
        {toggleState === 2 ? "skills__content-active" : "skills__content"}>
        <div className='skills__table'>
          <ul className="skills__know-title">
            <li>JS 역사</li>
            <li>JS 정의</li>
            <li>JS 역할</li>
            <li>var, let, const</li>
            <li>연산자</li>
            <li>반복문</li>
            <li>고차함수</li>
            <li>비동기</li>
            <li>클로저</li>
          </ul>
        </div>
        <Swiper 
          className='skills__study'
          modules={[ Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {JS.map(({ id, image, title }) => {
            return (
              <SwiperSlide className='skills__card' key={id}>
                <img src={image} alt="" className="skills__img" />
                <h4 className="skills__book">{title}</h4>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className=
        {toggleState === 3 ? "skills__content-active" : "skills__content"}>
        <div className='skills__table'>
          <ul className="skills__know-title">
            <li>TS 역사</li>
            <li>TS 정의</li>
            <li>TS 역할</li>
            <li>TS 특징</li>
            <li>듀플</li>
            <li>별칭</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Swiper 
          className='skills__study'
          modules={[ Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {TS.map(({ id, image, title }) => {
            return (
              <SwiperSlide className='skills__card' key={id}>
                <img src={image} alt="" className="skills__img" />
                <h4 className="skills__book">{title}</h4>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className=
        {toggleState === 4 ? "skills__content-active" : "skills__content"}>
        <div className='skills__table'>
          <ul className="skills__know-title">
            <li>React 역사</li>
            <li>React 정의</li>
            <li>React 역할</li>
            <li>React 특징</li>
            <li>프레임워크</li>
            <li>라이브러리</li>
            <li>JSX</li>
            <li>컴포넌트</li>
            <li>상태관리</li>
          </ul>
        </div>
        <Swiper 
          className='skills__study'
          modules={[ Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {RJS.map(({ id, image, title }) => {
            return (
              <SwiperSlide className='skills__card' key={id}>
                <img src={image} alt="" className="skills__img" />
                <h4 className="skills__book">{title}</h4>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Skills