import React from 'react';
import '../../Pages Css/About css/AboutStats.css';

const AboutStats = () => {
  const stats = [
    {
      number: '500+',
      label: 'Tamamlanan Proje',
      icon: 'fas fa-project-diagram',
      description: 'Konut, ofis ve ticari projeler'
    },
    {
      number: '13+',
      label: 'Yıl Deneyim',
      icon: 'fas fa-calendar-alt',
      description: 'Sektörde köklü geçmiş'
    },
    {
      number: '98%',
      label: 'Müşteri Memnuniyeti',
      icon: 'fas fa-heart',
      description: 'Yüksek kalite standartları'
    },
    {
      number: '25+',
      label: 'Ödül & Sertifika',
      icon: 'fas fa-trophy',
      description: 'Ulusal ve uluslararası başarılar'
    },
    {
      number: '50+',
      label: 'Uzman Ekip',
      icon: 'fas fa-users',
      description: 'Mimar, mühendis ve teknisyenler'
    },
    {
      number: '1M+',
      label: 'm² Tasarlanan Alan',
      icon: 'fas fa-ruler-combined',
      description: 'Toplam proje alanı'
    }
  ];

  return (
    <section className="about-stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Rakamlarla MKS Mimarlık</h2>
          <p className="stats-subtitle">
            13 yıllık yolculuğumuzda elde ettiğimiz başarıları ve ulaştığımız noktayı gösteren rakamlar
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-content">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <h3 className="stat-number">{stat.number}</h3>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-footer">
          <p>
            Bu rakamlar, müşterilerimizin güvenini kazanmak ve kaliteli hizmet sunmak için gösterdiğimiz 
            kararlılığın bir yansımasıdır. Her proje bizim için yeni bir başarı hikayesidir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
