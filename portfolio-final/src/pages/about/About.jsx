import React from 'react';
import './about.css';
import Info from './Info';
import { attitude, hobby, picture, resume } from '../../data';
import ResumeItem from './ResumeItem';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { useState } from 'react';

const About = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <main className="section container">
        <h1 className="section__title">
          About <span>Me</span>
        </h1>

        <div className="separator"></div>

        <section className="about">
          <div className="section__subtitle subtitle__center">
            개인정보
          </div>

          <div className="about__container grid">
          <Swiper 
              className="about__me-pictures"
              modules={[ Pagination ]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              pagination={{ clickable: true }}
              >
              {picture.map(({ id, image, title }) => {
                return (
                  <SwiperSlide className='about__me-picture' key={id}>
                    <img src={image} alt="" className="about__me-photo" />
                    <h3 className="about__me-introduce">{title}</h3>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="about__info">
              <ul className="info__list grid">
                <Info />
              </ul>
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className="resume">
          <div className="section__subtitle subtitle__center">
            경험 & 학습
          </div>

          <div className="resume__container grid">
            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === 'experience') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>

            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === 'learn') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}  
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className="char">
          <div className="section__subtitle subtitle__center">
            취미 & 태도
          </div>

          <div className="char__container grid">
            <div className="char__tabs">
              <div className={
                toggleState === 1
                ? "char__button char__active"
                : "char__button"
              }
              onClick={() => toggleTab(1)}
              >
              취미
              </div>

              <div className={
                toggleState === 2
                ? "char__button char__active"
                : "char__button"
              }
              onClick={() => toggleTab(2)}
              >
              태도
              </div>
            </div>

            <div className="char__group">
              <div
                className={toggleState === 1
                  ? 'char__items char__items-active'
                  : 'char__items'
                }
              >
                {hobby.map((val, id) => {
                  return (
                    <Card
                    key={id}
                    title={val.title}
                      subtitle={val.subtitle}
                      description={val.description}
                    >
                    </Card>
                  )
                })}
              </div>

              <div
                className={toggleState === 2
                  ? 'char__items char__items-active'
                  : 'char__items'
                }
                >
                {attitude.map((val, id) => {
                  return (
                    <Card
                    key={id}
                    title={val.title}
                      subtitle={val.subtitle}
                      description={val.description}
                      >
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;