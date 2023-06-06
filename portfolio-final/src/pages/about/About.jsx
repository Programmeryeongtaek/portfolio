import React from 'react';
import './about.css';
import Info from './Info';
import Hobby from './Hobby';
import { FaDownload } from 'react-icons/fa';
import Attitudes from './Attitudes';
import { resume } from '../../data';
import ResumeItem from './ResumeItem';
import Skills, { Standard } from './Skills';

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
          <div className="about__picture">
            <img src="" alt="" className="about__profile" />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          경험 & 학습
        </h3>

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

      <section className="section char">
        <h3 className="section__subtitle subtitle__center">
          취미 & 태도
        </h3>

        <div className="hobby__container grid">
          <Hobby />
        </div>
        <div className="attitudes__container grid">
          <Attitudes />
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">
          스킬 역량
        </h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default About;