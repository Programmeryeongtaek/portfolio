import React, { useState } from 'react';
import './work.css';
import { projects } from '../../data';
import ProjectsItem from './ProjectsItem';
import { AnimatePresence } from 'framer-motion';
import List from './List';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import Skills from './Skills';

const allNavList = ['All', ...new Set(projects.map((project) => project.category))];

const Work = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(projects);
      return;
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  }

  return (
    <main className='work section'>
      <h2 className="section__title">
        <span>Work & Study</span>
      </h2>

      <div className="separator"></div>

      <section className="work">
        <h3 className="section__subtitle subtitle__center">
          최근 작품
        </h3>
        <List list={navList} filterItems={filterItems} />

        <div className="portfolio__container container grid">
          <AnimatePresence initial={false}>
            <ProjectsItem projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </section>

      <div className="separator"></div>

      <section className="study">
        <h3 className="section__subtitle subtitle__center">
          최근 게시글
        </h3>
        
        <div className="blog__container container grid">
          <div className="blog__card">
            <a href="https://young-taek.tistory.com/category/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/HTML%20%EA%B3%B5%EB%B6%80" target='_blank' rel="noreferrer">
              <div className="blog__thumb">
                <span className="blog__category">HTML</span>
                <AiFillHtml5 className='blog__img' />
              </div>
              <div className="blog__details">
                <h3 className="blog__title">
                  최신 글 제목
                </h3>
                <div className="blog__meta">
                  <span>최신 작성날짜</span>
                  <span className="blog__dot">.</span>
                  <span>Yeong</span>
                </div>
              </div>
            </a>
          </div>

          <div className="blog__card">
            <a href="https://young-taek.tistory.com/category/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/CSS%20%EA%B3%B5%EB%B6%80" target='_blank'>
              <div className="blog__thumb">
                <span className="blog__category">CSS</span>
                <FaCss3Alt className='blog__img' />
              </div>
              <div className="blog__details">
                <h3 className="blog__title">
                  최신 글 제목
                </h3>
                <div className="blog__meta">
                  <span>최신 작성날짜</span>
                  <span className="blog__dot">.</span>
                  <span>Yeong</span>
                </div>
              </div>
            </a>
          </div>

          <div className="blog__card">
            <a href="https://young-taek.tistory.com/category/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/JS%20%EA%B3%B5%EB%B6%80" target='_blank'>
              <div className="blog__thumb">
                <span className="blog__category">JavaScript</span>
                <SiJavascript className='blog__img' />
              </div>
              <div className="blog__details">
                <h3 className="blog__title">
                  최신 글 제목
                </h3>
                <div className="blog__meta">
                  <span>최신 작성날짜</span>
                  <span className="blog__dot">.</span>
                  <span>Yeong</span>
                </div>
              </div>
              </a>
            </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <div className="section__subtitle subtitle__center">
          공부내역
        </div>

        <div className="skills__container container grid">
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default Work;