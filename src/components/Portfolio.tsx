import { Card } from "@/components/ui/card"
import { Briefcase, ExternalLink, Github, X } from "lucide-react"
import { MisProyectos } from "@/constants/constants"
import { useMemo, useState } from "react"
import { useInView } from "@/hooks/useInView"

const techs = Array.from(new Set(MisProyectos.flatMap((p) => p.tecnologias)))

export default function Portafolio() {
  const [filter, setFilter] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const { ref, isInView } = useInView()

  const filtered = useMemo(
    () => filter
      ? MisProyectos.filter((p) => p.tecnologias.includes(filter))
      : MisProyectos,
    [filter]
  )

  return (
    <section id="projects" className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase size={30} className="text-primary" />
          <h2 className="text-3xl font-bold text-primary">Proyectos Destacados</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Una selección de proyectos que muestran mis habilidades en React, TypeScript y desarrollo web moderno.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${!filter ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary text-secondary-foreground border-border hover:border-primary/50'}`}
          >
            Todos
          </button>
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${filter === tech ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary text-secondary-foreground border-border hover:border-primary/50'}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-2">
          {filtered.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all rounded-lg group flex flex-col hover:border-primary/30">
              <div
                className="relative h-40 overflow-hidden bg-muted cursor-pointer"
                onClick={() => setLightbox(project.imagen)}
              >
                <img
                  src={project.imagen}
                  alt={`Captura del proyecto ${project.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3.5">{project.descripcion}</p>

                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {project.tecnologias.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start gap-2">
                  <a href={project.pagina} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded bg-secondary text-secondary-foreground hover:text-primary hover:bg-secondary/80 cursor-pointer border px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                  <a href={project.repositorio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded bg-secondary text-secondary-foreground hover:text-primary hover:bg-secondary/80 cursor-pointer border px-4 py-2 transition-all">
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors cursor-pointer"
            aria-label="Cerrar imagen"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt="Imagen ampliada del proyecto"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
