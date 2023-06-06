import React, { useState } from 'react';
import './themeMode.css';
import { themeMode } from '../../data';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import ThemeColor from './ThemeColor';

const ThemeMode = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState('color');
  const [theme, setTheme] = useState('light-theme');

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  return (
    <>
      <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
        <div 
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className="themeMode__toggler" onClick={toggleTheme}>
          {themeMode === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style__switcher-title">테마 설정</h3>
        <div className="style__switcher-items">
          {themeMode.map((theme, index) => {
            return <ThemeColor key={index} {...theme} changeColor={changeColor} />;
          })}
        </div>

        <div 
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </>
  );
};

export default ThemeMode;