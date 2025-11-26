import { ArrowRight } from 'lucide-react'
import Perfil from '../assets/foto5.avif'
import { Button } from './ui/button'

export function Home () {
const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 border-b border-border/40">
      <div className="mx-auto max-w-4xl">
        {/* Avatar */}
        <div className="mb-2 flex justify-center">
          <img src={Perfil} alt="Foto de Alexis Escobar" className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-primary/50 shadow-lg animate-fade-in" />
        </div>

        {/* Main Content */}
        <div className="animate-fade-in text-center">
          <p className="text-2xl text-primary font-semibold mb-2">Alexis Escobar</p>
          <h1 className="text-4xl font-bold sm:text-6xl text-balance mb-4">Desarrollador Frontend Junior</h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
            React & TypeScript
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Construyo interfaces claras, modernas y funcionales. Me caracterizo por la prolijidad, el compromiso y las ganas de crecer en cada proyecto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="rounded-lg gap-2 hover:text-white cursor-pointer">
              Contratarme <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")} className="rounded-lg hover:text-primary cursor-pointer">
              Ver Proyectos
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}

