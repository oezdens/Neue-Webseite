import {
  CheckCircle2,
  GanttChartSquare, // MODIFIZIERT: Professionelleres Icon
  Rocket, // MODIFIZIERT: Professionelleres Icon
  Star, // MODIFIZIERT: Professionelleres Icon
  HeartHandshake, // MODIFIZIERT: Professionelleres Icon
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const highlights = [
  "React, Next.js, TypeScript Experte",
  "Responsive & moderne Designs",
  "SEO-optimierte Websites",
  "Persönliche Betreuung & Support",
];

export function About() {
  return (
    <section id="ueber-mich" className="py-24 px-6 bg-slate-900/30">
  <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Über mich
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
             Als studierter Informatiker mit über 10 Jahren Berufserfahrung und hauptberuflichem Teamleiter verbinde ich fundiertes technisches Know-how in Apps, Automation und KI mit der Kreativität eines leidenschaftlichen Webentwicklers, um Ihre digitalen Visionen in maßgeschneiderte, hervorragend funktionierende Webseiten umzusetzen, die garantiert 50% günstiger sind als Agenturen
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Jedes Projekt ist einzigartig, und ich nehme mir die Zeit, Ihre
              spezifischen Anforderungen zu verstehen und maßgeschneiderte
              Lösungen zu entwickeln, die Ihre Erwartungen übertreffen.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 [perspective:1000px]">
            {/* MODIFIZIERT: Umfassendere Animationen und Icons */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-500/20 border border-purple-500/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-500/80 [transform-style:preserve-3d] hover:rotate-x-3">
              <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"></div>
              <CardContent className="pt-6 text-center relative z-10">
                <GanttChartSquare className="w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110" />
                <div className="text-4xl mb-2 font-bold text-white">10+</div>
                <div className="text-slate-400">Jahre Erfahrung</div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-400/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-400/80 [transform-style:preserve-3d] hover:rotate-x-3">
              <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"></div>
              <CardContent className="pt-6 text-center relative z-10">
                <Rocket className="w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110" />
                <div className="text-4xl mb-2 font-bold text-white">35+</div>
                <div className="text-slate-400">Projekte</div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-700/20 to-purple-600/20 border border-purple-600/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-600/80 [transform-style:preserve-3d] hover:rotate-x-3">
              <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"></div>
              <CardContent className="pt-6 text-center relative z-10">
                <Star className="w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110" />
                <div className="text-4xl mb-2 font-bold text-white">30+</div>
                <div className="text-slate-400">Zufriedene Kunden</div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-500/80 [transform-style:preserve-3d] hover:rotate-x-3">
              <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"></div>
              <CardContent className="pt-6 text-center relative z-10">
                <HeartHandshake className="w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110" />
                <div className="text-4xl mb-2 font-bold text-white">100%</div>
                <div className="text-slate-400">Engagement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}