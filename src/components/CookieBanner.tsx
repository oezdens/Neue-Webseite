import { useState, useEffect, CSSProperties } from 'react';
import { X, Cookie, ChevronDown } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

// Custom Switch Component with inline styles
function CustomSwitch({ 
  checked, 
  onChange, 
  disabled 
}: { 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
  disabled?: boolean;
}) {
  const switchStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: checked ? '#db2777' : 'rgba(148, 163, 184, 0.3)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s',
    opacity: disabled ? 0.5 : 1,
    padding: 0,
  };

  const thumbStyle: CSSProperties = {
    position: 'absolute',
    top: '2px',
    left: checked ? '22px' : '2px',
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    transition: 'left 0.2s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  return (
    <button
      type="button"
      style={switchStyle}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      <span style={thumbStyle} />
    </button>
  );
}

// Custom Button Component with inline styles
function CustomButton({ 
  children, 
  onClick, 
  variant = 'primary',
  style
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  variant?: 'primary' | 'outline';
  style?: CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: CSSProperties = {
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    ...style,
  };

  // Primary style uses the same purple-to-blue gradient as the header 'Contact' button
  const purpleGradient = 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)';
  const buttonStyle = variant === 'primary' ? {
    ...baseStyle,
    background: purpleGradient,
    color: '#fff',
    border: 'none',
    boxShadow: isHovered
      ? '0 14px 40px rgba(109,40,217,0.18), 0 6px 20px rgba(124,58,237,0.08)'
      : '0 6px 18px rgba(99,102,241,0.06)',
    transform: isHovered ? 'translateY(-2px)' : undefined,
  } : {
    ...baseStyle,
    backgroundColor: isHovered ? '#1e293b' : 'transparent',
    color: isHovered ? '#fff' : '#e2e8f0',
    border: '1px solid #475569',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [detailsHovered, setDetailsHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [closeHovered, setCloseHovered] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 100);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleOnlyNecessary = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const toggleCategory = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return;
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!isVisible) return null;

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      required: true,
    },
    {
      id: 'analytics',
      name: 'Analytische Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln.',
      required: false,
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketingkampagnen bereitzustellen.',
      required: false,
    },
    {
      id: 'preferences',
      name: 'Präferenz Cookies',
      description: 'Diese Cookies ermöglichen es der Website, sich Ihre Einstellungen zu merken und ein verbessertes, persönlicheres Erlebnis zu bieten.',
      required: false,
    },
  ];

  const backdropStyle: CSSProperties = {
    position: 'fixed',
    inset: '0',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: isAnimating ? 1 : 0,
    transition: 'opacity 0.3s',
  };

  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '672px',
    backgroundColor: '#0b1220',
    backgroundImage: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(124,58,237,0.03))',
    borderRadius: '16px',
    boxShadow: '0 20px 40px -10px rgba(16, 24, 40, 0.6), 0 6px 18px rgba(124,58,237,0.06)',
    overflow: 'hidden',
    margin: '0',
    transform: isAnimating ? 'translateY(0)' : 'translateY(150px)',
    opacity: isAnimating ? 1 : 0,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const contentStyle: CSSProperties = {
    padding: '14px',
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
  };

  const iconContainerStyle: CSSProperties = {
    flexShrink: 0,
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(219, 39, 119, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle: CSSProperties = {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '8px',
    lineHeight: '1.4',
  };

  const descriptionStyle: CSSProperties = {
    color: '#cbd5e1',
    fontSize: '12px',
    lineHeight: '1.6',
  };

  const detailsButtonStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  padding: '10px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    marginBottom: '16px',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    borderColor: detailsHovered ? '#475569' : '#334155',
  };

  const categoryStyle: CSSProperties = {
    padding: '8px',
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '8px',
    border: '1px solid #334155',
    marginBottom: '12px',
  };

  const categoryHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px',
  };

  const categoryTitleStyle: CSSProperties = {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const badgeStyle: CSSProperties = {
    padding: '2px 8px',
    backgroundColor: '#334155',
    borderRadius: '4px',
    fontSize: '12px',
    color: '#cbd5e1',
  };

  const categoryDescStyle: CSSProperties = {
    color: '#94a3b8',
    fontSize: '11px',
    lineHeight: '1.4',
  };

  const buttonsContainerStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
    gap: '8px',
  };

  const footerStyle: CSSProperties = {
    backgroundColor: 'rgba(2, 6, 23, 0.5)',
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid #1e293b',
    flexWrap: 'wrap',
    gap: '12px',
  };

  const linkStyle: CSSProperties = {
    color: linkHovered ? '#cbd5e1' : '#94a3b8',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  const closeButtonStyle: CSSProperties = {
    color: closeHovered ? '#cbd5e1' : '#64748b',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s',
  };

  const detailsWrapperStyle: CSSProperties = {
    marginBottom: '12px',
    maxHeight: '160px',
    overflowY: 'auto',
    paddingRight: '8px',
  };

  return (
    // Backdrop no longer closes the banner on click — user must accept or use the explicit close button
    <div style={backdropStyle}>
      <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
        {/* Main Content */}
        <div style={contentStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <div style={iconContainerStyle}>
              <Cookie style={{ width: '20px', height: '20px', color: '#ec4899' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>Cookie-Einstellungen</h2>
              <p style={descriptionStyle}>
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen.
              </p>
            </div>
          </div>

          {/* Cookie Details Toggle */}
          <button
            style={detailsButtonStyle}
            onClick={() => {
              const next = !showDetails;
              setShowDetails(next);
              if (next) setShowCustomize(false);
            }}
            onMouseEnter={() => setDetailsHovered(true)}
            onMouseLeave={() => setDetailsHovered(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: '2px solid #64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Cookie style={{ width: '12px', height: '12px', color: '#94a3b8' }} />
              </div>
              <span style={{ color: '#e2e8f0', fontSize: '14px' }}>Cookie-Details anzeigen</span>
            </div>
            <ChevronDown 
              style={{
                width: '20px',
                height: '20px',
                color: '#94a3b8',
                transform: showDetails ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }}
            />
          </button>

          {/* Cookie Details Expanded */}
          {showDetails && (
            <div style={detailsWrapperStyle}>
              {cookieCategories.map((category) => (
                <div key={category.id} style={categoryStyle}>
                  <div style={categoryHeaderStyle}>
                    <div style={{ flex: 1 }}>
                      <div style={categoryTitleStyle}>
                        <span>{category.name}</span>
                        {category.required && (
                          <span style={badgeStyle}>Erforderlich</span>
                        )}
                      </div>
                      <p style={categoryDescStyle}>
                        {category.description}
                      </p>
                    </div>
                    <CustomSwitch
                      checked={cookiePreferences[category.id as keyof CookiePreferences]}
                      onChange={() => toggleCategory(category.id as keyof CookiePreferences)}
                      disabled={category.required}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customize View */}
          {showCustomize && (
            <div style={detailsWrapperStyle}>
              {cookieCategories.map((category) => (
                <div key={category.id} style={categoryStyle}>
                  <div style={categoryHeaderStyle}>
                    <div style={{ flex: 1 }}>
                      <div style={categoryTitleStyle}>
                        <span>{category.name}</span>
                        {category.required && (
                          <span style={badgeStyle}>Erforderlich</span>
                        )}
                      </div>
                      <p style={categoryDescStyle}>
                        {category.description}
                      </p>
                    </div>
                    <CustomSwitch
                      checked={cookiePreferences[category.id as keyof CookiePreferences]}
                      onChange={() => toggleCategory(category.id as keyof CookiePreferences)}
                      disabled={category.required}
                    />
                  </div>
                </div>
              ))}
              
              <CustomButton
                onClick={handleSaveCustom}
                style={{ width: '100%' }}
              >
                Auswahl speichern
              </CustomButton>
            </div>
          )}

          {/* Action Buttons */}
          {!showCustomize && (
            <div style={buttonsContainerStyle}>
              <CustomButton onClick={handleAcceptAll}>
                Alle akzeptieren
              </CustomButton>
              <CustomButton onClick={() => { setShowCustomize(true); setShowDetails(false); }} variant="outline">
                Anpassen
              </CustomButton>
              <CustomButton onClick={handleOnlyNecessary} variant="outline">
                Nur notwendige
              </CustomButton>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <a
            href="#"
            style={linkStyle}
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
          >
            Weitere Informationen in unserer Datenschutzerklärung
          </a>
          <button
            style={closeButtonStyle}
            onClick={() => { setIsAnimating(false); setTimeout(() => setIsVisible(false), 300); }}
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
