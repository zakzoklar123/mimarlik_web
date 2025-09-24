import '../Pages Css/Home css/General.css';
import '../Pages Css/Home css/AppBar.css';
import '../Pages Css/Home css/HeroSection.css';
import '../Pages Css/Home css/ServicesSection.css';
import '../Pages Css/Home css/ProjectsSection.css';
import '../Pages Css/Home css/AboutSection.css';
import '../Pages Css/Home css/BlogSection.css';
import '../Pages Css/Home css/PartnersSection.css';
import '../Pages Css/Home css/DesignInfoSection.css';
import '../Pages Css/Home css/Footer.css';

import AppBar from '../Components/Home Components/AppBar';
import HeroSection from '../Components/Home Components/HeroSection';
import AboutSection from '../Components/Home Components/AboutSection';
import ServicesSection from '../Components/Home Components/ServicesSection';
import DesignInfoSection from '../Components/Home Components/DesignInfoSection';
import ProjectsSection from '../Components/Home Components/ProjectsSection';
import PartnersSection from '../Components/Home Components/PartnersSection';
import BlogSection from '../Components/Home Components/BlogSection';
import Footer from '../Components/Home Components/Footer';

function App() {
  return (
    <>
      <AppBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DesignInfoSection />
        <ProjectsSection />
        <PartnersSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
