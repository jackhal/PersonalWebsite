import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ExperiencePage from './Pages/ExperiencePage.js'
import ContactPage from './Pages/ContactPage.js'
import ResumePage from './Pages/ResumePage.js';

export default function Body() {

  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/experience" element={ <ExperiencePage /> } />
            <Route path="/contact" element={ <ContactPage /> } />
            <Route path="/resume" element={ <ResumePage /> } />
        </Routes>
    </BrowserRouter>
  );
}