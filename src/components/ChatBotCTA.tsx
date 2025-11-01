import { useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function ChatBotCTA() {
  // keep the hint visible by default so the widget is easy to find;
  // user can still open the panel which will keep it shown.
  // show only when user is viewing the Leistungen section
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const openPanel = () => {
    setOpen(true);
    setVisible(true);
  };
  const closePanel = () => {
    setOpen(false);
    setTimeout(() => setVisible(false), 220);
  };

  const goToContact = () => {
    const el = document.getElementById("kontakt");
    if (el) {
      const headerEl = document.querySelector("header") as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const desired = Math.max(0, top - headerHeight - 16);
      window.scrollTo({ top: desired, behavior: "smooth" });
      setTimeout(() => {
        const area = el.querySelector("textarea, input") as HTMLElement | null;
        if (area && typeof (area as any).focus === "function") area.focus();
      }, 650);
      return;
    }
    window.location.href = "/#kontakt";
  };

  useEffect(() => {
    // Show CTA for all sections between Hero and Contact (inclusive of
    // Über mich, ProcessAlternative, Preisübersicht, etc.), but keep it
    // hidden while in the Hero and hidden once the Contact section begins.
  // Prefer the actual hero section ('home') so the CTA remains hidden while
  // the user is in the Hero. Fallback to a fixed header if 'home' isn't present.
  const heroEl = document.getElementById("home") || document.querySelector("header") || document.getElementById("hero");
    const contactEl = document.getElementById("kontakt");
    if (!heroEl || !contactEl) return;

    const getStart = () => (heroEl as HTMLElement).offsetTop + (heroEl as HTMLElement).offsetHeight; // end of hero
    const getEnd = () => (contactEl as HTMLElement).offsetTop; // start of contact

    const checkVisibility = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      const start = getStart();
      const end = getEnd();
      const shouldBeVisible = mid >= start && mid < end;

      if (shouldBeVisible) {
        setVisible(true);
      } else {
        setVisible(false);
        if (open) setOpen(false);
      }
    };

    // run once on load (safe — will only reveal if mid is inside the range)
    const onLoad = () => checkVisibility();
    window.addEventListener("load", onLoad);

    // rAF-throttled scroll handler
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        checkVisibility();
        rafId = null;
      });
    };

    const onResize = () => checkVisibility();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const mutationObserver = new MutationObserver(() => {
      checkVisibility();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
    };
  }, [open]);

  return (
    <div role="dialog" aria-label="KI Assistent" style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 9999 }}>
      {/* Visible fallback button (inline styles to guarantee visibility) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {!open && (
          <button
            onClick={openPanel}
            aria-label="Schreib mir"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(90deg,#6b21a8,#ff6fb3)',
              color: 'white',
              width: 56,
              height: 56,
              padding: 0,
              borderRadius: '9999px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 600ms cubic-bezier(.2,.9,.25,1), box-shadow 300ms ease, opacity 600ms ease',
              transform: visible ? 'translateX(0)' : 'translateX(80px)',
              opacity: visible ? 1 : 0,
              pointerEvents: visible ? 'auto' : 'none'
            }}
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        )}
      </div>

      <div
        className={`mt-3 w-72 md:w-96 bg-slate-900/95 border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden transform ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 pointer-events-none"}`}
        style={{ backdropFilter: "blur(6px)", position: 'absolute', right: 0, bottom: 80, transition: 'transform 600ms cubic-bezier(.2,.9,.25,1), opacity 600ms cubic-bezier(.2,.9,.25,1)' }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/30">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-sm text-white font-semibold">Kontakt aufnehmen</div>
              <div className="text-xs text-slate-400"></div>
            </div>
          </div>
          <button onClick={closePanel} aria-label="Schließen" className="p-1 rounded-md text-slate-300 hover:text-white focus:outline-none">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-3">
          <p className="text-sm text-slate-300 mb-3">Hallo! Schreib mir kurz, worum es bei deinem Projekt geht — ich antworte zeitnah.</p>

          <div className="flex gap-2">
            <button
              onClick={() => { goToContact(); }}
              className="flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Nachricht schreiben
            </button>

            <a
              href="mailto:oezdens.web@outlook.de"
              className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-slate-700 text-sm text-slate-300 hover:text-white hover:border-purple-500"
            >
              E‑Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
