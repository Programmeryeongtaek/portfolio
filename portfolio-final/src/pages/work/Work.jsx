import React, { useState } from 'react';
import './work.css';
import { projects } from '../../data';
import ProjectsItem from './ProjectsItem';
import { AnimatePresence } from 'framer-motion';
import List from './List';

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
      </section>
    </main>
  );
};

export default Work;