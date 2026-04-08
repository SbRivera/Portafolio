import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const UniversityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17c0 3 4.5 5 10 5s10-2 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 7v10M22 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SchoolIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const listRef = useStaggerAnimation<HTMLDivElement>('.edu-card', { stagger: 180, duration: 750 });

  const educationItems = [
    {
      institution: t('projects.items.university.name'),
      degree: t('projects.items.university.degree'),
      location: t('projects.items.university.location'),
      period: t('projects.items.university.period'),
      status: t('projects.items.university.status'),
      icon: <UniversityIcon />,
      type: 'university',
    },
    {
      institution: t('projects.items.highschool.name'),
      degree: t('projects.items.highschool.degree'),
      location: t('projects.items.highschool.location'),
      period: t('projects.items.highschool.period'),
      status: t('projects.items.highschool.status'),
      icon: <SchoolIcon />,
      type: 'highschool',
    },
  ];

  const isInProgress = (status: string) =>
    status === 'En curso' || status === 'In progress' || status === 'In Progress';

  return (
    <section id="projects" className="section">
      <h2 ref={titleRef} className="section-title font-cinzel">
        {t('projects.title')}
      </h2>

      <div ref={listRef} className="grid grid-2">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="card edu-card"
            style={{ opacity: 0, textAlign: 'center' }}
          >
            <div style={{
              color: 'var(--accent-primary)',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}>
              {item.icon}
            </div>

            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '0.75rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
            }}>
              {item.degree}
            </h3>

            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '1.25rem',
              color: 'var(--text-primary)',
              fontWeight: 600,
            }}>
              {item.institution}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <LocationIcon />
                <span>{item.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <CalendarIcon />
                <span>{item.period}</span>
              </div>
            </div>

            <span className={`status-badge ${isInProgress(item.status) ? 'status-active' : 'status-done'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
