export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-label="Pie de página" className="border-t border-border/40 bg-card/50 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Alexis Escobar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
