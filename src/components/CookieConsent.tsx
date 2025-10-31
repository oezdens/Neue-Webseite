import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const STORAGE_KEY = "oezdens_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const force = params.get("cookie") === "1";
      const forceDev = force || location.hostname === "localhost" || location.hostname === "127.0.0.1";
      const stored = localStorage.getItem(STORAGE_KEY);
  console.log("CookieConsent:init", { force, forceDev, stored, hostname: location.hostname });
      if (forceDev) {
    console.log("CookieConsent:dev-forced-show");
        setVisible(true);
        return;
      }
      if (stored === null) {
        // show banner
        setVisible(true);
      } else {
        setAccepted(stored === "accepted");
        setVisible(false);
      }
    } catch (e) {
      // if storage unavailable, still show
      console.debug("CookieConsent:init:error", e);
      setVisible(true);
    }
  }, []);

  // trigger enter animation when visible becomes true
  useEffect(() => {
    if (visible) {
      // allow next tick so transition runs
      const t = setTimeout(() => setMounted(true), 20);
      return () => clearTimeout(t);
    }
    setMounted(false);
  }, [visible]);

  // debug: log visibility changes
  useEffect(() => {
    console.log("CookieConsent:visibility", { visible, mounted, accepted });
  }, [visible, mounted, accepted]);

  const hideWithAnimation = (cb?: () => void) => {
    // trigger exit animation
    setMounted(false);
    setTimeout(() => {
      setVisible(false);
      if (cb) cb();
    }, 280); // match transition duration
  };

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (e) {
      /* ignore */
    }
    setAccepted(true);
    hideWithAnimation();
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch (e) {
      /* ignore */
    }
    setAccepted(false);
    hideWithAnimation();
  };

  if (!visible) return null;

  return (
    // Temporarily force high z-index and opaque background so the banner is clearly visible for debugging
    <div data-testid="cookie-consent" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] w-[min(960px,calc(100%-48px))] pointer-events-auto">
      <div
        className={
          // use an opaque, high-contrast background and remove backdrop blur so it cannot blend into the canvas behind
          "bg-white/95 border border-slate-200 text-slate-900 rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 ease-out " +
          (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
        }
        style={{ willChange: "transform, opacity" }}
      >
        <div className="flex-1 text-sm">
          Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern und
          Statistiken zu sammeln. Durch Klicken auf „Akzeptieren" stimmen Sie der
          Verwendung zu. Mehr Informationen in unserer <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline">Datenschutzerklärung</a>.
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={accept} className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
            Akzeptieren
          </Button>
          <button
            onClick={decline}
            className="px-4 py-2 rounded-md text-sm text-slate-700 hover:text-slate-900 border border-slate-200"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
