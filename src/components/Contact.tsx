import { Mail, Phone, MapPin, Send } from "lucide-react";
import ChatBotCTA from "./ChatBotCTA";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.");
  };

  return (
    <section id="kontakt" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kontakt</span> aufnehmen
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact Info Cards */}
          <div className="h-full flex flex-col justify-between">
            <Card className="bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px]">
              <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-2 shadow-lg ring-1 ring-purple-600/20">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">E-Mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:oezdens.web@outlook.de" className="text-slate-300 underline-offset-2 hover:text-white hover:underline">
                    oezdens.web@outlook.de
                  </a>
                </CardContent>
            </Card>

        

            <Card className="bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px]">
              <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-2 shadow-lg ring-1 ring-purple-600/20">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Standort</CardTitle>
                </CardHeader>
              <CardContent>
                <p className="text-slate-400">Heilbronn, Deutschland</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px] h-full">
              <CardHeader>
                <CardTitle className="text-white">Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-slate-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Ihr Name"
                        required
                        className="bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition"
                        onFocus={(e) => {
                          const t = e.currentTarget as HTMLInputElement;
                          t.style.borderColor = '#7b2cff';
                          t.style.boxShadow = '0 0 0 4px rgba(123,44,255,0.18)';
                        }}
                        onBlur={(e) => {
                          const t = e.currentTarget as HTMLInputElement;
                          t.style.borderColor = '';
                          t.style.boxShadow = '';
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-slate-300">
                        E-Mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ihre@email.de"
                        required
                        className="bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition"
                        onFocus={(e) => {
                          const t = e.currentTarget as HTMLInputElement;
                          t.style.borderColor = '#7b2cff';
                          t.style.boxShadow = '0 0 0 4px rgba(123,44,255,0.18)';
                        }}
                        onBlur={(e) => {
                          const t = e.currentTarget as HTMLInputElement;
                          t.style.borderColor = '';
                          t.style.boxShadow = '';
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-slate-300">
                      Betreff
                    </label>
                    <Input
                      id="subject"
                      placeholder="Worum geht es?"
                      required
                      className="bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition"
                      onFocus={(e) => {
                        const t = e.currentTarget as HTMLInputElement;
                        t.style.borderColor = '#7b2cff';
                        t.style.boxShadow = '0 0 0 4px rgba(123,44,255,0.18)';
                      }}
                      onBlur={(e) => {
                        const t = e.currentTarget as HTMLInputElement;
                        t.style.borderColor = '';
                        t.style.boxShadow = '';
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-slate-300">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Erzählen Sie mir von Ihrem Projekt..."
                      required
                      rows={6}
                      className="bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition"
                      onFocus={(e) => {
                        const t = e.currentTarget as HTMLTextAreaElement;
                        t.style.borderColor = '#7b2cff';
                        t.style.boxShadow = '0 0 0 4px rgba(123,44,255,0.18)';
                      }}
                      onBlur={(e) => {
                        const t = e.currentTarget as HTMLTextAreaElement;
                        t.style.borderColor = '';
                        t.style.boxShadow = '';
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0 text-white font-semibold shadow-xl transform transition-all duration-150 hover:-translate-y-1"
                  >
                    <Send className="w-4 h-4 mr-2 text-white" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </div>
      {/* ChatBot floating widget (can be removed by deleting src/components/ChatBotCTA.tsx and this import) */}
      <ChatBotCTA />
    </section>
  );
}

// ChatBotCTA is injected above in the DOM so it can float over the Contact section.
