import { ArrowRight, Bot, Database, Workflow } from "lucide-react";

export default function AdvancedPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Advanced Solutions - Für Unternehmen, die mit AI führend sein möchten
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
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              RAG Systeme entdecken <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* AI Agents */}
          <div className="card">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold">Autonome AI Agents</h2>
              <p className="text-foreground/70">
                Unsere AI-Agents agieren autonom in Workflows und bieten spezialisierte Lösungen für proaktives Task Management. Ideal für fortgeschrittene Unternehmen, die Effizienz und 24/7-Betrieb maximieren möchten.
              </p>
            </div>

            {/* Agent Applications */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-lg bg-foreground/[.03] dark:bg-foreground/[.08] space-y-2">
                <Workflow className="h-5 w-5 text-foreground/70" />
                <h3 className="font-medium">Data Enrichment und Reporting Agents</h3>
                <p className="text-sm text-foreground/70">
                  Verwandeln unstrukturierte Daten in verwertbare Einblicke.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/[.03] dark:bg-foreground/[.08] space-y-2">
                <Workflow className="h-5 w-5 text-foreground/70" />
                <h3 className="font-medium">Automated Workflow Agents</h3>
                <p className="text-sm text-foreground/70">
                  Ermöglichen durchgängige Automatisierung von Workflows.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-foreground/[.03] dark:bg-foreground/[.08] space-y-2">
                <Workflow className="h-5 w-5 text-foreground/70" />
                <h3 className="font-medium">Decision-Making Agents</h3>
                <p className="text-sm text-foreground/70">
                  Agieren in spezifischen Kontexten, um optimale Ergebnisse zu erzielen.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              AI Agents implementieren <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit für den nächsten Schritt mit AI?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 min-w-48 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Kontaktieren Sie uns für individuelle Lösungen
          </a>
        </section>
      </main>
    </div>
  );
} 