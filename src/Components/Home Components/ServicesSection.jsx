import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>HİZMETLERİMİZ</h2>
      <p className="section-description">
        Müşterilerimizi dikkatle dinler, isteklerini algılar ve kendi mesleki değer ve tecrübelerimizle harmanlayarak çözümlemelerimizi müşterilerimizin değerlendirmesine sunarız buna bağlı olarak %100 müşteri memnuniyetini esas alırız ve istenilen sonuca ulaşılana kadar çalışmalarımızı büyük önem ve titizlikle sürdürürüz. Sağladığımız hizmetlerin en iyi karşılanması bizim işimiz…
      </p>
      <div className="service-list">
        <a href="#" className="service-item service-bg-1">
          <h3>Mimari Proje</h3>
         
        </a>
        <a href="#" className="service-item service-bg-2">
          <h3>İç Mimari</h3>
          
        </a>
        <a href="#" className="service-item service-bg-3">
          <h3>3D Modelleme</h3>
          
        </a>
        <a href="#" className="service-item service-bg-4">
          <h3>Proje Danışmanlık</h3>
          
        </a>
      </div>
    </section>
  );
}

export default ServicesSection;
