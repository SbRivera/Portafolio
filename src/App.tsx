import React, { useState, useEffect } from 'react';
import './i18n';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AppDownload from './components/AppDownload';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [appModalOpen, setAppModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = appModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [appModalOpen]);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onOpenApp={() => setAppModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <p className="font-cinzel">© 2025 Sebastian Rivera.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.4rem', color: 'var(--text-muted)' }}>
          Diseñado con React & TypeScript
        </p>
      </footer>

      <AppDownload isOpen={appModalOpen} onClose={() => setAppModalOpen(false)} />
    </div>
  );
};

export default App;
