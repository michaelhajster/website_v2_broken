import { Mail, Phone, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";
import CalendlyEmbed from "./CalendlyEmbed";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Lassen Sie uns gemeinsam die Möglichkeiten von AI für Ihr Unternehmen erkunden. Vereinbaren Sie ein Gespräch oder senden Sie uns Ihre Anfrage.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Options */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-semibold">Direkte Kontaktaufnahme</h2>
              <div className="space-y-4">
                <a 
                  href="tel:+491777868189" 
                  className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+49 1777 868 189</span>
                </a>
                <a 
                  href="mailto:contact@xahead.com" 
                  className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@xahead.com</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Calendly Integration */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6" />
              <h2 className="text-2xl font-semibold">Termin vereinbaren</h2>
            </div>
            <CalendlyEmbed />
          </div>
        </div>
      </main>
    </div>
  );
} 