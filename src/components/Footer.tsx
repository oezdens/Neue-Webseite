import { Code2, Linkedin, Mail } from "lucide-react"; // Icons für Social Media
import { navigateToSection } from "../utils/navigation";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/serhat-%C3%B6zden-958130361/", name: "LinkedIn", target: '_blank', rel: 'noopener noreferrer' },
  { icon: Mail, href: "mailto:oezdens.web@outlook.de", name: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 mt-20 pt-12 pb-6">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Horizontal footer: force 4 blocks side-by-side; allow proportional shrinking */}
        <div className="flex gap-8 flex-nowrap justify-between items-start">
          
          {/* Spalte 1: Branding & Logo */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">oezdens</span>
            </div>
            <p className="text-slate-400 text-sm">
              Moderne Webentwicklung & Design, spezialisiert auf reaktive Oberflächen.
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/Startseite"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("home");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Home</a>
              </li>
              <li>
                <a
                  href="/leistungen"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("leistungen");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Leistungen</a>
              </li>
              <li>
                <a
                  href="/ueber-mich"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("ueber-mich");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Über mich</a>
              </li>
              <li>
                <a
                  href="/ablauf"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("ablauf");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Ablauf</a>
              </li>
              <li>
                <a
                  href="/preise"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("preise");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Preise</a>
              </li>
              <li>
                <a
                  href="/kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("kontakt");
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Services */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >UI/UX Design</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >Front-end Development</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >SEO Optimierung</a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt & Social Media */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <a
              href="/kontakt"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection("kontakt");
              }}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium mb-4"
            >
              Jetzt Kontakt aufnehmen
            </a>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                  target={link.target}
                  rel={link.rel}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trennlinie */}
        <hr className="my-8 border-purple-500/10" />

        {/* Copyright Sektion */}
        <div className="flex justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} oezdens. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4">
            <a href="/impressum" className="hover:text-purple-400 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-purple-400 transition-colors">Datenschutz</a>
            <a href="/barrierefreiheit" className="hover:text-purple-400 transition-colors">Barrierefreiheit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}