import React, { useState } from 'react';
import './nav.css';
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');
    if (this.scrollY > 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Yeong</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a 
                href="#home" 
                onClick={() => setActiveNav('#home')}
                className=
                {
                  activeNav === '#home'
                  ? "nav__link active-link"
                  : "nav__link"
                }
              >
                <AiOutlineHome /> Home
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#about" 
                onClick={() => setActiveNav('#about')}
                className=
                {
                  activeNav === '#about'
                  ? "nav__link active-link"
                  : "nav__link"
                }
              >
                <BsFillPersonLinesFill /> About
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#work" 
                onClick={() => setActiveNav('#work')}
                className=
                {
                  activeNav === '#work'
                  ? "nav__link active-link"
                  : "nav__link"
                }
              >
                <HiOutlineDocumentReport /> Work
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#contact" 
                onClick={() => setActiveNav('#contact')}
                className=
                {
                  activeNav === '#contact'
                  ? "nav__link active-link"
                  : "nav__link"
                }
              >
                <FiSend /> Contact
              </a>
            </li>
          </ul>

          <FaTimes className='nav__clise' onClick={() => showMenu(!Toggle)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
};

export default Nav;