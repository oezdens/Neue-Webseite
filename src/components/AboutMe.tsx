import { Rocket, Sparkles, Award, TrendingUp, Users, Code2, Smartphone, Palette } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutMe() {
  const highlights = [
    { number: "30+", label: "Projekte", icon: Rocket },
    { number: "9+", label: "Jahre", icon: Award },
    { number: "100%", label: "Zufriedenheit", icon: TrendingUp },
    { number: "24/7", label: "Support", icon: Users },
  ];

  const services = [
    {
      title: "Website Entwicklung",
      icon: Code2,
      description: "Moderne und performante Webseiten mit React, Next.js und neuesten Web-Technologien."
    },
    {
      title: "Mobile-First Design",
      icon: Smartphone,
      description: "Responsive Designs, die auf allen Geräten perfekt aussehen und funktionieren."
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Benutzerfreundliche Interfaces mit Fokus auf optimale User Experience."
    }
  ];

  // Inline-definierte Animationen als Style-Objekte
  const gradientAnimation = {
    animation: 'aboutme-gradient-xy 8s ease infinite',
  };

  const floatAnimation = {
    animation: 'aboutme-float 6s ease-in-out infinite',
  };

  return (
    <>
      <style>{`
        @keyframes aboutme-gradient-xy {
          0%, 100% { 
            background-position: 0% 50%; 
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%; 
            transform: scale(1.05);
          }
        }
        
        @keyframes aboutme-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl" style={floatAnimation} />
        </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Services Section */}
          <div id="leistungen" className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-purple-300 text-sm">Leistungen</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                Meine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Leistungen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-white mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <div id="ueber-mich" className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-purple-300 text-sm">IT Webentwickler</span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-7xl mb-6 text-white">
                    Hallo, ich bin{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                      dein Entwickler
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-400 leading-relaxed mb-6">
                 Als studierter Informatiker mit über 9 Jahren Berufserfahrung und hauptberuflichem Teamleiter verbinde ich fundiertes technisches Know-how in Apps, Automation und KI mit der Kreativität eines leidenschaftlichen Webentwicklers, um Ihre digitalen Visionen in maßgeschneiderte, hervorragend funktionierende Webseiten umzusetzen, die garantiert 50% günstiger sind als Agenturen.
                  </p>

                  <p className="text-lg text-slate-500">
                    Spezialisiert auf <span className="text-purple-400">React</span>, 
                    <span className="text-pink-400"> TypeScript</span> und 
                    <span className="text-blue-400"> moderne Web-Technologien</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%]" 
                      style={{ animation: 'aboutme-gradient-xy 3s ease infinite' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                    <span className="relative text-white flex items-center gap-2">
                      Projekt starten
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm">
                    Portfolio ansehen
                  </button>
                </div>
              </div>

              {/* Right: Profile Image Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-4 overflow-hidden">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxODM5OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Developer Workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div 
                    className="absolute bottom-8 left-8 px-6 py-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-purple-500/30"
                    style={floatAnimation}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-white">Verfügbar für Projekte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights Section */}
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <item.icon className="w-8 h-8 text-purple-400 mb-4" strokeWidth={1.5} />
                    <div className="text-4xl text-white mb-2">{item.number}</div>
                    <div className="text-slate-400">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
