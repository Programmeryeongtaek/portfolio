import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsItem = ({ projectItems }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className='portfolio__items card card-two'
          >
            <div className="portfolio__item" onClick={toggleModal} key={id}>
              <div className="portfolio__hover">
                <h3 className="portfolio__title">{title}</h3>
              </div>
              <span className="portfolio__category">{category}</span>
              <div className="portfolio__img-wrapper">
                <img src={img} alt="" className="portfolio__img"/>
              </div>
              <p className="portfolio__description">{description}</p>
              </div>
          </motion.div>
        )
      })}
    </>
  );
                  };

export default ProjectsItem;