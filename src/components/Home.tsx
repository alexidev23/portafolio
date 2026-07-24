import { ArrowRight, MousePointerClick } from 'lucide-react'
import Perfil from '../assets/foto5.avif'
import { Button } from './ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'

export function Home () {
  const scrollTo = useScrollTo()

  return (
    <section className="relative overflow-hidden px-6 py-20 border-b border-border/40">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse-slow" />
            <img src={Perfil} alt="Alexis Escobar — Desarrollador Frontend" className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-background shadow-lg animate-fade-in" />
          </div>
        </div>

        <div className="animate-fade-in text-center">
          <p className="text-2xl text-primary font-semibold mb-2">Alexis Escobar</p>
          <h1 className="text-4xl font-bold sm:text-6xl text-balance mb-4 leading-tight">
            Construyo experiencias digitales que impulsan tu negocio
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
            Desarrollador Frontend Freelance · React & TypeScript
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Transformo tus ideas en interfaces modernas, rápidas y funcionales. 
            Desde landing pages que convierten hasta aplicaciones web completas — 
            cada línea de código está pensada para hacer crecer tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollTo("contact")} className="rounded-lg gap-2 hover:text-white cursor-pointer group text-base">
              Solicitar presupuesto <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("projects")} className="rounded-lg hover:text-primary cursor-pointer text-base">
              <MousePointerClick className="h-4 w-4" />
              Ver proyectos
            </Button>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}
