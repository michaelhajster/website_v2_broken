import { ArrowRight, BookOpen, Bot } from "lucide-react";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Bereiten Sie Ihr Unternehmen auf die Zukunft von AI vor
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
            Zukunftssichere AI-Strategien und Lösungen für Ihr Unternehmen
          </p>
          
          <p className="text-lg text-foreground/70 max-w-3xl">
            xahead ist Ihr Partner für AI – von strategischer Beratung bis zur Entwicklung leistungsstarker Software, die AI direkt in Ihre Prozesse integriert und Ihr Unternehmen voranbringt.
          </p>
        </section>

        {/* Service Highlights */}
        <section className="w-full grid gap-8 sm:grid-cols-2">
          {/* Foundation Services */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Foundation Services</h2>
            <p className="text-foreground/70">
              Von AI-Literacy-Workshops bis hin zur Use Case Discovery – wir helfen Ihnen, die Grundlagen zu verstehen und Anwendungsfälle zu identifizieren, die Ihre strategischen Ziele unterstützen.
            </p>
            <a
              href="/foundation"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Foundation Services entdecken <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Advanced Solutions */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Advanced Solutions</h2>
            <p className="text-foreground/70">
              Ob autonome Agenten, RAG-Systeme oder maßgeschneiderte Software – unsere fortgeschrittenen AI-Lösungen helfen Unternehmen, die nächste Innovationsstufe zu erreichen und AI direkt in ihre Prozesse zu integrieren.
            </p>
            <a
              href="/advanced"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Advanced Solutions erkunden <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row pt-4">
          <Button href="/contact" className="w-full sm:w-auto">
            Starten Sie Ihre AI-Reise
          </Button>
        </div>
      </main>
    </div>
  );
}
