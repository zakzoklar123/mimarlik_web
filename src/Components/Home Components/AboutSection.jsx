import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>MKS MİMARLIK HAKKINDA</h2>
      <h3>Hayal Ettiğiniz Tablonun İçinde Yer Alma Fırsatı Sunuyoruz.</h3>
      <p>
        Çok yönlü hizmet veren bir mimarlık firmasıyız. Peki nedir bu çok yön diye kastedilen ?
      </p>
      <p>
        Öncelikle iç mekan tasarımı dahil ihtiyacınız olan bütün mimari hizmetleri size sağlayabilmekteyiz.
        Cephe tasarımları, işlevsel plan çözümleri, zevkinize ve ihtiyacınıza göre kafe, konut, ofis gibi birçok iç mekan çözümü ve uygulaması tercihe bağlı sadece proje kontrollüğü, mimari proje uygulaması ve anahtar teslim gibi hizmetler verebilmekteyiz. Verdiğimiz hizmetlerde önceliğimiz her zaman müşteri ihtiyaç ve zevkine uygunluktur.
      </p>
      <div className="about-cards">
        <a href="#" className="card card-bg-1">
          <h4>En Büyük Gösteriş Sadeliktir</h4>
          
        </a>
        <a href="#" className="card card-bg-2">
          <h4>Yaşayan Tasarımlar</h4>
          
        </a>
        <a href="#" className="card card-bg-3">
          <h4>Hayatınıza Renk Katıyoruz</h4>
          
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
