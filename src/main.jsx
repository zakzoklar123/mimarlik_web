import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';

import './Pages Css/Home css/General.css';
import './Pages Css/Home css/AppBar.css';
import './Pages Css/Home css/HeroSection.css';
import './Pages Css/Home css/ServicesSection.css';
import './Pages Css/Home css/ProjectsSection.css';
import './Pages Css/Home css/AboutSection.css';
import './Pages Css/Home css/BlogSection.css';
import './Pages Css/Home css/PartnersSection.css';
import './Pages Css/Home css/DesignInfoSection.css';
import './Pages Css/Home css/Footer.css';
import './Pages Css/About css/AboutHero.css';
import './Pages Css/About css/AboutCards.css';
import './Pages Css/About css/AboutStats.css';
import './Pages Css/About css/AboutValues.css';
import './Pages Css/About css/AboutProcess.css';
import './Pages Css/About css/AboutTeam.css';
import './Pages Css/Services css/ServicesHero.css';
import './Pages Css/Services css/ServicesList.css';
import './Pages Css/Blog css/BlogHero.css';
import './Pages Css/Blog css/BlogPosts.css';
import './Pages Css/Contact css/ContactForm.css';
import './Pages Css/Contact css/ContactSocial.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
