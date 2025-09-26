import React from 'react';
import '../../Pages Css/About css/AboutProcess.css';

const AboutProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Keşif & Analiz',
      description: 'Projenizi detaylı olarak inceliyoruz. İhtiyaçlarınızı, bütçenizi ve hayallerinizi anlıyoruz.',
      icon: 'fas fa-search',
      details: [
        'Alan incelemesi ve ölçüm',
        'Müşteri ihtiyaç analizi',
        'Bütçe planlaması',
        'Yasal gereksinimlerin tespiti'
      ]
    },
    {
      step: '02',
      title: 'Konsept Tasarım',
      description: 'İlk tasarım fikirlerini geliştiriyoruz. 3D görsellerle konsepti somutlaştırıyoruz.',
      icon: 'fas fa-lightbulb',
      details: [
        'İlk eskiz ve konsept geliştirme',
        '3D modelleme ve görselleştirme',
        'Malzeme ve renk paletleri',
        'Müşteri onayı'
      ]
    },
    {
      step: '03',
      title: 'Detay Tasarım',
      description: 'Onaylanan konsepti detaylandırıyoruz. Teknik çizimler ve spesifikasyonlar hazırlanır.',
      icon: 'fas fa-drafting-compass',
      details: [
        'Teknik çizimler',
        'Malzeme spesifikasyonları',
        'Elektrik ve mekanik planlar',
        'Uygulama detayları'
      ]
    },
    {
      step: '04',
      title: 'Uygulama',
      description: 'Projeyi hayata geçiriyoruz. Kaliteli işçilik ve sürekli denetim ile mükemmel sonuç.',
      icon: 'fas fa-hammer',
      details: [
        'İnşaat ve uygulama',
        'Kalite kontrol',
        'İlerleme raporları',
        'Sürekli müşteri bilgilendirme'
      ]
    },
    {
      step: '05',
      title: 'Teslim & Destek',
      description: 'Projenizi teslim ediyoruz ve sonrasında da destek sağlıyoruz.',
      icon: 'fas fa-key',
      details: [
        'Final kontrolleri',
        'Anahtar teslim',
        'Kullanım kılavuzu',
        'Garanti ve bakım desteği'
      ]
    }
  ];

  return (
    <section className="about-process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Çalışma Sürecimiz</h2>
          <p className="process-subtitle">
            Her projede uyguladığımız sistematik yaklaşım ve kalite odaklı çalışma metodumuz
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <i className="fas fa-check"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < processSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutProcess;
