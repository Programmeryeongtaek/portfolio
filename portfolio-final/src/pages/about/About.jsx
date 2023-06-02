import React from 'react';
import './about.css';
import Info from './Info';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              개인정보
            </h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href='' className="button">
              자기소개 다운로드
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;