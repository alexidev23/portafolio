import { contact, profile } from "@/lib/portafolio-data";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-border bg-card/50"
    >
      <div className="section-reveal mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-8 font-mono text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">06.</span>{" "}
          ~/ contacto
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400">@</span>{" "}
              email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-sm text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400">@</span>{" "}
              redes
            </p>
            <ul className="flex flex-col gap-1.5">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-foreground underline-offset-2 hover:text-emerald-600 hover:underline dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="font-mono text-xs text-muted-foreground">
                {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <p
          suppressHydrationWarning
          className="mt-10 border-t border-border pt-4 font-mono text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
