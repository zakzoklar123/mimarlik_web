import React from 'react';

function ProjectsSection() {
  const projects = [
    { title: "Salon Tasarımı", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://www.raykonsept.com/wp-content/uploads/salon-dekorasyonu-proje-66-1.jpg" },
    { title: "Yatak Odası Tasarımı", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://sizindukkan.com/cdn/shop/files/4_60bab2f1-9b6e-4404-a4ed-b96ff198bf5b.jpg?v=1743678562" },
    { title: "Villa Projesi", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://i.pinimg.com/originals/bc/04/b2/bc04b299c8d03b761de1d19cab7c26da.jpg" },
    { title: "Toplu Konut Projesi", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://projeskop.com/uploads/default/seyran-sehir-basaksehir-projesi.jpg" },
    { title: "Spor Salonu Projesi", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://algedra.com.tr/assets/imgs/project/U3EbsfagrXWseGC-sK0E4T42.jpg" },
    { title: "Site Projesi", description: "MKS MİMARLIK MÜHENDİSLİK", img: "https://www.projedefirsat.com/dosyalar/proje/7991/cukurova-liparis-evleri-20250213122725.jpg" },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projelerimiz</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href="#" className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
