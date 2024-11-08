export default function ImpressumPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Impressum
          </h1>
        </section>

        {/* Content */}
        <div className="space-y-12">
          <div className="card">
            <h2 className="text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-4 text-foreground/70">
              <p>xahead</p>
              <p>
                Michael Hajster<br />
                Schönhauser Allee 150<br />
                10435 Berlin<br />
                Deutschland
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                Telefon: +49 1777 868 189<br />
                E-Mail: contact@xahead.com
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Umsatzsteuer-ID</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE XXX XXX XXX
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">Streitschlichtung</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 