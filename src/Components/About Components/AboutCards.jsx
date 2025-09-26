import React from 'react';
import '../../Pages Css/About css/AboutCards.css';

const AboutCards = () => {
  return (
    <div className="about-cards-section">
      <h2 className="about-cards-title">Neden Bizi Tercih Etmelisiniz?</h2>
      <div className="about-card">
        <div className="about-card-image">
          <img src="https://efeogluas.com/wp-content/uploads/2024/01/sade-villa-projesi-ic-mimari-mutfak-tasarimi.webp" alt="En Büyük Gösteriş Sadeliktir" />
        </div>
        <div className="about-card-content">
          <h3>En Büyük Gösteriş Sadeliktir</h3>
          <p>
            Mimarlık Web olarak, her projede sadeliği ön planda tutarız. Gereksiz detaylardan arındırılmış,
            fonksiyonel ve estetik tasarımlarımızla mekanlarınıza ferahlık ve zarafet katıyoruz.
            Sadelik, bizim için sadece bir tasarım tercihi değil, aynı zamanda kalitenin ve şıklığın bir yansımasıdır.
            Modern mimarinin çizgilerini takip ederken, özgün ve zamansız eserler yaratmayı hedefliyoruz.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="about-card-image">
          <img src="https://efeogluas.com/wp-content/uploads/2024/01/sade-villa-projesi-ic-mimari-salon-tasarimi.webp" alt="Yaşayan Tasarımlar" />
        </div>
        <div className="about-card-content">
          <h3>Yaşayan Tasarımlar</h3>
          <p>
            Tasarımlarımız sadece görsel olarak çekici değil, aynı zamanda yaşayan ve nefes alan mekanlar sunar.
            Kullanıcıların ihtiyaçlarına ve yaşam tarzlarına uygun, işlevsel ve konforlu alanlar yaratmaya özen gösteririz.
            Doğal ışıklandırma, malzeme seçimi ve mekan düzenlemesi ile her projemizde benzersiz bir atmosfer oluştururuz.
            Mekanlarınızda geçirdiğiniz her anın keyifli ve verimli olmasını sağlıyoruz.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="about-card-image">
          <img src="https://gizempakyurek.com/uploads/images/1636902832732-cagdas-ic-mimari-stili.jpg" alt="Hayatınıza Renk Katıyoruz" />
        </div>
        <div className="about-card-content">
          <h3>Hayatınıza Renk Katıyoruz</h3>
          <p>
            Mimarlık Web olarak, projelerimize sadece tuğla ve harçla değil, aynı zamanda renk ve ruh katıyoruz.
            Mekanlarınızın kişiliğini yansıtan, ilham verici ve enerjik tasarımlar sunarız.
            Renklerin ve dokuların doğru kullanımıyla, mekanlarınıza benzersiz bir karakter ve canlılık kazandırırız.
            Hayatınıza değer katan, keyifli ve estetik mekanlar yaratmak için buradayız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
