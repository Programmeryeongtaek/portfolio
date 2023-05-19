import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav id='navbar'>
      <div className='navbar__logo'>
        <img src="" alt="로고 이미지" />
        <a href="#">YeongTaek</a>
      </div>
      <div className='navbar__menu'>
        <Link to="/" className='navbar__menu__item active'>
          Home
        </Link>
        <Link to="/about" className='navbar__menu__item'>
          About
        </Link>
        <Link to="/work" className='navbar__menu__item'>
          Works
        </Link>
      </div>
      <button className='navbar__toggle-btn'>
        toggle
      </button>
    </nav>
  )
}
