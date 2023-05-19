import React from 'react'

export default function Works() {
  return (
    <section className='section'>
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
    </section>
  )
}
