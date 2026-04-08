import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate, stagger } from 'animejs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MobileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 9v4" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 9v4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 16l4-4 4 4 4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToolsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const categoryIcons: Record<string, React.ReactNode> = {
  mobile: <MobileIcon />,
  programming: <CodeIcon />,
  database: <DatabaseIcon />,
  analytics: <ChartIcon />,
  tools: <ToolsIcon />,
};

const SkillCard: React.FC<{
  title: string;
  iconKey: string;
  skills: { name: string; level: number }[];
}> = ({ title, iconKey, skills }) => {
  const cardRef = useScrollAnimation<HTMLDivElement>({ duration: 700 });
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barsRef.current) {
            const bars = barsRef.current.querySelectorAll<HTMLDivElement>('.skill-bar-fill');
            bars.forEach((bar) => {
              const target = bar.getAttribute('data-level') || '0';
              animate(bar, {
                width: [`0%`, `${target}%`],
                duration: 1000,
                ease: 'outCubic',
                delay: stagger(80),
              });
            });
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="card skill-card" style={{ opacity: 0 }}>
      <div className="skill-card-header">
        <span className="skill-icon" style={{ color: 'var(--accent-primary)' }}>
          {categoryIcons[iconKey]}
        </span>
        <h3 style={{
          fontSize: '1.15rem',
          color: 'var(--accent-primary)',
          fontFamily: 'var(--font-heading)',
          margin: 0,
        }}>
          {title}
        </h3>
      </div>

      <div ref={barsRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.4rem',
            }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{skill.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                data-level={skill.level}
                style={{ width: '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });

  const skillCategories = [
    {
      key: 'mobile',
      title: t('skills.categories.mobile'),
      skills: [
        { name: t('skills.items.flutter'), level: 90 },
        { name: t('skills.items.ui_design'), level: 85 },
        { name: t('skills.items.mobile_dev'), level: 88 },
        { name: t('skills.items.algorithms'), level: 82 },
      ],
    },
    {
      key: 'programming',
      title: t('skills.categories.programming'),
      skills: [
        { name: t('skills.items.java'), level: 88 },
        { name: t('skills.items.javascript'), level: 85 },
        { name: t('skills.items.python'), level: 80 },
        { name: 'Dart', level: 90 },
      ],
    },
    {
      key: 'database',
      title: t('skills.categories.database'),
      skills: [
        { name: t('skills.items.sql'), level: 92 },
        { name: t('skills.items.data_analysis'), level: 85 },
        { name: 'Database Design', level: 78 },
      ],
    },
    {
      key: 'analytics',
      title: t('skills.categories.analytics'),
      skills: [
        { name: t('skills.items.kpi'), level: 85 },
        { name: 'Performance Metrics', level: 80 },
        { name: 'Data Visualization', level: 75 },
      ],
    },
    {
      key: 'tools',
      title: t('skills.categories.tools'),
      skills: [
        { name: 'Git / GitHub', level: 88 },
        { name: 'VS Code', level: 92 },
        { name: 'Android Studio', level: 85 },
        { name: 'Debugging', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 ref={titleRef} className="section-title font-cinzel">
        {t('skills.title')}
      </h2>

      <div className="grid grid-3">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.key}
            iconKey={category.key}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
