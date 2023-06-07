import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement
          className='resume__item'
          date={year}
          iconStyle={{ background: '#000', color: '#red' }}
          icon={icon}
        >
          <h3 className="resume__title">{title}</h3>
          <p className="resume__description">{desc}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ResumeItem;