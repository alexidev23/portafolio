import { memo } from "react"
import { Code2, Zap, GitBranch, Database, Palette, Rocket, Terminal, type LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/useInView"

interface TechItem {
  icon: LucideIcon
  name: string
}

const technologies: TechItem[] = [
  { icon: Code2, name: "React" },
  { icon: Code2, name: "TypeScript" },
  { icon: Palette, name: "Tailwind CSS" },
  { icon: Zap, name: "Vite" },
  { icon: Code2, name: "HTML5" },
  { icon: Palette, name: "CSS3" },
  { icon: GitBranch, name: "Git" },
  { icon: Rocket, name: "Integración de APIs" },
  { icon: Database, name: "REST APIs" },
  { icon: Code2, name: "JavaScript" },
  { icon: Palette, name: "Diseño Responsivo" },
  { icon: Rocket, name: "Rendimiento" },
]

const Tecnologias = memo(function Tecnologias() {
  const { ref, isInView } = useInView()

  return (
    <section className="px-6 py-20 border-t border-border/40">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-2 mb-12">
          <Terminal size={30} className="text-primary" />
          <h2 className="text-3xl font-bold text-primary">Tecnologías y Habilidades</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.name}
                className={`flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-secondary/50 hover:-translate-y-0.5 transition-all group cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 60}ms`, transitionDuration: '400ms' }}
              >
                <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default Tecnologias
