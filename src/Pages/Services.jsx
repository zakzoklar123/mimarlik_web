import React from 'react';
import AppBar from '../Components/Home Components/AppBar';
import ServicesHero from '../Components/Services Components/ServicesHero';
import ServicesList from '../Components/Services Components/ServicesList';
import Footer from '../Components/Home Components/Footer';

const Services = () => {
  return (
    <>
      <AppBar />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </>
  );
};

export default Services;
