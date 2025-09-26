import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-column">
        <h4>HİZMETLERİMİZ</h4>
        <ul>
          <li><Link to="/services">Mimari Proje</Link></li>
          <li><Link to="/services">İç Mimari</Link></li>
          <li><Link to="/services">3D Modelleme</Link></li>
          <li><Link to="/services">Proje Danışmanlık</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>SİTE HARİTASI</h4>
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/about">Hakkımızda</Link></li>
          <li><Link to="/services">Hizmetlerimiz</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">İletişim</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>İLETİŞİM BİLGİLERİ</h4>
        <p>Adres: Merkez Mahallesi İş Merkezi No:15 Kat:3 Beşiktaş / İstanbul</p>
        <p>Telefon: 0 222 000 0000</p>
        <p>Email: info@mksmimarlik.com</p>
      </div>

      <div className="footer-column footer-map">
        <h4>KONUMUMUZ</h4>
        <div className="google-map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.123456789!2d28.987654321!3d41.012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzQ0LjQiTiAyOMKwNTknMTUuNiJF!5e0!3m2!1str!2str!4v1678200000000!5m2!1str!2str"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
