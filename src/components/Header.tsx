import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // measure header height and scroll with offset so the target isn't hidden
      // For the Kontakt section we want a slightly smaller gap (appear a bit higher),
      // so apply a special adjustment. Other sections keep the previous gap.
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = element.getBoundingClientRect().top + window.scrollY;
      let desired: number;
      if (id === "kontakt") {
        // smaller gap: move the target a bit higher (closer to the header)
        desired = Math.max(0, top - headerHeight + 8);
      } else {
        // previous behavior: small comfortable gap below the header
        desired = Math.max(0, top - headerHeight - 16);
      }
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

  // Scroll-spy: observe sections and update the active nav item as the user scrolls
  useEffect(() => {
    const ids = ["home", "leistungen", "ueber-mich", "ablauf", "kontakt"];
    // Observer picks the section that's most visible in the viewport (center-biased)
    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry with the largest intersectionRatio
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topId = visible[0].target.id;
          setActiveSection((prev) => (prev === topId ? prev : topId));
          return;
        }

        // Fallback: if none are intersecting, pick the one closest to the viewport top
        const sortedByDistance = entries
          .slice()
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (sortedByDistance.length) {
          const nearestId = sortedByDistance[0].target.id;
          setActiveSection((prev) => (prev === nearestId ? prev : nearestId));
        }
      },
      {
        root: null,
        // Trigger when section is around the middle of the viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Ensure the top-of-page selects `home` immediately when scrolled all the way up.
  // This complements the IntersectionObserver (which can sometimes not fire at exact top)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // If we're very near the top, mark `home` as active
        if (window.scrollY <= 72) {
          setActiveSection((prev) => (prev === "home" ? prev : "home"));
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once on mount to set correct state if already at top
    if (window.scrollY <= 72) setActiveSection("home");

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-transparent">
      {/* Small local styles for the header blink effect when Kontakt is active */}
      <style>
        {`@keyframes blinkPulse {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
              box-shadow: 0 0 0 rgba(0,0,0,0);
              filter: none;
            }
            50% {
              /* gentler movement and glow */
              transform: translateY(-2px) scale(1.02);
              opacity: 0.98;
              box-shadow: 0 8px 20px rgba(99,102,241,0.12), 0 2px 6px rgba(99,102,241,0.04);
              filter: drop-shadow(0 6px 12px rgba(99,102,241,0.06));
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
              box-shadow: 0 0 0 rgba(0,0,0,0);
              filter: none;
            }
          }
          .blink {
            animation: blinkPulse 1.3s cubic-bezier(.2,.9,.25,1) infinite;
            will-change: transform, box-shadow, opacity;
          }
          @media (prefers-reduced-motion: reduce) { .blink { animation: none; transform: none; box-shadow: none; } }
        `}
      </style>
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
              href="/#kontakt"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontakt");
              }}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium ${
                activeSection === "kontakt" ? "blink" : ""
              }`}
              aria-label="Kontakt"
            >
              Kontakt
            </a>
          </nav>
      </div>
    </header>
  );
}