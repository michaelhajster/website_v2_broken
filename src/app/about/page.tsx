import { Bot, Brain, Target } from "lucide-react";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Über xahead
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Wir sind Ihr Partner für die erfolgreiche Integration von AI in Ihr Unternehmen – von der Strategie bis zur Implementierung.
          </p>
        </section>

        {/* Mission Statement */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Unsere Mission</h2>
          <p className="text-foreground/70">
            Wir machen Unternehmen fit für die AI-Revolution. Durch praxisnahe Beratung und maßgeschneiderte Lösungen helfen wir Ihnen, das volle Potenzial von AI zu erschließen und Ihre Geschäftsprozesse zukunftssicher zu gestalten.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="card">
            <Brain className="h-8 w-8 mb-4 text-foreground/70" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-foreground/70">
              Fundiertes Wissen in AI-Technologien und deren praktischer Anwendung im Unternehmenskontext.
            </p>
          </div>
          
          <div className="card">
            <Target className="h-8 w-8 mb-4 text-foreground/70" />
            <h3 className="text-xl font-semibold mb-2">Pragmatismus</h3>
            <p className="text-foreground/70">
              Fokus auf schnell realisierbare Lösungen mit messbarem Mehrwert für Ihr Unternehmen.
            </p>
          </div>
          
          <div className="card">
            <Bot className="h-8 w-8 mb-4 text-foreground/70" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-foreground/70">
              Stets am Puls der Zeit mit den neuesten AI-Entwicklungen und Best Practices.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Das Team</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Michael Hajster</h3>
              <p className="text-lg text-foreground/80 mb-4">Gründer & AI Consultant</p>
              <p className="text-foreground/70">
                Mit über 10 Jahren Erfahrung in der Softwareentwicklung und AI-Integration berät Michael Unternehmen bei ihrer digitalen Transformation. Sein Fokus liegt auf der Entwicklung pragmatischer AI-Lösungen, die echten Mehrwert schaffen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Lassen Sie uns gemeinsam Ihre AI-Strategie entwickeln
          </h2>
          <Button href="/contact">
            Kontaktieren Sie uns
          </Button>
        </section>
      </main>
    </div>
  );
} 