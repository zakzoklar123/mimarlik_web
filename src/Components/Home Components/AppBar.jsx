// AppBar.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AppBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="app-bar">
        <div className="logo">
          <Link to="/"><img src="https://i.hizliresim.com/c7jjn83.PNG" alt="" /></Link>
        </div>

        <button className="hamburger-menu" onClick={toggleNav} aria-label="Menüyü aç">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <Link to="/">Anasayfa</Link>
              <span className="nav-underline" />
            </li>
            <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
              <Link to="/about">Hakkımızda</Link>
              <span className="nav-underline" />
            </li>
            <li className={`nav-item ${isActive('/services') ? 'active' : ''}`}>
              <Link to="/services">Hizmetlerimiz</Link>
              <span className="nav-underline" />
            </li>
            <li className={`nav-item ${isActive('/blog') ? 'active' : ''}`}>
              <Link to="/blog">Blog</Link>
              <span className="nav-underline" />
            </li>
            <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
              <Link to="/contact">İletişim</Link>
              <span className="nav-underline" />
            </li>
          </ul>
        </nav>
      </header>

      {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
}

export default AppBar;