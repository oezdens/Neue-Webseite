import { CSSProperties, useEffect } from 'react';
import { Shield, Lock, Eye, UserCheck, Database, Cookie } from 'lucide-react';

export function Datenschutz() {
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

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
  {/* Header */}
  <div id="page-header" style={headerStyle}>
          <div style={iconBoxStyle}>
            <Shield style={{ width: '32px', height: '32px', color: '#ec4899' }} />
          </div>
          <h1 style={h1Style}>Datenschutzerklärung</h1>
          <p style={subtitleStyle}>
            Informationen über die Verarbeitung Ihrer personenbezogenen Daten
          </p>
        </div>

        {/* Main Content */}
        <div>
          {/* Introduction */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <Lock style={iconStyle} />
              Allgemeine Hinweise
            </h2>
            <p style={textStyle}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <div style={highlightBoxStyle}>
              <p style={{ color: '#cbd5e1', margin: 0 }}>
                <strong style={{ color: '#ffffff' }}>Verantwortliche Stelle:</strong> Die 
                verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die 
                Musterfirma GmbH. Weitere Informationen finden Sie im Impressum.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <Database style={iconStyle} />
              Datenerfassung auf dieser Website
            </h2>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Wer ist verantwortlich für die Datenerfassung?</h3>
              <p style={textStyle}>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Wie erfassen wir Ihre Daten?</h3>
              <p style={textStyle}>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p style={textStyle}>
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme 
                erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem 
                oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <div>
              <h3 style={h3Style}>Wofür nutzen wir Ihre Daten?</h3>
              <p style={textStyle}>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>
          </section>

          {/* Server Log Files */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <Eye style={iconStyle} />
              Server-Log-Dateien
            </h2>
            <p style={textStyle}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in 
              so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
              Dies sind:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Browsertyp und Browserversion</li>
              <li style={listItemStyle}>Verwendetes Betriebssystem</li>
              <li style={listItemStyle}>Referrer URL</li>
              <li style={listItemStyle}>Hostname des zugreifenden Rechners</li>
              <li style={listItemStyle}>Uhrzeit der Serveranfrage</li>
              <li style={listItemStyle}>IP-Adresse</li>
            </ul>
            <p style={textStyle}>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* Cookies */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <Cookie style={iconStyle} />
              Cookies
            </h2>
            <p style={textStyle}>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
              Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder 
              vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
              (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Arten von Cookies:</h3>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Notwendige Cookies:</strong> Erforderlich 
                  für den Betrieb der Website
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Analytische Cookies:</strong> Helfen uns, 
                  die Nutzung der Website zu verstehen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Marketing Cookies:</strong> Werden verwendet, 
                  um relevante Werbung bereitzustellen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Präferenz Cookies:</strong> Speichern Ihre 
                  Einstellungen und Präferenzen
                </li>
              </ul>
            </div>

            <div style={highlightBoxStyle}>
              <p style={{ color: '#cbd5e1', margin: 0 }}>
                Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen.
              </p>
            </div>
          </section>

          {/* Contact Forms */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>
              <UserCheck style={iconStyle} />
              Kontaktformular
            </h2>
            <p style={textStyle}>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p style={textStyle}>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
              Maßnahmen erforderlich ist.
            </p>
          </section>

          {/* Your Rights */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Ihre Rechte</h2>
            <p style={textStyle}>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={h3Style}>Ihre Rechte im Überblick:</h3>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Auskunftsrecht:</strong> Sie können Auskunft 
                  über Ihre bei uns gespeicherten Daten verlangen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Berichtigungsrecht:</strong> Sie können die 
                  Berichtigung unrichtiger Daten verlangen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Löschungsrecht:</strong> Sie können die 
                  Löschung Ihrer Daten verlangen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Einschränkung der Verarbeitung:</strong> Sie 
                  können die Einschränkung der Verarbeitung verlangen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Datenübertragbarkeit:</strong> Sie haben das 
                  Recht auf Datenübertragbarkeit
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Widerspruchsrecht:</strong> Sie können der 
                  Verarbeitung Ihrer Daten widersprechen
                </li>
                <li style={listItemStyle}>
                  <strong style={{ color: '#ffffff' }}>Beschwerderecht:</strong> Sie können sich bei 
                  einer Aufsichtsbehörde beschweren
                </li>
              </ul>
            </div>

            <div style={highlightBoxStyle}>
              <p style={{ color: '#cbd5e1', margin: 0 }}>
                <strong style={{ color: '#ffffff' }}>Kontakt:</strong> Für Fragen zum Datenschutz 
                wenden Sie sich bitte an: <a href="mailto:datenschutz@musterfirma.de" style={linkStyle}>
                  datenschutz@musterfirma.de
                </a>
              </p>
            </div>
          </section>

          {/* SSL Encryption */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>SSL- bzw. TLS-Verschlüsselung</h2>
            <p style={textStyle}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
              vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns 
              als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            </p>
            <p style={textStyle}>
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
              von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* Data Retention */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Speicherdauer</h2>
            <p style={textStyle}>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt.
            </p>
            <p style={textStyle}>
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur 
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen 
              rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <div style={footerStyle}>
          <p>Stand: Oktober 2024</p>
        </div>
      </div>
    </div>
  );
}
