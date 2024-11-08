export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.24] mt-auto">
      <div className="max-w-5xl mx-auto px-8 py-12 sm:px-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">xahead</h3>
            <p className="text-sm text-foreground/70">
              Wir bereiten Unternehmen auf die Zukunft von AI vor.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="/foundation" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Foundation Services
              </a>
              <a href="/advanced" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Advanced Solutions
              </a>
              <a href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <div className="space-y-2">
              <a href="mailto:contact@xahead.com" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                contact@xahead.com
              </a>
              <a href="tel:+491777868189" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                +49 1777 868 189
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/[.08] dark:border-white/[.24] text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} xahead. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 