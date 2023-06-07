import React from 'react';
import { motion } from 'framer-motion';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1}}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className='portfolio__item card card-two'
            key={id}
          >
            <h3 className="portfolio__title">{title}</h3>
            <span className="portfolio__category">{category}</span>
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>
            <p className="portfolio__description">{description}</p>

            <button>작품보기</button>
          </motion.div>
        )
      })}
    </>
  );
};

export default Items;