import { ArrowRight, Wand2 } from "lucide-react";
import Button from "@/components/Button";

export default function AppliedAIPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <div className="h-12 w-12 rounded-full bg-foreground/[.08] flex items-center justify-center">
            <Wand2 className="h-6 w-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Prompt Optimization
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Maximieren Sie den Nutzen Ihrer AI-Anwendungen durch optimierte Prompts und effektive Strategien.
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="card">
            <h2 className="text-2xl font-semibold">Unsere Methodik</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Analyse bestehender Prompts und deren Effektivität</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Entwicklung maßgeschneiderter Prompt-Strategien</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Implementierung von Best Practices für verschiedene AI-Modelle</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Ihre Vorteile</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Verbesserte Qualität der AI-Outputs</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Reduzierte Kosten durch effizientere Prompts</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
                <span>Konsistentere Ergebnisse über alle Anwendungsfälle</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Details */}
        <div className="card">
          <h2 className="text-2xl font-semibold">Unser Prozess</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-medium mb-2">1. Analyse</h3>
              <p className="text-foreground/70">
                Evaluation Ihrer aktuellen Prompts und Identifikation von Optimierungspotentialen.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">2. Optimierung</h3>
              <p className="text-foreground/70">
                Entwicklung und Testing verbesserter Prompt-Strategien.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">3. Implementation</h3>
              <p className="text-foreground/70">
                Integration optimierter Prompts und Schulung Ihres Teams.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Bereit, Ihre AI-Prompts zu optimieren?
          </h2>
          <Button href="/contact">
            Beratungsgespräch vereinbaren
          </Button>
        </section>
      </main>
    </div>
  );
} 