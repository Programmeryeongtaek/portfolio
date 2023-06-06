import React from 'react';

const ThemeColor = ({ color, img, changColor }) => {
  return (
    <img 
      src={img} 
      alt="" 
      className="themeColor__img" 
      onClick={() => {changColor(color)}}
    />
  );
};

export default ThemeColor;