import React, { useState } from 'react';

function ServicesList() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const services = [
    {
      id: 1,
      title: "Mimari Proje",
      description: "Konut, ofis, ticari ve endüstriyel yapılar için kapsamlı mimari proje çözümleri sunuyoruz. Modern tasarım anlayışı ile fonksiyonel mekanlar yaratıyoruz. Projelerimizde sürdürülebilirlik, enerji verimliliği ve estetik değerleri bir arada bulunduruyoruz.",
      detailedDescription: "Mimari proje hizmetimiz kapsamında, müşterilerimizin ihtiyaçlarını analiz ederek konsept tasarımından başlayarak detaylı proje çizimlerine kadar tüm süreçleri yönetiyoruz. Statik hesaplamalar, malzeme seçimi, proje yönetimi ve inşaat denetimi konularında uzman ekibimizle hizmet veriyoruz. Her projede çevre dostu ve enerji tasarruflu çözümler üretiyoruz.",
      features: [
        "Konsept tasarımı ve planlama",
        "Detaylı proje çizimleri ve teknik dokümantasyon",
        "Statik hesaplamalar ve mühendislik çözümleri",
        "Malzeme seçimi ve spesifikasyonları",
        "Proje yönetimi ve koordinasyon",
        "İnşaat denetimi ve kalite kontrol"
      ],
      image: "https://arkipedia.net/wp-content/uploads/2020/07/mimari-projeler-nasil-okunur-1024x768.jpg",
      exampleImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      icon: "fas fa-drafting-compass"
    },
    {
      id: 2,
      title: "İç Mimari",
      description: "Mekanların iç düzenlemesi, mobilya tasarımı ve dekorasyon konularında profesyonel hizmet veriyoruz. Estetik ve fonksiyonellik bir arada. Yaşam kalitesini artıran, kullanıcı dostu iç mekanlar tasarlıyoruz.",
      detailedDescription: "İç mimari hizmetimizde, mevcut yapıların iç mekanlarını yeniden düzenliyor, mobilya tasarımları yapıyor ve dekorasyon çözümleri sunuyoruz. Renk paleti belirleme, aydınlatma tasarımı, malzeme seçimi ve 3D görselleştirme konularında uzman ekibimizle çalışıyoruz. Her projede müşterinin yaşam tarzına uygun çözümler üretiyoruz.",
      features: [
        "İç mekan tasarımı ve planlama",
        "Mobilya tasarımı ve özel üretim",
        "Renk paleti ve malzeme seçimi",
        "Aydınlatma tasarımı ve sistemleri",
        "Dekorasyon ve stil danışmanlığı",
        "3D görselleştirme ve sunum"
      ],
      image: "https://iremaybasmimarlik.com.tr/tema/genel/uploads/hizmetler/ic-mimarlik-1024x651_1.jpg",
      exampleImages: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      icon: "fas fa-home"
    },
    {
      id: 3,
      title: "3D Modelleme",
      description: "Projelerinizi 3D görselleştirme ile hayata geçiriyoruz. Sanal gerçeklik teknolojisi ile projelerinizi deneyimleyebilirsiniz. Foto-realistik renderlar ve animasyonlarla projelerinizi en iyi şekilde sunuyoruz.",
      detailedDescription: "3D modelleme hizmetimizde, mimari projelerinizi üç boyutlu olarak modelleyerek foto-realistik renderlar hazırlıyoruz. Sanal gerçeklik teknolojisi ile projelerinizi deneyimleme imkanı sunuyoruz. Animasyon ve sunum videoları ile projelerinizi etkileyici şekilde sunuyoruz.",
      features: [
        "3D modelleme ve tasarım",
        "Foto-realistik render ve görselleştirme",
        "Sanal gerçeklik (VR) deneyimi",
        "Animasyon ve sunum videoları",
        "İnteraktif 3D sunumlar",
        "Mobil uygulama entegrasyonu"
      ],
      image: "https://www.rendertasarim.com/wp-content/uploads/2023/03/3d-mimari-modelleme-1.jpg",
      exampleImages: [
        "https://animam.com/wp-content/uploads/2018/03/Animam-3d-mimari-modelleme-ve-mimari-tasar%C4%B1m.jpg",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://videomax.com.tr/uploads/3d/3d_mimari_modelleme.jpg"
      ],
      icon: "fas fa-cube"
    },
    {
      id: 4,
      title: "Proje Danışmanlık",
      description: "Mimarlık projelerinizde teknik danışmanlık hizmeti veriyoruz. Proje sürecinin her aşamasında yanınızdayız. Maliyet optimizasyonu ve zaman planlaması konularında uzman desteği sağlıyoruz.",
      detailedDescription: "Proje danışmanlık hizmetimizde, mimarlık projelerinizin tüm aşamalarında teknik danışmanlık veriyoruz. Proje analizi, maliyet hesaplama, zaman planlaması ve kalite kontrol konularında uzman ekibimizle hizmet veriyoruz. Proje sürecinin her aşamasında müşterilerimizin yanında oluyoruz.",
      features: [
        "Teknik danışmanlık ve proje analizi",
        "Maliyet hesaplama ve optimizasyon",
        "Zaman planlaması ve proje yönetimi",
        "Kalite kontrol ve denetim",
        "Yasal mevzuat danışmanlığı",
        "Risk analizi ve çözüm önerileri"
      ],
      image: "https://dasmekanik.com/tema/genel/uploads/hizmetler/proje-danismanlik-anasayfa.jpg",
      exampleImages: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      icon: "fas fa-clipboard-check"
    }
  ];

  return (
    <section className="services-list-section">
      <div className="services-list-container">
        <h2 className="services-list-title">HİZMET DETAYLARIMIZ</h2>
        <p className="services-list-description">
          Her proje için özel çözümler üretiyor, müşteri memnuniyetini ön planda tutuyoruz.
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <i className={service.icon}></i>
                </div>
              </div>
              
              <div className="service-text-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-detailed-description">{service.detailedDescription}</p>
              </div>
              
              <div className="service-features-section">
                <h4>Hizmet Özellikleri</h4>
                <ul className="service-features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-examples">
                <h4>Örnek Projelerimiz</h4>
                <div className="example-images">
                  {service.exampleImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="example-image"
                        onClick={() => openModal(image)}
                      >
                      <img src={image} alt={`${service.title} Örnek ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Büyük Görünüm" 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesList;
