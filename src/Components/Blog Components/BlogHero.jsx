import React from 'react';

function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero-container">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">BLOG</h1>
          <p className="blog-hero-subtitle">
            Mimarlık ve tasarım dünyasından güncel haberler
          </p>
          <p className="blog-hero-description">
            MKS Mimarlık olarak, mimarlık, iç mimari, 3D modelleme ve proje yönetimi konularında uzman görüşlerimizi, proje örneklerimizi ve sektördeki gelişmeleri sizlerle paylaşıyoruz.
          </p>
        </div>
        <div className="blog-hero-image">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Blog" />
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
