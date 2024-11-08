import { ArrowRight, BookOpen, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start max-w-4xl">
        {/* Hero Section */}
        <section className="space-y-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Bereiten Sie Ihr Unternehmen auf die Zukunft von AI vor
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed">
            Mit gezielten AI-Strategien und Workshops unterstützen wir Sie dabei, das Potenzial der heutigen AI zu nutzen und auf die Möglichkeiten von morgen vorzubereiten.
          </p>
          
          <p className="text-lg text-foreground/70">
            Bei xahead bieten wir fundierte Beratung für Unternehmen, die bereit sind, AI zu integrieren – von den Grundlagen bis hin zu fortgeschrittenen Lösungen. Wir bringen Klarheit und Innovation in jede Phase Ihrer AI-Reise.
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
              Von AI Literacy Workshops bis hin zu Use Case Discovery – wir helfen Ihnen, die Grundlagen zu verstehen und die richtigen Anwendungsfälle zu identifizieren.
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
              Fortgeschrittene AI-Lösungen wie RAG-Systeme und autonome Agenten für Unternehmen, die mit AI führend sein möchten.
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
          <a
            href="/contact"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 min-w-48"
          >
            Starten Sie Ihre AI-Reise
          </a>
        </div>
      </main>
    </div>
  );
}
