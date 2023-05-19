import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <section id='footer' className=''>
      <div className='section__container'>
        <h2 className='contact__email'>Yeongtaek2109@gmail.com</h2>
        <div className='contact__links'>
          <a href="#" target='_blank'>
            T-story Blog
          </a>
          <a href="#" target='_blank'>
            Github
          </a>
        </div>
        <p className='contact__right'>
          2023 Programmer YeongTaek -- All right reserved
        </p>
      </div>
    </section>
  )
}
