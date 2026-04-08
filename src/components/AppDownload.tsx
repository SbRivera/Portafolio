import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate } from 'animejs';

interface AppDownloadProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppDownload: React.FC<AppDownloadProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      animate(overlayRef.current, {
        opacity: [0, 1],
        duration: 250,
        ease: 'outQuad',
      });
      animate(modalRef.current, {
        scale: [0.88, 1],
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 380,
        ease: 'outBack',
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      animate(modalRef.current, {
        scale: [1, 0.9],
        opacity: [1, 0],
        duration: 200,
        ease: 'inQuad',
      });
      animate(overlayRef.current, {
        opacity: [1, 0],
        duration: 250,
        ease: 'inQuad',
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  const features = [
    t('app.features.feature1'),
    t('app.features.feature2'),
    t('app.features.feature3'),
    t('app.features.feature4'),
  ];

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleClose}>
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{ opacity: 0 }}
      >
        {/* Close button */}
        <button className="modal-close" onClick={handleClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="app-icon-container">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="18" fill="url(#appIconGradient)"/>
              <path d="M36 14C24.954 14 16 22.954 16 34C16 45.046 24.954 54 36 54C47.046 54 56 45.046 56 34C56 22.954 47.046 14 36 14Z" fill="rgba(255,255,255,0.15)"/>
              <path d="M36 20C28.268 20 22 26.268 22 34C22 41.732 28.268 48 36 48C43.732 48 50 41.732 50 34C50 26.268 43.732 20 36 20Z" fill="rgba(255,255,255,0.1)"/>
              <path d="M28 34C28 29.582 31.582 26 36 26C40.418 26 44 29.582 44 34" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="36" cy="38" r="4" fill="rgba(255,255,255,0.9)"/>
              <path d="M30 46L33 41M42 46L39 41" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="appIconGradient" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00d4ff"/>
                  <stop offset="1" stopColor="#0066cc"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="font-cinzel modal-title">{t('app.title')}</h2>
          <p className="modal-subtitle">{t('app.subtitle')}</p>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-description">{t('app.description')}</p>

          <ul className="app-features-list">
            {features.map((feature, i) => (
              <li key={i} className="app-feature-item">
                <span className="feature-check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="app-requirements">
            <span className="requirement-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="18" r="1" fill="currentColor"/>
              </svg>
              Android 6.0+
            </span>
            <span className="requirement-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('app.size')}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <a
            href={`${process.env.PUBLIC_URL}/AventuraEnGalapagosAndroid.apk`}
            download="AventuraEnGalapagos.apk"
            className="btn btn-download"
            onClick={() => {
              setTimeout(handleClose, 600);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('app.download')}
          </a>
          <p className="modal-warning">{t('app.warning')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
