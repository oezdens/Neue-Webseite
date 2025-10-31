import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">Impressum</h1>

        <section className="prose prose-invert text-slate-300">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Max Mustermann
            <br />
            Musterstraße 1
            <br />
            12345 Musterstadt
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+491234567890" className="text-purple-400">+49 123 4567890</a>
            <br />
            E-Mail: <a href="mailto:kontakt@example.com" className="text-purple-400">kontakt@example.com</a>
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Max Mustermann</p>

          <h2>Haftungsausschluss</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
            Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
            deren Betreiber verantwortlich.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
