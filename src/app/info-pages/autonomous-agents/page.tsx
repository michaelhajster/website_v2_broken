import { ArrowRight, Bot, Workflow } from "lucide-react";
import Button from "@/components/Button";

export default function AutonomousAgentsPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Autonome AI Agents
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Steigern Sie Ihre Effizienz durch intelligente, autonome Agenten, die sich nahtlos in Ihre bestehenden Workflows integrieren.
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="card">
            <h2 className="text-2xl font-semibold">Kernfunktionen</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>24/7 autonome Aufgabenausführung</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Selbstständige Entscheidungsfindung</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Nahtlose Integration in bestehende Systeme</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Vorteile</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Reduzierung manueller Arbeitsschritte</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Skalierbare Prozessautomatisierung</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Konsistente Qualität durch standardisierte Abläufe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Agent Applications */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Anwendungsbereiche</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-foreground/[.08] space-y-2">
              <Workflow className="h-5 w-5 text-foreground/70" />
              <h3 className="font-medium">Data Enrichment und Reporting Agents</h3>
              <p className="text-sm text-foreground/70">
                Verwandeln unstrukturierte Daten in verwertbare Einblicke.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-foreground/[.08] space-y-2">
              <Workflow className="h-5 w-5 text-foreground/70" />
              <h3 className="font-medium">Automated Workflow Agents</h3>
              <p className="text-sm text-foreground/70">
                Ermöglichen durchgängige Automatisierung von Workflows.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-foreground/[.08] space-y-2">
              <Workflow className="h-5 w-5 text-foreground/70" />
              <h3 className="font-medium">Decision-Making Agents</h3>
              <p className="text-sm text-foreground/70">
                Agieren in spezifischen Kontexten, um optimale Ergebnisse zu erzielen.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="card">
          <h2 className="text-2xl font-semibold">Implementierungsprozess</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-medium mb-2">1. Analyse</h3>
              <p className="text-foreground/70">
                Identifikation der optimalen Einsatzgebiete und Definition der Agenten-Aufgaben.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">2. Entwicklung</h3>
              <p className="text-foreground/70">
                Maßgeschneiderte Implementierung und Integration der Agenten in Ihre Systeme.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">3. Optimierung</h3>
              <p className="text-foreground/70">
                Kontinuierliche Verbesserung der Agenten-Performance und Anpassung an neue Anforderungen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit für autonome AI-Agenten?
          </h2>
          <Button href="/contact">
            Implementierung besprechen
          </Button>
        </section>
      </main>
    </div>
  );
} 