import React from 'react';
import './work.css';
import { projects } from '../../data';
import ProjectsItem from './ProjectsItem';

const Work = () => {
  return (
    <main className='work section'>
      <h2 className="section__title">
        <span>Work & Study</span>
      </h2>
      <section className="work">
        <div className="portfolio__container container grid">
          {projects.map((item) => {
            return <ProjectsItem key={item.id} {...item} />
          })}
        </div>
      </section>

      <section className="study">

      </section>
    </main>
  );
};

export default Work;