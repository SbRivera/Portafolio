import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate, createTimeline } from 'animejs';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = createTimeline({ defaults: { ease: 'outCubic' } });

    tl.add(titleRef.current!, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
    })
    .add(subtitleRef.current!, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
    }, '-=500')
    .add(descRef.current!, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
    }, '-=400')
    .add(btnsRef.current!, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    }, '-=300')
    .add(arrowRef.current!, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 500,
    }, '-=100');

    // Scroll-bob loop for arrow
    animate(arrowRef.current!, {
      translateY: [0, 8],
      alternate: true,
      loop: true,
      duration: 1200,
      ease: 'inOutSine',
      delay: 1800,
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title font-cinzel" style={{ opacity: 0 }}>
          {t('hero.title')}
        </h1>
        <p ref={subtitleRef} className="hero-subtitle font-playfair" style={{ opacity: 0 }}>
          {t('hero.subtitle')}
        </p>
        <p ref={descRef} className="hero-description" style={{ opacity: 0 }}>
          {t('hero.description')}
        </p>
        <div ref={btnsRef} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
          <button className="btn" onClick={() => scrollToSection('contact')}>
            {t('contact.title')}
          </button>
          <a
            href="https://drive.google.com/file/d/1HbK7f_AeUo5d5LQM0AyaDMNW6ppqtu3H/view?usp=sharing"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('buttons.downloadCV')}
          </a>
        </div>
      </div>

      <div
        ref={arrowRef}
        className="hero-scroll-arrow"
        onClick={() => scrollToSection('about')}
        style={{ opacity: 0 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
