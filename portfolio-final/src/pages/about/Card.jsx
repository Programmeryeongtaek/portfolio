import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const Card = ({ title, subtitle, description }) => {

  return (
    <div className="char__data">
      <div className='char__info'>
        <h3 className="char__title">{title}</h3>
        <Balancer className="char__subtitle">{subtitle}</Balancer>
      </div>
      <Balancer className="char__description">
        {description}
      </Balancer>
    </div>
  );
};

export default Card;