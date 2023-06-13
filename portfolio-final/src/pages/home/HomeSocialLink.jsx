import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaBlogger, FaGithub } from 'react-icons/fa';

const HomeSocialLink = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com/5_yeongtaek/" className="home__social-link" target='_blank'>
        <BsInstagram />
      </a>

      <a href="https://young-taek.tistory.com/" className="home__social-link" target='_blank'>
        <FaBlogger />
      </a>

      <a href="https://github.com/Programmeryeongtaek?tab=repositories" className="home__social-link" target='_blank'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HomeSocialLink;