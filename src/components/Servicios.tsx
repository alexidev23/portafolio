import { Card } from "@/components/ui/card"
import { Code2, Globe, Zap, RotateCw, Figma, Package, Layers } from "lucide-react"

const services = [
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

export default function Servicios() {
  return (
    <section id="services" className="px-6 py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl">
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
              <Card key={i} className="p-6 hover:border-primary/50 transition-all hover:shadow-lg rounded-lg group">
                <Icon className="h-8 w-8 text-primary mb-1 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-0.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
