import React from 'react';
import './home.css';
import Profile from '../../assets/소개.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HomeSocialLink from './HomeSocialLink';
import Balancer from 'react-wrap-balancer';

const Home = () => {
  return (
    <section className="home sction grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>학습하는 청년, </span>
            <span>오영택</span>
            <br />프론트엔드 개발자
          </h1>

          <p className="home__description">
            <Balancer>
              나의 성장이 모두의 성장을 촉진하는 사람으로 살아가고 있습니다.
            </Balancer>
            <Balancer>
              유능한 프론트엔드 개발자로서 자리잡기 위해 분투하고 있습니다.
            </Balancer>
            <Balancer>
              끊임없이 배우고 질문하고 정리하고 있습니다.
            </Balancer>
          </p>

          <HomeSocialLink />

          <Link to="/about" className="button">
            자기소개
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
