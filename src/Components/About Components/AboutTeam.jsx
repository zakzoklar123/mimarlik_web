import React from 'react';
import '../../Pages Css/About css/AboutTeam.css';

const AboutTeam = () => {
  const teamMembers = [
    {
      image: 'https://i.hizliresim.com/504x5b1.PNG',
      name: 'Ayşe Yılmaz',
      profession: 'Baş Mimar',
      experience: '12 Yıl Deneyim',
      specialization: 'Konut ve Ticari Projeler',
      education: 'İTÜ Mimarlık Fakültesi',
    },
    {
      image: 'https://i.hizliresim.com/3hkccp1.PNG',
      name: 'Can Demir',
      profession: 'İnşaat Mühendisi',
      experience: '8 Yıl Deneyim',
      specialization: 'Yapı Statiği ve Proje Yönetimi',
      education: 'ODTÜ İnşaat Mühendisliği',
    },
    {
      image: 'https://i.hizliresim.com/5nfyhnv.PNG',
      name: 'Elif Kaya',
      profession: 'İç Mimar',
      experience: '6 Yıl Deneyim',
      specialization: 'Modern İç Mekan Tasarımı',
      education: 'Mimar Sinan Güzel Sanatlar Üniversitesi',
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
      name: 'Mehmet Öztürk',
      profession: 'Proje Koordinatörü',
      experience: '10 Yıl Deneyim',
      specialization: 'İnşaat Denetimi ve Kalite Kontrol',
      education: 'YTÜ İnşaat Mühendisliği',
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face',
      name: 'Zeynep Aksoy',
      profession: 'Peyzaj Mimarı',
      experience: '7 Yıl Deneyim',
      specialization: 'Sürdürülebilir Peyzaj Tasarımı',
      education: 'İTÜ Peyzaj Mimarlığı',
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face',
      name: 'Ali Vural',
      profession: '3D Tasarım Uzmanı',
      experience: '5 Yıl Deneyim',
      specialization: 'Görselleştirme ve Animasyon',
      education: 'Bilkent Üniversitesi Grafik Tasarım',
    },
  ];

  return (
    <section className="about-team-section">
      <h2 className="about-team-title">Ekibimiz</h2>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <div className="member-image-wrapper">
              <img 
                src={member.image} 
                alt={member.name}
                onError={(e) => {
                  e.target.style.objectPosition = 'center center';
                }}
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-profession">{member.profession}</p>
              <p className="member-experience">{member.experience}</p>
              <p className="member-specialization">{member.specialization}</p>
              <p className="member-education">{member.education}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
