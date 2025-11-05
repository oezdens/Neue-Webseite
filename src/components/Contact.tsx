import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import ChatBotCTA from "./ChatBotCTA";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: `${formData.get('subject')}\n\n${formData.get('message')}`
    };

    try {
      const response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Fehler:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom styles for contact form to avoid white browser autofill/selection
  const customStyles = `
    /* Scope to this form to avoid global side-effects */
    .contact-form input::selection, .contact-form textarea::selection {
      background: rgba(123,44,255,0.28);
      color: #ffffff;
    }

    /* Autofill background for WebKit-based browsers (Chrome, Edge, Safari)
       make it match the dark theme instead of default yellow/white */
    .contact-form input:-webkit-autofill,
    .contact-form textarea:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #0f172a inset !important;
      box-shadow: 0 0 0 1000px #0f172a inset !important;
      -webkit-text-fill-color: #cbd5e1 !important;
    }

    /* For Firefox - set background on :autofill if supported */
    .contact-form input:-moz-autofill,
    .contact-form textarea:-moz-autofill {
      box-shadow: 0 0 0 1000px #0f172a inset !important;
      -moz-text-fill-color: #cbd5e1 !important;
    }

    /* Ensure any temporarily shown browser UI (autocomplete popup) uses
       a gentle purple highlight when text is selected inside the inputs */
    .contact-form input, .contact-form textarea {
      background-color: rgba(15,23,42,0.6);
      color: #e6eef8;
    }

    /* Make success / error messages explicitly visible on dark bg */
    .contact-success { color: #86efac !important; }
    .contact-error { color: #fecaca !important; }
  `;

  return (
    <section id="kontakt" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Inject component-scoped styles to override browser autofill/selection */}
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
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
          <div className="h-full flex flex-col gap-4">
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
                <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-slate-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ihr Name"
                        required
                        disabled={isSubmitting}
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
                        name="email"
                        type="email"
                        placeholder="ihre@email.de"
                        required
                        disabled={isSubmitting}
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
                      name="subject"
                      placeholder="Worum geht es?"
                      required
                      disabled={isSubmitting}
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
                      name="message"
                      placeholder="Erzählen Sie mir von Ihrem Projekt..."
                      required
                      disabled={isSubmitting}
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

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg contact-success">
                      ✓ Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg contact-error">
                      ✗ Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0 text-white font-semibold shadow-xl transform transition-all duration-150 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send className="w-4 h-4 mr-2 text-white" />
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
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
