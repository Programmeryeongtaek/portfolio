import React, { useState } from 'react';
import './work.css';
import { projects } from '../../data';
import ProjectsItem from './ProjectsItem';
import { AnimatePresence } from 'framer-motion';
import List from './List';
import { SiJavascript } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';

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
          공부내역
        </h3>
        
        <div className="blog__container container grid">
          <div className="blog__card">
            <div className="blog__thumb">
              <a href="">
                <span className="blog__category">HTML</span>
              </a>
              <a href=""><AiFillHtml5 className='blog__img' /></a>
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
          </div>

          <div className="blog__card">
            <div className="blog__thumb">
              <a href="">
                <span className="blog__category">CSS</span>
              </a>
              <a href=""><FaCss3Alt className='blog__img' /></a>
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
          </div>

          <div className="blog__card">
            <div className="blog__thumb">
              <a href="">
                <span className="blog__category">JavaScript</span>
              </a>
              <a href=""><SiJavascript className='blog__img' /></a>
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;