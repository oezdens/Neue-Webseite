import { useEffect, useState } from "react";
import { Bot, X } from "lucide-react";

export default function ChatBotCTA() {
  // keep the hint visible by default so the widget is easy to find;
  // user can still open the panel which will keep it shown.
  const [visible, setVisible] = useState(true);
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

  return (
    <div role="dialog" aria-label="KI Assistent" style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999 }}>
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
              transition: 'transform 160ms ease, box-shadow 160ms ease'
            }}
          >
            <Bot className="w-5 h-5" />
          </button>
        )}
      </div>

      <div
        className={`mt-3 w-72 md:w-96 bg-slate-900/95 border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 pointer-events-none"}`}
        style={{ backdropFilter: "blur(6px)", position: 'absolute', right: 0, bottom: 72 }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/30">
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-sm text-white font-semibold">KI‑Assistent</div>
              <div className="text-xs text-slate-400">Hilfe beim Kontakt</div>
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
