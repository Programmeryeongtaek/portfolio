import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import ThemeMode from './components/themeMode/ThemeMode';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import ScrollUp from './components/scollup/ScrollUp';
import Nav from './components/nav/Nav';

function App() {
  return (
    <WrapBalancerProvider>
    <BrowserRouter>
      <Nav />
      <ThemeMode />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <ScrollUp />
    </BrowserRouter>
    </WrapBalancerProvider>
  );
};

export default App;;