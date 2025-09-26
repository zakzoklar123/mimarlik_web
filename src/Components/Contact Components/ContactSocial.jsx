import React from 'react';

function ContactSocial() {
  return (
    <section className="contact-social-section">
      <div className="contact-social-container">
        <h2 className="contact-social-title">Sosyal Medyada Takip Edin</h2>
        <p className="contact-social-description">
          Güncel projelerimizi ve haberlerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.
        </p>
        
        <div className="social-links">
          <div className="social-link whatsapp">
            <div className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </div>
            <span>WhatsApp</span>
          </div>
          
          <div className="social-link instagram">
            <div className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
            </div>
            <span>Instagram</span>
          </div>
          
          <div className="social-link facebook">
            <div className="social-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
            </div>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSocial;
