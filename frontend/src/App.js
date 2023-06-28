import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ExperiencePage from './Pages/ExperiencePage.js'
import ContactPage from './Pages/ContactPage.js'
import ResumePage from './Pages/ResumePage.js';
import OtherFunThings from './OtherFunThings/OtherFunThings.js'
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {

  return (
    <div style={{ backgroundColor: '#494D5F' }}>
      <BrowserRouter>
        <Routes>
            <Route index element={ <div><Header /><HomePage /><Footer /></div> } />
            <Route path="/about" element={ <div><Header /><AboutPage /><Footer /></div> } />
            <Route path="/experience" element={ <div><Header /><ExperiencePage /><Footer /></div> } />
            <Route path="/contact" element={ <div><Header /><ContactPage /><Footer /></div> } />
            <Route path="/resume" element={ <div><Header /><ResumePage /><Footer /></div> } />
            <Route path="/other" element={ <OtherFunThings /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
