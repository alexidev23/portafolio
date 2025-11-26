import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'
import Icono from '/iconito.svg'

export function Navbar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img alt='Logo de la empresa' src={Icono} className='h-8 w-8' />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollToSection("about")} className="text-sm transition-colors hover:text-primary cursor-pointer">
            Acerca de
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm transition-colors hover:text-primary cursor-pointer">
            Servicios
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm transition-colors hover:text-primary cursor-pointer">
            Proyectos
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm transition-colors hover:text-primary cursor-pointer">
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-card md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-left hover:text-primary transition-colors"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-left hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-left hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-left hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  )
}