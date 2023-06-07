import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { projects } from '../../data';
import Items from './Items';
import List from './List';

const allNavList = ['all', ...new Set(projects.map((project) => project.category))];

const Work = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(projects);
      return;
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  }

  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          <span>Study & Work</span>
        </h2>

        <List list={navList} filterItems={filterItems} />

        <div className="portfolio__container container grid">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Work;