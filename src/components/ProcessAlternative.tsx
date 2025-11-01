import { MessageCircle, Palette, Rocket, Check, Zap } from "lucide-react";

export default function ProcessAlternative() {
  const steps = [
    {
      number: "01",
      title: "Kostenloses Gespräch",
      description: "Erzähle mir von deiner Vision und deinen Zielen für deine Webseite.",
      icon: MessageCircle,
      features: ["30 Min. Beratung", "Unverbindlich", "Individuelle Strategie"],
    },
    {
      number: "02",
      title: "Kostenloser Entwurf",
      description: "Ich erstelle einen maßgeschneiderten Entwurf, der deine Marke perfekt repräsentiert.",
      icon: Palette,
      features: ["Design-Konzept", "2 Revisionen", "Responsive Layout"],
    },
    {
      number: "03",
      title: "Feinschliff & Go-Live",
     description: "Ich kümmere mich um die Details und bringe deine neue Website online.",
      icon: Rocket,
      features: ["Finalisierung", "Testing", "Launch Support"],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>

  <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div id="ablauf" className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-purple-300 text-sm font-medium">Schnell. Professionell. Transparent.</span>
            </div>

            <h1 className="text-5xl md:text-4xl mb-6 text-white font-medium leading-tight">
              Von der <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">Idee</span> zur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient">Webseite</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Deine professionelle Webseite in nur 3 einfachen Schritten
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number Badge */}
                  <div className="relative flex items-start justify-between mb-6">
                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                      <span className="text-purple-300 font-medium">Schritt {step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-white text-2xl font-medium leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 pt-4">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <button className="group relative px-8 py-4 rounded-full overflow-hidden font-medium">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative text-white flex items-center gap-2">
                  Jetzt kostenlos starten
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById("kontakt");
                  if (element) {
                    const headerEl = document.querySelector('header') as HTMLElement | null;
                    const headerHeight = headerEl ? headerEl.offsetHeight : 120;
                    const top = element.getBoundingClientRect().top + window.scrollY;
                    const desired = Math.max(0, top - headerHeight - 8);
                    window.scrollTo({ top: desired, behavior: 'smooth' });
                    return;
                  }
                  // fallback when not on main page
                  window.location.href = '/#kontakt';
                }}
                className="px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm font-medium"
              >
                Kontakt aufnehmen
              </button>
            </div>

            <p className="mt-8 text-slate-500 text-sm">
              ✓ Keine versteckten Kosten · ✓ 100% Transparent · ✓ Persönlicher Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
