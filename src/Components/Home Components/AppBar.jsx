// AppBar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AppBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
            <li className="nav-item active"><Link to="/">Anasayfa</Link><span className="nav-underline" /></li>
            <li className="nav-item"><Link to="/about">Hakkımızda</Link><span className="nav-underline" /></li>
            <li className="nav-item"><Link to="/services">Hizmetlerimiz</Link><span className="nav-underline" /></li>
            <li className="nav-item"><Link to="#">Blog</Link><span className="nav-underline" /></li>
            <li className="nav-item"><Link to="#">İletişim</Link><span className="nav-underline" /></li>
          </ul>
        </nav>
      </header>

      {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
}

export default AppBar;