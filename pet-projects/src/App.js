// src/App.js
import './setting/style/main.scss'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pet_projects from './Header_menu/pet-projects';
import Home from './Header_menu/home'
import About from './Header_menu/about'
import Info from './Header_menu/info'
import './Header_menu/style/header_style.scss'
import Sign_up from './setting/auth/Sign_Up';
import Auth from './setting/auth/auth';


function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuth = () => {
    setIsAuthOpen(true);
  };

  const closeAuth = () => {
    setIsAuthOpen(false);
  };
  const [isSign_upOpen, setIsSign_upOpen] = useState(false);

  const openSign_up = () => {
    setIsSign_upOpen(true);
  };

  const closeSign_up = () => {
    setIsSign_upOpen(false);
  };


  return (
    <Router>
      <div className="App">
        <div className="header">
          <h2>PR</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pet_projects">pet-projects</Link></li>
            <li><Link to="/info">info</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
          <div className="login">
            <button onClick={openAuth}>Sign_in</button>
            <Auth show={isAuthOpen} onClose={closeAuth}>
            </Auth>
            <button onClick={openSign_up}>Sign_Up</button>
            <Sign_up show={isSign_upOpen} onClose={closeSign_up}>
            </Sign_up>
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet_projects" element={<Pet_projects />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
