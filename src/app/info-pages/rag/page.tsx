import { ArrowRight, Database, Network } from "lucide-react";
import Button from "@/components/Button";

export default function RAGPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
            <Database className="h-6 w-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Retrieval-Augmented Generation (RAG)
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Transformieren Sie Ihre unstrukturierten Daten in verwertbare Intelligenz mit unseren maßgeschneiderten RAG-Systemen.
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="card">
            <h2 className="text-2xl font-semibold">Vorteile von RAG</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Präzise Antworten basierend auf Ihren eigenen Daten</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Reduzierte Halluzinationen durch Faktenverankerung</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Echtzeit-Updates ohne Neutraining des Modells</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Anwendungsfälle</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <Network className="h-5 w-5 flex-shrink-0" />
                <span>Intelligente Dokumentensuche und -analyse</span>
              </li>
              <li className="flex gap-3">
                <Network className="h-5 w-5 flex-shrink-0" />
                <span>Automatisierte Kundenbetreuung mit Kontext</span>
              </li>
              <li className="flex gap-3">
                <Network className="h-5 w-5 flex-shrink-0" />
                <span>Wissensmanagement und Entscheidungsunterstützung</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="card">
          <h2 className="text-2xl font-semibold">Implementierungsprozess</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-medium mb-2">1. Analyse & Design</h3>
              <p className="text-foreground/70">
                Evaluation Ihrer Datenquellen und Anforderungen. Entwicklung einer 
                maßgeschneiderten RAG-Architektur.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">2. Integration</h3>
              <p className="text-foreground/70">
                Implementierung des RAG-Systems und Anbindung an Ihre bestehende 
                Infrastruktur.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">3. Optimierung</h3>
              <p className="text-foreground/70">
                Kontinuierliche Verbesserung der Retrieval-Qualität und 
                Systemperformance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit, Ihre Daten intelligent zu nutzen?
          </h2>
          <Button href="/contact">
            RAG-System Beratung anfragen
          </Button>
        </section>
      </main>
    </div>
  );
} 