import { Button } from "./ui/button";
/* ColorBends removed */
import LiquidEther from "./LiquidEther";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("leistungen");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* --- HIER GEÄNDERT: Neue Animation hinzugefügt --- */}
      <style>
        {`
          /* Scroll-Indikator Animation (unverändert) */
          @keyframes scrollAnimation {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(20px);
              opacity: 1;
            }
            100% {
              transform: translateY(30px);
              opacity: 0;
            }
          }
          .animate-scroll-custom {
            animation: scrollAnimation 2s infinite ease-in-out;
          }

          /* NEUE Animation für das "Öffnen" */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hilfsklassen für die Animation mit Verzögerung */
          .animate-fade-in-up-1 {
            opacity: 0; /* Standardmäßig unsichtbar */
            animation: fadeInUp 0.8s ease-out 0.2s forwards; /* 0.2s Verzögerung */
          }
          .animate-fade-in-up-2 {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.4s forwards; /* 0.4s Verzögerung */
          }
          .animate-fade-in-up-3 {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.6s forwards; /* 0.6s Verzögerung */
          }
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
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.25}
          autoIntensity={3}
          takeoverDuration={0.15}
          autoResumeDelay={500}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content (Dieser Container wird weiterhin zentriert) */}
      <div className="container mx-auto text-center relative z-10">
        {/* Main Heading (HIER GEÄNDERT) */}
        <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight animate-fade-in-up-1">
          We Build Digital Experiences.
        </h1>

        {/* Subheading (HIER GEÄNDERT) */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up-2">
         Hochwertiges Webdesign und strategische Umsetzung für Ihren nachhaltigen Unternehmenserfolg
        </p>

        {/* --- ANGEPASSTER BEREICH: CTA BUTTONS (HIER GEÄNDERT) --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in-up-3">
          {/* Button 1: Meine Leistungen */}
          <a
            href="#leistungen"
            onClick={(e) => {
              e.preventDefault();
              scrollToServices();
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium"
          >
            Meine Leistungen
          </a>
        </div>
        {/* --- ENDE BUTTONS --- */}
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
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full absolute top-[5px] left-1/2 -translate-x-1/2 animate-scroll-custom"></div>
        </div>
      </div>
      {/* --- ENDE SCROLL-INDIKATOR --- */}
    </section>
  );
}