import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ExperiencePage from './Pages/ExperiencePage.js'
import ResumePage from './Pages/ResumePage.js';
import OtherFunThings from './OtherFunThings/OtherFunThings.js'
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#494D5F', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/PersonalWebsite" element={<HomePage />} />
          <Route path="/PersonalWebsite/about" element={<AboutPage />} />
          <Route path="/PersonalWebsite/experience" element={<ExperiencePage />} />
          <Route path="/PersonalWebsite/resume" element={<ResumePage />} />
          <Route path="/PersonalWebsite/other" element={<OtherFunThings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
