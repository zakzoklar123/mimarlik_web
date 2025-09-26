import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form gönderildi:', formData);
    alert('Mesajınız başarıyla gönderildi!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Bize Mesaj Gönderin</h2>
        <p className="contact-form-description">
          Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınızı ve soyadınızı girin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="E-posta adresinizi girin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon Numarası</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon numaranızı girin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesaj *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Mesajınızı buraya yazın"
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">
            Mesaj Gönder
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
