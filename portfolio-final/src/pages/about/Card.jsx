import React from 'react';

const Card = ({ title, subtitle, description }) => {

  return (
    <div className="char__data">
      <div>
        <h3 className="char__title">{title}</h3>
        <span className="char__subtitle">{subtitle}</span>
      </div>
      <span className="char__description">{description}</span>
    </div>
  );
};

export default Card;