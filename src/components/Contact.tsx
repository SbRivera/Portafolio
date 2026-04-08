import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

/* ── SVG icons ─────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const UniversityMailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17c0 3 4.5 5 10 5s10-2 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SmallMailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── Component ─────────────────────────────────────── */
const Contact: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const leftRef = useScrollAnimation<HTMLDivElement>({ translateX: [-30, 0], translateY: [0, 0], duration: 800 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ translateX: [30, 0], translateY: [0, 0], duration: 800, delay: 150 });
  const refsRef = useStaggerAnimation<HTMLDivElement>('.ref-card', { stagger: 120, duration: 650 });

  const socialLinks = [
    { name: 'LinkedIn',          icon: <LinkedInIcon />,      url: 'https://linkedin.com/in/sebastian-rivera-novillo', color: '#0077b5' },
    { name: 'GitHub',            icon: <GitHubIcon />,        url: 'https://github.com/SbRivera',                     color: '#333'    },
    { name: 'WhatsApp',          icon: <WhatsAppIcon />,      url: 'https://wa.me/593995085689',                      color: '#25d366' },
    { name: 'Email Personal',    icon: <MailIcon />,          url: 'mailto:sebastianriv2112@gmail.com',               color: '#ea4335' },
    { name: 'Email Institucional', icon: <UniversityMailIcon />, url: 'mailto:sbrivera2@espe.edu.ec',                color: '#34a853' },
  ];

  return (
    <section id="contact" className="section">
      <h2 ref={titleRef} className="section-title font-cinzel">
        {t('contact.title')}
      </h2>

      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        margin: '0 auto 3rem auto',
      }}>
        {t('contact.description')}
      </p>

      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        {/* Social links */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div className="card">
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '1.75rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
            }}>
              {t('contact.connectTitle')}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '0.85rem',
              marginBottom: '2rem',
            }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  style={{ '--link-color': link.color } as React.CSSProperties}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span style={{ fontWeight: 500 }}>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Direct contact */}
        <div ref={rightRef} style={{ opacity: 0 }}>
          <div className="card">
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '1rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
              textAlign: 'center',
            }}>
              {t('contact.proposalTitle')}
            </h3>

            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}>
              {t('contact.proposalText')}
            </p>

            <a
              href="mailto:sebastianriv2112@gmail.com?subject=Oportunidad%20Profesional&body=Hola%20Sebastián,%0D%0A"
              className="btn"
              style={{
                width: '100%',
                fontSize: '1.05rem',
                padding: '0.9rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                marginBottom: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <MailIcon />
              {t('contact.buttons.email')}
            </a>

            <a
              href="https://wa.me/593995085689?text=Hola%20Sebastián,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                fontSize: '1.05rem',
                padding: '0.9rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
              }}
            >
              <WhatsAppIcon />
              {t('contact.buttons.whatsapp')}
            </a>

            <div className="contact-info-box">
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Email:</strong> sebastianriv2112@gmail.com
              </p>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Tel:</strong> +593 995 085 689
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* References */}
      <div style={{ marginTop: '4rem' }}>
        <h3 className="font-cinzel" style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          color: 'var(--accent-primary)',
          fontSize: '1.8rem',
        }}>
          {t('contact.references.title')}
        </h3>

        <div ref={refsRef} className="grid grid-3">
          {Object.entries(
            t('contact.references.contacts', { returnObjects: true }) as Record<string, { name: string; title: string; phone: string; email: string }>
          ).map(([key, ref]) => (
            <div key={key} className="card ref-card" style={{ opacity: 0, textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <PersonIcon />
              </div>

              <h4 style={{
                fontSize: '1.1rem',
                marginBottom: '0.4rem',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-heading)',
              }}>
                {ref.name}
              </h4>

              <p style={{
                fontSize: '0.9rem',
                marginBottom: '1.25rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}>
                {ref.title}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <PhoneIcon />
                  <span style={{ fontSize: '0.875rem' }}>{ref.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <SmallMailIcon />
                  <span style={{ fontSize: '0.875rem' }}>{ref.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

