import React from 'react';
import developer from '../assets/개발자2.jpg';
import leadership from '../assets/모임.jpg';
import reading from '../assets/독서.jpg';

export default function About() {
  return (
    <section className='section'>
      <div id='about' className='section__container'>
        <h1>소개</h1>
        <p>학습하는 청년, 개발자에 입문하다.</p>
        <div className='about__me'>
          <div className='about__me-hobby'>
            <div className='about__me__icon'>
              <img src={reading} alt="독서" />
            </div>
            <h2 className='about__me__title'>독서</h2>
            <div className='about__me__description'>교양인문학, 자기계발, 리더십, 심리학, 동양철학, 뇌과학, 경제경영, 신학</div>
          </div>
          <div className='about__me-communication'>
            <div className='about__me__icon'>
              <img src={leadership} alt="모임" />
            </div>
            <h2 className='about__me__title'>리더십</h2>
            <div className='about__me__description'>소모임 리더 / 청년부 간사 / 스피치 모임 / 독서 모임 / 강의 모임</div>
          </div>
          <div className='about__me-developer'>
            <div className='about__me__icon'>
              <img src={developer} alt="개발공부" />
            </div>
            <h2 className='about__me__title'>프론트엔드</h2>
            <div className='about__me__description'>HTML, CSS, JavaScript, React, TailwindCSS, TypeScript</div>
          </div>
        </div>
      </div>
    </section>
  )
}
