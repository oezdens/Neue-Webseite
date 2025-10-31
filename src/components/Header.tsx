import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // measure header height and scroll with offset so the target isn't hidden
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = element.getBoundingClientRect().top + window.scrollY;
      const desired = Math.max(0, top - headerHeight - 16);
      window.scrollTo({ top: desired, behavior: 'smooth' });
      setActiveSection(id);
      return;
    }

    // If the section is not on the current page (we're on a static page like /impressum1),
    // navigate to the root and include the hash so the main page can handle scrolling.
    if (id === "home") {
      window.location.href = "/";
    } else {
      // set active so the nav highlights immediately, then navigate
      setActiveSection(id);
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-transparent">
      <div className="w-[98%] max-w-7xl bg-slate-950/30 backdrop-blur-2xl border border-purple-500/20 rounded-full px-8 py-3.5 shadow-xl flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Startseite">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">oezdens</span>
          </a>

          {/* Navigation */}
          {/* GEÄNDERT: gap-12 für gleichmäßigen, großen Abstand. */}
          <nav className="flex items-center gap-14 text-sm">
            {/* Home */}
            <button
              onClick={() => scrollToSection("home")}
              className={`relative group pb-1 transition-all duration-300 ${
                activeSection === "home"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>

            {/* Leistungen */}
            <a
              href="/#leistungen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("leistungen");
              }}
              className={`relative group pb-1 transition-all duration-300 ${
                activeSection === "leistungen"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Leistungen
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                activeSection === "leistungen" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>

            {/* Über mich */}
            <a
              href="/#ueber-mich"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ueber-mich");
              }}
              className={`relative group pb-1 transition-all duration-300 ${
                activeSection === "ueber-mich"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Über mich
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                activeSection === "ueber-mich" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>

            {/* Ablauf */}
            <a
              href="/#ablauf"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ablauf");
              }}
              className={`relative group pb-1 transition-all duration-300 ${
                activeSection === "ablauf"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Ablauf
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                activeSection === "ablauf" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>

            {/* Kontakt-Button */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium"
            >
              Contact
            </a>
          </nav>
      </div>
    </header>
  );
}