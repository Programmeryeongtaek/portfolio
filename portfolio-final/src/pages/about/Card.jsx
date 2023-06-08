import React, { useState } from 'react';

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="char__item">
      <div className="char__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="char__title">{props.title}</h3>
        <span className="icon">{showInfo ? '-' : '+'}</span>
      </div>

      <div className={`${showInfo ? 'show-content' : ''} char__content`}>
        <div className="char__data-title">
          <h3 className="char__subtitle">{props.subtitle}</h3>
        </div>

        <p className="char__description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;