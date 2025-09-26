import React, { useState } from 'react';

function BlogPosts() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };
  const blogPosts = [
    {
      id: 1,
      title: "Modern Mimarlıkta Sürdürülebilir Tasarım Yaklaşımları",
      excerpt: "Günümüzde sürdürülebilir mimarlık, çevre dostu malzemeler ve enerji verimli tasarım çözümleri ile öne çıkıyor. Bu yazımızda modern mimarlıkta sürdürülebilir tasarım yaklaşımlarını inceliyoruz.",
      content: "Sürdürülebilir mimarlık, çevresel etkileri minimize eden, enerji verimli ve uzun vadeli ekonomik fayda sağlayan tasarım yaklaşımlarını içerir. Bu yaklaşım, gelecek nesiller için yaşanabilir bir dünya bırakma sorumluluğumuzun bir parçasıdır.\n\nModern sürdürülebilir mimarlıkta, pasif güneş enerjisi sistemleri, yağmur suyu toplama sistemleri ve yeşil çatı uygulamaları gibi yenilikçi çözümler ön plana çıkıyor. Bu sistemler sayesinde binalar kendi enerji ihtiyaçlarının büyük bir kısmını karşılayabiliyor.\n\nAyrıca, geri dönüştürülebilir malzemelerin kullanımı, atık üretimini azaltırken aynı zamanda estetik açıdan da çarpıcı sonuçlar ortaya çıkarıyor. Bambu, geri dönüştürülmüş ahşap ve doğal taş gibi malzemeler hem çevre dostu hem de dayanıklı alternatifler sunuyor.\n\nSürdürülebilir mimarlık sadece çevresel faydalar sağlamakla kalmıyor, aynı zamanda uzun vadeli ekonomik avantajlar da getiriyor. Enerji verimli binalar, işletme maliyetlerini önemli ölçüde düşürüyor ve bina değerini artırıyor. Yeşil bina sertifikaları (LEED, BREEAM) bu süreçte önemli bir rol oynuyor ve projelerin sürdürülebilirlik standartlarını belgeliyor.",
      author: "MKS Mimarlık",
      date: "15 Aralık 2024",
      category: "Mimarlık",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 dk okuma"
    },
    {
      id: 2,
      title: "İç Mimari Tasarımda Renk Psikolojisi",
      excerpt: "Renklerin insan psikolojisi üzerindeki etkilerini anlayarak, iç mekan tasarımlarında daha etkili çözümler üretebiliriz. Bu yazımızda renk psikolojisinin iç mimari tasarımdaki rolünü inceliyoruz.",
      content: "Renk psikolojisi, farklı renklerin insan duyguları ve davranışları üzerindeki etkilerini araştıran bir alandır. İç mimari tasarımda doğru renk seçimi, mekanın atmosferini ve kullanıcı deneyimini önemli ölçüde etkiler.\n\nMavi tonları sakinlik ve huzur hissi verirken, kırmızı enerji ve heyecan yaratır. Yeşil doğal ve dinlendirici bir etki bırakır, sarı ise neşe ve yaratıcılığı tetikler. Bu renklerin doğru kombinasyonu, mekanın işlevine uygun bir atmosfer yaratır.\n\nRenk seçiminde dikkat edilmesi gereken faktörler arasında mekanın büyüklüğü, doğal ışık miktarı, kullanım amacı ve hedef kitle yer alır. Küçük mekanlarda açık renkler kullanarak alan genişletilirken, büyük mekanlarda koyu renklerle sıcaklık yaratılabilir.\n\nAyrıca, renklerin kültürel anlamları da göz önünde bulundurulmalıdır. Farklı kültürlerde aynı renk farklı anlamlar taşıyabilir. Bu nedenle, tasarım yaparken hedef kitlenin kültürel özelliklerini de dikkate almak önemlidir.",
      author: "MKS Mimarlık",
      date: "10 Aralık 2024",
      category: "İç Mimari",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 dk okuma"
    },
    {
      id: 3,
      title: "3D Modelleme ve Sanal Gerçeklik Teknolojileri",
      excerpt: "Mimarlık sektöründe 3D modelleme ve sanal gerçeklik teknolojileri, projelerin görselleştirilmesi ve sunumu açısından devrim yaratıyor. Bu teknolojilerin avantajlarını keşfedin.",
      content: "3D modelleme ve VR teknolojileri, mimarlık projelerinin daha etkili sunulmasını sağlar. Müşteriler projeleri sanal ortamda deneyimleyebilir, tasarım kararları daha bilinçli alınabilir. Bu teknolojiler, projelerin gerçekçi görselleştirilmesini mümkün kılar.\n\n3D modelleme yazılımları (AutoCAD, Revit, SketchUp, 3ds Max) sayesinde detaylı ve doğru modeller oluşturulabilir. Bu modeller, malzeme özelliklerinden ışıklandırma hesaplamalarına kadar her detayı içerir.\n\nSanal gerçeklik (VR) teknolojisi ise müşterilerin projeyi 360 derece deneyimlemesini sağlar. VR gözlükleri ile mekanların içinde dolaşabilir, farklı açılardan inceleyebilir ve tasarım değişikliklerini anında görebilirler.\n\nBu teknolojiler aynı zamanda ekip içi iletişimi de güçlendirir. Mimarlar, mühendisler ve diğer paydaşlar aynı 3D model üzerinde çalışarak koordinasyonu artırabilir. Ayrıca, proje sunumlarında daha etkili ve ikna edici sunumlar yapılabilir.",
      author: "MKS Mimarlık",
      date: "5 Aralık 2024",
      category: "Teknoloji",
      image: "https://enstitu.ibb.istanbul/files/ismekOrg/Image/img_brans/brans_yenisitegaleri/3D_max/6.jpg",
      readTime: "9 dk okuma"
    },
    {
      id: 4,
      title: "Proje Yönetiminde Kalite Kontrol Süreçleri",
      excerpt: "Mimarlık projelerinde kalite kontrol, projenin başarısı için kritik önem taşır. Bu yazımızda etkili kalite kontrol süreçlerini ve uygulama yöntemlerini inceliyoruz.",
      content: "Kalite kontrol süreçleri, projenin her aşamasında standartlara uygunluğu sağlar. Planlama, tasarım, uygulama ve teslim aşamalarında uygulanan kontrol mekanizmaları proje başarısını garanti eder. Bu süreçler, projenin zamanında ve bütçe dahilinde tamamlanmasını sağlar.\n\nPlanlama aşamasında, proje gereksinimlerinin net bir şekilde tanımlanması ve kalite standartlarının belirlenmesi kritik önem taşır. Bu aşamada, müşteri beklentileri, teknik gereksinimler ve yasal düzenlemeler göz önünde bulundurulur.\n\nTasarım aşamasında ise, yaratıcılık ile teknik gereksinimler arasında denge kurulur. Tasarım çözümleri, işlevsellik, estetik ve sürdürülebilirlik açısından değerlendirilir. Bu aşamada, 3D modelleme ve simülasyon teknikleri kullanılarak tasarımın doğruluğu test edilir.\n\nUygulama aşamasında, sahada düzenli kontroller yapılır ve standartlara uygunluk sağlanır. Malzeme kalitesi, işçilik standartları ve güvenlik önlemleri sürekli olarak denetlenir. Teslim aşamasında ise, projenin tamamlandığından emin olunur ve müşteri memnuniyeti sağlanır.",
      author: "MKS Mimarlık",
      date: "1 Aralık 2024",
      category: "Proje Yönetimi",
      image: "https://www.bitrix24.com.tr/upload/optimizer/converted/upload/medialibrary/d1f/l0c5ij4zuh4tci7i139bwk5b7z5mhbb0.png.webp?1756125202487",
      readTime: "10 dk okuma"
    },
    {
      id: 5,
      title: "Mimari Tasarımda Doğal Işık Kullanımı",
      excerpt: "Doğal ışık, mimari tasarımın en önemli unsurlarından biridir. Bu yazımızda doğal ışığın etkili kullanımı ve tasarım stratejilerini ele alıyoruz.",
      content: "Doğal ışık, mekanların atmosferini ve kullanıcı deneyimini önemli ölçüde etkiler. Doğru pencere tasarımı, ışık kırıcı elemanlar ve yönlendirme stratejileri ile optimal doğal ışık elde edilebilir. Doğal ışık, sadece aydınlatma sağlamakla kalmaz, aynı zamanda mekanın ruh halini de belirler.\n\nGüneşin yönü ve açısı, mekanın doğal ışık almasını etkiler. Kuzey ışığı yumuşak ve sabit bir aydınlatma sağlarken, güney ışığı daha parlak ve sıcak bir etki yaratır. Doğu ve batı ışığı ise günün farklı saatlerinde değişken aydınlatma sağlar.\n\nPencere tasarımında, pencere boyutu, konumu ve şekli önemli faktörlerdir. Büyük pencereler daha fazla ışık sağlar ancak ısı kaybına neden olabilir. Bu nedenle, enerji verimli cam kullanımı ve doğru yalıtım önemlidir.\n\nIşık kırıcı elemanlar (perde, jaluzi, güneşlik) ile ışık kontrolü sağlanabilir. Bu elemanlar, güneşin zararlı etkilerini engellerken yeterli aydınlatmayı sağlar. Ayrıca, iç mekanda açık renkli yüzeyler kullanarak ışığın yansıması artırılabilir.",
      author: "MKS Mimarlık",
      date: "25 Kasım 2024",
      category: "Mimarlık",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 dk okuma"
    },
    {
      id: 6,
      title: "Sürdürülebilir Malzeme Seçimi Rehberi",
      excerpt: "Mimarlık projelerinde sürdürülebilir malzeme seçimi, çevresel etkileri minimize etmek için kritik önem taşır. Bu rehberde sürdürülebilir malzeme seçim kriterlerini inceliyoruz.",
      content: "Sürdürülebilir malzeme seçimi, çevresel etki, dayanıklılık, geri dönüşüm potansiyeli ve yerel kaynak kullanımı gibi faktörleri dikkate alır. Doğru malzeme seçimi, projenin sürdürülebilirliğini artırır. Bu süreçte, malzemelerin yaşam döngüsü analizi yapılır ve çevresel etkileri değerlendirilir.\n\nYerel malzeme kullanımı, nakliye maliyetlerini ve karbon ayak izini azaltır. Ayrıca, yerel ekonomiyi destekler ve bölgesel kimliği güçlendirir. Bambu, geri dönüştürülmüş ahşap, doğal taş ve toprak gibi malzemeler sürdürülebilir alternatifler sunar.\n\nMalzeme seçiminde, dayanıklılık ve bakım gereksinimleri de önemlidir. Uzun ömürlü malzemeler, değişim maliyetlerini azaltır ve kaynak tüketimini minimize eder. Ayrıca, malzemelerin geri dönüştürülebilir olması, atık üretimini azaltır.\n\nSertifikalı malzemeler (FSC, Cradle to Cradle) kullanarak sürdürülebilirlik standartlarını karşılayabilirsiniz. Bu malzemeler, çevresel ve sosyal sorumluluk kriterlerini karşılar ve projenin sürdürülebilirlik puanını artırır.",
      author: "MKS Mimarlık",
      date: "20 Kasım 2024",
      category: "Sürdürülebilirlik",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "12 dk okuma"
    }
  ];

  return (
    <section className="blog-posts-section">
      <div className="blog-posts-container">
        <h2 className="blog-posts-title">SON YAZILAR</h2>
        <p className="blog-posts-description">
          Mimarlık ve tasarım dünyasından güncel içerikler ve uzman görüşleri
        </p>
        
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-post-category">
                  {post.category}
                </div>
              </div>
              <div className="blog-post-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-meta">
                  <span className="blog-post-author">{post.author}</span>
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
                <button 
                  className="blog-post-read-more"
                  onClick={() => openModal(post)}
                >
                  Devamını Oku
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div className="blog-modal active" onClick={closeModal}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="blog-modal-header">
              <div className="blog-modal-category">{selectedPost.category}</div>
              <h2 className="blog-modal-title">{selectedPost.title}</h2>
              <div className="blog-modal-meta">
                <span className="blog-modal-author">{selectedPost.author}</span>
                <span className="blog-modal-date">{selectedPost.date}</span>
                <span className="blog-modal-read-time">{selectedPost.readTime}</span>
              </div>
            </div>
            <div className="blog-modal-body">
              <div className="blog-modal-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
              <div className="blog-modal-text">
                <p className="blog-modal-excerpt">{selectedPost.excerpt}</p>
                <p className="blog-modal-content-text">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BlogPosts;
