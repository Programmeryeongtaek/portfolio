import React, { useState } from 'react';
import Close from '../../assets/close.svg';
import { motion } from 'framer-motion';

const ProjectsItem = ({ projectItems }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, details } = projectItem;
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
            
            {modal && (
              <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                  <img src={Close} alt="" className="modal__close" onClick={toggleModal} />

                  <h3 className="modal__title">{title}</h3>

                  <ul className="modal__list grid">
                    {details.map(({ icon, title, desc }, index) => {
                      return (
                        <li className="modal__item" key={index} >
                          <span className="item__icon">{icon}</span>

                          <div>
                            <span className="item__title">{title}</span>
                            <span className="item__desc">{desc}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <img src={img} alt="" className="modal__img"/>
                </div>
              </div>
            )}
            </div>
          </motion.div>
        )
      })}

    </>
  );
};

export default ProjectsItem;