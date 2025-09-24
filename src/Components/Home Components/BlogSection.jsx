import React from 'react';

function BlogSection() {
  const blogPosts = [
    { title: "İç Mimarlıkta Psikolojik Etkiler", img: "https://media.licdn.com/dms/image/v2/D4E12AQG2VX4yR41oag/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692638660109?e=2147483647&v=beta&t=bSf6UVBHHxlacl4yW6po4S2uKFelvZ5gRTJ0PkTkjgw" },
    { title: "Küçük Alanlar İçin Büyük Fikirler",img: "https://themore.com.tr/wp-content/uploads/2024/10/themore-concept-blog-3.jpg" },
    { title: "Doğayla İç İçe Tasarımlar", img: "https://iklimepolat.com/wp-content/uploads/Hiroshi-Senju-Museum-Ryue-Nishizawa-cover-1024x768.jpg" },
  ];

  return (
    <section id="blog" className="blog-section">
      <p className="eyebrow">MKS MİMARLIK MÜHENDİSLİK</p>
      <h2>BLOG</h2>

      <div className="blog-featured">
        <article className="blog-featured-left">
          <a href="#" className="blog-featured-left-link">
            <img src={blogPosts[0].img} alt={blogPosts[0].title} />
            <div className="meta">
              <h3>{blogPosts[0].title}</h3>
              <span>{blogPosts[0].author}</span>
            </div>
          </a>
        </article>

        <div className="blog-featured-right">
          {blogPosts.slice(1).map((post, index) => (
            <a href="#" key={index} className="blog-row">
              <img src={post.img} alt={post.title} />
              <div className="meta">
                <h4>{post.title}</h4>
                <span>{post.author}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
