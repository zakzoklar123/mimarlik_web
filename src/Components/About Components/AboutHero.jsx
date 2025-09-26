import React from 'react';
import '../../Pages Css/About css/AboutHero.css';

const AboutHero = () => {
  return (
    <div className="about-hero-container">
      <div className="about-hero-content">
        <h2 className="about-hero-title">MKS MİMARLIK HAKKINDA</h2>
        <h3 className="about-hero-subtitle">Hayal Ettiğiniz Tablonun İçinde Yer Alma Fırsatı Sunuyoruz.</h3>
        <div className="about-hero-main-content">
          <div className="about-hero-image-wrapper">
            <img src="https://lh4.googleusercontent.com/xdcSc2lUthd7-aXfw4AqoPHMb5eT-DPd8kpeSrK9c30AIHs3aAUUW0NaoxBv_IdeZUlmWZVmw8GqumCYxOXH98nvwfZwWGQ53eqkSb4iCT7SM2hWOrKngxKV5_XzbUcpGypYqymcbqmMvM-fGNjoctbaGrfkFiEhkHUnHx-b9aSGs8-fU1XoM-Ar3DI7ZQ" alt="Mimarlık Ofisi" className="about-hero-main-image" />
          </div>
          <div className="about-hero-text-wrapper">
            <p className="about-hero-text">
              2010 yılından beri faaliyet gösteren MKS Mimarlık olarak, çok yönlü hizmet veren bir mimarlık firmasıyız. 
              Peki nedir bu çok yön diye kastedilen? İşte bu sorunun cevabı bizim fark yaratan yaklaşımımızda saklı.
            </p>
            <p className="about-hero-text">
              Öncelikle iç mekan tasarımı dahil ihtiyacınız olan bütün mimari hizmetleri size sağlayabilmekteyiz.
              Cephe tasarımları, işlevsel plan çözümleri, zevkinize ve ihtiyacınıza göre kafe, konut, ofis gibi birçok iç mekan çözümü ve uygulaması tercihe bağlı sadece proje kontrollüğü, mimari proje uygulaması ve anahtar teslim gibi hizmetler verebilmekteyiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
