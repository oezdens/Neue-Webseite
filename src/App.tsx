import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import ProcessAlternative from "./components/ProcessAlternative";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
// New pages
import AboutMe from "./components/AboutMe";
import { Impressum as Impressum1 } from "./pages/Impressum1";
import { Datenschutz } from "./pages/Datenschutz";
import { Barrierefreiheit } from "./pages/Barrierefreiheit";
export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/impressum1") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Impressum1 />
        <Footer />
      </div>
    );
  }

  if (path === "/datenschutz") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Datenschutz />
        <Footer />
      </div>
    );
  }

  if (path === "/barrierefreiheit") {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Barrierefreiheit />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
  {/* Desired order: Hero -> AboutMe -> ProcessAlternative -> Contact */}
  <AboutMe />
      <ProcessAlternative />
      <Contact />
      <CookieBanner />
      <Footer />
    </div>
  );
  
}