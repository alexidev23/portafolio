import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { ModeToggle } from './mode-toggle'
import Icono from '/iconito.svg'
import { useScrollTo } from '@/hooks/useScrollTo'

const sections = [
  { id: "about", label: "Acerca de" },
  { id: "services", label: "Servicios" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
]

export function Navbar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    scrollTo(id)
    setMobileMenuOpen(false)
  }, [scrollTo])

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary/20 w-full">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img alt='Logo de Alexis Escobar' src={Icono} className='h-8 w-8' />
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? "page" : undefined}
              className={`text-sm transition-colors hover:text-primary cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full font-semibold ${
                activeSection === id ? "text-primary after:w-full" : "after:w-0"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`py-3 text-left hover:text-primary transition-colors min-h-[44px] font-semibold ${
                  activeSection === id ? "text-primary" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
