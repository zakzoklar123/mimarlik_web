// AppBar.jsx

import React, { useState } from 'react';

function AppBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="app-bar">
        <div className="logo">
          <a href="#"><img src="https://i.hizliresim.com/c7jjn83.PNG" alt="" /></a>
        </div>

        <button className="hamburger-menu" onClick={toggleNav} aria-label="Menüyü aç">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li className="nav-item active"><a href="#">Anasayfa</a><span className="nav-underline" /></li>
            <li className="nav-item"><a href="#">Hakkımızda</a><span className="nav-underline" /></li>
            <li className="nav-item"><a href="#">Hizmetlerimiz</a><span className="nav-underline" /></li>
            <li className="nav-item"><a href="#">Blog</a><span className="nav-underline" /></li>
            <li className="nav-item"><a href="#">İletişim</a><span className="nav-underline" /></li>
          </ul>
        </nav>
      </header>

      {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
}

export default AppBar;