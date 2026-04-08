import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const AppDownload: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="app-page">
      <button className="app-page-back" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{t('app.back')}</span>
      </button>

      <div className="app-page-card">
        {/* Image placeholder */}
        <div className="app-page-image">
          <img
            src={`${process.env.PUBLIC_URL}/aventura en galapagos logo.png`}
            alt={t('app.title') as string}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.classList.add('app-page-image--placeholder');
            }}
          />
          <div className="app-page-image-fallback">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
              <path d="M9 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="app-page-info">
          <h2 className="font-cinzel app-page-title">{t('app.title')}</h2>
          <p className="app-page-subtitle">{t('app.subtitle')}</p>

          <div className="app-page-badges">
            <span className="requirement-badge">Android 6.0+</span>
            <span className="requirement-badge">{t('app.size')}</span>
          </div>

          <a
            href={`${process.env.PUBLIC_URL}/AventuraEnGalapagosAndroid.apk`}
            download="AventuraEnGalapagos.apk"
            className="btn app-page-download"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('app.download')}
          </a>

          <p className="app-page-warning">{t('app.warning')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
