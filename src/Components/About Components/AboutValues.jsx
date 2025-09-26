import React from 'react';
import '../../Pages Css/About css/AboutValues.css';

const AboutValues = () => {
  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'İnovasyon',
      description: 'Sürekli yenilik peşinde koşarak, modern ve geleceğe dönük çözümler üretiriz.',
    },
    {
      icon: 'fas fa-seedling',
      title: 'Sürdürülebilirlik',
      description: 'Çevreye duyarlı malzemeler ve enerji verimli tasarımlarla sürdürülebilir bir gelecek inşa ederiz.',
    },
    {
      icon: 'fas fa-heart',
      title: 'Güven',
      description: 'Müşterilerimizle şeffaf ve dürüst iletişim kurarak karşılıklı güvene dayalı ilişkiler geliştiririz.',
    },
    {
      icon: 'fas fa-users',
      title: 'Ekip Ruhu',
      description: 'Deneyimli ekibimizle uyum içinde çalışarak, her projede en iyi sonuçları elde ederiz.',
    },
  ];

  return (
    <section className="about-values-section">
      <h2 className="about-values-title">Değerlerimiz</h2>
      <div className="values-container">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">
              <i className={value.icon}></i>
            </div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValues;
