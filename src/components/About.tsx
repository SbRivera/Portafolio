import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17c0 3 4.5 5 10 5s10-2 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 7v10M22 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LanguageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const About: React.FC = () => {
  const { t } = useTranslation();
  const leftRef = useScrollAnimation<HTMLDivElement>({ translateX: [-30, 0], translateY: [0, 0], duration: 800 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ translateX: [30, 0], translateY: [0, 0], duration: 800, delay: 150 });
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });

  const contactInfo = [
    { icon: <LocationIcon />, label: t('about.labelLocation'), value: t('about.location') },
    { icon: <MailIcon />,     label: t('about.labelEmail'),    value: t('about.email') },
    { icon: <PhoneIcon />,    label: t('about.labelPhone'),    value: t('about.phone') },
    { icon: <GraduationIcon />, label: t('about.labelEducation'), value: t('about.education') },
    { icon: <LanguageIcon />, label: t('about.labelLanguages'), value: t('about.languages') },
  ];

  return (
    <section id="about" className="section">
      <h2 ref={titleRef} className="section-title font-cinzel">
        {t('about.title')}
      </h2>

      <div className="grid grid-2" style={{ alignItems: 'center' }}>
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div className="card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem' }}>
              {t('about.description')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--border-color)',
                  }}
                >
                  <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <strong style={{ color: 'var(--accent-primary)' }}>{info.label}:</strong>
                    <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)' }}>
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={rightRef} style={{ opacity: 0 }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="profile-photo-container">
              <img
                src={`${process.env.PUBLIC_URL}/xd1.png`}
                alt="Sebastian Rivera"
                className="profile-photo"
              />
            </div>

            <h3 className="font-playfair" style={{
              fontSize: '1.5rem',
              color: 'var(--accent-primary)',
              marginBottom: '1rem',
            }}>
              Sebastián Rivera
            </h3>

            <p style={{
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
            }}>
              "La excelencia no es una habilidad, es una actitud."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
