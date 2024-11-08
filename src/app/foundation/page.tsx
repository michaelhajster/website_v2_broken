import { ArrowRight, BookOpen, Search, Wand2 } from "lucide-react";

export default function FoundationPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Foundation Services - Bauen Sie AI Literacy und Strategie auf
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Unsere Grundlagen-Workshops vermitteln Ihrem Team die Werkzeuge, um die Möglichkeiten von AI zu verstehen. Sie ermöglichen fundierte Entscheidungen und eine strategische Implementierung. Perfekt für Unternehmen, die ihre AI-Reise beginnen oder internes Wissen erweitern möchten.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {/* AI Literacy Workshop */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">AI Literacy Workshop</h2>
            <p className="text-foreground/70">
              Verstehen Sie die Grundlagen der AI-Technologie und ihre Anwendungsmöglichkeiten in Ihrem Unternehmen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Erweitern Sie Ihre AI Literacy <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Use Case Discovery */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <Search className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Use Case Discovery</h2>
            <p className="text-foreground/70">
              Identifizieren Sie die vielversprechendsten AI-Anwendungsfälle für Ihr Unternehmen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Use Cases entdecken <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Prompt Optimization */}
          <div className="card sm:col-span-2">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <Wand2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Prompt Optimization</h2>
            <p className="text-foreground/70">
              Für Unternehmen, die Generative AI-Anwendungen bereits aktiv erkunden, bieten wir Prompt Optimization. Wir helfen Ihnen, AI-Prompts zu optimieren, um unmittelbaren Mehrwert zu erzielen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Applied AI machen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit für den nächsten Schritt?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 min-w-48 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Kontaktieren Sie uns
          </a>
        </section>
      </main>
    </div>
  );
} 