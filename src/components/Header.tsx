import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navigateToSection } from "../utils/navigation";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (id: string) => {
    // Use a shared helper that performs smooth scroll when the element exists
    // and otherwise navigates to a clean path (e.g. /Startseite).
    navigateToSection(id);
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Scroll-spy: observe sections and update the active nav item as the user scrolls
  // NOTE: some sections (like the dynamically added Preisübersicht) might not exist
  // at header mount time. We attempt to observe any existing sections and use a
  // MutationObserver to pick up elements that are added later so the nav becomes
  // active when those sections scroll into view.
  useEffect(() => {
    // close mobile menu when switching to desktop size and keep a reliable
    // `isMobile` flag using matchMedia. This prevents the mobile menu from
    // rendering on larger screens even if CSS classes are misapplied.
    const mq = window.matchMedia("(max-width: 767px)");
    const handleMq = (e: MediaQueryList | MediaQueryListEvent) => {
      const mobile = "matches" in e ? e.matches : mq.matches;
      setIsMobile(!!mobile);
      if (!mobile && menuOpen) setMenuOpen(false);
    };

    // initial set
    handleMq(mq);

    // Listen for changes
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleMq as any);
    } else if (typeof mq.addListener === "function") {
      // Safari/older browsers
      mq.addListener(handleMq as any);
    }

    const ids = ["home", "leistungen", "ueber-mich", "ablauf", "preise", "kontakt"];

    const observer = new IntersectionObserver(
      (entries) => {
        // If the Kontakt section is currently intersecting, prefer it immediately
        // so 'Preise' won't stay underlined while the user is in the contact area.
          const kontaktEntry = entries.find((e) => e.target.id === "kontakt" && e.isIntersecting);
          if (kontaktEntry) {
            setActiveSection("kontakt");
            return;
          }

          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            const topId = visible[0].target.id;
            setActiveSection(topId);
            return;
          }

          const sortedByDistance = entries
            .slice()
            .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
          if (sortedByDistance.length) {
            const nearestId = sortedByDistance[0].target.id;
            setActiveSection(nearestId);
          }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const observed = new Set<string>();
    const observeAll = () => {
      ids.forEach((id) => {
        if (!observed.has(id)) {
          const el = document.getElementById(id);
          if (el) {
            observer.observe(el);
            observed.add(id);
          }
        }
      });
    };

    // initial attempt to observe elements that are already in the DOM
    observeAll();

    // Watch for new elements being added (e.g., Preisuebersicht rendered after Header)
    const mo = new MutationObserver(() => {
      observeAll();
      // once we've observed all ids we can stop watching mutations
      if (observed.size === ids.length) mo.disconnect();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handleMq as any);
      } else if (typeof mq.removeListener === "function") {
        mq.removeListener(handleMq as any);
      }
    };
  }, []);

  // Ensure the top-of-page selects `home` immediately when scrolled all the way up.
  // This complements the IntersectionObserver (which can sometimes not fire at exact top)
  useEffect(() => {
    let ticking = false;
    const ids = ["home", "leistungen", "ueber-mich", "ablauf", "preise", "kontakt"];

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        try {
          // If we're very near the top, mark `home` as active
          if (window.scrollY <= 72) {
            setActiveSection("home");
            ticking = false;
            return;
          }

          // Prefer Kontakt if it's visible at all
          const kontaktEl = document.getElementById("kontakt");
          if (kontaktEl) {
            const kr = kontaktEl.getBoundingClientRect();
            if (kr.top < window.innerHeight && kr.bottom > 0) {
              setActiveSection("kontakt");
              ticking = false;
              return;
            }
          }

          // Otherwise, pick the section whose TOP is closest to a point just under the header
          const headerEl = document.querySelector("header") as HTMLElement | null;
          const headerHeight = headerEl ? headerEl.offsetHeight : 96;
          const desiredTop = headerHeight + 24;

          let bestId: string | null = null;
          let bestDistance = Infinity;

          ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) return;
            const distance = Math.abs(rect.top - desiredTop);
            if (distance < bestDistance) {
              bestDistance = distance;
              bestId = id;
            }
          });

          if (bestId) setActiveSection(bestId);
        } catch (err) {
          // ignore
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once on mount to set correct state
    onScroll();

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

          /* Animated gradient used by the logo mark and text */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .logo-mark {
            background-size: 200% 200%;
            animation: gradientShift 6s linear infinite;
          }

          .logo-text {
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientShift 6s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) { .logo-mark, .logo-text { animation: none; } }
        `}
      </style>
  <div className="w-full max-w-7xl mx-4 sm:mx-auto bg-slate-950/30 backdrop-blur-2xl border border-purple-500/20 rounded-full px-3 sm:px-8 py-3.5 shadow-xl flex items-center justify-between overflow-hidden">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Startseite">
            <div className="logo-mark w-8 h-8 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="logo-text font-bold text-lg bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400">oezdens</span>
          </a>

          {/* Navigation (desktop) — render when JS detects a non-mobile viewport so
              we don't depend solely on Tailwind breakpoints which can fail if CSS
              isn't applied yet. */}
          {!isMobile && (
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

            {/* Preise */}
            <a
              href="/#preise"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("preise");
              }}
              className={`relative group pb-1 transition-all duration-300 ${
                activeSection === "preise"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Preise
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                activeSection === "preise" ? "w-full" : "w-0 group-hover:w-full"
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
          )}

          {/* Mobile: hamburger button (render only when truly on mobile) */}
          {isMobile && (
            <div className="md:hidden flex items-center ml-2">
              <button
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                onClick={() => setMenuOpen((s) => !s)}
                className="p-2 rounded-md text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 -mr-1"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
      </div>

      {/* Mobile menu panel (drops under header) */}
      {isMobile && menuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[72px] z-40 bg-slate-950/95 backdrop-blur-md rounded-xl p-4 shadow-xl mx-4">
          <nav className="flex flex-col gap-3 text-base">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-left pb-1 transition-all duration-200 ${
                activeSection === "home" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("leistungen")}
              className={`text-left pb-1 transition-all duration-200 ${
                activeSection === "leistungen" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              Leistungen
            </button>

            <button
              onClick={() => scrollToSection("ueber-mich")}
              className={`text-left pb-1 transition-all duration-200 ${
                activeSection === "ueber-mich" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              Über mich
            </button>

            <button
              onClick={() => scrollToSection("ablauf")}
              className={`text-left pb-1 transition-all duration-200 ${
                activeSection === "ablauf" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              Ablauf
            </button>

            <button
              onClick={() => scrollToSection("preise")}
              className={`text-left pb-1 transition-all duration-200 ${
                activeSection === "preise" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              Preise
            </button>

            <button
              onClick={() => scrollToSection("kontakt")}
              className={`mt-2 text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium ${
                activeSection === "kontakt" ? "blink" : ""
              }`}
            >
              Kontakt
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}