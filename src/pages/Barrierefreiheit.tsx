import { CSSProperties, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Ear, Keyboard, Monitor, Heart, CheckCircle } from 'lucide-react';

export function Barrierefreiheit() {
  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#f1f5f9',
    // increase top padding so the page header (icon/H1) appears below the fixed site header
    padding: '140px 16px 64px',
  };

  const innerContainerStyle: CSSProperties = {
    maxWidth: '896px',
    margin: '0 auto',
  };

  const headerStyle: CSSProperties = {
    marginBottom: '48px',
    // ensure page anchor is visible below fixed header
    scrollMarginTop: '120px',
  };

  const iconBoxStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(219, 39, 119, 0.2)',
    borderRadius: '16px',
    marginBottom: '24px',
  };

  const h1Style: CSSProperties = {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#ffffff',
    lineHeight: '1.2',
  };

  const subtitleStyle: CSSProperties = {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
  };

  const sectionStyle: CSSProperties = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #334155',
    marginBottom: '32px',
  };

  const h2Style: CSSProperties = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '24px',
    color: '#ffffff',
    lineHeight: '1.3',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const h3Style: CSSProperties = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '12px',
    color: '#ffffff',
    lineHeight: '1.4',
  };

  const textStyle: CSSProperties = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '16px',
  };

  const listStyle: CSSProperties = {
    paddingLeft: '20px',
    marginBottom: '16px',
  };

  const listItemStyle: CSSProperties = {
    color: '#cbd5e1',
    marginBottom: '8px',
    lineHeight: '1.6',
  };

  const highlightBoxStyle: CSSProperties = {
    backgroundColor: 'rgba(219, 39, 119, 0.1)',
    border: '1px solid rgba(219, 39, 119, 0.3)',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
  };

  const featureBoxStyle: CSSProperties = {
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
  };

  const featureHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  };

  const featureIconStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(219, 39, 119, 0.2)',
    borderRadius: '8px',
    flexShrink: 0,
  };

  const linkStyle: CSSProperties = {
    color: '#ec4899',
    textDecoration: 'underline',
    transition: 'color 0.2s',
  };

  const footerStyle: CSSProperties = {
    marginTop: '48px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#64748b',
  };

  // Ensure the page header (icon + H1) is scrolled into view below the fixed site header.
  useEffect(() => {
    const el = document.getElementById('page-header');
    if (!el) return;
    setTimeout(() => {
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const desired = Math.max(0, top - headerHeight - 16);
      window.scrollTo({ top: desired, behavior: 'smooth' });
    }, 50);
  }, []);

  const iconStyle = { width: '24px', height: '24px', color: '#ec4899' };
  const featureIconSmallStyle = { width: '20px', height: '20px', color: '#ec4899' };

  return (
    <>
      <Helmet>
        <title>Barrierefreiheit — oezdens</title>
        <meta name="description" content="Barrierefreiheit bei oezdens — Informationen zu Maßnahmen, Standards (WCAG 2.1 AA) und Kontakt für Barrierefreiheitsfragen." />
        <link rel="canonical" href="https://oezdens.com/barrierefreiheit" />
      </Helmet>
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
  {/* Header */}
  <div id="page-header" style={headerStyle}>
          <div style={iconBoxStyle}>
            <Accessibility style={{ width: '32px', height: '32px', color: '#ec4899' }} />
          </div>
          <h1 style={h1Style}>Barrierefreiheit</h1>
          <p style={subtitleStyle}>
            Unser Engagement für eine zugängliche Website für alle Nutzer
          </p>
        </div>

        {/* Main Content */}
        <div>
          {/* Introduction */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <Heart style={iconStyle} />
              Unser Versprechen
            </h2>
            <p style={textStyle}>
              Wir sind bestrebt, unsere Website für alle Menschen zugänglich zu machen, 
              unabhängig von ihren Fähigkeiten oder der verwendeten Technologie. Wir arbeiten 
              kontinuierlich daran, die Benutzerfreundlichkeit und Zugänglichkeit unserer Website 
              zu verbessern und halten uns dabei an die relevanten Standards und Best Practices.
            </p>
            <div style={highlightBoxStyle}>
              <p style={{ color: '#cbd5e1', margin: 0 }}>
                <strong style={{ color: '#ffffff' }}>Unser Ziel:</strong> Wir orientieren uns an 
                den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, um eine barrierefreie 
                Website zu gewährleisten.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <CheckCircle style={iconStyle} />
              Barrierefreiheits-Funktionen
            </h2>
            <p style={textStyle}>
              Unsere Website bietet verschiedene Funktionen, um die Zugänglichkeit zu verbessern:
            </p>

            <div style={featureBoxStyle}>
              <div style={featureHeaderStyle}>
                <div style={featureIconStyle}>
                  <Eye style={featureIconSmallStyle} />
                </div>
                <h3 style={{ ...h3Style, marginBottom: 0 }}>Visuelle Barrierefreiheit</h3>
              </div>
              <ul style={listStyle}>
                <li style={listItemStyle}>Hohe Kontrastverhältnisse für bessere Lesbarkeit</li>
                <li style={listItemStyle}>Skalierbare Schriftgrößen</li>
                <li style={listItemStyle}>Alternative Texte für alle Bilder und Grafiken</li>
                <li style={listItemStyle}>Klare und konsistente Navigationsstruktur</li>
                <li style={listItemStyle}>Keine ausschließliche Informationsvermittlung durch Farbe</li>
              </ul>
            </div>

            <div style={featureBoxStyle}>
              <div style={featureHeaderStyle}>
                <div style={featureIconStyle}>
                  <Keyboard style={featureIconSmallStyle} />
                </div>
                <h3 style={{ ...h3Style, marginBottom: 0 }}>Tastaturnavigation</h3>
              </div>
              <ul style={listStyle}>
                <li style={listItemStyle}>Vollständige Bedienbarkeit mit der Tastatur</li>
                <li style={listItemStyle}>Sichtbare Fokus-Indikatoren</li>
                <li style={listItemStyle}>Logische Tab-Reihenfolge</li>
                <li style={listItemStyle}>Skip-Links zum Überspringen von Navigationselementen</li>
              </ul>
            </div>

            <div style={featureBoxStyle}>
              <div style={featureHeaderStyle}>
                <div style={featureIconStyle}>
                  <Ear style={featureIconSmallStyle} />
                </div>
                <h3 style={{ ...h3Style, marginBottom: 0 }}>Screenreader-Kompatibilität</h3>
              </div>
              <ul style={listStyle}>
                <li style={listItemStyle}>Semantisches HTML für bessere Struktur</li>
                <li style={listItemStyle}>ARIA-Labels und -Attribute wo erforderlich</li>
                <li style={listItemStyle}>Beschreibende Link-Texte</li>
                <li style={listItemStyle}>Korrekte Überschriftenhierarchie</li>
              </ul>
            </div>

            <div style={featureBoxStyle}>
              <div style={featureHeaderStyle}>
                <div style={featureIconStyle}>
                  <Monitor style={featureIconSmallStyle} />
                </div>
                <h3 style={{ ...h3Style, marginBottom: 0 }}>Responsive Design</h3>
              </div>
              <ul style={listStyle}>
                <li style={listItemStyle}>Optimiert für verschiedene Bildschirmgrößen</li>
                <li style={listItemStyle}>Touch-freundliche Schaltflächen und Bedienelemente</li>
                <li style={listItemStyle}>Zoom-Unterstützung bis 200% ohne Funktionsverlust</li>
                <li style={listItemStyle}>Lesbare Inhalte auf mobilen Geräten</li>
              </ul>
            </div>
          </section>

          {/* Standards Compliance */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Konformität mit Standards</h2>
            <p style={textStyle}>
              Unsere Website wurde unter Berücksichtigung der folgenden Standards entwickelt:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong style={{ color: '#ffffff' }}>WCAG 2.1 Level AA:</strong> Web Content 
                Accessibility Guidelines des W3C
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: '#ffffff' }}>BITV 2.0:</strong> Barrierefreie 
                Informationstechnik-Verordnung
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: '#ffffff' }}>EN 301 549:</strong> Europäischer Standard 
                für digitale Barrierefreiheit
              </li>
            </ul>
          </section>

          {/* Keyboard Shortcuts */}
          

          {/* Browser Compatibility */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Browser- und Technologiekompatibilität</h2>
            <p style={textStyle}>
              Unsere Website ist mit folgenden Technologien kompatibel:
            </p>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Unterstützte Browser:</h3>
              <ul style={listStyle}>
                <li style={listItemStyle}>Google Chrome (aktuelle Version)</li>
                <li style={listItemStyle}>Mozilla Firefox (aktuelle Version)</li>
                <li style={listItemStyle}>Safari (aktuelle Version)</li>
                <li style={listItemStyle}>Microsoft Edge (aktuelle Version)</li>
              </ul>
            </div>
            <div>
              <h3 style={h3Style}>Unterstützte Screenreader:</h3>
              <ul style={listStyle}>
                <li style={listItemStyle}>JAWS (aktuelle Version)</li>
                <li style={listItemStyle}>NVDA (aktuelle Version)</li>
                <li style={listItemStyle}>VoiceOver (macOS/iOS)</li>
                <li style={listItemStyle}>TalkBack (Android)</li>
              </ul>
            </div>
          </section>

          {/* Known Issues */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Bekannte Einschränkungen</h2>
            <p style={textStyle}>
              Trotz unserer Bemühungen können einige Bereiche unserer Website möglicherweise noch 
              nicht vollständig barrierefrei sein. Wir arbeiten kontinuierlich an Verbesserungen:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Einige PDF-Dokumente entsprechen möglicherweise noch nicht vollständig den 
                Barrierefreiheitsstandards
              </li>
              <li style={listItemStyle}>
                Externe eingebettete Inhalte von Drittanbietern sind möglicherweise nicht 
                vollständig barrierefrei
              </li>
              <li style={listItemStyle}>
                Wir arbeiten an der Verbesserung der Barrierefreiheit älterer Inhalte
              </li>
            </ul>
          </section>

          {/* Feedback */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Feedback und Kontakt</h2>
            <p style={textStyle}>
              Ihre Meinung ist uns wichtig! Wenn Sie auf Barrierefreiheitsprobleme stoßen oder 
              Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
            </p>
            <div style={highlightBoxStyle}>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff' }}>E-Mail:</strong>
                <a href="mailto:oezdens.web@outlook.de" style={{ ...linkStyle, marginLeft: '8px' }}>
                  oezdens.web@outlook.de
                </a>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ffffff' }}>Telefon:</strong>
                <span style={{ color: '#cbd5e1', marginLeft: '8px' }}>+49 (0) 89 / 12 34 56 - 789</span>
              </div>
              
            </div>
            <p style={textStyle}>
              Wir bemühen uns, alle Anfragen innerhalb von 5 Werktagen zu beantworten.
            </p>
          </section>

          {/* Third Party Content */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Inhalte von Drittanbietern</h2>
            <p style={textStyle}>
              Einige Inhalte auf unserer Website werden von Drittanbietern bereitgestellt. 
              Wir haben nur begrenzte Kontrolle über die Barrierefreiheit dieser Inhalte, 
              arbeiten aber mit unseren Partnern zusammen, um die bestmögliche Zugänglichkeit 
              sicherzustellen.
            </p>
          </section>

          {/* Continuous Improvement */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Kontinuierliche Verbesserung</h2>
            <p style={textStyle}>
              Barrierefreiheit ist ein fortlaufender Prozess. Wir überprüfen und aktualisieren 
              unsere Website regelmäßig, um sicherzustellen, dass sie für alle Nutzer zugänglich 
              bleibt. Zu unseren laufenden Bemühungen gehören:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Regelmäßige Barrierefreiheitstests und Audits</li>
              <li style={listItemStyle}>Schulungen für unser Entwicklungsteam</li>
              <li style={listItemStyle}>Einbeziehung von Nutzerfeedback in Verbesserungen</li>
              <li style={listItemStyle}>Aktualisierung gemäß neuer Standards und Best Practices</li>
            </ul>
          </section>
        </div>

        {/* Footer Note */}
        <div style={footerStyle}>
          <p>Stand: Oktober 2025 | Letzte Überprüfung: Oktober 2025</p>
        </div>
      </div>
    </div>
    </>
  );
}
