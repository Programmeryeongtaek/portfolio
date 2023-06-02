import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import ThemeMode from './components/themeMode/ThemeMode';
import Themes from './components/themes/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ThemeMode />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;;