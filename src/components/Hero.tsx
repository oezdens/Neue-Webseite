import { Button } from "./ui/button";
import { useEffect, useState } from "react";
/* ColorBends removed */
import LiquidEther from "./LiquidEther";

export function Hero() {
  const [animateActive, setAnimateActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimateActive(true), 20);
    return () => clearTimeout(t);
  }, []);
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = element.getBoundingClientRect().top + window.scrollY;
      const desired = Math.max(0, top - headerHeight + 8);
      window.scrollTo({ top: desired, behavior: 'smooth' });
      return;
    }
    window.location.href = '/#kontakt';
  };

  const scrollToServices = () => {
    const element = document.getElementById("leistungen");
    if (element) {
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 120;
      const top = element.getBoundingClientRect().top + window.scrollY;
      // smaller gap so the section starts a bit higher on screen
      const desired = Math.max(0, top - headerHeight + 8);
      window.scrollTo({ top: desired, behavior: 'smooth' });
      return;
    }
    window.location.href = '/#leistungen';
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Word slide-in animation: words slide in from left to right sequentially */}
      <style>
        {`
          /* slide down from above */
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* base hidden state for words/lines */
          .word, .line { opacity: 0; transform: translateY(-18px); display: inline-block; }

          /* when container has .animate-words we start the animation; use longhand so delays remain */
          .animate-words .word,
          .animate-words .line {
            animation-name: slideInDown;
            /* slower, smoother entrance */
            /* increased duration to slow the reveal as requested */
            animation-duration: 0.6s;
            animation-timing-function: cubic-bezier(.2,.9,.25,1);
            animation-fill-mode: both;
          }

          /* scroll indicator dot: gentle down/up loop */
          @keyframes scrollDot {
            0% { top: 5px; opacity: 1; }
            50% { top: 24px; opacity: 0.6; }
            100% { top: 5px; opacity: 1; }
          }

          .scroll-dot {
            animation: scrollDot 1.6s ease-in-out infinite;
          }

          /* respect reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .scroll-dot { animation: none; }
            .animate-words .word, .animate-words .line { animation: none; opacity: 1; transform: none; }
          }

          /* staggered delays top->down (words first left→right, then lines) */
          .delay-1 { animation-delay: 0s; }
          .delay-2 { animation-delay: 0.16s; }
          .delay-3 { animation-delay: 0.32s; }
          .delay-4 { animation-delay: 0.48s; }
          .delay-5 { animation-delay: 0.64s; }
          .line-delay-6 { animation-delay: 0.88s; }
          .line-delay-7 { animation-delay: 1.12s; }
        `}
      </style>

      {/* Background Animation (fills entire hero) */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={24}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          autoSpeed={0.25}
                      /* start animations only after the container receives .reveal-active to avoid FOUC */
                      /* animations are defined in the <style> block above and scoped to .reveal-active */
          autoIntensity={3}
          takeoverDuration={0.15}
          autoResumeDelay={500}
          autoRampDuration={0.6}
        />
      </div>

  {/* Content (Dieser Container wird weiterhin zentriert) */}
  <div className={"container mx-auto text-center relative z-10 " + (animateActive ? 'animate-words' : '')}>
        {/* Main Heading (HIER GEÄNDERT) */}
  <div className="relative max-w-4xl mx-auto mb-6">
          {/* Elegant layered glow: colored soft gradient + subtle white rim behind the main heading */}
          <span
            aria-hidden="true"
            className="absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(130,87,229,0.18), rgba(255,121,198,0.14))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              opacity: 0.95,
              transform: 'scale(1.02)'
            }}
          >
            Von der Vision zur Website
          </span>

          <span
            aria-hidden="true"
            className="absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-10 pointer-events-none"
            style={{
              color: '#ffffff',
              opacity: 0.12,
              transform: 'scale(1.01)'
            }}
          >
            Von der Vision zur Website
          </span>

          <h1 className="relative text-5xl md:text-7xl text-white leading-tight">
            <span className="word delay-1">Von</span>{' '}
            <span className="word delay-2">der</span>{' '}
            <span className="word delay-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vision</span>{' '}
            <span className="word delay-4">zur</span>{' '}
            <span className="word delay-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Website</span>
          </h1>
          {/* Subheading (HIER GEÄNDERT) */}
    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-6 line line-delay-6">
         Hochwertiges Webdesign und strategische Umsetzung für Ihren nachhaltigen Unternehmenserfolg
        </p>

        {/* --- ANGEPASSTER BEREICH: CTA BUTTONS direkt unter dem Text (zentriert) --- */}
        <div className="flex justify-center items-center mt-6 mb-12">
          <a
            href="#leistungen"
            onClick={(e) => {
              e.preventDefault();
              scrollToServices();
            }}
            className="line line-delay-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium"
          >
            Meine Leistungen
          </a>
        </div>
        </div>
      </div>

      {/* --- SCROLL-INDIKATOR (ABSOLUT POSITIONIERT) --- */}
      <div
        className="
          absolute z-10 
          bottom-10           
          left-1/2 -translate-x-1/2 
          flex flex-col items-center"
      >
        {/* Text */}
        <p className="text-slate-200 text-lg mb-3">
          Mehr entdecken
        </p>
        {/* Indikator-Behälter */}
        <div className="w-[25px] h-[45px] border-2 border-slate-200 rounded-full relative overflow-hidden">
          {/* Animierter Punkt */}
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full absolute top-[5px] left-1/2 -translate-x-1/2 scroll-dot"></div>
        </div>
      </div>
      {/* --- ENDE SCROLL-INDIKATOR --- */}
    </section>
  );
}