import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Index';
import Home from './Components/Pages/Home/Index';
import About from './Components/Pages/About/Index';
import Resume from './Components/Pages/Resume/Index';
import Works from './Components/Pages/Works/Index';
import Contact from './Components/Pages/Contact/Index';
function App() {
  return (
    <BrowserRouter>
      <div id="pmcv">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
