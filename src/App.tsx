import { Header } from "./components/Header";
import { Helmet } from "react-helmet-async";
import { Hero } from "./components/Hero";
import ProcessAlternative from "./components/ProcessAlternative";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
// New pages
import AboutMe from "./components/AboutMe";
import Preisuebersicht from "./components/Preisuebersicht";
import { Impressum } from "./pages/Impressum1";
import { Datenschutz } from "./pages/Datenschutz";
import { Barrierefreiheit } from "./pages/Barrierefreiheit";
export default function App() {
  const defaultTitle = "oezdens — Webentwicklung & IT";
  const defaultDescription = "Professionelle Webentwicklung & IT-Services — moderne Websites, Barrierefreiheit und transparente Preise.";

  const head = (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://oezdens.com/assets/ich-CFswyXwc.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://oezdens.com/" />
      {/* Basic Organization structured data */}
      <script type="application/ld+json">{`{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "oezdens",
        "url": "https://oezdens.com",
        "logo": "https://oezdens.com/assets/ich-CFswyXwc.jpg",
        "sameAs": []
      }`}</script>
    </Helmet>
  );
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/impressum") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        {head}
        <Header />
        <Impressum />
        <Footer />
      </div>
    );
  }

  if (path === "/datenschutz") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        {head}
        <Header />
        <Datenschutz />
        <Footer />
      </div>
    );
  }

  if (path === "/barrierefreiheit") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        {head}
        <Header />
        <Barrierefreiheit />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {head}
      <Header />
      <Hero />
  {/* Desired order: Hero -> AboutMe -> ProcessAlternative -> Contact */}
  <AboutMe />
      <ProcessAlternative />
  <Preisuebersicht />
      <Contact />
      <CookieBanner />
      <Footer />
    </div>
  );
  
}