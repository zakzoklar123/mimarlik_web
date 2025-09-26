import React from 'react';
import AppBar from '../Components/Home Components/AppBar';
import ContactForm from '../Components/Contact Components/ContactForm';
import ContactSocial from '../Components/Contact Components/ContactSocial';
import Footer from '../Components/Home Components/Footer';

const Contact = () => {
  return (
    <>
      <AppBar />
      <ContactForm />
      <ContactSocial />
      <Footer />
    </>
  );
};

export default Contact;
