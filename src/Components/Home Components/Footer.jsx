import React from 'react';

function Footer() {
  return (
    <footer className="main-footer">
      <div className='footer-left'>
      <div className="footer-column">
        <h4>HİZMETLERİMİZ</h4>
        <ul>
          <li><a href="#">Mimari Proje</a></li>
          <li><a href="#">İç Mimari</a></li>
          <li><a href="#">3D Modelleme</a></li>
          <li><a href="#">Taahhüt</a></li>
          <li><a href="#">Proje Danışmanlık</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>SİTE HARİTASI</h4>
        <ul>
          <li><a href="#">Anasayfa</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Hizmetlerimiz</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>İLETİŞİM BİLGİLERİ</h4>
        <p>Adres: Ertuğrulgazi Mahallesi Fidanlık Sokak No:2/2 Tepebaşı / Eskişehir</p>
        <p>Telefon: 0 850 885 0600</p>
        <p>Email: info@pigamimarlik.com</p>
      </div>
</div>
<div className='footer-right'>
      <div className="footer-column footer-map">
        <h4>KONUMUMUZ</h4>
        <div className="google-map-placeholder">
          {/* Placeholder for Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.079203666271!2d30.50503031539243!3d39.77098497944715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf227318728d8b%3A0xcb1b5e7d5a5a1f6a!2sErtu%C4%9Frulgazi%20Mahallesi%2C%20Fidanl%C4%B1k%20Sk.%20No%3A2%2F2%2C%2026140%20Tepeba%C5%9F%C4%B1%2FEski%C5%9Fehir!5e0!3m2!1str!2str!4v1678200000000!5m2!1str!2str"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
</div>
    </footer>
  );
}

export default Footer;
