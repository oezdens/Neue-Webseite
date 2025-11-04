import { CSSProperties, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export function Impressum() {
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
  };

  const h3Style: CSSProperties = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#ffffff',
    lineHeight: '1.4',
  };

  const textStyle: CSSProperties = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '12px',
  };

  const textSmallStyle: CSSProperties = {
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: '1.6',
  };

  // const labelStyle: CSSProperties = {
  //   color: '#94a3b8',
  // };

  const contactItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
  };

  const iconContainerStyle: CSSProperties = {
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
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  const linkHoverStyle: CSSProperties = {
    color: '#ec4899',
  };

  const externalLinkStyle: CSSProperties = {
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
    // small timeout to allow layout/reflow
    setTimeout(() => {
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const desired = Math.max(0, top - headerHeight - 16); // 16px extra padding
      window.scrollTo({ top: desired, behavior: 'smooth' });
    }, 50);
  }, []);

  return (
    <>
      <Helmet>
        <title>Impressum — oezdens</title>
        <meta name="description" content="Impressum von oezdens — Kontaktdaten, Betreiberinformationen und rechtliche Hinweise gemäß §5 TMG." />
        <link rel="canonical" href="https://oezdens.com/impressum" />
      </Helmet>
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {/* Header */}
        <div id="page-header" style={headerStyle}>
          <div style={iconBoxStyle}>
            <Scale style={{ width: '32px', height: '32px', color: '#ec4899' }} />
          </div>
          <h1 style={h1Style}>Impressum</h1>
          <p style={subtitleStyle}>
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Main Content */}
        <div>
          {/* Anbieter (Anpassung für Einzelunternehmen & § 5 TMG) */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Diensteanbieter / Betreiber</h2>
            <div style={textStyle}>
              <p style={{ paddingTop: '8px', marginBottom: '4px', fontWeight: 600 }}>Serhat Özden</p>
              
              <div style={{...contactItemStyle, marginTop: '20px'}}>
                  <div style={iconContainerStyle}>
                      <MapPin style={{ width: '20px', height: '20px', color: '#ec4899' }} />
                  </div>
                  <div style={textStyle}>
                      <p style={{ marginBottom: '4px' }}>Bodemstall 6</p>
                      <p style={{ marginBottom: '4px' }}>74177 Bad Friedrichshall</p>
                      <p>Deutschland</p>
                  </div>
              </div>

              <div style={{...contactItemStyle, marginTop: '20px'}}>
                <div style={iconContainerStyle}>
                    <Phone style={{ width: '20px', height: '20px', color: '#ec4899' }} />
                </div>
                <a 
                    href="tel:+4989123456789" 
                    style={linkStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
                >
                    +49 (0) 89 / 12 34 56 - 789
                </a>
              </div>
              
              <div style={contactItemStyle}>
                  <div style={iconContainerStyle}>
                      <Mail style={{ width: '20px', height: '20px', color: '#ec4899' }} />
                  </div>
                  <a 
                      href="mailto:oezdens.web@outlook.de" 
                      style={linkStyle}
                      onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                      onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
                  >
                      oezdens.web@outlook.de
                  </a>
              </div>

              <h3 style={{...h3Style, marginTop: '24px'}}>Steuerliche Angaben</h3>
              <p style={{ marginBottom: '4px' }}>
                Steuernummer: **[Ihre Steuernummer hier einfügen]**
              </p>
              <p style={{ marginBottom: 0 }}>
                USt-IdNr.: Kleingewerbetreibend, keine USt-IdNr. vorhanden
              </p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt (§ 55 RStV) */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Verantwortlich für den Inhalt</h2>
            <div style={textStyle}>
              <p style={{ marginBottom: '8px' }}>gemäß § 55 Abs. 2 RStV:</p>
              <p style={{ paddingTop: '8px', marginBottom: '4px' }}>Serhat Özden</p>
              <p>Bodemstall 6, 74177 Bad Friedrichshall</p>
            </div>
          </section>

          {/* EU Dispute Resolution */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>EU-Streitschlichtung</h2>
            <div style={textStyle}>
              <p style={{ marginBottom: '16px' }}>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={externalLinkStyle}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p style={{ paddingTop: '16px' }}>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          {/* Consumer Dispute Resolution */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p style={textStyle}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Disclaimer */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Haftungsausschluss</h2>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Haftung für Inhalte</h3>
              <p style={textSmallStyle}>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir 
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Haftung für Links</h3>
              <p style={textSmallStyle}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h3 style={h3Style}>Urheberrecht</h3>
              <p style={textSmallStyle}>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
            <div style={footerStyle}>
            <p>Stand: Oktober 2025</p>
          </div>
        </div>
      </div>
      </>
    );
  }