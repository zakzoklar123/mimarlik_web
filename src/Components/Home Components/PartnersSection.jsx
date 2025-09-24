import React from 'react';

function PartnersSection() {
  const partners = [
    "ÇANAKKALE SERAMİK",
    "ÇAMSAN",
    "EGE SERAMİK",
    "AGT",
    "YURTBAY SERAMİK",
    "FRANKE",
  ];

  return (
    <section id="partners" className="partners-section">
      <h2>İŞ ORTAKLARI</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
