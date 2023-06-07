import React from 'react';

const ThemeColor = ({ color, img, changeColor }) => {
  return (
    <img 
      src={img} 
      alt="" 
      className="themeColor__img" 
      onClick={() => {changeColor(color)}}
    />
  );
};

export default ThemeColor;