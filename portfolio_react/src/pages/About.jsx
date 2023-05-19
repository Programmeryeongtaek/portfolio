import React from 'react';
import developer from '../assets/개발자2.jpg';
import leadership from '../assets/모임.jpg';
import reading from '../assets/독서.jpg';
import Learn from '../assets/학습.jpg';
import Question from '../assets/학습.jpg';
import '../styles/About.css';

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

      <div id='attitudes' className='section__container'>
        <h1>마음가짐</h1>
        <h3>일신우일신, 무지의 지</h3>
        <h4>Like 솔개, 호박벌</h4>
        <div className='attitudes'>
          <div className='attitude'>
            <img src={Learn} alt="학습" className='attitude__icon' />
            <div className='attitude__description'>
              <p>공부하는 것은 자기를 온잔하게 만들어가는 노동이자 기쁨이다. 해야 하는 공부돠 다른 학습의 자세를 갖추는 것은 시간으로 빚어진 습관의 산물이다.</p>
              <p>참고</p>
            </div>
          </div>
          <div className='attitude'>
            <div className='attitude__description'>
              <p>질문한다는 것 자체는 관심이자 의지의 표현이다. 무지를 지할 때 비로소 진정한 지의 시작이다. 동시에 부끄러움과 맞서는 용기이자 성장하고자 하는 의지를 보여주는 무서움이다. 그 유능한 도구가 바로 질문이다.</p>
              <p>참고 : 소크라테스</p>
            </div>
            <img src={Question} alt="질문" className='attitude__icon' />
          </div>
        </div>
      </div>
    </section>
  )
}
