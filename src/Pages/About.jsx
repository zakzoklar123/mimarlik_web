import React from 'react';
import AppBar from '../Components/Home Components/AppBar';
import AboutHero from '../Components/About Components/AboutHero';
import AboutCards from '../Components/About Components/AboutCards';
import AboutStats from '../Components/About Components/AboutStats';
import AboutValues from '../Components/About Components/AboutValues';
import AboutProcess from '../Components/About Components/AboutProcess';
import AboutTeam from '../Components/About Components/AboutTeam';
import Footer from '../Components/Home Components/Footer';

const About = () => {
  return (
    <>
      <AppBar />
      <AboutHero />
      <AboutCards />
      <AboutStats />
      <AboutValues />
      <AboutProcess />
      <AboutTeam />
      <Footer />
    </>
  );
};

export default About;
