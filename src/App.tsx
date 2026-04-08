import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

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

  return (
    <>
      <Navbar activeSection={activeSection} />
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
    </>
  );
};

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<AppDownload />} />
    </Routes>
  </div>
);

export default App;
