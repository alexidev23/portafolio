import { memo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Globe, Zap, RotateCw, Figma, Package, Layers, ArrowRight, type LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { useScrollTo } from "@/hooks/useScrollTo"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Figma,
    title: "Implementación de Figma",
    description: "Convierte tus diseños de Figma en componentes perfectos, responsivos con atención a cada detalle.",
  },
  {
    icon: Globe,
    title: "Sitios Web Responsivos",
    description: "Construyo sitios web modernos, mobile-first que se ven excelentes en todos los dispositivos.",
  },
  {
    icon: Code2,
    title: "Desarrollo en React",
    description:
      "Desarrollo aplicaciones React escalables con TypeScript, enfocado en arquitectura limpia y reutilización.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Creo landing pages de alto rendimiento que atrapan a los usuarios y generan resultados.",
  },
  {
    icon: RotateCw,
    title: "Corrección de Bugs y Optimización",
    description: "Depuro problemas, optimizo rendimiento y mejoro la calidad del código en proyectos existentes.",
  },
  {
    icon: Package,
    title: "Mantenimiento",
    description: "Soporte continuo y mantenimiento para que tus proyectos funcionen sin problemas.",
  },
]

const Servicios = memo(function Servicios() {
  const { ref, isInView } = useInView()
  const scrollTo = useScrollTo()

  return (
    <section id="services" className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-2 mb-4">
          <Layers size={30} className="text-primary" />
          <h2 className="text-primary text-3xl font-bold">Servicios</h2>
        </div>
        <p className="text-muted-foreground mb-12">
          Servicios freelance personalizados para traer tus proyectos a la vida con calidad profesional y atención al
          detalle.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`p-6 hover:border-primary/50 transition-all hover:shadow-lg rounded-lg group hover:-translate-y-1 duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-primary mb-1 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-0.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" onClick={() => scrollTo("contact")} className="rounded-lg gap-2 cursor-pointer text-base">
            Solicitar presupuesto <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

export default Servicios
