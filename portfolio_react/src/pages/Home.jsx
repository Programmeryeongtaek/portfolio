import React from 'react';
import '../styles/Home.css';
import profile from '../assets/소개.jpg';

export default function Home() {
  return (
    <section id='home' className='section'>
      <div className='section__container'>
        <img src={profile} alt="프로필 사진" className='home__avatar' />
        <h1 className='home__title'>안녕하세요 <br /> 학습하는 청년, 오영택입니다.</h1>
        <h1 className='home__description'>천천히 조급하라</h1>
        <button className='home__goto__works'>작품 구경하기</button>
      </div>
    </section>
  )
}
