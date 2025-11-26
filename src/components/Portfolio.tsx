import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, ExternalLink, Github } from "lucide-react"
import { MisProyectos } from "@/constants/constants"

export default function Portafolio() {
  return (
    <section id="projects" className="px-6 py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase size={30} className="text-primary" />
          <h2 className="text-3xl font-bold text-primary">Proyectos Destacados</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Una selección de proyectos que muestran mis habilidades en React, TypeScript y desarrollo web moderno.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MisProyectos.map((project, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-xl transition-all rounded-lg group flex flex-col">
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden bg-muted">
                <img
                  src={project.imagen}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{project.descripcion}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tecnologias.map((tech, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded bg-transparent hover:text-primary cursor-pointer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded bg-transparent hover:text-primary cursor-pointer">
                    <Github className="h-4 w-4" />
                    Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
