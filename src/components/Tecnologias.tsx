import { Code2, Zap, GitBranch, Database, Palette, Rocket, Terminal } from "lucide-react"

const technologies = [
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

export default function Tecnologias() {
  return (
    <section className="px-6 py-20 border-t border-border/40">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 mb-12">
          <Terminal size={30} className="text-primary" />
          <h2 className="text-3xl font-bold text-primary">Tecnologías y Habilidades</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-secondary/50 transition-all group cursor-pointer"
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
}
