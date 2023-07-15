import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ExperiencePage from './Pages/ExperiencePage.js'
import ResumePage from './Pages/ResumePage.js';
import OtherFunThings from './Pages/OtherFunThings.js'
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import './App.css';
import { HeaderContext } from './Contexts/HeaderContext.js';
import { FooterContext } from './Contexts/FooterContext.js';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
        <FooterContext.Provider value={{ footerHeight, setFooterHeight }}>
          <div className="animated_gradient">
            <Routes>
              <Route path="/PersonalWebsite" element={<div><Header /><HomePage /><Footer /></div>} />
              <Route path="/PersonalWebsite/about" element={<div><Header /><AboutPage /><Footer /></div>} />
              <Route path="/PersonalWebsite/experience" element={<div><Header /><ExperiencePage /><Footer /></div>} />
              <Route path="/PersonalWebsite/resume" element={<div><Header /><ResumePage /><Footer /></div>} />
              <Route path="/PersonalWebsite/other" element={<OtherFunThings />} />
            </Routes>
          </div>
        </FooterContext.Provider>
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
