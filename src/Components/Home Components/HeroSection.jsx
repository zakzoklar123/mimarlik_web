import React from 'react';

function HeroSection() {
  return (
    <div className="hero-sections">
      <section className="hero-banner hero-banner-1 with-overlay">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">MKS MİMARLIK MÜHENDİSLİK</p>
          <h2 className="hero-title">Tasarım, Renk ve Dokuların <br /> Neşeyle Tanışmasıdır .</h2>
          <button className="contact-button gold">İletişime Geçin</button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
