import { Smartphone, Globe, Palette } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Entwicklung",
    description:
      "Moderne, responsive Websites mit den neuesten Technologien und Best Practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Perfekte Darstellung auf allen Geräten - von Smartphone bis Desktop.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Ansprechendes Design, das Ihre Marke perfekt in Szene setzt.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="pt-8 pb-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="
              text-5xl md:text-6xl lg:text-7xl 
              mb-6 
              text-transparent bg-clip-text 
              leading-tight
              animate-gradient-text 
            "
            style={{
              fontSize: "4rem",
              fontWeight: 600,
              letterSpacing: "-2px",
              lineHeight: "1.2em",
            }}
          >
            Meine Leistungen
          </h2>
          {/* --- HIER GEÄNDERT (text-lg -> text-base, md:text-xl -> md:text-lg) --- */}
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Von der strategischen Beratung bis zur präzisen Umsetzung: Das biete
            ich Ihnen!
          </p>
          {/* --- ENDE ÄNDERUNG --- */}
        </div>

        {/* --- Wrapper auf max-w-6xl vergrößert --- */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row gap-6 justify-center items-stretch flex-wrap">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 flex flex-col h-full w-full max-w-xs min-w-[260px]"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        {/* --- ENDE GEÄNDERTER BEREICH --- */}
      </div>
    </section>
  );
}