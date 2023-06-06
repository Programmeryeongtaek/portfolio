import React from 'react';
import { skills } from '../../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, content }, index) => {
        return (
          <div className='skills__ability grid' key={index}>
            <div className="skills__ability-box">
              <div className="progress__circle">
                <CircularProgressbar
                  strokeWidth={7.5}
                  text={`${percentage}%`}
                  value={percentage}
                  />
              </div>
              <h3 className="skills__title">
                {title}
              </h3>
            </div>
            <ul className="skills__description">
              <li>{content}</li>
            </ul>
          </div>
        )
      })}
    </>
  );
};

export default Skills