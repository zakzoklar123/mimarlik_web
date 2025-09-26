import React from 'react';

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-container">
        <div className="services-hero-content">
          <h1 className="services-hero-title">HİZMETLERİMİZ</h1>
          <p className="services-hero-subtitle">
            Mimarlık alanında kapsamlı çözümler sunuyoruz
          </p>
          <p className="services-hero-description">
            Müşterilerimizi dikkatle dinler, isteklerini algılar ve kendi mesleki değer ve tecrübelerimizle harmanlayarak çözümlemelerimizi müşterilerimizin değerlendirmesine sunarız. Buna bağlı olarak %100 müşteri memnuniyetini esas alırız ve istenilen sonuca ulaşılana kadar çalışmalarımızı büyük önem ve titizlikle sürdürürüz.
          </p>
        </div>
        <div className="services-hero-image">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Mimarlık Hizmetleri" />
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
