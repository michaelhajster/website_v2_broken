import { ArrowRight, Bot, Database, Workflow } from "lucide-react";
import Button from "@/components/Button";

export default function AdvancedPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Advanced Solutions - Für Unternehmen,<br />
            die mit AI führend sein möchten
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Unsere Advanced Solutions sind für Unternehmen konzipiert, die mit AI führend sein möchten. Von Data Enrichment bis hin zu autonomen Agenten bieten wir Lösungen, die wertvolle Einblicke ermöglichen und komplexe Aufgaben effizient gestalten.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid gap-8">
          {/* RAG */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <Database className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Retrieval-Augmented Generation (RAG)</h2>
            <p className="text-foreground/70">
              Unsere RAG-Systeme nutzen unstrukturierte Daten, um dynamische Einblicke und Echtzeit-Entscheidungen zu ermöglichen und Ihre Daten in verwertbare Intelligenz zu verwandeln.
            </p>
            <a
              href="/info-pages/rag"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              RAG Systeme entdecken <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* AI Agents */}
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Autonome AI Agents</h2>
            <p className="text-foreground/70">
              Unsere autonomen AI-Agents integrieren sich direkt in Ihre Workflows, übernehmen proaktiv Aufgaben und steigern Ihre Effizienz 24/7 durch automatisierte Prozesslösungen.
            </p>

            <a
              href="/info-pages/autonomous-agents"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Effizienz mit AI-Agents steigern <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit für den nächsten Schritt mit AI?
          </h2>
          <Button href="/contact">
            Kontaktieren Sie uns für individuelle Lösungen
          </Button>
        </section>
      </main>
    </div>
  );
} 