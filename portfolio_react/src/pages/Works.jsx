import React from 'react';
import '../styles/Works.css';

export default function Works() {
  return (
    <section id='section' className='section'>
      <div id='works' className='section__container'>
        <h1>프로젝트</h1>
        <h3>공부목록</h3>
        <h4>수강목록</h4>
        <div className='work__categories'>
          <button className='category__btn' data-filter="">All<span className='category__count'></span></button>
          <button className='category__btn' data-filter="">Vanilla JS<span className='category__count'></span></button>
          <button className='category__btn' data-filter="">React<span className='category__count'></span></button>
          <button className='category__btn' data-filter="">Project<span className='category__count'></span></button>
        </div>
        <div className='work__projects'>
          <a href="" className='project' data-type=''>
            <img src="" alt="프로젝트1 사진" className='project__img' />
            <div className='project__description'>
              <h3>프로젝트1 제목</h3>
              <span>사용 기술</span>
            </div>
          </a>
          <a href="" className='project' data-type=''>
            <img src="" alt="프로젝트1 사진" className='project__img' />
            <div className='project__description'>
              <h3>프로젝트1 제목</h3>
              <span>사용 기술</span>
            </div>
          </a>
          <a href="" className='project' data-type=''>
            <img src="" alt="프로젝트1 사진" className='project__img' />
            <div className='project__description'>
              <h3>프로젝트1 제목</h3>
              <span>사용 기술</span>
            </div>
          </a>
          <a href="" className='project' data-type=''>
            <img src="" alt="프로젝트1 사진" className='project__img' />
            <div className='project__description'>
              <h3>프로젝트1 제목</h3>
              <span>사용 기술</span>
            </div>
          </a>
        </div>
      </div>

      <div id='skills' className='section__container'>
        <h1>스킬</h1>
        <h2>스킬과 역량</h2>
        <p>각 항목에 mousehover하면 다룰 수 있는 역량 나타나기</p>
        <div className='skillset'>
          <div className='skillset__left'>
            <h3 className='skillset__title'>스킬</h3>
            <div className='skill'>
              <div className='skill__description'>
                <span>HTML</span>
                <span>99%</span>
              </div>
              <div className='skill__bar'>
                <div className='skill__value'></div>
              </div>
            </div>
            <div className='skill'>
              <div className='skill__description'>
                <span>CSS</span>
                <span>99%</span>
              </div>
              <div className='skill__bar'>
                <div className='skill__value'></div>
              </div>
            </div>
            <div className='skill'>
              <div className='skill__description'>
                <span>JavaScript</span>
                <span>99%</span>
              </div>
              <div className='skill__bar'>
                <div className='skill__value'></div>
              </div>
            </div>
            <div className='skill'>
              <div className='skill__description'>
                <span>TypeScript</span>
                <span>99%</span>
              </div>
              <div className='skill__bar'>
                <div className='skill__value'></div>
              </div>
            </div>
          </div>
          <div className='skillset__right'>
            <h3 className='skillset__title'>역량</h3>
            <div>
              mousehover하면 각 스킬의 역량 나타나게 하기
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
