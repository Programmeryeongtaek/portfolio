import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsItem = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, type, title, tools, report, report_desc, description, url } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className='portfolio__items card card-two'
          >
            <div className="portfolio__item" key={id}>
              <a className="portfolio__hover" href={url} target='_blank' rel='noreferrer'>
                <div className='portfolio__info'>
                  <h3 className='portfolio__type'>{type}</h3>
                  <h3 className="portfolio__title">{title}</h3>
                </div>
              </a>
              <span className="portfolio__category">{category}</span>
              <div className="portfolio__img-wrapper">
                <img src={img} alt="" className="portfolio__img"/>
              </div>
              <div className='portfolio__content'>
                <p>{tools}</p>
                <p>{report}</p>
                <span>{report_desc}</span>
                <div className='portfolio__description'>{description}</div>
              </div>

            </div>
          </motion.div>
        )
      })}
    </>
  );
};

export default ProjectsItem;