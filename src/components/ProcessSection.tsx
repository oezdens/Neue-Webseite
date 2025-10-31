import { MessageCircle, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Kostenloses Gespräch",
    description: "Erzähle uns von deiner Vision und deinen Zielen für deine Webseite.",
    icon: MessageCircle,
  },
  {
    number: 2,
    title: "Kostenloser Entwurf",
    description: "Wir erstellen einen maßgeschneiderten Entwurf, der deine Marke perfekt repräsentiert.",
    icon: Palette,
  },
  {
    number: 3,
    title: "Feinschliff & Go-Live",
    description: "Nach finalen Anpassungen geht deine professionelle Webseite live.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="prozess" className="py-24 md:py-32 px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 mb-12 animate-gradient-text">
          In 3 Schritten zu deiner Webseite
        </h2>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                <div className="relative z-10 mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 border-2 border-pink-500 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-12 h-12 text-pink-400" strokeWidth={1.5} />
                  </div>

                  {/* Connecting Line for Mobile */}
                  {/* This vertical connector shows between steps on mobile */}
                </div>

                <div className="space-y-3">
                  <h3 className="text-pink-400 text-lg md:text-xl font-semibold">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-slate-300 max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="lila-button">
            Kostenloses Erstgespräch vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
}