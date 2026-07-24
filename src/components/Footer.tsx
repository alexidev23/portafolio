import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-label="Pie de página" className="border-t border-border/40 bg-card/50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">Alexis Escobar</p>
            <p className="text-sm text-muted-foreground">Desarrollador Frontend Freelance</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/alexidev23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-escobar-0a987b2b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:alexisescobardev@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Enviar email"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-border/40 pt-6 text-sm text-muted-foreground">
          <p>© {currentYear} Alexis Escobar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
